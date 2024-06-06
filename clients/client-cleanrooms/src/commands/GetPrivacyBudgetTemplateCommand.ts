// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPrivacyBudgetTemplateInput, GetPrivacyBudgetTemplateOutput } from "../models/models_0";
import { de_GetPrivacyBudgetTemplateCommand, se_GetPrivacyBudgetTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPrivacyBudgetTemplateCommand}.
 */
export interface GetPrivacyBudgetTemplateCommandInput extends GetPrivacyBudgetTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetPrivacyBudgetTemplateCommand}.
 */
export interface GetPrivacyBudgetTemplateCommandOutput extends GetPrivacyBudgetTemplateOutput, __MetadataBearer {}

/**
 * <p>Returns details for a specified privacy budget template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetPrivacyBudgetTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetPrivacyBudgetTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // GetPrivacyBudgetTemplateInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   privacyBudgetTemplateIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetPrivacyBudgetTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetPrivacyBudgetTemplateOutput
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
 * @param GetPrivacyBudgetTemplateCommandInput - {@link GetPrivacyBudgetTemplateCommandInput}
 * @returns {@link GetPrivacyBudgetTemplateCommandOutput}
 * @see {@link GetPrivacyBudgetTemplateCommandInput} for command's `input` shape.
 * @see {@link GetPrivacyBudgetTemplateCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
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
export class GetPrivacyBudgetTemplateCommand extends $Command
  .classBuilder<
    GetPrivacyBudgetTemplateCommandInput,
    GetPrivacyBudgetTemplateCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "GetPrivacyBudgetTemplate", {})
  .n("CleanRoomsClient", "GetPrivacyBudgetTemplateCommand")
  .f(void 0, void 0)
  .ser(se_GetPrivacyBudgetTemplateCommand)
  .de(de_GetPrivacyBudgetTemplateCommand)
  .build() {}
