// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { GetTelemetryMetadataRequest, GetTelemetryMetadataResponse } from "../models/models_0";
import { de_GetTelemetryMetadataCommand, se_GetTelemetryMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTelemetryMetadataCommand}.
 */
export interface GetTelemetryMetadataCommandInput extends GetTelemetryMetadataRequest {}
/**
 * @public
 *
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
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // GetTelemetryMetadataRequest
 *   assessmentRunArn: "STRING_VALUE", // required
 * };
 * const command = new GetTelemetryMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetTelemetryMetadataResponse
 * //   telemetryMetadata: [ // TelemetryMetadataList // required
 * //     { // TelemetryMetadata
 * //       messageType: "STRING_VALUE", // required
 * //       count: Number("long"), // required
 * //       dataSize: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTelemetryMetadataCommandInput - {@link GetTelemetryMetadataCommandInput}
 * @returns {@link GetTelemetryMetadataCommandOutput}
 * @see {@link GetTelemetryMetadataCommandInput} for command's `input` shape.
 * @see {@link GetTelemetryMetadataCommandOutput} for command's `response` shape.
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
 *
 * @example Get telemetry metadata
 * ```javascript
 * // Information about the data that is collected for the specified assessment run.
 * const input = {
 *   assessmentRunArn: "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE"
 * };
 * const command = new GetTelemetryMetadataCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   telemetryMetadata: [
 *     {
 *       count: 2,
 *       dataSize: 345,
 *       messageType: "InspectorDuplicateProcess"
 *     },
 *     {
 *       count: 3,
 *       dataSize: 255,
 *       messageType: "InspectorTimeEventMsg"
 *     },
 *     {
 *       count: 4,
 *       dataSize: 1082,
 *       messageType: "InspectorNetworkInterface"
 *     },
 *     {
 *       count: 2,
 *       dataSize: 349,
 *       messageType: "InspectorDnsEntry"
 *     },
 *     {
 *       count: 11,
 *       dataSize: 2514,
 *       messageType: "InspectorDirectoryInfoMsg"
 *     },
 *     {
 *       count: 1,
 *       dataSize: 179,
 *       messageType: "InspectorTcpV6ListeningPort"
 *     },
 *     {
 *       count: 101,
 *       dataSize: 10949,
 *       messageType: "InspectorTerminal"
 *     },
 *     {
 *       count: 26,
 *       dataSize: 5916,
 *       messageType: "InspectorUser"
 *     },
 *     {
 *       count: 282,
 *       dataSize: 32148,
 *       messageType: "InspectorDynamicallyLoadedCodeModule"
 *     },
 *     {
 *       count: 18,
 *       dataSize: 10172,
 *       messageType: "InspectorCreateProcess"
 *     },
 *     {
 *       count: 3,
 *       dataSize: 8001,
 *       messageType: "InspectorProcessPerformance"
 *     },
 *     {
 *       count: 1,
 *       dataSize: 360,
 *       messageType: "InspectorOperatingSystem"
 *     },
 *     {
 *       count: 6,
 *       dataSize: 546,
 *       messageType: "InspectorStopProcess"
 *     },
 *     {
 *       count: 1,
 *       dataSize: 1553,
 *       messageType: "InspectorInstanceMetaData"
 *     },
 *     {
 *       count: 2,
 *       dataSize: 434,
 *       messageType: "InspectorTcpV4Connection"
 *     },
 *     {
 *       count: 474,
 *       dataSize: 2960322,
 *       messageType: "InspectorPackageInfo"
 *     },
 *     {
 *       count: 3,
 *       dataSize: 2235,
 *       messageType: "InspectorSystemPerformance"
 *     },
 *     {
 *       count: 105,
 *       dataSize: 46048,
 *       messageType: "InspectorCodeModule"
 *     },
 *     {
 *       count: 1,
 *       dataSize: 182,
 *       messageType: "InspectorUdpV6ListeningPort"
 *     },
 *     {
 *       count: 2,
 *       dataSize: 371,
 *       messageType: "InspectorUdpV4ListeningPort"
 *     },
 *     {
 *       count: 18,
 *       dataSize: 8362,
 *       messageType: "InspectorKernelModule"
 *     },
 *     {
 *       count: 29,
 *       dataSize: 48788,
 *       messageType: "InspectorConfigurationInfo"
 *     },
 *     {
 *       count: 1,
 *       dataSize: 79,
 *       messageType: "InspectorMonitoringStart"
 *     },
 *     {
 *       count: 5,
 *       dataSize: 0,
 *       messageType: "InspectorSplitMsgBegin"
 *     },
 *     {
 *       count: 51,
 *       dataSize: 4593,
 *       messageType: "InspectorGroup"
 *     },
 *     {
 *       count: 1,
 *       dataSize: 184,
 *       messageType: "InspectorTcpV4ListeningPort"
 *     },
 *     {
 *       count: 1159,
 *       dataSize: 3146579,
 *       messageType: "Total"
 *     },
 *     {
 *       count: 5,
 *       dataSize: 0,
 *       messageType: "InspectorSplitMsgEnd"
 *     },
 *     {
 *       count: 1,
 *       dataSize: 612,
 *       messageType: "InspectorLoadImageInProcess"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetTelemetryMetadataCommand extends $Command
  .classBuilder<
    GetTelemetryMetadataCommandInput,
    GetTelemetryMetadataCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "GetTelemetryMetadata", {})
  .n("InspectorClient", "GetTelemetryMetadataCommand")
  .f(void 0, void 0)
  .ser(se_GetTelemetryMetadataCommand)
  .de(de_GetTelemetryMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTelemetryMetadataRequest;
      output: GetTelemetryMetadataResponse;
    };
    sdk: {
      input: GetTelemetryMetadataCommandInput;
      output: GetTelemetryMetadataCommandOutput;
    };
  };
}
