// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListReviewTemplatesInput, ListReviewTemplatesOutput } from "../models/models_0";
import { de_ListReviewTemplatesCommand, se_ListReviewTemplatesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReviewTemplatesCommand}.
 */
export interface ListReviewTemplatesCommandInput extends ListReviewTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListReviewTemplatesCommand}.
 */
export interface ListReviewTemplatesCommandOutput extends ListReviewTemplatesOutput, __MetadataBearer {}

/**
 * <p>List review templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListReviewTemplatesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListReviewTemplatesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // ListReviewTemplatesInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListReviewTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListReviewTemplatesOutput
 * //   ReviewTemplates: [ // ReviewTemplates
 * //     { // ReviewTemplateSummary
 * //       Description: "STRING_VALUE",
 * //       Lenses: [ // ReviewTemplateLenses
 * //         "STRING_VALUE",
 * //       ],
 * //       Owner: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       TemplateArn: "STRING_VALUE",
 * //       TemplateName: "STRING_VALUE",
 * //       UpdateStatus: "CURRENT" || "LENS_NOT_CURRENT",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReviewTemplatesCommandInput - {@link ListReviewTemplatesCommandInput}
 * @returns {@link ListReviewTemplatesCommandOutput}
 * @see {@link ListReviewTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListReviewTemplatesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
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
 * @public
 */
export class ListReviewTemplatesCommand extends $Command
  .classBuilder<
    ListReviewTemplatesCommandInput,
    ListReviewTemplatesCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "ListReviewTemplates", {})
  .n("WellArchitectedClient", "ListReviewTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_ListReviewTemplatesCommand)
  .de(de_ListReviewTemplatesCommand)
  .build() {}
