// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutTelemetryRecordsRequest, PutTelemetryRecordsResult } from "../models/models_0";
import { PutTelemetryRecords } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutTelemetryRecordsCommand}.
 */
export interface PutTelemetryRecordsCommandInput extends PutTelemetryRecordsRequest {}
/**
 * @public
 *
 * The output of {@link PutTelemetryRecordsCommand}.
 */
export interface PutTelemetryRecordsCommandOutput extends PutTelemetryRecordsResult, __MetadataBearer {}

/**
 * <p>Used by the Amazon Web Services X-Ray daemon to upload telemetry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, PutTelemetryRecordsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, PutTelemetryRecordsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // PutTelemetryRecordsRequest
 *   TelemetryRecords: [ // TelemetryRecordList // required
 *     { // TelemetryRecord
 *       Timestamp: new Date("TIMESTAMP"), // required
 *       SegmentsReceivedCount: Number("int"),
 *       SegmentsSentCount: Number("int"),
 *       SegmentsSpilloverCount: Number("int"),
 *       SegmentsRejectedCount: Number("int"),
 *       BackendConnectionErrors: { // BackendConnectionErrors
 *         TimeoutCount: Number("int"),
 *         ConnectionRefusedCount: Number("int"),
 *         HTTPCode4XXCount: Number("int"),
 *         HTTPCode5XXCount: Number("int"),
 *         UnknownHostCount: Number("int"),
 *         OtherCount: Number("int"),
 *       },
 *     },
 *   ],
 *   EC2InstanceId: "STRING_VALUE",
 *   Hostname: "STRING_VALUE",
 *   ResourceARN: "STRING_VALUE",
 * };
 * const command = new PutTelemetryRecordsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTelemetryRecordsCommandInput - {@link PutTelemetryRecordsCommandInput}
 * @returns {@link PutTelemetryRecordsCommandOutput}
 * @see {@link PutTelemetryRecordsCommandInput} for command's `input` shape.
 * @see {@link PutTelemetryRecordsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 *
 * @public
 */
export class PutTelemetryRecordsCommand extends $Command
  .classBuilder<
    PutTelemetryRecordsCommandInput,
    PutTelemetryRecordsCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "PutTelemetryRecords", {})
  .n("XRayClient", "PutTelemetryRecordsCommand")
  .sc(PutTelemetryRecords)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTelemetryRecordsRequest;
      output: {};
    };
    sdk: {
      input: PutTelemetryRecordsCommandInput;
      output: PutTelemetryRecordsCommandOutput;
    };
  };
}
