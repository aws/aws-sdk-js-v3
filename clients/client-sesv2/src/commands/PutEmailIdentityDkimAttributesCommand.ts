// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutEmailIdentityDkimAttributesRequest, PutEmailIdentityDkimAttributesResponse } from "../models/models_0";
import { PutEmailIdentityDkimAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutEmailIdentityDkimAttributesCommand}.
 */
export interface PutEmailIdentityDkimAttributesCommandInput extends PutEmailIdentityDkimAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutEmailIdentityDkimAttributesCommand}.
 */
export interface PutEmailIdentityDkimAttributesCommandOutput extends PutEmailIdentityDkimAttributesResponse, __MetadataBearer {}

/**
 * <p>Used to enable or disable DKIM authentication for an email identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutEmailIdentityDkimAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutEmailIdentityDkimAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // PutEmailIdentityDkimAttributesRequest
 *   EmailIdentity: "STRING_VALUE", // required
 *   SigningEnabled: true || false,
 * };
 * const command = new PutEmailIdentityDkimAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutEmailIdentityDkimAttributesCommandInput - {@link PutEmailIdentityDkimAttributesCommandInput}
 * @returns {@link PutEmailIdentityDkimAttributesCommandOutput}
 * @see {@link PutEmailIdentityDkimAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityDkimAttributesCommandOutput} for command's `response` shape.
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
export class PutEmailIdentityDkimAttributesCommand extends command<PutEmailIdentityDkimAttributesCommandInput, PutEmailIdentityDkimAttributesCommandOutput>(
  _ep0,
  _mw0,
  "PutEmailIdentityDkimAttributes",
  PutEmailIdentityDkimAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEmailIdentityDkimAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutEmailIdentityDkimAttributesCommandInput;
      output: PutEmailIdentityDkimAttributesCommandOutput;
    };
  };
}
