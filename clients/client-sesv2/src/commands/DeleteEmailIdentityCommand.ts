// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEmailIdentityRequest, DeleteEmailIdentityResponse } from "../models/models_0";
import { DeleteEmailIdentity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEmailIdentityCommand}.
 */
export interface DeleteEmailIdentityCommandInput extends DeleteEmailIdentityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEmailIdentityCommand}.
 */
export interface DeleteEmailIdentityCommandOutput extends DeleteEmailIdentityResponse, __MetadataBearer {}

/**
 * Deletes an email identity. An identity can be either an email address or a domain name.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteEmailIdentityCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteEmailIdentityCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // DeleteEmailIdentityRequest
 *   EmailIdentity: "STRING_VALUE", // required
 * };
 * const command = new DeleteEmailIdentityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEmailIdentityCommandInput - {@link DeleteEmailIdentityCommandInput}
 * @returns {@link DeleteEmailIdentityCommandOutput}
 * @see {@link DeleteEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link DeleteEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *
 * The resource is being modified by another operation or thread.
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
export class DeleteEmailIdentityCommand extends command<DeleteEmailIdentityCommandInput, DeleteEmailIdentityCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEmailIdentity",
  DeleteEmailIdentity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEmailIdentityRequest;
      output: {};
    };
    sdk: {
      input: DeleteEmailIdentityCommandInput;
      output: DeleteEmailIdentityCommandOutput;
    };
  };
}
