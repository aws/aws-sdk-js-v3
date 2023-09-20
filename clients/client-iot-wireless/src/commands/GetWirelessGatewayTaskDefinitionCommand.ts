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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessGatewayTaskDefinitionRequest, GetWirelessGatewayTaskDefinitionResponse } from "../models/models_0";
import {
  de_GetWirelessGatewayTaskDefinitionCommand,
  se_GetWirelessGatewayTaskDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWirelessGatewayTaskDefinitionCommand}.
 */
export interface GetWirelessGatewayTaskDefinitionCommandInput extends GetWirelessGatewayTaskDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetWirelessGatewayTaskDefinitionCommand}.
 */
export interface GetWirelessGatewayTaskDefinitionCommandOutput
  extends GetWirelessGatewayTaskDefinitionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a wireless gateway task definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayTaskDefinitionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayTaskDefinitionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetWirelessGatewayTaskDefinitionRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetWirelessGatewayTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetWirelessGatewayTaskDefinitionResponse
 * //   AutoCreateTasks: true || false,
 * //   Name: "STRING_VALUE",
 * //   Update: { // UpdateWirelessGatewayTaskCreate
 * //     UpdateDataSource: "STRING_VALUE",
 * //     UpdateDataRole: "STRING_VALUE",
 * //     LoRaWAN: { // LoRaWANUpdateGatewayTaskCreate
 * //       UpdateSignature: "STRING_VALUE",
 * //       SigKeyCrc: Number("long"),
 * //       CurrentVersion: { // LoRaWANGatewayVersion
 * //         PackageVersion: "STRING_VALUE",
 * //         Model: "STRING_VALUE",
 * //         Station: "STRING_VALUE",
 * //       },
 * //       UpdateVersion: {
 * //         PackageVersion: "STRING_VALUE",
 * //         Model: "STRING_VALUE",
 * //         Station: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWirelessGatewayTaskDefinitionCommandInput - {@link GetWirelessGatewayTaskDefinitionCommandInput}
 * @returns {@link GetWirelessGatewayTaskDefinitionCommandOutput}
 * @see {@link GetWirelessGatewayTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 */
export class GetWirelessGatewayTaskDefinitionCommand extends $Command<
  GetWirelessGatewayTaskDefinitionCommandInput,
  GetWirelessGatewayTaskDefinitionCommandOutput,
  IoTWirelessClientResolvedConfig
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
  constructor(readonly input: GetWirelessGatewayTaskDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWirelessGatewayTaskDefinitionCommandInput, GetWirelessGatewayTaskDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWirelessGatewayTaskDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetWirelessGatewayTaskDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "GetWirelessGatewayTaskDefinition",
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
    input: GetWirelessGatewayTaskDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetWirelessGatewayTaskDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetWirelessGatewayTaskDefinitionCommandOutput> {
    return de_GetWirelessGatewayTaskDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
