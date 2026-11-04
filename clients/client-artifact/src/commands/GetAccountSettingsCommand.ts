// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccountSettingsRequest, GetAccountSettingsResponse } from "../models/models_0";
import { GetAccountSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Get the account settings for Artifact.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, GetAccountSettingsCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, GetAccountSettingsCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * // import type { ArtifactClientConfig } from "@aws-sdk/client-artifact";
 * const config = {}; // type is ArtifactClientConfig
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
export class GetAccountSettingsCommand extends command<GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput>(
  _ep0,
  _mw0,
  "GetAccountSettings",
  GetAccountSettings$
) {
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
