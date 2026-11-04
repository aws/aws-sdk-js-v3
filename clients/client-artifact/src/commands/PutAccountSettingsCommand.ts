// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAccountSettingsRequest, PutAccountSettingsResponse } from "../models/models_0";
import { PutAccountSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Put the account settings for Artifact.
 *
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
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Request to create/modify content would result in a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unknown server exception has occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Request fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ArtifactServiceException}
 *
 * Base exception class for all service exceptions from Artifact service.
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
export class PutAccountSettingsCommand extends command<PutAccountSettingsCommandInput, PutAccountSettingsCommandOutput>(
  _ep0,
  _mw0,
  "PutAccountSettings",
  PutAccountSettings$
) {
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
