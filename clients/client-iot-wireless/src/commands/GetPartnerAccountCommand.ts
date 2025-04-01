// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  GetPartnerAccountRequest,
  GetPartnerAccountResponse,
  GetPartnerAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetPartnerAccountCommand, se_GetPartnerAccountCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPartnerAccountCommand}.
 */
export interface GetPartnerAccountCommandInput extends GetPartnerAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetPartnerAccountCommand}.
 */
export interface GetPartnerAccountCommandOutput extends GetPartnerAccountResponse, __MetadataBearer {}

/**
 * <p>Gets information about a partner account. If <code>PartnerAccountId</code> and
 *                 <code>PartnerType</code> are <code>null</code>, returns all partner accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetPartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetPartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetPartnerAccountRequest
 *   PartnerAccountId: "STRING_VALUE", // required
 *   PartnerType: "Sidewalk", // required
 * };
 * const command = new GetPartnerAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetPartnerAccountResponse
 * //   Sidewalk: { // SidewalkAccountInfoWithFingerprint
 * //     AmazonId: "STRING_VALUE",
 * //     Fingerprint: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //   },
 * //   AccountLinked: true || false,
 * // };
 *
 * ```
 *
 * @param GetPartnerAccountCommandInput - {@link GetPartnerAccountCommandInput}
 * @returns {@link GetPartnerAccountCommandOutput}
 * @see {@link GetPartnerAccountCommandInput} for command's `input` shape.
 * @see {@link GetPartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
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
 *
 * @public
 */
export class GetPartnerAccountCommand extends $Command
  .classBuilder<
    GetPartnerAccountCommandInput,
    GetPartnerAccountCommandOutput,
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
  .s("iotwireless", "GetPartnerAccount", {})
  .n("IoTWirelessClient", "GetPartnerAccountCommand")
  .f(void 0, GetPartnerAccountResponseFilterSensitiveLog)
  .ser(se_GetPartnerAccountCommand)
  .de(de_GetPartnerAccountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPartnerAccountRequest;
      output: GetPartnerAccountResponse;
    };
    sdk: {
      input: GetPartnerAccountCommandInput;
      output: GetPartnerAccountCommandOutput;
    };
  };
}
