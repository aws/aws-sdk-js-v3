// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutAccountDeliveryAttributesRequest, PutAccountDeliveryAttributesResponse } from "../models/models_0";
import { PutAccountDeliveryAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutAccountDeliveryAttributesCommand}.
 */
export interface PutAccountDeliveryAttributesCommandInput extends PutAccountDeliveryAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountDeliveryAttributesCommand}.
 */
export interface PutAccountDeliveryAttributesCommandOutput extends PutAccountDeliveryAttributesResponse, __MetadataBearer {}

/**
 * <p>Set the shared pool delivery mode for your Amazon SES account in the current Amazon Web Services Region.
 *             The mode controls whether Amazon SES can deliver your email from shared IP addresses in other
 *             Amazon Web Services Regions within the same Amazon Web Services partition.</p>
 *          <p>A change may take a few minutes to take effect. Messages that are already queued for
 *             delivery keep the mode that they were sent with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutAccountDeliveryAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutAccountDeliveryAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // PutAccountDeliveryAttributesRequest
 *   SharedPoolDeliveryMode: "GLOBAL" || "REGIONAL", // required
 * };
 * const command = new PutAccountDeliveryAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccountDeliveryAttributesCommandInput - {@link PutAccountDeliveryAttributesCommandInput}
 * @returns {@link PutAccountDeliveryAttributesCommandOutput}
 * @see {@link PutAccountDeliveryAttributesCommandInput} for command's `input` shape.
 * @see {@link PutAccountDeliveryAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
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
export class PutAccountDeliveryAttributesCommand extends command<PutAccountDeliveryAttributesCommandInput, PutAccountDeliveryAttributesCommandOutput>(
  _ep0,
  _mw0,
  "PutAccountDeliveryAttributes",
  PutAccountDeliveryAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountDeliveryAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutAccountDeliveryAttributesCommandInput;
      output: PutAccountDeliveryAttributesCommandOutput;
    };
  };
}
