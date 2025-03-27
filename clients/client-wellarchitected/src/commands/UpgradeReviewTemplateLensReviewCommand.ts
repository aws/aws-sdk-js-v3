// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpgradeReviewTemplateLensReviewInput } from "../models/models_0";
import {
  de_UpgradeReviewTemplateLensReviewCommand,
  se_UpgradeReviewTemplateLensReviewCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpgradeReviewTemplateLensReviewCommand}.
 */
export interface UpgradeReviewTemplateLensReviewCommandInput extends UpgradeReviewTemplateLensReviewInput {}
/**
 * @public
 *
 * The output of {@link UpgradeReviewTemplateLensReviewCommand}.
 */
export interface UpgradeReviewTemplateLensReviewCommandOutput extends __MetadataBearer {}

/**
 * <p>Upgrade the lens review of a review template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpgradeReviewTemplateLensReviewCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpgradeReviewTemplateLensReviewCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // UpgradeReviewTemplateLensReviewInput
 *   TemplateArn: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new UpgradeReviewTemplateLensReviewCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpgradeReviewTemplateLensReviewCommandInput - {@link UpgradeReviewTemplateLensReviewCommandInput}
 * @returns {@link UpgradeReviewTemplateLensReviewCommandOutput}
 * @see {@link UpgradeReviewTemplateLensReviewCommandInput} for command's `input` shape.
 * @see {@link UpgradeReviewTemplateLensReviewCommandOutput} for command's `response` shape.
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
export class UpgradeReviewTemplateLensReviewCommand extends $Command
  .classBuilder<
    UpgradeReviewTemplateLensReviewCommandInput,
    UpgradeReviewTemplateLensReviewCommandOutput,
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
  .s("WellArchitectedApiServiceLambda", "UpgradeReviewTemplateLensReview", {})
  .n("WellArchitectedClient", "UpgradeReviewTemplateLensReviewCommand")
  .f(void 0, void 0)
  .ser(se_UpgradeReviewTemplateLensReviewCommand)
  .de(de_UpgradeReviewTemplateLensReviewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpgradeReviewTemplateLensReviewInput;
      output: {};
    };
    sdk: {
      input: UpgradeReviewTemplateLensReviewCommandInput;
      output: UpgradeReviewTemplateLensReviewCommandOutput;
    };
  };
}
