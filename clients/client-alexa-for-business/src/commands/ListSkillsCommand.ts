// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSkillsRequest, ListSkillsResponse } from "../models/models_0";
import { de_ListSkillsCommand, se_ListSkillsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSkillsCommand}.
 */
export interface ListSkillsCommandInput extends ListSkillsRequest {}
/**
 * @public
 *
 * The output of {@link ListSkillsCommand}.
 */
export interface ListSkillsCommandOutput extends ListSkillsResponse, __MetadataBearer {}

/**
 * <p>Lists all enabled skills in a specific skill group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListSkillsCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListSkillsCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // ListSkillsRequest
 *   SkillGroupArn: "STRING_VALUE",
 *   EnablementType: "ENABLED" || "PENDING",
 *   SkillType: "PUBLIC" || "PRIVATE" || "ALL",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSkillsCommand(input);
 * const response = await client.send(command);
 * // { // ListSkillsResponse
 * //   SkillSummaries: [ // SkillSummaryList
 * //     { // SkillSummary
 * //       SkillId: "STRING_VALUE",
 * //       SkillName: "STRING_VALUE",
 * //       SupportsLinking: true || false,
 * //       EnablementType: "ENABLED" || "PENDING",
 * //       SkillType: "PUBLIC" || "PRIVATE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSkillsCommandInput - {@link ListSkillsCommandInput}
 * @returns {@link ListSkillsCommandOutput}
 * @see {@link ListSkillsCommandInput} for command's `input` shape.
 * @see {@link ListSkillsCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 * @deprecated Alexa For Business is no longer supported
 */
export class ListSkillsCommand extends $Command
  .classBuilder<
    ListSkillsCommandInput,
    ListSkillsCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "ListSkills", {})
  .n("AlexaForBusinessClient", "ListSkillsCommand")
  .f(void 0, void 0)
  .ser(se_ListSkillsCommand)
  .de(de_ListSkillsCommand)
  .build() {}
