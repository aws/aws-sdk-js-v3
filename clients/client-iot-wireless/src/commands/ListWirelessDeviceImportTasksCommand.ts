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
import { ListWirelessDeviceImportTasksRequest, ListWirelessDeviceImportTasksResponse } from "../models/models_0";
import {
  de_ListWirelessDeviceImportTasksCommand,
  se_ListWirelessDeviceImportTasksCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWirelessDeviceImportTasksCommand}.
 */
export interface ListWirelessDeviceImportTasksCommandInput extends ListWirelessDeviceImportTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListWirelessDeviceImportTasksCommand}.
 */
export interface ListWirelessDeviceImportTasksCommandOutput
  extends ListWirelessDeviceImportTasksResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>List wireless devices that have been added to an import task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListWirelessDeviceImportTasksCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListWirelessDeviceImportTasksCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // ListWirelessDeviceImportTasksRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListWirelessDeviceImportTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListWirelessDeviceImportTasksResponse
 * //   NextToken: "STRING_VALUE",
 * //   WirelessDeviceImportTaskList: [ // WirelessDeviceImportTaskList
 * //     { // WirelessDeviceImportTask
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       DestinationName: "STRING_VALUE",
 * //       Sidewalk: { // SidewalkGetStartImportInfo
 * //         DeviceCreationFileList: [ // DeviceCreationFileList
 * //           "STRING_VALUE",
 * //         ],
 * //         Role: "STRING_VALUE",
 * //       },
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Status: "INITIALIZING" || "INITIALIZED" || "PENDING" || "COMPLETE" || "FAILED" || "DELETING",
 * //       StatusReason: "STRING_VALUE",
 * //       InitializedImportedDeviceCount: Number("long"),
 * //       PendingImportedDeviceCount: Number("long"),
 * //       OnboardedImportedDeviceCount: Number("long"),
 * //       FailedImportedDeviceCount: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWirelessDeviceImportTasksCommandInput - {@link ListWirelessDeviceImportTasksCommandInput}
 * @returns {@link ListWirelessDeviceImportTasksCommandOutput}
 * @see {@link ListWirelessDeviceImportTasksCommandInput} for command's `input` shape.
 * @see {@link ListWirelessDeviceImportTasksCommandOutput} for command's `response` shape.
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
export class ListWirelessDeviceImportTasksCommand extends $Command<
  ListWirelessDeviceImportTasksCommandInput,
  ListWirelessDeviceImportTasksCommandOutput,
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
  constructor(readonly input: ListWirelessDeviceImportTasksCommandInput) {
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
  ): Handler<ListWirelessDeviceImportTasksCommandInput, ListWirelessDeviceImportTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWirelessDeviceImportTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ListWirelessDeviceImportTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "ListWirelessDeviceImportTasks",
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
  private serialize(input: ListWirelessDeviceImportTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListWirelessDeviceImportTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListWirelessDeviceImportTasksCommandOutput> {
    return de_ListWirelessDeviceImportTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
