// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListAssessmentTemplatesRequest, ListAssessmentTemplatesResponse } from "../models/models_0";
import { ListAssessmentTemplates } from "../schemas/schemas_1_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssessmentTemplatesCommand}.
 */
export interface ListAssessmentTemplatesCommandInput extends ListAssessmentTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentTemplatesCommand}.
 */
export interface ListAssessmentTemplatesCommandOutput extends ListAssessmentTemplatesResponse, __MetadataBearer {}

/**
 * <p>Lists the assessment templates that correspond to the assessment targets that are
 *          specified by the ARNs of the assessment targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentTemplatesCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentTemplatesCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // ListAssessmentTemplatesRequest
 *   assessmentTargetArns: [ // ListParentArnList
 *     "STRING_VALUE",
 *   ],
 *   filter: { // AssessmentTemplateFilter
 *     namePattern: "STRING_VALUE",
 *     durationRange: { // DurationRange
 *       minSeconds: Number("int"),
 *       maxSeconds: Number("int"),
 *     },
 *     rulesPackageArns: [ // FilterRulesPackageArnList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentTemplatesResponse
 * //   assessmentTemplateArns: [ // ListReturnedArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentTemplatesCommandInput - {@link ListAssessmentTemplatesCommandInput}
 * @returns {@link ListAssessmentTemplatesCommandOutput}
 * @see {@link ListAssessmentTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentTemplatesCommandOutput} for command's `response` shape.
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
 * @example List assessment templates
 * ```javascript
 * // Lists the assessment templates that correspond to the assessment targets that are specified by the ARNs of the assessment targets.
 * const input = {
 *   assessmentTargetArns: [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq"
 *   ],
 *   maxResults: 123
 * };
 * const command = new ListAssessmentTemplatesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   assessmentTemplateArns: [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw",
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-Uza6ihLh"
 *   ],
 *   nextToken: "1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAssessmentTemplatesCommand extends $Command
  .classBuilder<
    ListAssessmentTemplatesCommandInput,
    ListAssessmentTemplatesCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InspectorService", "ListAssessmentTemplates", {})
  .n("InspectorClient", "ListAssessmentTemplatesCommand")
  .sc(ListAssessmentTemplates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssessmentTemplatesRequest;
      output: ListAssessmentTemplatesResponse;
    };
    sdk: {
      input: ListAssessmentTemplatesCommandInput;
      output: ListAssessmentTemplatesCommandOutput;
    };
  };
}
