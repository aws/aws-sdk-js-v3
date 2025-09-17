// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutAccountDedicatedIpWarmupAttributesRequest,
  PutAccountDedicatedIpWarmupAttributesResponse,
} from "../models/models_1";
import {
  de_PutAccountDedicatedIpWarmupAttributesCommand,
  se_PutAccountDedicatedIpWarmupAttributesCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccountDedicatedIpWarmupAttributesCommand}.
 */
export interface PutAccountDedicatedIpWarmupAttributesCommandInput
  extends PutAccountDedicatedIpWarmupAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutAccountDedicatedIpWarmupAttributesCommand}.
 */
export interface PutAccountDedicatedIpWarmupAttributesCommandOutput
  extends PutAccountDedicatedIpWarmupAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Enable or disable the automatic warm-up feature for dedicated IP addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutAccountDedicatedIpWarmupAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutAccountDedicatedIpWarmupAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // PutAccountDedicatedIpWarmupAttributesRequest
 *   AutoWarmupEnabled: true || false,
 * };
 * const command = new PutAccountDedicatedIpWarmupAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccountDedicatedIpWarmupAttributesCommandInput - {@link PutAccountDedicatedIpWarmupAttributesCommandInput}
 * @returns {@link PutAccountDedicatedIpWarmupAttributesCommandOutput}
 * @see {@link PutAccountDedicatedIpWarmupAttributesCommandInput} for command's `input` shape.
 * @see {@link PutAccountDedicatedIpWarmupAttributesCommandOutput} for command's `response` shape.
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
export class PutAccountDedicatedIpWarmupAttributesCommand extends $Command
  .classBuilder<
    PutAccountDedicatedIpWarmupAttributesCommandInput,
    PutAccountDedicatedIpWarmupAttributesCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "PutAccountDedicatedIpWarmupAttributes", {})
  .n("SESv2Client", "PutAccountDedicatedIpWarmupAttributesCommand")
  .f(void 0, void 0)
  .ser(se_PutAccountDedicatedIpWarmupAttributesCommand)
  .de(de_PutAccountDedicatedIpWarmupAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccountDedicatedIpWarmupAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutAccountDedicatedIpWarmupAttributesCommandInput;
      output: PutAccountDedicatedIpWarmupAttributesCommandOutput;
    };
  };
}
