// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachSecurityProfileRequest, AttachSecurityProfileResponse } from "../models/models_0";
import { AttachSecurityProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachSecurityProfileCommand}.
 */
export interface AttachSecurityProfileCommandInput extends AttachSecurityProfileRequest {}
/**
 * @public
 *
 * The output of {@link AttachSecurityProfileCommand}.
 */
export interface AttachSecurityProfileCommandOutput extends AttachSecurityProfileResponse, __MetadataBearer {}

/**
 * > **Note:** The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Associates a Device Defender security profile with a thing group or this account. Each thing group or account can have up to five security profiles associated with it.
 *
 * Requires permission to access the [AttachSecurityProfile](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AttachSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AttachSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // AttachSecurityProfileRequest
 *   securityProfileName: "STRING_VALUE", // required
 *   securityProfileTargetArn: "STRING_VALUE", // required
 * };
 * const command = new AttachSecurityProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachSecurityProfileCommandInput - {@link AttachSecurityProfileCommandInput}
 * @returns {@link AttachSecurityProfileCommandOutput}
 * @see {@link AttachSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link AttachSecurityProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit has been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link VersionConflictException} (client fault)
 *
 * An exception thrown when the version of an entity specified with the `expectedVersion` parameter does not match the latest version in the system.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class AttachSecurityProfileCommand extends command<AttachSecurityProfileCommandInput, AttachSecurityProfileCommandOutput>(
  _ep0,
  _mw0,
  "AttachSecurityProfile",
  AttachSecurityProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachSecurityProfileRequest;
      output: {};
    };
    sdk: {
      input: AttachSecurityProfileCommandInput;
      output: AttachSecurityProfileCommandOutput;
    };
  };
}
