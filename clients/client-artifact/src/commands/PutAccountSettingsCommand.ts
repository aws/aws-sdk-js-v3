// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ArtifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ArtifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAccountSettingsRequest, PutAccountSettingsResponse } from "../models/models_0";
import { PutAccountSettings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccountSettingsCommand}.
 */
export interface PutAccountSettingsCommandInput extends PutAccountSettingsRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountSettingsCommand}.
 */
export interface PutAccountSettingsCommandOutput extends PutAccountSettingsResponse, __MetadataBearer {}

/**
 * <p>Put the account settings for Artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, PutAccountSettingsCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, PutAccountSettingsCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * // import type { ArtifactClientConfig } from "@aws-sdk/client-artifact";
 * const config = {}; // type is ArtifactClientConfig
 * const client = new ArtifactClient(config);
 * const input = { // PutAccountSettingsRequest
 *   notificationSubscriptionStatus: "SUBSCRIBED" || "NOT_SUBSCRIBED",
 * };
 * const command = new PutAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // PutAccountSettingsResponse
 * //   accountSettings: { // AccountSettings
 * //     notificationSubscriptionStatus: "SUBSCRIBED" || "NOT_SUBSCRIBED",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutAccountSettingsCommandInput - {@link PutAccountSettingsCommandInput}
 * @returns {@link PutAccountSettingsCommandOutput}
 * @see {@link PutAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link PutAccountSettingsCommandOutput} for command's `response` shape.
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
 * @example Invoke PutAccountSettings operation
 * ```javascript
 * // Set the account settings.
 * const input = {
 *   notificationSubscriptionStatus: "SUBSCRIBED"
 * };
 * const command = new PutAccountSettingsCommand(input);
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
export class PutAccountSettingsCommand extends $Command
  .classBuilder<
    PutAccountSettingsCommandInput,
    PutAccountSettingsCommandOutput,
    ArtifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ArtifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Artifact", "PutAccountSettings", {})
  .n("ArtifactClient", "PutAccountSettingsCommand")
  .sc(PutAccountSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountSettingsRequest;
      output: PutAccountSettingsResponse;
    };
    sdk: {
      input: PutAccountSettingsCommandInput;
      output: PutAccountSettingsCommandOutput;
    };
  };
}
