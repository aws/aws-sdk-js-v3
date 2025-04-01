// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ArtifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ArtifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccountSettingsRequest, GetAccountSettingsResponse } from "../models/models_0";
import { de_GetAccountSettingsCommand, se_GetAccountSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountSettingsCommand}.
 */
export interface GetAccountSettingsCommandInput extends GetAccountSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountSettingsCommand}.
 */
export interface GetAccountSettingsCommandOutput extends GetAccountSettingsResponse, __MetadataBearer {}

/**
 * <p>Get the account settings for Artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, GetAccountSettingsCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, GetAccountSettingsCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * const client = new ArtifactClient(config);
 * const input = {};
 * const command = new GetAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountSettingsResponse
 * //   accountSettings: { // AccountSettings
 * //     notificationSubscriptionStatus: "SUBSCRIBED" || "NOT_SUBSCRIBED",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountSettingsCommandInput - {@link GetAccountSettingsCommandInput}
 * @returns {@link GetAccountSettingsCommandOutput}
 * @see {@link GetAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link GetAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link ArtifactClientResolvedConfig | config} for ArtifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Request to create/modify content would result in a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown server exception has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Request fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ArtifactServiceException}
 * <p>Base exception class for all service exceptions from Artifact service.</p>
 *
 *
 * @example Invoke GetAccountSettings operation
 * ```javascript
 * // Get the current account settings.
 * const input = { /* empty *\/ };
 * const command = new GetAccountSettingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   accountSettings: {
 *     notificationSubscriptionStatus: "SUBSCRIBED"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAccountSettingsCommand extends $Command
  .classBuilder<
    GetAccountSettingsCommandInput,
    GetAccountSettingsCommandOutput,
    ArtifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ArtifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Artifact", "GetAccountSettings", {})
  .n("ArtifactClient", "GetAccountSettingsCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountSettingsCommand)
  .de(de_GetAccountSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountSettingsResponse;
    };
    sdk: {
      input: GetAccountSettingsCommandInput;
      output: GetAccountSettingsCommandOutput;
    };
  };
}
