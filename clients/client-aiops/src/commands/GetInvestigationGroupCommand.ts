// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AIOpsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AIOpsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetInvestigationGroupRequest, GetInvestigationGroupResponse } from "../models/models_0";
import { de_GetInvestigationGroupCommand, se_GetInvestigationGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInvestigationGroupCommand}.
 */
export interface GetInvestigationGroupCommandInput extends GetInvestigationGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetInvestigationGroupCommand}.
 */
export interface GetInvestigationGroupCommandOutput extends GetInvestigationGroupResponse, __MetadataBearer {}

/**
 * <p>Returns the configuration information for the specified investigation group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AIOpsClient, GetInvestigationGroupCommand } from "@aws-sdk/client-aiops"; // ES Modules import
 * // const { AIOpsClient, GetInvestigationGroupCommand } = require("@aws-sdk/client-aiops"); // CommonJS import
 * // import type { AIOpsClientConfig } from "@aws-sdk/client-aiops";
 * const config = {}; // type is AIOpsClientConfig
 * const client = new AIOpsClient(config);
 * const input = { // GetInvestigationGroupRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetInvestigationGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetInvestigationGroupResponse
 * //   createdBy: "STRING_VALUE",
 * //   createdAt: Number("long"),
 * //   lastModifiedBy: "STRING_VALUE",
 * //   lastModifiedAt: Number("long"),
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   encryptionConfiguration: { // EncryptionConfiguration
 * //     type: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KMS_KEY",
 * //     kmsKeyId: "STRING_VALUE",
 * //   },
 * //   retentionInDays: Number("long"),
 * //   chatbotNotificationChannel: { // ChatbotNotificationChannel
 * //     "<keys>": [ // ChatConfigurationArns
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   tagKeyBoundaries: [ // TagKeyBoundaries
 * //     "STRING_VALUE",
 * //   ],
 * //   isCloudTrailEventHistoryEnabled: true || false,
 * //   crossAccountConfigurations: [ // CrossAccountConfigurations
 * //     { // CrossAccountConfiguration
 * //       sourceRoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetInvestigationGroupCommandInput - {@link GetInvestigationGroupCommandInput}
 * @returns {@link GetInvestigationGroupCommandOutput}
 * @see {@link GetInvestigationGroupCommandInput} for command's `input` shape.
 * @see {@link GetInvestigationGroupCommandOutput} for command's `response` shape.
 * @see {@link AIOpsClientResolvedConfig | config} for AIOpsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
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
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation couldn't be completed because of a conflict in resource states.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Access id denied for this operation, or this operation is not valid for the specified resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This operation or its parameters aren't formatted correctly.</p>
 *
 * @throws {@link AIOpsServiceException}
 * <p>Base exception class for all service exceptions from AIOps service.</p>
 *
 *
 * @public
 */
export class GetInvestigationGroupCommand extends $Command
  .classBuilder<
    GetInvestigationGroupCommandInput,
    GetInvestigationGroupCommandOutput,
    AIOpsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AIOpsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AIOps", "GetInvestigationGroup", {})
  .n("AIOpsClient", "GetInvestigationGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetInvestigationGroupCommand)
  .de(de_GetInvestigationGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInvestigationGroupRequest;
      output: GetInvestigationGroupResponse;
    };
    sdk: {
      input: GetInvestigationGroupCommandInput;
      output: GetInvestigationGroupCommandOutput;
    };
  };
}
