// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutVerificationStateOnViolationRequest,
  PutVerificationStateOnViolationResponse,
} from "../models/models_2";
import { PutVerificationStateOnViolation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutVerificationStateOnViolationCommand}.
 */
export interface PutVerificationStateOnViolationCommandInput extends PutVerificationStateOnViolationRequest {}
/**
 * @public
 *
 * The output of {@link PutVerificationStateOnViolationCommand}.
 */
export interface PutVerificationStateOnViolationCommandOutput extends PutVerificationStateOnViolationResponse, __MetadataBearer {}

/**
 * > **Note:** The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Set a verification state and provide a description of that verification state on a violation (detect alarm).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, PutVerificationStateOnViolationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, PutVerificationStateOnViolationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // PutVerificationStateOnViolationRequest
 *   violationId: "STRING_VALUE", // required
 *   verificationState: "FALSE_POSITIVE" || "BENIGN_POSITIVE" || "TRUE_POSITIVE" || "UNKNOWN", // required
 *   verificationStateDescription: "STRING_VALUE",
 * };
 * const command = new PutVerificationStateOnViolationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutVerificationStateOnViolationCommandInput - {@link PutVerificationStateOnViolationCommandInput}
 * @returns {@link PutVerificationStateOnViolationCommandOutput}
 * @see {@link PutVerificationStateOnViolationCommandInput} for command's `input` shape.
 * @see {@link PutVerificationStateOnViolationCommandOutput} for command's `response` shape.
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
export class PutVerificationStateOnViolationCommand extends command<PutVerificationStateOnViolationCommandInput, PutVerificationStateOnViolationCommandOutput>(
  _ep0,
  _mw0,
  "PutVerificationStateOnViolation",
  PutVerificationStateOnViolation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutVerificationStateOnViolationRequest;
      output: {};
    };
    sdk: {
      input: PutVerificationStateOnViolationCommandInput;
      output: PutVerificationStateOnViolationCommandOutput;
    };
  };
}
