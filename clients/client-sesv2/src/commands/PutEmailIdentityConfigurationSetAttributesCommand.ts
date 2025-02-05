// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutEmailIdentityConfigurationSetAttributesRequest,
  PutEmailIdentityConfigurationSetAttributesResponse,
} from "../models/models_1";
import {
  de_PutEmailIdentityConfigurationSetAttributesCommand,
  se_PutEmailIdentityConfigurationSetAttributesCommand,
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
 * The input for {@link PutEmailIdentityConfigurationSetAttributesCommand}.
 */
export interface PutEmailIdentityConfigurationSetAttributesCommandInput
  extends PutEmailIdentityConfigurationSetAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutEmailIdentityConfigurationSetAttributesCommand}.
 */
export interface PutEmailIdentityConfigurationSetAttributesCommandOutput
  extends PutEmailIdentityConfigurationSetAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Used to associate a configuration set with an email identity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutEmailIdentityConfigurationSetAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutEmailIdentityConfigurationSetAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SESv2Client(config);
 * const input = { // PutEmailIdentityConfigurationSetAttributesRequest
 *   EmailIdentity: "STRING_VALUE", // required
 *   ConfigurationSetName: "STRING_VALUE",
 * };
 * const command = new PutEmailIdentityConfigurationSetAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutEmailIdentityConfigurationSetAttributesCommandInput - {@link PutEmailIdentityConfigurationSetAttributesCommandInput}
 * @returns {@link PutEmailIdentityConfigurationSetAttributesCommandOutput}
 * @see {@link PutEmailIdentityConfigurationSetAttributesCommandInput} for command's `input` shape.
 * @see {@link PutEmailIdentityConfigurationSetAttributesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class PutEmailIdentityConfigurationSetAttributesCommand extends $Command
  .classBuilder<
    PutEmailIdentityConfigurationSetAttributesCommandInput,
    PutEmailIdentityConfigurationSetAttributesCommandOutput,
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
  .s("SimpleEmailService_v2", "PutEmailIdentityConfigurationSetAttributes", {})
  .n("SESv2Client", "PutEmailIdentityConfigurationSetAttributesCommand")
  .f(void 0, void 0)
  .ser(se_PutEmailIdentityConfigurationSetAttributesCommand)
  .de(de_PutEmailIdentityConfigurationSetAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEmailIdentityConfigurationSetAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutEmailIdentityConfigurationSetAttributesCommandInput;
      output: PutEmailIdentityConfigurationSetAttributesCommandOutput;
    };
  };
}
