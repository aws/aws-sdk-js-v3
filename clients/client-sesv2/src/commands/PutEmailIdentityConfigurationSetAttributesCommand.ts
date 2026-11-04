// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutEmailIdentityConfigurationSetAttributesRequest,
  PutEmailIdentityConfigurationSetAttributesResponse,
} from "../models/models_1";
import { PutEmailIdentityConfigurationSetAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutEmailIdentityConfigurationSetAttributesCommand}.
 */
export interface PutEmailIdentityConfigurationSetAttributesCommandInput extends PutEmailIdentityConfigurationSetAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutEmailIdentityConfigurationSetAttributesCommand}.
 */
export interface PutEmailIdentityConfigurationSetAttributesCommandOutput extends PutEmailIdentityConfigurationSetAttributesResponse, __MetadataBearer {}

/**
 * Used to associate a configuration set with an email identity.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutEmailIdentityConfigurationSetAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutEmailIdentityConfigurationSetAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // PutEmailIdentityConfigurationSetAttributesRequest
 *   EmailIdentity: "STRING_VALUE", // required
 *   ConfigurationSetName: "STRING_VALUE",
 * };
 * const command = new PutEmailIdentityConfigurationSetAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutEmailIdentityConfigurationSetAttributesCommandInput - {@link PutEmailIdentityConfigurationSetAttributesCommandInput}
 * @returns {@link PutEmailIdentityConfigurationSetAttributesCommandOutput}
 * @see {@link PutEmailIdentityConfigurationSetAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityConfigurationSetAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource you attempted to access doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many requests have been made to the operation.
 *
 * @throws {@link SESv2ServiceException}
 *
 * Base exception class for all service exceptions from SESv2 service.
 *
 * @public
 */
export class PutEmailIdentityConfigurationSetAttributesCommand extends command<PutEmailIdentityConfigurationSetAttributesCommandInput, PutEmailIdentityConfigurationSetAttributesCommandOutput>(
  _ep0,
  _mw0,
  "PutEmailIdentityConfigurationSetAttributes",
  PutEmailIdentityConfigurationSetAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEmailIdentityConfigurationSetAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutEmailIdentityConfigurationSetAttributesCommandInput;
      output: PutEmailIdentityConfigurationSetAttributesCommandOutput;
    };
  };
}
