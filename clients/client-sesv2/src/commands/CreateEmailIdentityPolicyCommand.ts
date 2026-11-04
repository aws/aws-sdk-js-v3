// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEmailIdentityPolicyRequest, CreateEmailIdentityPolicyResponse } from "../models/models_0";
import { CreateEmailIdentityPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEmailIdentityPolicyCommand}.
 */
export interface CreateEmailIdentityPolicyCommandInput extends CreateEmailIdentityPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateEmailIdentityPolicyCommand}.
 */
export interface CreateEmailIdentityPolicyCommandOutput extends CreateEmailIdentityPolicyResponse, __MetadataBearer {}

/**
 * Creates the specified sending authorization policy for the given identity (an email address or a domain).
 *
 * > **Note:** This API is for the identity owner only. If you have not verified the identity, this API will return an error.
 *
 * Sending authorization is a feature that enables an identity owner to authorize other senders to use its identities. For information about using sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html).
 *
 * You can execute this operation no more than once per second.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateEmailIdentityPolicyCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateEmailIdentityPolicyCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // CreateEmailIdentityPolicyRequest
 *   EmailIdentity: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new CreateEmailIdentityPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateEmailIdentityPolicyCommandInput - {@link CreateEmailIdentityPolicyCommandInput}
 * @returns {@link CreateEmailIdentityPolicyCommandOutput}
 * @see {@link CreateEmailIdentityPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateEmailIdentityPolicyCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * The resource specified in your request already exists.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * There are too many instances of the specified resource type.
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
export class CreateEmailIdentityPolicyCommand extends command<CreateEmailIdentityPolicyCommandInput, CreateEmailIdentityPolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreateEmailIdentityPolicy",
  CreateEmailIdentityPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEmailIdentityPolicyRequest;
      output: {};
    };
    sdk: {
      input: CreateEmailIdentityPolicyCommandInput;
      output: CreateEmailIdentityPolicyCommandOutput;
    };
  };
}
