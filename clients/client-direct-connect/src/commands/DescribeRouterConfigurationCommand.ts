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
} from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeRouterConfigurationRequest, DescribeRouterConfigurationResponse } from "../models/models_0";
import { de_DescribeRouterConfigurationCommand, se_DescribeRouterConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRouterConfigurationCommand}.
 */
export interface DescribeRouterConfigurationCommandInput extends DescribeRouterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRouterConfigurationCommand}.
 */
export interface DescribeRouterConfigurationCommandOutput
  extends DescribeRouterConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *       Details about the router.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeRouterConfigurationCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeRouterConfigurationCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeRouterConfigurationRequest
 *   virtualInterfaceId: "STRING_VALUE", // required
 *   routerTypeIdentifier: "STRING_VALUE",
 * };
 * const command = new DescribeRouterConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRouterConfigurationResponse
 * //   customerRouterConfig: "STRING_VALUE",
 * //   router: { // RouterType
 * //     vendor: "STRING_VALUE",
 * //     platform: "STRING_VALUE",
 * //     software: "STRING_VALUE",
 * //     xsltTemplateName: "STRING_VALUE",
 * //     xsltTemplateNameForMacSec: "STRING_VALUE",
 * //     routerTypeIdentifier: "STRING_VALUE",
 * //   },
 * //   virtualInterfaceId: "STRING_VALUE",
 * //   virtualInterfaceName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRouterConfigurationCommandInput - {@link DescribeRouterConfigurationCommandInput}
 * @returns {@link DescribeRouterConfigurationCommandOutput}
 * @see {@link DescribeRouterConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeRouterConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 */
export class DescribeRouterConfigurationCommand extends $Command<
  DescribeRouterConfigurationCommandInput,
  DescribeRouterConfigurationCommandOutput,
  DirectConnectClientResolvedConfig
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
  constructor(readonly input: DescribeRouterConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRouterConfigurationCommandInput, DescribeRouterConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRouterConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeRouterConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeRouterConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRouterConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRouterConfigurationCommandOutput> {
    return de_DescribeRouterConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
