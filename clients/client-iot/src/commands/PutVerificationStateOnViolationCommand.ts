// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { PutVerificationStateOnViolationRequest, PutVerificationStateOnViolationResponse } from "../models/models_2";
import {
  de_PutVerificationStateOnViolationCommand,
  se_PutVerificationStateOnViolationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface PutVerificationStateOnViolationCommandOutput
  extends PutVerificationStateOnViolationResponse,
    __MetadataBearer {}

/**
 * <p>Set a verification state and provide a description of that verification state on a violation (detect alarm).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, PutVerificationStateOnViolationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, PutVerificationStateOnViolationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
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
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class PutVerificationStateOnViolationCommand extends $Command
  .classBuilder<
    PutVerificationStateOnViolationCommandInput,
    PutVerificationStateOnViolationCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "PutVerificationStateOnViolation", {})
  .n("IoTClient", "PutVerificationStateOnViolationCommand")
  .f(void 0, void 0)
  .ser(se_PutVerificationStateOnViolationCommand)
  .de(de_PutVerificationStateOnViolationCommand)
  .build() {
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
