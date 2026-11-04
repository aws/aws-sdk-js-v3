// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DownloadDefaultKeyPairRequest, DownloadDefaultKeyPairResult } from "../models/models_0";
import { DownloadDefaultKeyPair$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DownloadDefaultKeyPairCommand}.
 */
export interface DownloadDefaultKeyPairCommandInput extends DownloadDefaultKeyPairRequest {}
/**
 * @public
 *
 * The output of {@link DownloadDefaultKeyPairCommand}.
 */
export interface DownloadDefaultKeyPairCommandOutput extends DownloadDefaultKeyPairResult, __MetadataBearer {}

/**
 * Downloads the regional Amazon Lightsail default key pair.
 *
 * This action also creates a Lightsail default key pair if a default key pair does not currently exist in the Amazon Web Services Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DownloadDefaultKeyPairCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DownloadDefaultKeyPairCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = {};
 * const command = new DownloadDefaultKeyPairCommand(input);
 * const response = await client.send(command);
 * // { // DownloadDefaultKeyPairResult
 * //   publicKeyBase64: "STRING_VALUE",
 * //   privateKeyBase64: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DownloadDefaultKeyPairCommandInput - {@link DownloadDefaultKeyPairCommandInput}
 * @returns {@link DownloadDefaultKeyPairCommandOutput}
 * @see {@link DownloadDefaultKeyPairCommandInput} for command's `input` shape.
 * @see {@link DownloadDefaultKeyPairCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *
 * Lightsail throws this exception when an account is still in the setup in progress state.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Lightsail throws this exception when user input does not conform to the validation rules of an input field.
 *
 * > **Note:** Domain and distribution APIs are only available in the N. Virginia (`us-east-1`) Amazon Web Services Region. Please set your Amazon Web Services Region configuration to `us-east-1` to create, view, or edit these resources.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Lightsail throws this exception when it cannot find a resource.
 *
 * @throws {@link OperationFailureException} (client fault)
 *
 * Lightsail throws this exception when an operation fails to execute.
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *
 * Lightsail throws this exception when an operation is performed on resources in an opt-in Region that is currently being set up.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * A general service exception.
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *
 * Lightsail throws this exception when the user has not been authenticated.
 *
 * @throws {@link LightsailServiceException}
 *
 * Base exception class for all service exceptions from Lightsail service.
 *
 * @public
 */
export class DownloadDefaultKeyPairCommand extends command<DownloadDefaultKeyPairCommandInput, DownloadDefaultKeyPairCommandOutput>(
  _ep0,
  _mw0,
  "DownloadDefaultKeyPair",
  DownloadDefaultKeyPair$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DownloadDefaultKeyPairResult;
    };
    sdk: {
      input: DownloadDefaultKeyPairCommandInput;
      output: DownloadDefaultKeyPairCommandOutput;
    };
  };
}
