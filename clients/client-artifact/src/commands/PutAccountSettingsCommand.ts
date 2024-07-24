// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ArtifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ArtifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAccountSettingsRequest, PutAccountSettingsResponse } from "../models/models_0";
import { de_PutAccountSettingsCommand, se_PutAccountSettingsCommand } from "../protocols/Aws_restJson1";

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
 * const client = new ArtifactClient(config);
 * const input = { // PutAccountSettingsRequest
 *   notificationSubscriptionStatus: "STRING_VALUE",
 * };
 * const command = new PutAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // PutAccountSettingsResponse
 * //   accountSettings: { // AccountSettings
 * //     notificationSubscriptionStatus: "STRING_VALUE",
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ArtifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Artifact", "PutAccountSettings", {})
  .n("ArtifactClient", "PutAccountSettingsCommand")
  .f(void 0, void 0)
  .ser(se_PutAccountSettingsCommand)
  .de(de_PutAccountSettingsCommand)
  .build() {}
