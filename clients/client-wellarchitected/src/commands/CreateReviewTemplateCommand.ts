// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateReviewTemplateInput, CreateReviewTemplateOutput } from "../models/models_0";
import { de_CreateReviewTemplateCommand, se_CreateReviewTemplateCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReviewTemplateCommand}.
 */
export interface CreateReviewTemplateCommandInput extends CreateReviewTemplateInput {}
/**
 * @public
 *
 * The output of {@link CreateReviewTemplateCommand}.
 */
export interface CreateReviewTemplateCommandOutput extends CreateReviewTemplateOutput, __MetadataBearer {}

/**
 * <p>Create a review template.</p>
 *          <note>
 *             <p>
 *                <b>Disclaimer</b>
 *             </p>
 *             <p>Do not include or gather personal identifiable information (PII) of end users or
 *                 other identifiable individuals in or via your review templates. If your review
 *                 template or those shared with you and used in your account do include or collect PII
 *                 you are responsible for: ensuring that the included PII is processed in accordance
 *                 with applicable law, providing adequate privacy notices, and obtaining necessary
 *                 consents for processing such data.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateReviewTemplateCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateReviewTemplateCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateReviewTemplateInput
 *   TemplateName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Lenses: [ // ReviewTemplateLenses // required
 *     "STRING_VALUE",
 *   ],
 *   Notes: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateReviewTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateReviewTemplateOutput
 * //   TemplateArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateReviewTemplateCommandInput - {@link CreateReviewTemplateCommandInput}
 * @returns {@link CreateReviewTemplateCommandOutput}
 * @see {@link CreateReviewTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateReviewTemplateCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
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
export class CreateReviewTemplateCommand extends $Command
  .classBuilder<
    CreateReviewTemplateCommandInput,
    CreateReviewTemplateCommandOutput,
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
  .s("WellArchitectedApiServiceLambda", "CreateReviewTemplate", {})
  .n("WellArchitectedClient", "CreateReviewTemplateCommand")
  .f(void 0, void 0)
  .ser(se_CreateReviewTemplateCommand)
  .de(de_CreateReviewTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReviewTemplateInput;
      output: CreateReviewTemplateOutput;
    };
    sdk: {
      input: CreateReviewTemplateCommandInput;
      output: CreateReviewTemplateCommandOutput;
    };
  };
}
