// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListRecommendationTemplatesRequest,
  ListRecommendationTemplatesResponse,
  ListRecommendationTemplatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListRecommendationTemplatesCommand,
  se_ListRecommendationTemplatesCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendationTemplatesCommand}.
 */
export interface ListRecommendationTemplatesCommandInput extends ListRecommendationTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationTemplatesCommand}.
 */
export interface ListRecommendationTemplatesCommandOutput
  extends ListRecommendationTemplatesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the recommendation templates for the Resilience Hub applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListRecommendationTemplatesCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListRecommendationTemplatesCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListRecommendationTemplatesRequest
 *   assessmentArn: "STRING_VALUE",
 *   reverseOrder: true || false,
 *   status: [ // RecommendationTemplateStatusList
 *     "Pending" || "InProgress" || "Failed" || "Success",
 *   ],
 *   recommendationTemplateArn: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRecommendationTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationTemplatesResponse
 * //   nextToken: "STRING_VALUE",
 * //   recommendationTemplates: [ // RecommendationTemplateList
 * //     { // RecommendationTemplate
 * //       templatesLocation: { // S3Location
 * //         bucket: "STRING_VALUE",
 * //         prefix: "STRING_VALUE",
 * //       },
 * //       assessmentArn: "STRING_VALUE", // required
 * //       appArn: "STRING_VALUE",
 * //       recommendationIds: [ // RecommendationIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       recommendationTypes: [ // RenderRecommendationTypeList // required
 * //         "Alarm" || "Sop" || "Test",
 * //       ],
 * //       format: "CfnYaml" || "CfnJson", // required
 * //       recommendationTemplateArn: "STRING_VALUE", // required
 * //       message: "STRING_VALUE",
 * //       status: "Pending" || "InProgress" || "Failed" || "Success", // required
 * //       name: "STRING_VALUE", // required
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       needsReplacements: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRecommendationTemplatesCommandInput - {@link ListRecommendationTemplatesCommandInput}
 * @returns {@link ListRecommendationTemplatesCommandOutput}
 * @see {@link ListRecommendationTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationTemplatesCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class ListRecommendationTemplatesCommand extends $Command
  .classBuilder<
    ListRecommendationTemplatesCommandInput,
    ListRecommendationTemplatesCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "ListRecommendationTemplates", {})
  .n("ResiliencehubClient", "ListRecommendationTemplatesCommand")
  .f(void 0, ListRecommendationTemplatesResponseFilterSensitiveLog)
  .ser(se_ListRecommendationTemplatesCommand)
  .de(de_ListRecommendationTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendationTemplatesRequest;
      output: ListRecommendationTemplatesResponse;
    };
    sdk: {
      input: ListRecommendationTemplatesCommandInput;
      output: ListRecommendationTemplatesCommandOutput;
    };
  };
}
