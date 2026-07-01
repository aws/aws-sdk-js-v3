// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutDedicatedIpWarmupAttributesRequest, PutDedicatedIpWarmupAttributesResponse } from "../models/models_0";
import { PutDedicatedIpWarmupAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutDedicatedIpWarmupAttributesCommand}.
 */
export interface PutDedicatedIpWarmupAttributesCommandInput extends PutDedicatedIpWarmupAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutDedicatedIpWarmupAttributesCommand}.
 */
export interface PutDedicatedIpWarmupAttributesCommandOutput extends PutDedicatedIpWarmupAttributesResponse, __MetadataBearer {}

/**
 * <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutDedicatedIpWarmupAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutDedicatedIpWarmupAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // PutDedicatedIpWarmupAttributesRequest
 *   Ip: "STRING_VALUE", // required
 *   WarmupPercentage: Number("int"), // required
 * };
 * const command = new PutDedicatedIpWarmupAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDedicatedIpWarmupAttributesCommandInput - {@link PutDedicatedIpWarmupAttributesCommandInput}
 * @returns {@link PutDedicatedIpWarmupAttributesCommandOutput}
 * @see {@link PutDedicatedIpWarmupAttributesCommandInput} for command's `input` shape.
 * @see {@link PutDedicatedIpWarmupAttributesCommandOutput} for command's `response` shape.
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
export class PutDedicatedIpWarmupAttributesCommand extends command<PutDedicatedIpWarmupAttributesCommandInput, PutDedicatedIpWarmupAttributesCommandOutput>(
  _ep0,
  _mw0,
  "PutDedicatedIpWarmupAttributes",
  PutDedicatedIpWarmupAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDedicatedIpWarmupAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutDedicatedIpWarmupAttributesCommandInput;
      output: PutDedicatedIpWarmupAttributesCommandOutput;
    };
  };
}
