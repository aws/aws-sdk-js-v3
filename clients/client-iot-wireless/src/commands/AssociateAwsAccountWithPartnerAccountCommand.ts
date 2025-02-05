// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  AssociateAwsAccountWithPartnerAccountRequest,
  AssociateAwsAccountWithPartnerAccountRequestFilterSensitiveLog,
  AssociateAwsAccountWithPartnerAccountResponse,
  AssociateAwsAccountWithPartnerAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_AssociateAwsAccountWithPartnerAccountCommand,
  se_AssociateAwsAccountWithPartnerAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateAwsAccountWithPartnerAccountCommand}.
 */
export interface AssociateAwsAccountWithPartnerAccountCommandInput
  extends AssociateAwsAccountWithPartnerAccountRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAwsAccountWithPartnerAccountCommand}.
 */
export interface AssociateAwsAccountWithPartnerAccountCommandOutput
  extends AssociateAwsAccountWithPartnerAccountResponse,
    __MetadataBearer {}

/**
 * <p>Associates a partner account with your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, AssociateAwsAccountWithPartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, AssociateAwsAccountWithPartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTWirelessClient(config);
 * const input = { // AssociateAwsAccountWithPartnerAccountRequest
 *   Sidewalk: { // SidewalkAccountInfo
 *     AmazonId: "STRING_VALUE",
 *     AppServerPrivateKey: "STRING_VALUE",
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AssociateAwsAccountWithPartnerAccountCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAwsAccountWithPartnerAccountResponse
 * //   Sidewalk: { // SidewalkAccountInfo
 * //     AmazonId: "STRING_VALUE",
 * //     AppServerPrivateKey: "STRING_VALUE",
 * //   },
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateAwsAccountWithPartnerAccountCommandInput - {@link AssociateAwsAccountWithPartnerAccountCommandInput}
 * @returns {@link AssociateAwsAccountWithPartnerAccountCommandOutput}
 * @see {@link AssociateAwsAccountWithPartnerAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateAwsAccountWithPartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 * @public
 */
export class AssociateAwsAccountWithPartnerAccountCommand extends $Command
  .classBuilder<
    AssociateAwsAccountWithPartnerAccountCommandInput,
    AssociateAwsAccountWithPartnerAccountCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "AssociateAwsAccountWithPartnerAccount", {})
  .n("IoTWirelessClient", "AssociateAwsAccountWithPartnerAccountCommand")
  .f(
    AssociateAwsAccountWithPartnerAccountRequestFilterSensitiveLog,
    AssociateAwsAccountWithPartnerAccountResponseFilterSensitiveLog
  )
  .ser(se_AssociateAwsAccountWithPartnerAccountCommand)
  .de(de_AssociateAwsAccountWithPartnerAccountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAwsAccountWithPartnerAccountRequest;
      output: AssociateAwsAccountWithPartnerAccountResponse;
    };
    sdk: {
      input: AssociateAwsAccountWithPartnerAccountCommandInput;
      output: AssociateAwsAccountWithPartnerAccountCommandOutput;
    };
  };
}
