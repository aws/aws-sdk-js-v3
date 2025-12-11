// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import type { ListAssessmentTargetsRequest, ListAssessmentTargetsResponse } from "../models/models_0";
import { ListAssessmentTargets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssessmentTargetsCommand}.
 */
export interface ListAssessmentTargetsCommandInput extends ListAssessmentTargetsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentTargetsCommand}.
 */
export interface ListAssessmentTargetsCommandOutput extends ListAssessmentTargetsResponse, __MetadataBearer {}

/**
 * <p>Lists the ARNs of the assessment targets within this AWS account. For more
 *          information about assessment targets, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">Amazon Inspector Assessment
 *             Targets</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentTargetsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentTargetsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // ListAssessmentTargetsRequest
 *   filter: { // AssessmentTargetFilter
 *     assessmentTargetNamePattern: "STRING_VALUE",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentTargetsResponse
 * //   assessmentTargetArns: [ // ListReturnedArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentTargetsCommandInput - {@link ListAssessmentTargetsCommandInput}
 * @returns {@link ListAssessmentTargetsCommandOutput}
 * @see {@link ListAssessmentTargetsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentTargetsCommandOutput} for command's `response` shape.
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
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 *
 * @example List assessment targets
 * ```javascript
 * // Lists the ARNs of the assessment targets within this AWS account.
 * const input = {
 *   maxResults: 123
 * };
 * const command = new ListAssessmentTargetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   assessmentTargetArns: [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq"
 *   ],
 *   nextToken: "1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAssessmentTargetsCommand extends $Command
  .classBuilder<
    ListAssessmentTargetsCommandInput,
    ListAssessmentTargetsCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InspectorService", "ListAssessmentTargets", {})
  .n("InspectorClient", "ListAssessmentTargetsCommand")
  .sc(ListAssessmentTargets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssessmentTargetsRequest;
      output: ListAssessmentTargetsResponse;
    };
    sdk: {
      input: ListAssessmentTargetsCommandInput;
      output: ListAssessmentTargetsCommandOutput;
    };
  };
}
