// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { UpdateExperienceRequest } from "../models/models_1";
import { de_UpdateExperienceCommand, se_UpdateExperienceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateExperienceCommand}.
 */
export interface UpdateExperienceCommandInput extends UpdateExperienceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateExperienceCommand}.
 */
export interface UpdateExperienceCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates your Amazon Kendra experience such as a search application. For more information on
 *             creating a search application experience, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/deploying-search-experience-no-code.html">Building a
 *                 search experience with no code</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateExperienceCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateExperienceCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // UpdateExperienceRequest
 *   Id: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   IndexId: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE",
 *   Configuration: { // ExperienceConfiguration
 *     ContentSourceConfiguration: { // ContentSourceConfiguration
 *       DataSourceIds: [ // DataSourceIdList
 *         "STRING_VALUE",
 *       ],
 *       FaqIds: [ // FaqIdsList
 *         "STRING_VALUE",
 *       ],
 *       DirectPutContent: true || false,
 *     },
 *     UserIdentityConfiguration: { // UserIdentityConfiguration
 *       IdentityAttributeName: "STRING_VALUE",
 *     },
 *   },
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateExperienceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateExperienceCommandInput - {@link UpdateExperienceCommandInput}
 * @returns {@link UpdateExperienceCommandOutput}
 * @see {@link UpdateExperienceCommandInput} for command's `input` shape.
 * @see {@link UpdateExperienceCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any inconsistences with your
 *             resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 * @public
 */
export class UpdateExperienceCommand extends $Command
  .classBuilder<
    UpdateExperienceCommandInput,
    UpdateExperienceCommandOutput,
    KendraClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KendraClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSKendraFrontendService", "UpdateExperience", {})
  .n("KendraClient", "UpdateExperienceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateExperienceCommand)
  .de(de_UpdateExperienceCommand)
  .build() {}
