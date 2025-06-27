// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePrivacyBudgetTemplateInput, UpdatePrivacyBudgetTemplateOutput } from "../models/models_1";
import {
  de_UpdatePrivacyBudgetTemplateCommand,
  se_UpdatePrivacyBudgetTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePrivacyBudgetTemplateCommand}.
 */
export interface UpdatePrivacyBudgetTemplateCommandInput extends UpdatePrivacyBudgetTemplateInput {}
/**
 * @public
 *
 * The output of {@link UpdatePrivacyBudgetTemplateCommand}.
 */
export interface UpdatePrivacyBudgetTemplateCommandOutput extends UpdatePrivacyBudgetTemplateOutput, __MetadataBearer {}

/**
 * <p>Updates the privacy budget template for the specified membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, UpdatePrivacyBudgetTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, UpdatePrivacyBudgetTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // UpdatePrivacyBudgetTemplateInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   privacyBudgetTemplateIdentifier: "STRING_VALUE", // required
 *   privacyBudgetType: "DIFFERENTIAL_PRIVACY", // required
 *   parameters: { // PrivacyBudgetTemplateUpdateParameters Union: only one key present
 *     differentialPrivacy: { // DifferentialPrivacyTemplateUpdateParameters
 *       epsilon: Number("int"),
 *       usersNoisePerQuery: Number("int"),
 *     },
 *   },
 * };
 * const command = new UpdatePrivacyBudgetTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePrivacyBudgetTemplateOutput
 * //   privacyBudgetTemplate: { // PrivacyBudgetTemplate
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     membershipArn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     privacyBudgetType: "DIFFERENTIAL_PRIVACY", // required
 * //     autoRefresh: "CALENDAR_MONTH" || "NONE", // required
 * //     parameters: { // PrivacyBudgetTemplateParametersOutput Union: only one key present
 * //       differentialPrivacy: { // DifferentialPrivacyTemplateParametersOutput
 * //         epsilon: Number("int"), // required
 * //         usersNoisePerQuery: Number("int"), // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePrivacyBudgetTemplateCommandInput - {@link UpdatePrivacyBudgetTemplateCommandInput}
 * @returns {@link UpdatePrivacyBudgetTemplateCommandOutput}
 * @see {@link UpdatePrivacyBudgetTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdatePrivacyBudgetTemplateCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class UpdatePrivacyBudgetTemplateCommand extends $Command
  .classBuilder<
    UpdatePrivacyBudgetTemplateCommandInput,
    UpdatePrivacyBudgetTemplateCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "UpdatePrivacyBudgetTemplate", {})
  .n("CleanRoomsClient", "UpdatePrivacyBudgetTemplateCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePrivacyBudgetTemplateCommand)
  .de(de_UpdatePrivacyBudgetTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePrivacyBudgetTemplateInput;
      output: UpdatePrivacyBudgetTemplateOutput;
    };
    sdk: {
      input: UpdatePrivacyBudgetTemplateCommandInput;
      output: UpdatePrivacyBudgetTemplateCommandOutput;
    };
  };
}
