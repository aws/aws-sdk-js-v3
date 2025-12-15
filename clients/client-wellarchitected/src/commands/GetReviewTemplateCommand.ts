// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetReviewTemplateInput, GetReviewTemplateOutput } from "../models/models_0";
import { GetReviewTemplate$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  WellArchitectedClientResolvedConfig,
} from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReviewTemplateCommand}.
 */
export interface GetReviewTemplateCommandInput extends GetReviewTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetReviewTemplateCommand}.
 */
export interface GetReviewTemplateCommandOutput extends GetReviewTemplateOutput, __MetadataBearer {}

/**
 * <p>Get review template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetReviewTemplateCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetReviewTemplateCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetReviewTemplateInput
 *   TemplateArn: "STRING_VALUE", // required
 * };
 * const command = new GetReviewTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetReviewTemplateOutput
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
 * @param GetReviewTemplateCommandInput - {@link GetReviewTemplateCommandInput}
 * @returns {@link GetReviewTemplateCommandOutput}
 * @see {@link GetReviewTemplateCommandInput} for command's `input` shape.
 * @see {@link GetReviewTemplateCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
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
export class GetReviewTemplateCommand extends $Command
  .classBuilder<
    GetReviewTemplateCommandInput,
    GetReviewTemplateCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "GetReviewTemplate", {})
  .n("WellArchitectedClient", "GetReviewTemplateCommand")
  .sc(GetReviewTemplate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReviewTemplateInput;
      output: GetReviewTemplateOutput;
    };
    sdk: {
      input: GetReviewTemplateCommandInput;
      output: GetReviewTemplateCommandOutput;
    };
  };
}
