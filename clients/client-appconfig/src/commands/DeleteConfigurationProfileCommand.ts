// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConfigurationProfileRequest } from "../models/models_0";
import { DeleteConfigurationProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConfigurationProfileCommand}.
 */
export interface DeleteConfigurationProfileCommandInput extends DeleteConfigurationProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfigurationProfileCommand}.
 */
export interface DeleteConfigurationProfileCommandOutput extends __MetadataBearer {}

/**
 * Deletes a configuration profile.
 *
 * To prevent users from unintentionally deleting actively-used configuration profiles, enable [deletion protection](https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteConfigurationProfileCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteConfigurationProfileCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // DeleteConfigurationProfileRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ConfigurationProfileId: "STRING_VALUE", // required
 *   DeletionProtectionCheck: "ACCOUNT_DEFAULT" || "APPLY" || "BYPASS",
 * };
 * const command = new DeleteConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfigurationProfileCommandInput - {@link DeleteConfigurationProfileCommandInput}
 * @returns {@link DeleteConfigurationProfileCommandOutput}
 * @see {@link DeleteConfigurationProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationProfileCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There was an internal failure in the AppConfig service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found.
 *
 * @throws {@link AppConfigServiceException}
 *
 * Base exception class for all service exceptions from AppConfig service.
 *
 * @example To delete a configuration profile
 * ```javascript
 * // The following delete-configuration-profile example deletes the specified configuration profile.
 * const input = {
 *   ApplicationId: "339ohji",
 *   ConfigurationProfileId: "ur8hx2f"
 * };
 * const command = new DeleteConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteConfigurationProfileCommand extends command<DeleteConfigurationProfileCommandInput, DeleteConfigurationProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConfigurationProfile",
  DeleteConfigurationProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfigurationProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteConfigurationProfileCommandInput;
      output: DeleteConfigurationProfileCommandOutput;
    };
  };
}
