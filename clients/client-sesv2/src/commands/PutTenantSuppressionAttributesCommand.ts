// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutTenantSuppressionAttributesRequest, PutTenantSuppressionAttributesResponse } from "../models/models_1";
import { PutTenantSuppressionAttributes$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutTenantSuppressionAttributesCommand}.
 */
export interface PutTenantSuppressionAttributesCommandInput extends PutTenantSuppressionAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutTenantSuppressionAttributesCommand}.
 */
export interface PutTenantSuppressionAttributesCommandOutput extends PutTenantSuppressionAttributesResponse, __MetadataBearer {}

/**
 * <p>Configure the suppression list preferences for a tenant. Use this operation to enable
 *             or disable tenant-level suppression, or to change the suppressed reasons for a tenant.</p>
 *          <p>When you set the suppression scope to <code>TENANT</code>, Amazon SES maintains a separate
 *             suppression list for the tenant. When you set the scope to <code>ACCOUNT</code>, the tenant
 *             uses the account-level suppression list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutTenantSuppressionAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutTenantSuppressionAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // PutTenantSuppressionAttributesRequest
 *   TenantName: "STRING_VALUE", // required
 *   SuppressedReasons: [ // SuppressionListReasons
 *     "BOUNCE" || "COMPLAINT",
 *   ],
 *   SuppressionScope: "ACCOUNT" || "TENANT",
 * };
 * const command = new PutTenantSuppressionAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTenantSuppressionAttributesCommandInput - {@link PutTenantSuppressionAttributesCommandInput}
 * @returns {@link PutTenantSuppressionAttributesCommandOutput}
 * @see {@link PutTenantSuppressionAttributesCommandInput} for command's `input` shape.
 * @see {@link PutTenantSuppressionAttributesCommandOutput} for command's `response` shape.
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
export class PutTenantSuppressionAttributesCommand extends $Command
  .classBuilder<
    PutTenantSuppressionAttributesCommandInput,
    PutTenantSuppressionAttributesCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService_v2", "PutTenantSuppressionAttributes", {})
  .n("SESv2Client", "PutTenantSuppressionAttributesCommand")
  .sc(PutTenantSuppressionAttributes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTenantSuppressionAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutTenantSuppressionAttributesCommandInput;
      output: PutTenantSuppressionAttributesCommandOutput;
    };
  };
}
