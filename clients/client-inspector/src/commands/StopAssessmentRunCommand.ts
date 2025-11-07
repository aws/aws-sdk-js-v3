// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { StopAssessmentRunRequest } from "../models/models_0";
import { StopAssessmentRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopAssessmentRunCommand}.
 */
export interface StopAssessmentRunCommandInput extends StopAssessmentRunRequest {}
/**
 * @public
 *
 * The output of {@link StopAssessmentRunCommand}.
 */
export interface StopAssessmentRunCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops the assessment run that is specified by the ARN of the assessment
 *          run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, StopAssessmentRunCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, StopAssessmentRunCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // StopAssessmentRunRequest
 *   assessmentRunArn: "STRING_VALUE", // required
 *   stopAction: "START_EVALUATION" || "SKIP_EVALUATION",
 * };
 * const command = new StopAssessmentRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopAssessmentRunCommandInput - {@link StopAssessmentRunCommandInput}
 * @returns {@link StopAssessmentRunCommandOutput}
 * @see {@link StopAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link StopAssessmentRunCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceTemporarilyUnavailableException} (server fault)
 *  <p>The serice is temporary unavailable.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 *
 * @example Stop assessment run
 * ```javascript
 * // Stops the assessment run that is specified by the ARN of the assessment run.
 * const input = {
 *   assessmentRunArn: "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-it5r2S4T/run/0-11LMTAVe"
 * };
 * const command = new StopAssessmentRunCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class StopAssessmentRunCommand extends $Command
  .classBuilder<
    StopAssessmentRunCommandInput,
    StopAssessmentRunCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InspectorService", "StopAssessmentRun", {})
  .n("InspectorClient", "StopAssessmentRunCommand")
  .sc(StopAssessmentRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopAssessmentRunRequest;
      output: {};
    };
    sdk: {
      input: StopAssessmentRunCommandInput;
      output: StopAssessmentRunCommandOutput;
    };
  };
}
