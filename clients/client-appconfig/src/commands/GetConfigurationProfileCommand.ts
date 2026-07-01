// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ConfigurationProfile, GetConfigurationProfileRequest } from "../models/models_0";
import { GetConfigurationProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetConfigurationProfileCommand}.
 */
export interface GetConfigurationProfileCommandInput extends GetConfigurationProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigurationProfileCommand}.
 */
export interface GetConfigurationProfileCommandOutput extends ConfigurationProfile, __MetadataBearer {}

/**
 * <p>Retrieves information about a configuration profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetConfigurationProfileCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetConfigurationProfileCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // GetConfigurationProfileRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   ConfigurationProfileId: "STRING_VALUE", // required
 * };
 * const command = new GetConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * // { // ConfigurationProfile
 * //   ApplicationId: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   RetrievalRoleArn: "STRING_VALUE",
 * //   Validators: [ // ValidatorList
 * //     { // Validator
 * //       Type: "JSON_SCHEMA" || "LAMBDA", // required
 * //       Content: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Type: "STRING_VALUE",
 * //   KmsKeyArn: "STRING_VALUE",
 * //   KmsKeyIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConfigurationProfileCommandInput - {@link GetConfigurationProfileCommandInput}
 * @returns {@link GetConfigurationProfileCommandOutput}
 * @see {@link GetConfigurationProfileCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationProfileCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 *
 * @example To retrieve configuration profile details
 * ```javascript
 * // The following get-configuration-profile example returns the details of the specified configuration profile.
 * const input = {
 *   ApplicationId: "339ohji",
 *   ConfigurationProfileId: "ur8hx2f"
 * };
 * const command = new GetConfigurationProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationId: "339ohji",
 *   Id: "ur8hx2f",
 *   LocationUri: "ssm-parameter://Example-Parameter",
 *   Name: "Example-Configuration-Profile",
 *   RetrievalRoleArn: "arn:aws:iam::111122223333:role/Example-App-Config-Role"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetConfigurationProfileCommand extends command<GetConfigurationProfileCommandInput, GetConfigurationProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetConfigurationProfile",
  GetConfigurationProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfigurationProfileRequest;
      output: ConfigurationProfile;
    };
    sdk: {
      input: GetConfigurationProfileCommandInput;
      output: GetConfigurationProfileCommandOutput;
    };
  };
}
