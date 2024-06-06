// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DetachSecurityProfileRequest, DetachSecurityProfileResponse } from "../models/models_1";
import { de_DetachSecurityProfileCommand, se_DetachSecurityProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachSecurityProfileCommand}.
 */
export interface DetachSecurityProfileCommandInput extends DetachSecurityProfileRequest {}
/**
 * @public
 *
 * The output of {@link DetachSecurityProfileCommand}.
 */
export interface DetachSecurityProfileCommandOutput extends DetachSecurityProfileResponse, __MetadataBearer {}

/**
 * <p>Disassociates a Device Defender security profile from a thing group or from this account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachSecurityProfile</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DetachSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DetachSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DetachSecurityProfileRequest
 *   securityProfileName: "STRING_VALUE", // required
 *   securityProfileTargetArn: "STRING_VALUE", // required
 * };
 * const command = new DetachSecurityProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachSecurityProfileCommandInput - {@link DetachSecurityProfileCommandInput}
 * @returns {@link DetachSecurityProfileCommandOutput}
 * @see {@link DetachSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link DetachSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class DetachSecurityProfileCommand extends $Command
  .classBuilder<
    DetachSecurityProfileCommandInput,
    DetachSecurityProfileCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DetachSecurityProfile", {})
  .n("IoTClient", "DetachSecurityProfileCommand")
  .f(void 0, void 0)
  .ser(se_DetachSecurityProfileCommand)
  .de(de_DetachSecurityProfileCommand)
  .build() {}
