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
import { StartWirelessDeviceImportTaskRequest, StartWirelessDeviceImportTaskResponse } from "../models/models_1";
import {
  de_StartWirelessDeviceImportTaskCommand,
  se_StartWirelessDeviceImportTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartWirelessDeviceImportTaskCommand}.
 */
export interface StartWirelessDeviceImportTaskCommandInput extends StartWirelessDeviceImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartWirelessDeviceImportTaskCommand}.
 */
export interface StartWirelessDeviceImportTaskCommandOutput
  extends StartWirelessDeviceImportTaskResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Start import task for provisioning Sidewalk devices in bulk using an S3 CSV file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, StartWirelessDeviceImportTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, StartWirelessDeviceImportTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // StartWirelessDeviceImportTaskRequest
 *   DestinationName: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Sidewalk: { // SidewalkStartImportInfo
 *     DeviceCreationFile: "STRING_VALUE",
 *     Role: "STRING_VALUE",
 *   },
 * };
 * const command = new StartWirelessDeviceImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartWirelessDeviceImportTaskResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartWirelessDeviceImportTaskCommandInput - {@link StartWirelessDeviceImportTaskCommandInput}
 * @returns {@link StartWirelessDeviceImportTaskCommandOutput}
 * @see {@link StartWirelessDeviceImportTaskCommandInput} for command's `input` shape.
 * @see {@link StartWirelessDeviceImportTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
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
export class StartWirelessDeviceImportTaskCommand extends $Command<
  StartWirelessDeviceImportTaskCommandInput,
  StartWirelessDeviceImportTaskCommandOutput,
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
  constructor(readonly input: StartWirelessDeviceImportTaskCommandInput) {
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
  ): Handler<StartWirelessDeviceImportTaskCommandInput, StartWirelessDeviceImportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartWirelessDeviceImportTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "StartWirelessDeviceImportTaskCommand";
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
  private serialize(input: StartWirelessDeviceImportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartWirelessDeviceImportTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartWirelessDeviceImportTaskCommandOutput> {
    return de_StartWirelessDeviceImportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
