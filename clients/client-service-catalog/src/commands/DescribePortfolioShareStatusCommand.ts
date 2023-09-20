// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DescribePortfolioShareStatusInput, DescribePortfolioShareStatusOutput } from "../models/models_0";
import {
  de_DescribePortfolioShareStatusCommand,
  se_DescribePortfolioShareStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePortfolioShareStatusCommand}.
 */
export interface DescribePortfolioShareStatusCommandInput extends DescribePortfolioShareStatusInput {}
/**
 * @public
 *
 * The output of {@link DescribePortfolioShareStatusCommand}.
 */
export interface DescribePortfolioShareStatusCommandOutput
  extends DescribePortfolioShareStatusOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the status of the specified portfolio share operation. This API can only be called
 *          by the management account in the organization or by a delegated admin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribePortfolioShareStatusCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribePortfolioShareStatusCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribePortfolioShareStatusInput
 *   PortfolioShareToken: "STRING_VALUE", // required
 * };
 * const command = new DescribePortfolioShareStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribePortfolioShareStatusOutput
 * //   PortfolioShareToken: "STRING_VALUE",
 * //   PortfolioId: "STRING_VALUE",
 * //   OrganizationNodeValue: "STRING_VALUE",
 * //   Status: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "ERROR",
 * //   ShareDetails: { // ShareDetails
 * //     SuccessfulShares: [ // SuccessfulShares
 * //       "STRING_VALUE",
 * //     ],
 * //     ShareErrors: [ // ShareErrors
 * //       { // ShareError
 * //         Accounts: [ // Namespaces
 * //           "STRING_VALUE",
 * //         ],
 * //         Message: "STRING_VALUE",
 * //         Error: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePortfolioShareStatusCommandInput - {@link DescribePortfolioShareStatusCommandInput}
 * @returns {@link DescribePortfolioShareStatusCommandOutput}
 * @see {@link DescribePortfolioShareStatusCommandInput} for command's `input` shape.
 * @see {@link DescribePortfolioShareStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class DescribePortfolioShareStatusCommand extends $Command<
  DescribePortfolioShareStatusCommandInput,
  DescribePortfolioShareStatusCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribePortfolioShareStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePortfolioShareStatusCommandInput, DescribePortfolioShareStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePortfolioShareStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribePortfolioShareStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "DescribePortfolioShareStatus",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribePortfolioShareStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePortfolioShareStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePortfolioShareStatusCommandOutput> {
    return de_DescribePortfolioShareStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
