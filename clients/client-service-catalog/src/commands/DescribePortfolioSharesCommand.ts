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

import { DescribePortfolioSharesInput, DescribePortfolioSharesOutput } from "../models/models_0";
import { de_DescribePortfolioSharesCommand, se_DescribePortfolioSharesCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePortfolioSharesCommand}.
 */
export interface DescribePortfolioSharesCommandInput extends DescribePortfolioSharesInput {}
/**
 * @public
 *
 * The output of {@link DescribePortfolioSharesCommand}.
 */
export interface DescribePortfolioSharesCommandOutput extends DescribePortfolioSharesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p>
 *          <p>You can use this API to determine which accounts or organizational nodes this
 *          portfolio have been shared, whether the recipient entity has imported the share, and
 *          whether TagOptions are included with the share.</p>
 *          <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribePortfolioSharesCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribePortfolioSharesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribePortfolioSharesInput
 *   PortfolioId: "STRING_VALUE", // required
 *   Type: "ACCOUNT" || "ORGANIZATION" || "ORGANIZATIONAL_UNIT" || "ORGANIZATION_MEMBER_ACCOUNT", // required
 *   PageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new DescribePortfolioSharesCommand(input);
 * const response = await client.send(command);
 * // { // DescribePortfolioSharesOutput
 * //   NextPageToken: "STRING_VALUE",
 * //   PortfolioShareDetails: [ // PortfolioShareDetails
 * //     { // PortfolioShareDetail
 * //       PrincipalId: "STRING_VALUE",
 * //       Type: "ACCOUNT" || "ORGANIZATION" || "ORGANIZATIONAL_UNIT" || "ORGANIZATION_MEMBER_ACCOUNT",
 * //       Accepted: true || false,
 * //       ShareTagOptions: true || false,
 * //       SharePrincipals: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribePortfolioSharesCommandInput - {@link DescribePortfolioSharesCommandInput}
 * @returns {@link DescribePortfolioSharesCommandOutput}
 * @see {@link DescribePortfolioSharesCommandInput} for command's `input` shape.
 * @see {@link DescribePortfolioSharesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 */
export class DescribePortfolioSharesCommand extends $Command<
  DescribePortfolioSharesCommandInput,
  DescribePortfolioSharesCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
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
  constructor(readonly input: DescribePortfolioSharesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePortfolioSharesCommandInput, DescribePortfolioSharesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePortfolioSharesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribePortfolioSharesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "DescribePortfolioShares",
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
  private serialize(input: DescribePortfolioSharesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePortfolioSharesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePortfolioSharesCommandOutput> {
    return de_DescribePortfolioSharesCommand(output, context);
  }
}
