// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetTracesRequest, BatchGetTracesResult } from "../models/models_0";
import { de_BatchGetTracesCommand, se_BatchGetTracesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetTracesCommand}.
 */
export interface BatchGetTracesCommandInput extends BatchGetTracesRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetTracesCommand}.
 */
export interface BatchGetTracesCommandOutput extends BatchGetTracesResult, __MetadataBearer {}

/**
 * <note>
 *             <p>You cannot find traces through this API if Transaction Search is enabled since trace is not indexed in X-Ray.</p>
 *          </note>
 *          <p>Retrieves a list of traces specified by ID. Each trace is a collection of segment
 *       documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a
 *       list of trace IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, BatchGetTracesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, BatchGetTracesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // BatchGetTracesRequest
 *   TraceIds: [ // TraceIdList // required
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new BatchGetTracesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetTracesResult
 * //   Traces: [ // TraceList
 * //     { // Trace
 * //       Id: "STRING_VALUE",
 * //       Duration: Number("double"),
 * //       LimitExceeded: true || false,
 * //       Segments: [ // SegmentList
 * //         { // Segment
 * //           Id: "STRING_VALUE",
 * //           Document: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   UnprocessedTraceIds: [ // UnprocessedTraceIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param BatchGetTracesCommandInput - {@link BatchGetTracesCommandInput}
 * @returns {@link BatchGetTracesCommandOutput}
 * @see {@link BatchGetTracesCommandInput} for command's `input` shape.
 * @see {@link BatchGetTracesCommandOutput} for command's `response` shape.
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
export class BatchGetTracesCommand extends $Command
  .classBuilder<
    BatchGetTracesCommandInput,
    BatchGetTracesCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSXRay", "BatchGetTraces", {})
  .n("XRayClient", "BatchGetTracesCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetTracesCommand)
  .de(de_BatchGetTracesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetTracesRequest;
      output: BatchGetTracesResult;
    };
    sdk: {
      input: BatchGetTracesCommandInput;
      output: BatchGetTracesCommandOutput;
    };
  };
}
