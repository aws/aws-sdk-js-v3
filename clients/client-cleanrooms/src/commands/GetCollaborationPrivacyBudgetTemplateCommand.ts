// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetCollaborationPrivacyBudgetTemplateInput,
  GetCollaborationPrivacyBudgetTemplateOutput,
} from "../models/models_0";
import { GetCollaborationPrivacyBudgetTemplate } from "../schemas/schemas_3_Privacy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCollaborationPrivacyBudgetTemplateCommand}.
 */
export interface GetCollaborationPrivacyBudgetTemplateCommandInput extends GetCollaborationPrivacyBudgetTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetCollaborationPrivacyBudgetTemplateCommand}.
 */
export interface GetCollaborationPrivacyBudgetTemplateCommandOutput
  extends GetCollaborationPrivacyBudgetTemplateOutput,
    __MetadataBearer {}

/**
 * <p>Returns details about a specified privacy budget template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetCollaborationPrivacyBudgetTemplateCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetCollaborationPrivacyBudgetTemplateCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // GetCollaborationPrivacyBudgetTemplateInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   privacyBudgetTemplateIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCollaborationPrivacyBudgetTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetCollaborationPrivacyBudgetTemplateOutput
 * //   collaborationPrivacyBudgetTemplate: { // CollaborationPrivacyBudgetTemplate
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     creatorAccountId: "STRING_VALUE", // required
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
 * @param GetCollaborationPrivacyBudgetTemplateCommandInput - {@link GetCollaborationPrivacyBudgetTemplateCommandInput}
 * @returns {@link GetCollaborationPrivacyBudgetTemplateCommandOutput}
 * @see {@link GetCollaborationPrivacyBudgetTemplateCommandInput} for command's `input` shape.
 * @see {@link GetCollaborationPrivacyBudgetTemplateCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetCollaborationPrivacyBudgetTemplateCommand extends $Command
  .classBuilder<
    GetCollaborationPrivacyBudgetTemplateCommandInput,
    GetCollaborationPrivacyBudgetTemplateCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "GetCollaborationPrivacyBudgetTemplate", {})
  .n("CleanRoomsClient", "GetCollaborationPrivacyBudgetTemplateCommand")
  .sc(GetCollaborationPrivacyBudgetTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCollaborationPrivacyBudgetTemplateInput;
      output: GetCollaborationPrivacyBudgetTemplateOutput;
    };
    sdk: {
      input: GetCollaborationPrivacyBudgetTemplateCommandInput;
      output: GetCollaborationPrivacyBudgetTemplateCommandOutput;
    };
  };
}
