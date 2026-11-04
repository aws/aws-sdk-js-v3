// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutSuppressedDestinationRequest, PutSuppressedDestinationResponse } from "../models/models_1";
import { PutSuppressedDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutSuppressedDestinationCommand}.
 */
export interface PutSuppressedDestinationCommandInput extends PutSuppressedDestinationRequest {}
/**
 * @public
 *
 * The output of {@link PutSuppressedDestinationCommand}.
 */
export interface PutSuppressedDestinationCommandOutput extends PutSuppressedDestinationResponse, __MetadataBearer {}

/**
 * Adds an email address to the suppression list for your account or for a specific tenant. To target a tenant's suppression list, specify the `TenantName` parameter. If you omit `TenantName`, the address is added to the account-level suppression list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutSuppressedDestinationCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutSuppressedDestinationCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // PutSuppressedDestinationRequest
 *   EmailAddress: "STRING_VALUE", // required
 *   Reason: "BOUNCE" || "COMPLAINT", // required
 *   TenantName: "STRING_VALUE",
 * };
 * const command = new PutSuppressedDestinationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutSuppressedDestinationCommandInput - {@link PutSuppressedDestinationCommandInput}
 * @returns {@link PutSuppressedDestinationCommandOutput}
 * @see {@link PutSuppressedDestinationCommandInput} for command's `input` shape.
 * @see {@link PutSuppressedDestinationCommandOutput} for command's `response` shape.
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
export class PutSuppressedDestinationCommand extends command<PutSuppressedDestinationCommandInput, PutSuppressedDestinationCommandOutput>(
  _ep0,
  _mw0,
  "PutSuppressedDestination",
  PutSuppressedDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSuppressedDestinationRequest;
      output: {};
    };
    sdk: {
      input: PutSuppressedDestinationCommandInput;
      output: PutSuppressedDestinationCommandOutput;
    };
  };
}
