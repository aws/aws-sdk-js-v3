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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListAssessmentRunAgentsRequest, ListAssessmentRunAgentsResponse } from "../models/models_0";
import { de_ListAssessmentRunAgentsCommand, se_ListAssessmentRunAgentsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssessmentRunAgentsCommand}.
 */
export interface ListAssessmentRunAgentsCommandInput extends ListAssessmentRunAgentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentRunAgentsCommand}.
 */
export interface ListAssessmentRunAgentsCommandOutput extends ListAssessmentRunAgentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the agents of the assessment runs that are specified by the ARNs of the
 *          assessment runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentRunAgentsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentRunAgentsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // ListAssessmentRunAgentsRequest
 *   assessmentRunArn: "STRING_VALUE", // required
 *   filter: { // AgentFilter
 *     agentHealths: [ // AgentHealthList // required
 *       "STRING_VALUE",
 *     ],
 *     agentHealthCodes: [ // AgentHealthCodeList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentRunAgentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentRunAgentsResponse
 * //   assessmentRunAgents: [ // AssessmentRunAgentList // required
 * //     { // AssessmentRunAgent
 * //       agentId: "STRING_VALUE", // required
 * //       assessmentRunArn: "STRING_VALUE", // required
 * //       agentHealth: "STRING_VALUE", // required
 * //       agentHealthCode: "STRING_VALUE", // required
 * //       agentHealthDetails: "STRING_VALUE",
 * //       autoScalingGroup: "STRING_VALUE",
 * //       telemetryMetadata: [ // TelemetryMetadataList // required
 * //         { // TelemetryMetadata
 * //           messageType: "STRING_VALUE", // required
 * //           count: Number("long"), // required
 * //           dataSize: Number("long"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentRunAgentsCommandInput - {@link ListAssessmentRunAgentsCommandInput}
 * @returns {@link ListAssessmentRunAgentsCommandOutput}
 * @see {@link ListAssessmentRunAgentsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentRunAgentsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example List assessment run agents
 * ```javascript
 * // Lists the agents of the assessment runs that are specified by the ARNs of the assessment runs.
 * const input = {
 *   "assessmentRunArn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE",
 *   "maxResults": 123
 * };
 * const command = new ListAssessmentRunAgentsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "assessmentRunAgents": [
 *     {
 *       "agentHealth": "HEALTHY",
 *       "agentHealthCode": "RUNNING",
 *       "agentId": "i-49113b93",
 *       "assessmentRunArn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE",
 *       "telemetryMetadata": [
 *         {
 *           "count": 2,
 *           "dataSize": 345,
 *           "messageType": "InspectorDuplicateProcess"
 *         },
 *         {
 *           "count": 3,
 *           "dataSize": 255,
 *           "messageType": "InspectorTimeEventMsg"
 *         },
 *         {
 *           "count": 4,
 *           "dataSize": 1082,
 *           "messageType": "InspectorNetworkInterface"
 *         },
 *         {
 *           "count": 2,
 *           "dataSize": 349,
 *           "messageType": "InspectorDnsEntry"
 *         },
 *         {
 *           "count": 11,
 *           "dataSize": 2514,
 *           "messageType": "InspectorDirectoryInfoMsg"
 *         },
 *         {
 *           "count": 1,
 *           "dataSize": 179,
 *           "messageType": "InspectorTcpV6ListeningPort"
 *         },
 *         {
 *           "count": 101,
 *           "dataSize": 10949,
 *           "messageType": "InspectorTerminal"
 *         },
 *         {
 *           "count": 26,
 *           "dataSize": 5916,
 *           "messageType": "InspectorUser"
 *         },
 *         {
 *           "count": 282,
 *           "dataSize": 32148,
 *           "messageType": "InspectorDynamicallyLoadedCodeModule"
 *         },
 *         {
 *           "count": 18,
 *           "dataSize": 10172,
 *           "messageType": "InspectorCreateProcess"
 *         },
 *         {
 *           "count": 3,
 *           "dataSize": 8001,
 *           "messageType": "InspectorProcessPerformance"
 *         },
 *         {
 *           "count": 1,
 *           "dataSize": 360,
 *           "messageType": "InspectorOperatingSystem"
 *         },
 *         {
 *           "count": 6,
 *           "dataSize": 546,
 *           "messageType": "InspectorStopProcess"
 *         },
 *         {
 *           "count": 1,
 *           "dataSize": 1553,
 *           "messageType": "InspectorInstanceMetaData"
 *         },
 *         {
 *           "count": 2,
 *           "dataSize": 434,
 *           "messageType": "InspectorTcpV4Connection"
 *         },
 *         {
 *           "count": 474,
 *           "dataSize": 2960322,
 *           "messageType": "InspectorPackageInfo"
 *         },
 *         {
 *           "count": 3,
 *           "dataSize": 2235,
 *           "messageType": "InspectorSystemPerformance"
 *         },
 *         {
 *           "count": 105,
 *           "dataSize": 46048,
 *           "messageType": "InspectorCodeModule"
 *         },
 *         {
 *           "count": 1,
 *           "dataSize": 182,
 *           "messageType": "InspectorUdpV6ListeningPort"
 *         },
 *         {
 *           "count": 2,
 *           "dataSize": 371,
 *           "messageType": "InspectorUdpV4ListeningPort"
 *         },
 *         {
 *           "count": 18,
 *           "dataSize": 8362,
 *           "messageType": "InspectorKernelModule"
 *         },
 *         {
 *           "count": 29,
 *           "dataSize": 48788,
 *           "messageType": "InspectorConfigurationInfo"
 *         },
 *         {
 *           "count": 1,
 *           "dataSize": 79,
 *           "messageType": "InspectorMonitoringStart"
 *         },
 *         {
 *           "count": 5,
 *           "dataSize": 0,
 *           "messageType": "InspectorSplitMsgBegin"
 *         },
 *         {
 *           "count": 51,
 *           "dataSize": 4593,
 *           "messageType": "InspectorGroup"
 *         },
 *         {
 *           "count": 1,
 *           "dataSize": 184,
 *           "messageType": "InspectorTcpV4ListeningPort"
 *         },
 *         {
 *           "count": 1159,
 *           "dataSize": 3146579,
 *           "messageType": "Total"
 *         },
 *         {
 *           "count": 5,
 *           "dataSize": 0,
 *           "messageType": "InspectorSplitMsgEnd"
 *         },
 *         {
 *           "count": 1,
 *           "dataSize": 612,
 *           "messageType": "InspectorLoadImageInProcess"
 *         }
 *       ]
 *     }
 *   ],
 *   "nextToken": "1"
 * }
 * *\/
 * // example id: list-assessment-run-agents-1481918140642
 * ```
 *
 */
export class ListAssessmentRunAgentsCommand extends $Command<
  ListAssessmentRunAgentsCommandInput,
  ListAssessmentRunAgentsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListAssessmentRunAgentsCommandInput) {
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
  ): Handler<ListAssessmentRunAgentsCommandInput, ListAssessmentRunAgentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssessmentRunAgentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "ListAssessmentRunAgentsCommand";
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
  private serialize(input: ListAssessmentRunAgentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAssessmentRunAgentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssessmentRunAgentsCommandOutput> {
    return de_ListAssessmentRunAgentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
