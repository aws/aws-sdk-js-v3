// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutConfigurationSetVdmOptionsRequest, PutConfigurationSetVdmOptionsResponse } from "../models/models_0";
import { PutConfigurationSetVdmOptions } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutConfigurationSetVdmOptionsCommand}.
 */
export interface PutConfigurationSetVdmOptionsCommandInput extends PutConfigurationSetVdmOptionsRequest {}
/**
 * @public
 *
 * The output of {@link PutConfigurationSetVdmOptionsCommand}.
 */
export interface PutConfigurationSetVdmOptionsCommandOutput
  extends PutConfigurationSetVdmOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Specify VDM preferences for email that you send using the configuration set.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutConfigurationSetVdmOptionsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutConfigurationSetVdmOptionsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // PutConfigurationSetVdmOptionsRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   VdmOptions: { // VdmOptions
 *     DashboardOptions: { // DashboardOptions
 *       EngagementMetrics: "ENABLED" || "DISABLED",
 *     },
 *     GuardianOptions: { // GuardianOptions
 *       OptimizedSharedDelivery: "ENABLED" || "DISABLED",
 *     },
 *   },
 * };
 * const command = new PutConfigurationSetVdmOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutConfigurationSetVdmOptionsCommandInput - {@link PutConfigurationSetVdmOptionsCommandInput}
 * @returns {@link PutConfigurationSetVdmOptionsCommandOutput}
 * @see {@link PutConfigurationSetVdmOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetVdmOptionsCommandOutput} for command's `response` shape.
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
export class PutConfigurationSetVdmOptionsCommand extends $Command
  .classBuilder<
    PutConfigurationSetVdmOptionsCommandInput,
    PutConfigurationSetVdmOptionsCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService_v2", "PutConfigurationSetVdmOptions", {})
  .n("SESv2Client", "PutConfigurationSetVdmOptionsCommand")
  .sc(PutConfigurationSetVdmOptions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutConfigurationSetVdmOptionsRequest;
      output: {};
    };
    sdk: {
      input: PutConfigurationSetVdmOptionsCommandInput;
      output: PutConfigurationSetVdmOptionsCommandOutput;
    };
  };
}
