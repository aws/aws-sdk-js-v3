// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelTraceRetrievalRequest, CancelTraceRetrievalResult } from "../models/models_0";
import { CancelTraceRetrieval$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelTraceRetrievalCommand}.
 */
export interface CancelTraceRetrievalCommandInput extends CancelTraceRetrievalRequest {}
/**
 * @public
 *
 * The output of {@link CancelTraceRetrievalCommand}.
 */
export interface CancelTraceRetrievalCommandOutput extends CancelTraceRetrievalResult, __MetadataBearer {}

/**
 * <p>
 * Cancels an ongoing trace retrieval job initiated by <code>StartTraceRetrieval</code> using the provided <code>RetrievalToken</code>. A successful cancellation will return an HTTP 200 response.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, CancelTraceRetrievalCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, CancelTraceRetrievalCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // CancelTraceRetrievalRequest
 *   RetrievalToken: "STRING_VALUE", // required
 * };
 * const command = new CancelTraceRetrievalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelTraceRetrievalCommandInput - {@link CancelTraceRetrievalCommandInput}
 * @returns {@link CancelTraceRetrievalCommandOutput}
 * @see {@link CancelTraceRetrievalCommandInput} for command's `input` shape.
 * @see {@link CancelTraceRetrievalCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found. Verify that the name or Amazon Resource Name (ARN) of the resource is
 *       correct.</p>
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
export class CancelTraceRetrievalCommand extends $Command
  .classBuilder<
    CancelTraceRetrievalCommandInput,
    CancelTraceRetrievalCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSXRay", "CancelTraceRetrieval", {})
  .n("XRayClient", "CancelTraceRetrievalCommand")
  .sc(CancelTraceRetrieval$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelTraceRetrievalRequest;
      output: {};
    };
    sdk: {
      input: CancelTraceRetrievalCommandInput;
      output: CancelTraceRetrievalCommandOutput;
    };
  };
}
