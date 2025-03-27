// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutEmailIdentityDkimAttributesRequest, PutEmailIdentityDkimAttributesResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import {
  de_PutEmailIdentityDkimAttributesCommand,
  se_PutEmailIdentityDkimAttributesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEmailIdentityDkimAttributesCommand}.
 */
export interface PutEmailIdentityDkimAttributesCommandInput extends PutEmailIdentityDkimAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutEmailIdentityDkimAttributesCommand}.
 */
export interface PutEmailIdentityDkimAttributesCommandOutput
  extends PutEmailIdentityDkimAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Used to enable or disable DKIM authentication for an email identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutEmailIdentityDkimAttributesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutEmailIdentityDkimAttributesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const input = { // PutEmailIdentityDkimAttributesRequest
 *   EmailIdentity: "STRING_VALUE", // required
 *   SigningEnabled: true || false,
 * };
 * const command = new PutEmailIdentityDkimAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutEmailIdentityDkimAttributesCommandInput - {@link PutEmailIdentityDkimAttributesCommandInput}
 * @returns {@link PutEmailIdentityDkimAttributesCommandOutput}
 * @see {@link PutEmailIdentityDkimAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityDkimAttributesCommandOutput} for command's `response` shape.
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
export class PutEmailIdentityDkimAttributesCommand extends $Command
  .classBuilder<
    PutEmailIdentityDkimAttributesCommandInput,
    PutEmailIdentityDkimAttributesCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPinpointEmailService", "PutEmailIdentityDkimAttributes", {})
  .n("PinpointEmailClient", "PutEmailIdentityDkimAttributesCommand")
  .f(void 0, void 0)
  .ser(se_PutEmailIdentityDkimAttributesCommand)
  .de(de_PutEmailIdentityDkimAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEmailIdentityDkimAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutEmailIdentityDkimAttributesCommandInput;
      output: PutEmailIdentityDkimAttributesCommandOutput;
    };
  };
}
