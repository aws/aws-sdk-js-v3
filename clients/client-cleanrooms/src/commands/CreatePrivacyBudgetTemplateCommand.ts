// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePrivacyBudgetTemplateInput, CreatePrivacyBudgetTemplateOutput } from "../models/models_1";
import {
  de_CreatePrivacyBudgetTemplateCommand,
  se_CreatePrivacyBudgetTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePrivacyBudgetTemplateCommand}.
 */
export interface CreatePrivacyBudgetTemplateCommandInput extends CreatePrivacyBudgetTemplateInput {}
/**
 * @public
 *
 * The output of {@link CreatePrivacyBudgetTemplateCommand}.
 */
export interface CreatePrivacyBudgetTemplateCommandOutput extends CreatePrivacyBudgetTemplateOutput, __MetadataBearer {}

/**
 * <p>Creates a privacy budget template for a specified membership. Each membership can have only one privacy budget template, but it can be deleted and recreated. If you need to change the privacy budget template for a membership, use the <a>UpdatePrivacyBudgetTemplate</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreatePrivacyBudgetTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreatePrivacyBudgetTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsClient(config);
 * const input = { // CreatePrivacyBudgetTemplateInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   autoRefresh: "CALENDAR_MONTH" || "NONE", // required
 *   privacyBudgetType: "DIFFERENTIAL_PRIVACY", // required
 *   parameters: { // PrivacyBudgetTemplateParametersInput Union: only one key present
 *     differentialPrivacy: { // DifferentialPrivacyTemplateParametersInput
 *       epsilon: Number("int"), // required
 *       usersNoisePerQuery: Number("int"), // required
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePrivacyBudgetTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreatePrivacyBudgetTemplateOutput
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
 * @param CreatePrivacyBudgetTemplateCommandInput - {@link CreatePrivacyBudgetTemplateCommandInput}
 * @returns {@link CreatePrivacyBudgetTemplateCommandOutput}
 * @see {@link CreatePrivacyBudgetTemplateCommandInput} for command's `input` shape.
 * @see {@link CreatePrivacyBudgetTemplateCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreatePrivacyBudgetTemplateCommand extends $Command
  .classBuilder<
    CreatePrivacyBudgetTemplateCommandInput,
    CreatePrivacyBudgetTemplateCommandOutput,
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
  .s("AWSBastionControlPlaneServiceLambda", "CreatePrivacyBudgetTemplate", {})
  .n("CleanRoomsClient", "CreatePrivacyBudgetTemplateCommand")
  .f(void 0, void 0)
  .ser(se_CreatePrivacyBudgetTemplateCommand)
  .de(de_CreatePrivacyBudgetTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePrivacyBudgetTemplateInput;
      output: CreatePrivacyBudgetTemplateOutput;
    };
    sdk: {
      input: CreatePrivacyBudgetTemplateCommandInput;
      output: CreatePrivacyBudgetTemplateCommandOutput;
    };
  };
}
