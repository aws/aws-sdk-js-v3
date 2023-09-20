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

import {
  DescribeServiceActionExecutionParametersInput,
  DescribeServiceActionExecutionParametersOutput,
} from "../models/models_0";
import {
  de_DescribeServiceActionExecutionParametersCommand,
  se_DescribeServiceActionExecutionParametersCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeServiceActionExecutionParametersCommand}.
 */
export interface DescribeServiceActionExecutionParametersCommandInput
  extends DescribeServiceActionExecutionParametersInput {}
/**
 * @public
 *
 * The output of {@link DescribeServiceActionExecutionParametersCommand}.
 */
export interface DescribeServiceActionExecutionParametersCommandOutput
  extends DescribeServiceActionExecutionParametersOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeServiceActionExecutionParametersCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeServiceActionExecutionParametersCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeServiceActionExecutionParametersInput
 *   ProvisionedProductId: "STRING_VALUE", // required
 *   ServiceActionId: "STRING_VALUE", // required
 *   AcceptLanguage: "STRING_VALUE",
 * };
 * const command = new DescribeServiceActionExecutionParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceActionExecutionParametersOutput
 * //   ServiceActionParameters: [ // ExecutionParameters
 * //     { // ExecutionParameter
 * //       Name: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       DefaultValues: [ // ExecutionParameterValueList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeServiceActionExecutionParametersCommandInput - {@link DescribeServiceActionExecutionParametersCommandInput}
 * @returns {@link DescribeServiceActionExecutionParametersCommandOutput}
 * @see {@link DescribeServiceActionExecutionParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceActionExecutionParametersCommandOutput} for command's `response` shape.
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
export class DescribeServiceActionExecutionParametersCommand extends $Command<
  DescribeServiceActionExecutionParametersCommandInput,
  DescribeServiceActionExecutionParametersCommandOutput,
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
  constructor(readonly input: DescribeServiceActionExecutionParametersCommandInput) {
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
  ): Handler<
    DescribeServiceActionExecutionParametersCommandInput,
    DescribeServiceActionExecutionParametersCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeServiceActionExecutionParametersCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribeServiceActionExecutionParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWS242ServiceCatalogService",
        operation: "DescribeServiceActionExecutionParameters",
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
  private serialize(
    input: DescribeServiceActionExecutionParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeServiceActionExecutionParametersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeServiceActionExecutionParametersCommandOutput> {
    return de_DescribeServiceActionExecutionParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
