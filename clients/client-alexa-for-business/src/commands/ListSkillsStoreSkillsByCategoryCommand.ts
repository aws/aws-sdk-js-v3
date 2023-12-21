// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSkillsStoreSkillsByCategoryRequest, ListSkillsStoreSkillsByCategoryResponse } from "../models/models_0";
import {
  de_ListSkillsStoreSkillsByCategoryCommand,
  se_ListSkillsStoreSkillsByCategoryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSkillsStoreSkillsByCategoryCommand}.
 */
export interface ListSkillsStoreSkillsByCategoryCommandInput extends ListSkillsStoreSkillsByCategoryRequest {}
/**
 * @public
 *
 * The output of {@link ListSkillsStoreSkillsByCategoryCommand}.
 */
export interface ListSkillsStoreSkillsByCategoryCommandOutput
  extends ListSkillsStoreSkillsByCategoryResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Lists all skills in the Alexa skill store by category.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListSkillsStoreSkillsByCategoryCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListSkillsStoreSkillsByCategoryCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ListSkillsStoreSkillsByCategoryRequest
 *   CategoryId: Number("long"), // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSkillsStoreSkillsByCategoryCommand(input);
 * const response = await client.send(command);
 * // { // ListSkillsStoreSkillsByCategoryResponse
 * //   SkillsStoreSkills: [ // SkillsStoreSkillList
 * //     { // SkillsStoreSkill
 * //       SkillId: "STRING_VALUE",
 * //       SkillName: "STRING_VALUE",
 * //       ShortDescription: "STRING_VALUE",
 * //       IconUrl: "STRING_VALUE",
 * //       SampleUtterances: [ // SampleUtterances
 * //         "STRING_VALUE",
 * //       ],
 * //       SkillDetails: { // SkillDetails
 * //         ProductDescription: "STRING_VALUE",
 * //         InvocationPhrase: "STRING_VALUE",
 * //         ReleaseDate: "STRING_VALUE",
 * //         EndUserLicenseAgreement: "STRING_VALUE",
 * //         GenericKeywords: [ // GenericKeywords
 * //           "STRING_VALUE",
 * //         ],
 * //         BulletPoints: [ // BulletPoints
 * //           "STRING_VALUE",
 * //         ],
 * //         NewInThisVersionBulletPoints: [ // NewInThisVersionBulletPoints
 * //           "STRING_VALUE",
 * //         ],
 * //         SkillTypes: [ // SkillTypes
 * //           "STRING_VALUE",
 * //         ],
 * //         Reviews: { // Reviews
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         DeveloperInfo: { // DeveloperInfo
 * //           DeveloperName: "STRING_VALUE",
 * //           PrivacyPolicy: "STRING_VALUE",
 * //           Email: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //         },
 * //       },
 * //       SupportsLinking: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSkillsStoreSkillsByCategoryCommandInput - {@link ListSkillsStoreSkillsByCategoryCommandInput}
 * @returns {@link ListSkillsStoreSkillsByCategoryCommandOutput}
 * @see {@link ListSkillsStoreSkillsByCategoryCommandInput} for command's `input` shape.
 * @see {@link ListSkillsStoreSkillsByCategoryCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class ListSkillsStoreSkillsByCategoryCommand extends $Command
  .classBuilder<
    ListSkillsStoreSkillsByCategoryCommandInput,
    ListSkillsStoreSkillsByCategoryCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: AlexaForBusinessClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "ListSkillsStoreSkillsByCategory", {})
  .n("AlexaForBusinessClient", "ListSkillsStoreSkillsByCategoryCommand")
  .f(void 0, void 0)
  .ser(se_ListSkillsStoreSkillsByCategoryCommand)
  .de(de_ListSkillsStoreSkillsByCategoryCommand)
  .build() {}
