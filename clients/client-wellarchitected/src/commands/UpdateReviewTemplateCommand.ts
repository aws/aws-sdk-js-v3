// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateReviewTemplateInput, UpdateReviewTemplateOutput } from "../models/models_0";
import { de_UpdateReviewTemplateCommand, se_UpdateReviewTemplateCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateReviewTemplateCommand}.
 */
export interface UpdateReviewTemplateCommandInput extends UpdateReviewTemplateInput {}
/**
 * @public
 *
 * The output of {@link UpdateReviewTemplateCommand}.
 */
export interface UpdateReviewTemplateCommandOutput extends UpdateReviewTemplateOutput, __MetadataBearer {}

/**
 * <p>Update a review template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateReviewTemplateCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateReviewTemplateCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateReviewTemplateInput
 *   TemplateArn: "STRING_VALUE", // required
 *   TemplateName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Notes: "STRING_VALUE",
 *   LensesToAssociate: [ // ReviewTemplateLensAliases
 *     "STRING_VALUE",
 *   ],
 *   LensesToDisassociate: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateReviewTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateReviewTemplateOutput
 * //   ReviewTemplate: { // ReviewTemplate
 * //     Description: "STRING_VALUE",
 * //     Lenses: [ // ReviewTemplateLenses
 * //       "STRING_VALUE",
 * //     ],
 * //     Notes: "STRING_VALUE",
 * //     QuestionCounts: { // QuestionCounts
 * //       "<keys>": Number("int"),
 * //     },
 * //     Owner: "STRING_VALUE",
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     TemplateArn: "STRING_VALUE",
 * //     TemplateName: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     UpdateStatus: "CURRENT" || "LENS_NOT_CURRENT",
 * //     ShareInvitationId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateReviewTemplateCommandInput - {@link UpdateReviewTemplateCommandInput}
 * @returns {@link UpdateReviewTemplateCommandOutput}
 * @see {@link UpdateReviewTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateReviewTemplateCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class UpdateReviewTemplateCommand extends $Command
  .classBuilder<
    UpdateReviewTemplateCommandInput,
    UpdateReviewTemplateCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "UpdateReviewTemplate", {})
  .n("WellArchitectedClient", "UpdateReviewTemplateCommand")
  .f(void 0, void 0)
  .ser(se_UpdateReviewTemplateCommand)
  .de(de_UpdateReviewTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateReviewTemplateInput;
      output: UpdateReviewTemplateOutput;
    };
    sdk: {
      input: UpdateReviewTemplateCommandInput;
      output: UpdateReviewTemplateCommandOutput;
    };
  };
}
