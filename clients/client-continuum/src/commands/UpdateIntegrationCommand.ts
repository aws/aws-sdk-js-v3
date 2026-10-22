// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateIntegrationInput, UpdateIntegrationOutput } from "../models/models_0";
import { UpdateIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateIntegrationCommand}.
 */
export interface UpdateIntegrationCommandInput extends UpdateIntegrationInput {}
/**
 * @public
 *
 * The output of {@link UpdateIntegrationCommand}.
 */
export interface UpdateIntegrationCommandOutput extends UpdateIntegrationOutput, __MetadataBearer {}

/**
 * Rotates the credentials used by an Amazon S3 integration. Only S3 integrations can
 * be updated; GitHub integrations cannot be modified. The integration's name,
 * provider type, and bucket remain fixed.
 *
 * The caller must have iam:PassRole permission for the supplied role, including
 * when only the external ID changes. Continuum verifies that the role can be
 * assumed with the requested external ID and can access the existing bucket before
 * saving both credentials atomically. Omitting externalId preserves its current
 * value. Repeating both current credentials leaves updatedAt unchanged, but still
 * requires authorization and access validation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, UpdateIntegrationCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, UpdateIntegrationCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // UpdateIntegrationInput
 *   integrationId: "STRING_VALUE", // required
 *   providerConfiguration: { // UpdateProviderConfiguration Union: only one key present
 *     s3: { // UpdateS3Configuration
 *       roleArn: "STRING_VALUE", // required
 *       externalId: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIntegrationOutput
 * //   integrationId: "STRING_VALUE", // required
 * //   integrationArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   integrationType: "GITHUB" || "GITLAB" || "S3", // required
 * //   providerDetails: { // ProviderDetails Union: only one key present
 * //     github: { // GitHubDetails
 * //       organizationName: "STRING_VALUE",
 * //     },
 * //     gitlab: { // GitLabDetails
 * //       instanceUrl: "STRING_VALUE", // required
 * //       targetType: "GROUP" || "PROJECT", // required
 * //       targetPath: "STRING_VALUE", // required
 * //       tokenRotation: "AUTOMATIC" || "NONE", // required
 * //       expiresAt: new Date("TIMESTAMP"),
 * //     },
 * //     s3: { // S3Details
 * //       bucket: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateIntegrationCommandInput - {@link UpdateIntegrationCommandInput}
 * @returns {@link UpdateIntegrationCommandOutput}
 * @see {@link UpdateIntegrationCommandInput} for command's `input` shape.
 * @see {@link UpdateIntegrationCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found. Verify that the resource identifier is correct and that the resource exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class UpdateIntegrationCommand extends command<UpdateIntegrationCommandInput, UpdateIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIntegration",
  UpdateIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIntegrationInput;
      output: UpdateIntegrationOutput;
    };
    sdk: {
      input: UpdateIntegrationCommandInput;
      output: UpdateIntegrationCommandOutput;
    };
  };
}
