// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  PutAccountDedicatedIpWarmupAttributesRequest,
  PutAccountDedicatedIpWarmupAttributesResponse,
} from "../models/models_0";
import type { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { PutAccountDedicatedIpWarmupAttributes } from "../schemas/schemas_0";

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
 * import { PinpointEmailClient, PutAccountDedicatedIpWarmupAttributesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutAccountDedicatedIpWarmupAttributesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
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
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 *
 * @public
 */
export class PutAccountDedicatedIpWarmupAttributesCommand extends $Command
  .classBuilder<
    PutAccountDedicatedIpWarmupAttributesCommandInput,
    PutAccountDedicatedIpWarmupAttributesCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPinpointEmailService", "PutAccountDedicatedIpWarmupAttributes", {})
  .n("PinpointEmailClient", "PutAccountDedicatedIpWarmupAttributesCommand")
  .sc(PutAccountDedicatedIpWarmupAttributes)
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
