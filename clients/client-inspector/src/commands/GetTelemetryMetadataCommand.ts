// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import {
  GetTelemetryMetadataRequest,
  GetTelemetryMetadataRequestFilterSensitiveLog,
  GetTelemetryMetadataResponse,
  GetTelemetryMetadataResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetTelemetryMetadataCommand,
  serializeAws_json1_1GetTelemetryMetadataCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link GetTelemetryMetadataCommand}.
 */
export interface GetTelemetryMetadataCommandInput extends GetTelemetryMetadataRequest {}
/**
 * The output of {@link GetTelemetryMetadataCommand}.
 */
export interface GetTelemetryMetadataCommandOutput extends GetTelemetryMetadataResponse, __MetadataBearer {}

/**
 * <p>Information about the data that is collected for the specified assessment
 *          run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetTelemetryMetadataCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetTelemetryMetadataCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new GetTelemetryMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTelemetryMetadataCommandInput} for command's `input` shape.
 * @see {@link GetTelemetryMetadataCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @example Get telemetry metadata
 * ```javascript
 * // Information about the data that is collected for the specified assessment run.
 * const input = {
 *   "assessmentRunArn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE"
 * };
 * const command = new GetTelemetryMetadataCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "telemetryMetadata": [
 *     {
 *       "count": 2,
 *       "dataSize": 345,
 *       "messageType": "InspectorDuplicateProcess"
 *     },
 *     {
 *       "count": 3,
 *       "dataSize": 255,
 *       "messageType": "InspectorTimeEventMsg"
 *     },
 *     {
 *       "count": 4,
 *       "dataSize": 1082,
 *       "messageType": "InspectorNetworkInterface"
 *     },
 *     {
 *       "count": 2,
 *       "dataSize": 349,
 *       "messageType": "InspectorDnsEntry"
 *     },
 *     {
 *       "count": 11,
 *       "dataSize": 2514,
 *       "messageType": "InspectorDirectoryInfoMsg"
 *     },
 *     {
 *       "count": 1,
 *       "dataSize": 179,
 *       "messageType": "InspectorTcpV6ListeningPort"
 *     },
 *     {
 *       "count": 101,
 *       "dataSize": 10949,
 *       "messageType": "InspectorTerminal"
 *     },
 *     {
 *       "count": 26,
 *       "dataSize": 5916,
 *       "messageType": "InspectorUser"
 *     },
 *     {
 *       "count": 282,
 *       "dataSize": 32148,
 *       "messageType": "InspectorDynamicallyLoadedCodeModule"
 *     },
 *     {
 *       "count": 18,
 *       "dataSize": 10172,
 *       "messageType": "InspectorCreateProcess"
 *     },
 *     {
 *       "count": 3,
 *       "dataSize": 8001,
 *       "messageType": "InspectorProcessPerformance"
 *     },
 *     {
 *       "count": 1,
 *       "dataSize": 360,
 *       "messageType": "InspectorOperatingSystem"
 *     },
 *     {
 *       "count": 6,
 *       "dataSize": 546,
 *       "messageType": "InspectorStopProcess"
 *     },
 *     {
 *       "count": 1,
 *       "dataSize": 1553,
 *       "messageType": "InspectorInstanceMetaData"
 *     },
 *     {
 *       "count": 2,
 *       "dataSize": 434,
 *       "messageType": "InspectorTcpV4Connection"
 *     },
 *     {
 *       "count": 474,
 *       "dataSize": 2960322,
 *       "messageType": "InspectorPackageInfo"
 *     },
 *     {
 *       "count": 3,
 *       "dataSize": 2235,
 *       "messageType": "InspectorSystemPerformance"
 *     },
 *     {
 *       "count": 105,
 *       "dataSize": 46048,
 *       "messageType": "InspectorCodeModule"
 *     },
 *     {
 *       "count": 1,
 *       "dataSize": 182,
 *       "messageType": "InspectorUdpV6ListeningPort"
 *     },
 *     {
 *       "count": 2,
 *       "dataSize": 371,
 *       "messageType": "InspectorUdpV4ListeningPort"
 *     },
 *     {
 *       "count": 18,
 *       "dataSize": 8362,
 *       "messageType": "InspectorKernelModule"
 *     },
 *     {
 *       "count": 29,
 *       "dataSize": 48788,
 *       "messageType": "InspectorConfigurationInfo"
 *     },
 *     {
 *       "count": 1,
 *       "dataSize": 79,
 *       "messageType": "InspectorMonitoringStart"
 *     },
 *     {
 *       "count": 5,
 *       "dataSize": 0,
 *       "messageType": "InspectorSplitMsgBegin"
 *     },
 *     {
 *       "count": 51,
 *       "dataSize": 4593,
 *       "messageType": "InspectorGroup"
 *     },
 *     {
 *       "count": 1,
 *       "dataSize": 184,
 *       "messageType": "InspectorTcpV4ListeningPort"
 *     },
 *     {
 *       "count": 1159,
 *       "dataSize": 3146579,
 *       "messageType": "Total"
 *     },
 *     {
 *       "count": 5,
 *       "dataSize": 0,
 *       "messageType": "InspectorSplitMsgEnd"
 *     },
 *     {
 *       "count": 1,
 *       "dataSize": 612,
 *       "messageType": "InspectorLoadImageInProcess"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class GetTelemetryMetadataCommand extends $Command<
  GetTelemetryMetadataCommandInput,
  GetTelemetryMetadataCommandOutput,
  InspectorClientResolvedConfig
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

  constructor(readonly input: GetTelemetryMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTelemetryMetadataCommandInput, GetTelemetryMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTelemetryMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "GetTelemetryMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTelemetryMetadataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetTelemetryMetadataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTelemetryMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetTelemetryMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTelemetryMetadataCommandOutput> {
    return deserializeAws_json1_1GetTelemetryMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
