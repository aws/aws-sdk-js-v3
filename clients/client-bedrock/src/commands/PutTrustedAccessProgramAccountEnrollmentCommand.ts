// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutTrustedAccessProgramAccountEnrollmentRequest,
  PutTrustedAccessProgramAccountEnrollmentResponse,
} from "../models/models_1";
import { PutTrustedAccessProgramAccountEnrollment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutTrustedAccessProgramAccountEnrollmentCommand}.
 */
export interface PutTrustedAccessProgramAccountEnrollmentCommandInput extends PutTrustedAccessProgramAccountEnrollmentRequest {}
/**
 * @public
 *
 * The output of {@link PutTrustedAccessProgramAccountEnrollmentCommand}.
 */
export interface PutTrustedAccessProgramAccountEnrollmentCommandOutput extends PutTrustedAccessProgramAccountEnrollmentResponse, __MetadataBearer {}

/**
 * <p>Sets your account's enrollment preference for a trusted access program. Amazon Bedrock identifies the account from your authenticated request. To enable enrollment, your account needs applicable approval and no applicable revocation, including when you repeat an enabled setting. Otherwise, Amazon Bedrock returns <code>ConflictException</code> and preserves the stored setting. With the required permissions, you can set <code>disabled</code> or <code>inherit</code> even if your account is ineligible or its eligibility is revoked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, PutTrustedAccessProgramAccountEnrollmentCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, PutTrustedAccessProgramAccountEnrollmentCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // PutTrustedAccessProgramAccountEnrollmentRequest
 *   programIdentifier: "STRING_VALUE", // required
 *   optIn: "inherit" || "enabled" || "disabled", // required
 * };
 * const command = new PutTrustedAccessProgramAccountEnrollmentCommand(input);
 * const response = await client.send(command);
 * // { // PutTrustedAccessProgramAccountEnrollmentResponse
 * //   optIn: "inherit" || "enabled" || "disabled", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param PutTrustedAccessProgramAccountEnrollmentCommandInput - {@link PutTrustedAccessProgramAccountEnrollmentCommandInput}
 * @returns {@link PutTrustedAccessProgramAccountEnrollmentCommandOutput}
 * @see {@link PutTrustedAccessProgramAccountEnrollmentCommandInput} for command's `input` shape.
 * @see {@link PutTrustedAccessProgramAccountEnrollmentCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class PutTrustedAccessProgramAccountEnrollmentCommand extends command<PutTrustedAccessProgramAccountEnrollmentCommandInput, PutTrustedAccessProgramAccountEnrollmentCommandOutput>(
  _ep0,
  _mw0,
  "PutTrustedAccessProgramAccountEnrollment",
  PutTrustedAccessProgramAccountEnrollment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTrustedAccessProgramAccountEnrollmentRequest;
      output: PutTrustedAccessProgramAccountEnrollmentResponse;
    };
    sdk: {
      input: PutTrustedAccessProgramAccountEnrollmentCommandInput;
      output: PutTrustedAccessProgramAccountEnrollmentCommandOutput;
    };
  };
}
