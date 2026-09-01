// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateConfigurationSetRequest, UpdateConfigurationSetResponse } from "../models/models_1";
import { UpdateConfigurationSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationSetCommand}.
 */
export interface UpdateConfigurationSetCommandInput extends UpdateConfigurationSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationSetCommand}.
 */
export interface UpdateConfigurationSetCommandOutput extends UpdateConfigurationSetResponse, __MetadataBearer {}

/**
 * <p>Updates an existing configuration set.</p>
 *          <p>This operation performs a partial update. Only the attributes that you include in the
 *             request are updated; any omitted attribute is left unchanged.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, UpdateConfigurationSetCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, UpdateConfigurationSetCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // UpdateConfigurationSetRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   MessageSecurityOptions: { // MessageSecurityOptions
 *     SigningScheme: { // SigningScheme Union: only one key present
 *       DefaultScheme: {},
 *       SmimeScheme: { // SmimeSigningScheme
 *         SignatureFormat: "DETACHED",
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateConfigurationSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateConfigurationSetCommandInput - {@link UpdateConfigurationSetCommandInput}
 * @returns {@link UpdateConfigurationSetCommandOutput}
 * @see {@link UpdateConfigurationSetCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationSetCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class UpdateConfigurationSetCommand extends command<UpdateConfigurationSetCommandInput, UpdateConfigurationSetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateConfigurationSet",
  UpdateConfigurationSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfigurationSetRequest;
      output: {};
    };
    sdk: {
      input: UpdateConfigurationSetCommandInput;
      output: UpdateConfigurationSetCommandOutput;
    };
  };
}
