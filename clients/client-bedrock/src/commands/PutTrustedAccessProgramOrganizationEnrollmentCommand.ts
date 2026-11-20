// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutTrustedAccessProgramOrganizationEnrollmentRequest,
  PutTrustedAccessProgramOrganizationEnrollmentResponse,
} from "../models/models_1";
import { PutTrustedAccessProgramOrganizationEnrollment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutTrustedAccessProgramOrganizationEnrollmentCommand}.
 */
export interface PutTrustedAccessProgramOrganizationEnrollmentCommandInput extends PutTrustedAccessProgramOrganizationEnrollmentRequest {}
/**
 * @public
 *
 * The output of {@link PutTrustedAccessProgramOrganizationEnrollmentCommand}.
 */
export interface PutTrustedAccessProgramOrganizationEnrollmentCommandOutput extends PutTrustedAccessProgramOrganizationEnrollmentResponse, __MetadataBearer {}

/**
 * <p>Sets the current organization's enrollment preference for a trusted access program. The organization and payer account are derived from the authenticated context. Every write requires operation permission and management-account or Bedrock-specific delegated-administrator authority. Enabling requires approval and no revocation for the organization, including when repeating an enabled setting; otherwise returns ConflictException and preserves the stored setting. Account approval alone is insufficient. If you have the required permissions, you can set the enrollment preference to <code>disabled</code> or <code>inherit</code> even if your organization is ineligible or its eligibility is revoked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, PutTrustedAccessProgramOrganizationEnrollmentCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, PutTrustedAccessProgramOrganizationEnrollmentCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // PutTrustedAccessProgramOrganizationEnrollmentRequest
 *   programIdentifier: "STRING_VALUE", // required
 *   optIn: "inherit" || "enabled" || "disabled", // required
 * };
 * const command = new PutTrustedAccessProgramOrganizationEnrollmentCommand(input);
 * const response = await client.send(command);
 * // { // PutTrustedAccessProgramOrganizationEnrollmentResponse
 * //   optIn: "inherit" || "enabled" || "disabled", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param PutTrustedAccessProgramOrganizationEnrollmentCommandInput - {@link PutTrustedAccessProgramOrganizationEnrollmentCommandInput}
 * @returns {@link PutTrustedAccessProgramOrganizationEnrollmentCommandOutput}
 * @see {@link PutTrustedAccessProgramOrganizationEnrollmentCommandInput} for command's `input` shape.
 * @see {@link PutTrustedAccessProgramOrganizationEnrollmentCommandOutput} for command's `response` shape.
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
export class PutTrustedAccessProgramOrganizationEnrollmentCommand extends command<PutTrustedAccessProgramOrganizationEnrollmentCommandInput, PutTrustedAccessProgramOrganizationEnrollmentCommandOutput>(
  _ep0,
  _mw0,
  "PutTrustedAccessProgramOrganizationEnrollment",
  PutTrustedAccessProgramOrganizationEnrollment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTrustedAccessProgramOrganizationEnrollmentRequest;
      output: PutTrustedAccessProgramOrganizationEnrollmentResponse;
    };
    sdk: {
      input: PutTrustedAccessProgramOrganizationEnrollmentCommandInput;
      output: PutTrustedAccessProgramOrganizationEnrollmentCommandOutput;
    };
  };
}
