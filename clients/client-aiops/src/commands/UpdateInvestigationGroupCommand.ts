// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AIOpsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AIOpsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateInvestigationGroupOutput, UpdateInvestigationGroupRequest } from "../models/models_0";
import { UpdateInvestigationGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInvestigationGroupCommand}.
 */
export interface UpdateInvestigationGroupCommandInput extends UpdateInvestigationGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInvestigationGroupCommand}.
 */
export interface UpdateInvestigationGroupCommandOutput extends UpdateInvestigationGroupOutput, __MetadataBearer {}

/**
 * <p>Updates the configuration of the specified investigation group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AIOpsClient, UpdateInvestigationGroupCommand } from "@aws-sdk/client-aiops"; // ES Modules import
 * // const { AIOpsClient, UpdateInvestigationGroupCommand } = require("@aws-sdk/client-aiops"); // CommonJS import
 * // import type { AIOpsClientConfig } from "@aws-sdk/client-aiops";
 * const config = {}; // type is AIOpsClientConfig
 * const client = new AIOpsClient(config);
 * const input = { // UpdateInvestigationGroupRequest
 *   identifier: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     type: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KMS_KEY",
 *     kmsKeyId: "STRING_VALUE",
 *   },
 *   tagKeyBoundaries: [ // TagKeyBoundaries
 *     "STRING_VALUE",
 *   ],
 *   chatbotNotificationChannel: { // ChatbotNotificationChannel
 *     "<keys>": [ // ChatConfigurationArns
 *       "STRING_VALUE",
 *     ],
 *   },
 *   isCloudTrailEventHistoryEnabled: true || false,
 *   crossAccountConfigurations: [ // CrossAccountConfigurations
 *     { // CrossAccountConfiguration
 *       sourceRoleArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateInvestigationGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateInvestigationGroupCommandInput - {@link UpdateInvestigationGroupCommandInput}
 * @returns {@link UpdateInvestigationGroupCommandOutput}
 * @see {@link UpdateInvestigationGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateInvestigationGroupCommandOutput} for command's `response` shape.
 * @see {@link AIOpsClientResolvedConfig | config} for AIOpsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation couldn't be completed because of a conflict in resource states.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. You can try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits. You can try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This operation or its parameters aren't formatted correctly.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Access id denied for this operation, or this operation is not valid for the specified resource.</p>
 *
 * @throws {@link AIOpsServiceException}
 * <p>Base exception class for all service exceptions from AIOps service.</p>
 *
 *
 * @public
 */
export class UpdateInvestigationGroupCommand extends $Command
  .classBuilder<
    UpdateInvestigationGroupCommandInput,
    UpdateInvestigationGroupCommandOutput,
    AIOpsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AIOpsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AIOps", "UpdateInvestigationGroup", {})
  .n("AIOpsClient", "UpdateInvestigationGroupCommand")
  .sc(UpdateInvestigationGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInvestigationGroupRequest;
      output: {};
    };
    sdk: {
      input: UpdateInvestigationGroupCommandInput;
      output: UpdateInvestigationGroupCommandOutput;
    };
  };
}
