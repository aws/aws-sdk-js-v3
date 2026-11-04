// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSuppressedDestinationRequest, DeleteSuppressedDestinationResponse } from "../models/models_0";
import { DeleteSuppressedDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSuppressedDestinationCommand}.
 */
export interface DeleteSuppressedDestinationCommandInput extends DeleteSuppressedDestinationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSuppressedDestinationCommand}.
 */
export interface DeleteSuppressedDestinationCommandOutput extends DeleteSuppressedDestinationResponse, __MetadataBearer {}

/**
 * Removes an email address from the suppression list for your account or for a specific tenant. To target a tenant's suppression list, specify the `TenantName` parameter. If you omit `TenantName`, the address is removed from the account-level suppression list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteSuppressedDestinationCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteSuppressedDestinationCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // DeleteSuppressedDestinationRequest
 *   EmailAddress: "STRING_VALUE", // required
 *   TenantName: "STRING_VALUE",
 * };
 * const command = new DeleteSuppressedDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSuppressedDestinationCommandInput - {@link DeleteSuppressedDestinationCommandInput}
 * @returns {@link DeleteSuppressedDestinationCommandOutput}
 * @see {@link DeleteSuppressedDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteSuppressedDestinationCommandOutput} for command's `response` shape.
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
export class DeleteSuppressedDestinationCommand extends command<DeleteSuppressedDestinationCommandInput, DeleteSuppressedDestinationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSuppressedDestination",
  DeleteSuppressedDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSuppressedDestinationRequest;
      output: {};
    };
    sdk: {
      input: DeleteSuppressedDestinationCommandInput;
      output: DeleteSuppressedDestinationCommandOutput;
    };
  };
}
