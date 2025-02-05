// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEmergencyContactSettingsRequest, DescribeEmergencyContactSettingsResponse } from "../models/models_0";
import {
  de_DescribeEmergencyContactSettingsCommand,
  se_DescribeEmergencyContactSettingsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEmergencyContactSettingsCommand}.
 */
export interface DescribeEmergencyContactSettingsCommandInput extends DescribeEmergencyContactSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEmergencyContactSettingsCommand}.
 */
export interface DescribeEmergencyContactSettingsCommandOutput
  extends DescribeEmergencyContactSettingsResponse,
    __MetadataBearer {}

/**
 * <p>A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeEmergencyContactSettingsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeEmergencyContactSettingsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ShieldClient(config);
 * const input = {};
 * const command = new DescribeEmergencyContactSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEmergencyContactSettingsResponse
 * //   EmergencyContactList: [ // EmergencyContactList
 * //     { // EmergencyContact
 * //       EmailAddress: "STRING_VALUE", // required
 * //       PhoneNumber: "STRING_VALUE",
 * //       ContactNotes: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEmergencyContactSettingsCommandInput - {@link DescribeEmergencyContactSettingsCommandInput}
 * @returns {@link DescribeEmergencyContactSettingsCommandOutput}
 * @see {@link DescribeEmergencyContactSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeEmergencyContactSettingsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 * @public
 */
export class DescribeEmergencyContactSettingsCommand extends $Command
  .classBuilder<
    DescribeEmergencyContactSettingsCommandInput,
    DescribeEmergencyContactSettingsCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShield_20160616", "DescribeEmergencyContactSettings", {})
  .n("ShieldClient", "DescribeEmergencyContactSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEmergencyContactSettingsCommand)
  .de(de_DescribeEmergencyContactSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeEmergencyContactSettingsResponse;
    };
    sdk: {
      input: DescribeEmergencyContactSettingsCommandInput;
      output: DescribeEmergencyContactSettingsCommandOutput;
    };
  };
}
