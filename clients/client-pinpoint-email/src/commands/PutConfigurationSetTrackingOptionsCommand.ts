// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  PutConfigurationSetTrackingOptionsRequest,
  PutConfigurationSetTrackingOptionsResponse,
} from "../models/models_0";
import type { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { PutConfigurationSetTrackingOptions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutConfigurationSetTrackingOptionsCommand}.
 */
export interface PutConfigurationSetTrackingOptionsCommandInput extends PutConfigurationSetTrackingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link PutConfigurationSetTrackingOptionsCommand}.
 */
export interface PutConfigurationSetTrackingOptionsCommandOutput
  extends PutConfigurationSetTrackingOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Specify a custom domain to use for open and click tracking elements in email that you
 *             send using Amazon Pinpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutConfigurationSetTrackingOptionsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutConfigurationSetTrackingOptionsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // PutConfigurationSetTrackingOptionsRequest
 *   ConfigurationSetName: "STRING_VALUE", // required
 *   CustomRedirectDomain: "STRING_VALUE",
 * };
 * const command = new PutConfigurationSetTrackingOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutConfigurationSetTrackingOptionsCommandInput - {@link PutConfigurationSetTrackingOptionsCommandInput}
 * @returns {@link PutConfigurationSetTrackingOptionsCommandOutput}
 * @see {@link PutConfigurationSetTrackingOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetTrackingOptionsCommandOutput} for command's `response` shape.
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
export class PutConfigurationSetTrackingOptionsCommand extends $Command
  .classBuilder<
    PutConfigurationSetTrackingOptionsCommandInput,
    PutConfigurationSetTrackingOptionsCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPinpointEmailService", "PutConfigurationSetTrackingOptions", {})
  .n("PinpointEmailClient", "PutConfigurationSetTrackingOptionsCommand")
  .sc(PutConfigurationSetTrackingOptions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutConfigurationSetTrackingOptionsRequest;
      output: {};
    };
    sdk: {
      input: PutConfigurationSetTrackingOptionsCommandInput;
      output: PutConfigurationSetTrackingOptionsCommandOutput;
    };
  };
}
