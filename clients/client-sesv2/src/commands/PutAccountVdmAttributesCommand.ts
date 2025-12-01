// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutAccountVdmAttributesRequest, PutAccountVdmAttributesResponse } from "../models/models_0";
import { PutAccountVdmAttributes } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccountVdmAttributesCommand}.
 */
export interface PutAccountVdmAttributesCommandInput extends PutAccountVdmAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountVdmAttributesCommand}.
 */
export interface PutAccountVdmAttributesCommandOutput extends PutAccountVdmAttributesResponse, __MetadataBearer {}

/**
 * <p>Update your Amazon SES account VDM attributes.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutAccountVdmAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutAccountVdmAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // PutAccountVdmAttributesRequest
 *   VdmAttributes: { // VdmAttributes
 *     VdmEnabled: "ENABLED" || "DISABLED", // required
 *     DashboardAttributes: { // DashboardAttributes
 *       EngagementMetrics: "ENABLED" || "DISABLED",
 *     },
 *     GuardianAttributes: { // GuardianAttributes
 *       OptimizedSharedDelivery: "ENABLED" || "DISABLED",
 *     },
 *   },
 * };
 * const command = new PutAccountVdmAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccountVdmAttributesCommandInput - {@link PutAccountVdmAttributesCommandInput}
 * @returns {@link PutAccountVdmAttributesCommandOutput}
 * @see {@link PutAccountVdmAttributesCommandInput} for command's `input` shape.
 * @see {@link PutAccountVdmAttributesCommandOutput} for command's `response` shape.
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
export class PutAccountVdmAttributesCommand extends $Command
  .classBuilder<
    PutAccountVdmAttributesCommandInput,
    PutAccountVdmAttributesCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService_v2", "PutAccountVdmAttributes", {})
  .n("SESv2Client", "PutAccountVdmAttributesCommand")
  .sc(PutAccountVdmAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountVdmAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutAccountVdmAttributesCommandInput;
      output: PutAccountVdmAttributesCommandOutput;
    };
  };
}
