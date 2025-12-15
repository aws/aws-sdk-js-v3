// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  PutConfigurationSetDeliveryOptionsRequest,
  PutConfigurationSetDeliveryOptionsResponse,
} from "../models/models_0";
import type { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { PutConfigurationSetDeliveryOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutConfigurationSetDeliveryOptionsCommand}.
 */
export interface PutConfigurationSetDeliveryOptionsCommandInput extends PutConfigurationSetDeliveryOptionsRequest {}
/**
 * @public
 *
 * The output of {@link PutConfigurationSetDeliveryOptionsCommand}.
 */
export interface PutConfigurationSetDeliveryOptionsCommandOutput
  extends PutConfigurationSetDeliveryOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools
 *             to create groups of dedicated IP addresses for sending specific types of email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutConfigurationSetDeliveryOptionsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutConfigurationSetDeliveryOptionsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // PutConfigurationSetDeliveryOptionsRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   TlsPolicy: "REQUIRE" || "OPTIONAL",
 *   SendingPoolName: "STRING_VALUE",
 * };
 * const command = new PutConfigurationSetDeliveryOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutConfigurationSetDeliveryOptionsCommandInput - {@link PutConfigurationSetDeliveryOptionsCommandInput}
 * @returns {@link PutConfigurationSetDeliveryOptionsCommandOutput}
 * @see {@link PutConfigurationSetDeliveryOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetDeliveryOptionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
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
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 *
 * @public
 */
export class PutConfigurationSetDeliveryOptionsCommand extends $Command
  .classBuilder<
    PutConfigurationSetDeliveryOptionsCommandInput,
    PutConfigurationSetDeliveryOptionsCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPinpointEmailService", "PutConfigurationSetDeliveryOptions", {})
  .n("PinpointEmailClient", "PutConfigurationSetDeliveryOptionsCommand")
  .sc(PutConfigurationSetDeliveryOptions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutConfigurationSetDeliveryOptionsRequest;
      output: {};
    };
    sdk: {
      input: PutConfigurationSetDeliveryOptionsCommandInput;
      output: PutConfigurationSetDeliveryOptionsCommandOutput;
    };
  };
}
