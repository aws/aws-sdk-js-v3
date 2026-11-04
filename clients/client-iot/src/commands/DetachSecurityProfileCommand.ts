// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetachSecurityProfileRequest, DetachSecurityProfileResponse } from "../models/models_1";
import { DetachSecurityProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Disassociates a Device Defender security profile from a thing group or from this account.
 *
 * Requires permission to access the [DetachSecurityProfile](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DetachSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DetachSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DetachSecurityProfileCommand extends command<DetachSecurityProfileCommandInput, DetachSecurityProfileCommandOutput>(
  _ep0,
  _mw0,
  "DetachSecurityProfile",
  DetachSecurityProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachSecurityProfileRequest;
      output: {};
    };
    sdk: {
      input: DetachSecurityProfileCommandInput;
      output: DetachSecurityProfileCommandOutput;
    };
  };
}
