// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutTrustedAccessProgramProjectEnrollmentRequest,
  PutTrustedAccessProgramProjectEnrollmentResponse,
} from "../models/models_1";
import { PutTrustedAccessProgramProjectEnrollment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutTrustedAccessProgramProjectEnrollmentCommand}.
 */
export interface PutTrustedAccessProgramProjectEnrollmentCommandInput extends PutTrustedAccessProgramProjectEnrollmentRequest {}
/**
 * @public
 *
 * The output of {@link PutTrustedAccessProgramProjectEnrollmentCommand}.
 */
export interface PutTrustedAccessProgramProjectEnrollmentCommandOutput extends PutTrustedAccessProgramProjectEnrollmentResponse, __MetadataBearer {}

/**
 * <p>Sets a named project's enrollment preference for a trusted access program. The project must be active in this Region and owned by the calling account. Enabling requires applicable project, account, or organization approval and no applicable revocation, including when repeating an enabled setting; otherwise returns ConflictException and preserves the stored setting. Authorized disable and inherit writes are allowed while ineligible or revoked. Archived projects reject all writes with ValidationException.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, PutTrustedAccessProgramProjectEnrollmentCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, PutTrustedAccessProgramProjectEnrollmentCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // PutTrustedAccessProgramProjectEnrollmentRequest
 *   programIdentifier: "STRING_VALUE", // required
 *   projectIdentifier: "STRING_VALUE", // required
 *   optIn: "inherit" || "enabled" || "disabled", // required
 * };
 * const command = new PutTrustedAccessProgramProjectEnrollmentCommand(input);
 * const response = await client.send(command);
 * // { // PutTrustedAccessProgramProjectEnrollmentResponse
 * //   optIn: "inherit" || "enabled" || "disabled", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param PutTrustedAccessProgramProjectEnrollmentCommandInput - {@link PutTrustedAccessProgramProjectEnrollmentCommandInput}
 * @returns {@link PutTrustedAccessProgramProjectEnrollmentCommandOutput}
 * @see {@link PutTrustedAccessProgramProjectEnrollmentCommandInput} for command's `input` shape.
 * @see {@link PutTrustedAccessProgramProjectEnrollmentCommandOutput} for command's `response` shape.
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
export class PutTrustedAccessProgramProjectEnrollmentCommand extends command<PutTrustedAccessProgramProjectEnrollmentCommandInput, PutTrustedAccessProgramProjectEnrollmentCommandOutput>(
  _ep0,
  _mw0,
  "PutTrustedAccessProgramProjectEnrollment",
  PutTrustedAccessProgramProjectEnrollment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTrustedAccessProgramProjectEnrollmentRequest;
      output: PutTrustedAccessProgramProjectEnrollmentResponse;
    };
    sdk: {
      input: PutTrustedAccessProgramProjectEnrollmentCommandInput;
      output: PutTrustedAccessProgramProjectEnrollmentCommandOutput;
    };
  };
}
