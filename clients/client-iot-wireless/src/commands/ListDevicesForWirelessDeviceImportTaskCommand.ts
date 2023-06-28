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
import {
  ListDevicesForWirelessDeviceImportTaskRequest,
  ListDevicesForWirelessDeviceImportTaskResponse,
} from "../models/models_0";
import {
  de_ListDevicesForWirelessDeviceImportTaskCommand,
  se_ListDevicesForWirelessDeviceImportTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDevicesForWirelessDeviceImportTaskCommand}.
 */
export interface ListDevicesForWirelessDeviceImportTaskCommandInput
  extends ListDevicesForWirelessDeviceImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link ListDevicesForWirelessDeviceImportTaskCommand}.
 */
export interface ListDevicesForWirelessDeviceImportTaskCommandOutput
  extends ListDevicesForWirelessDeviceImportTaskResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>List the Sidewalk devices in an import task and their onboarding status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListDevicesForWirelessDeviceImportTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListDevicesForWirelessDeviceImportTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // ListDevicesForWirelessDeviceImportTaskRequest
 *   Id: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Status: "INITIALIZED" || "PENDING" || "ONBOARDED" || "FAILED",
 * };
 * const command = new ListDevicesForWirelessDeviceImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // ListDevicesForWirelessDeviceImportTaskResponse
 * //   NextToken: "STRING_VALUE",
 * //   DestinationName: "STRING_VALUE",
 * //   ImportedWirelessDeviceList: [ // ImportedWirelessDeviceList
 * //     { // ImportedWirelessDevice
 * //       Sidewalk: { // ImportedSidewalkDevice
 * //         SidewalkManufacturingSn: "STRING_VALUE",
 * //         OnboardingStatus: "INITIALIZED" || "PENDING" || "ONBOARDED" || "FAILED",
 * //         OnboardingStatusReason: "STRING_VALUE",
 * //         LastUpdateTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDevicesForWirelessDeviceImportTaskCommandInput - {@link ListDevicesForWirelessDeviceImportTaskCommandInput}
 * @returns {@link ListDevicesForWirelessDeviceImportTaskCommandOutput}
 * @see {@link ListDevicesForWirelessDeviceImportTaskCommandInput} for command's `input` shape.
 * @see {@link ListDevicesForWirelessDeviceImportTaskCommandOutput} for command's `response` shape.
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
export class ListDevicesForWirelessDeviceImportTaskCommand extends $Command<
  ListDevicesForWirelessDeviceImportTaskCommandInput,
  ListDevicesForWirelessDeviceImportTaskCommandOutput,
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
  constructor(readonly input: ListDevicesForWirelessDeviceImportTaskCommandInput) {
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
  ): Handler<ListDevicesForWirelessDeviceImportTaskCommandInput, ListDevicesForWirelessDeviceImportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDevicesForWirelessDeviceImportTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ListDevicesForWirelessDeviceImportTaskCommand";
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
  private serialize(
    input: ListDevicesForWirelessDeviceImportTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListDevicesForWirelessDeviceImportTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDevicesForWirelessDeviceImportTaskCommandOutput> {
    return de_ListDevicesForWirelessDeviceImportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
