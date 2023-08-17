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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetResourceLogLevelRequest, GetResourceLogLevelResponse } from "../models/models_0";
import { de_GetResourceLogLevelCommand, se_GetResourceLogLevelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetResourceLogLevelCommand}.
 */
export interface GetResourceLogLevelCommandInput extends GetResourceLogLevelRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceLogLevelCommand}.
 */
export interface GetResourceLogLevelCommandOutput extends GetResourceLogLevelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Fetches the log-level override, if any, for a given resource-ID and resource-type. It
 *             can be used for a wireless device or a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetResourceLogLevelCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetResourceLogLevelCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetResourceLogLevelRequest
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE", // required
 * };
 * const command = new GetResourceLogLevelCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceLogLevelResponse
 * //   LogLevel: "INFO" || "ERROR" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param GetResourceLogLevelCommandInput - {@link GetResourceLogLevelCommandInput}
 * @returns {@link GetResourceLogLevelCommandOutput}
 * @see {@link GetResourceLogLevelCommandInput} for command's `input` shape.
 * @see {@link GetResourceLogLevelCommandOutput} for command's `response` shape.
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
export class GetResourceLogLevelCommand extends $Command<
  GetResourceLogLevelCommandInput,
  GetResourceLogLevelCommandOutput,
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
  constructor(readonly input: GetResourceLogLevelCommandInput) {
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
  ): Handler<GetResourceLogLevelCommandInput, GetResourceLogLevelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceLogLevelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetResourceLogLevelCommand";
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
  private serialize(input: GetResourceLogLevelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetResourceLogLevelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceLogLevelCommandOutput> {
    return de_GetResourceLogLevelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
