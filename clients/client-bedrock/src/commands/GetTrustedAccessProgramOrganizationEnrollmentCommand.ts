// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetTrustedAccessProgramOrganizationEnrollmentRequest,
  GetTrustedAccessProgramOrganizationEnrollmentResponse,
} from "../models/models_1";
import { GetTrustedAccessProgramOrganizationEnrollment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTrustedAccessProgramOrganizationEnrollmentCommand}.
 */
export interface GetTrustedAccessProgramOrganizationEnrollmentCommandInput extends GetTrustedAccessProgramOrganizationEnrollmentRequest {}
/**
 * @public
 *
 * The output of {@link GetTrustedAccessProgramOrganizationEnrollmentCommand}.
 */
export interface GetTrustedAccessProgramOrganizationEnrollmentCommandOutput extends GetTrustedAccessProgramOrganizationEnrollmentResponse, __MetadataBearer {}

/**
 * <p>Gets the current organization's stored enrollment setting for a trusted access program. The organization and payer account are derived from the authenticated context. Requires operation permission and management-account or Bedrock-specific delegated-administrator authority. The setting can differ from the caller's resolved status returned by GetTrustedAccessProgram. If no enrollment is stored, returns inherit without timestamps.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetTrustedAccessProgramOrganizationEnrollmentCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetTrustedAccessProgramOrganizationEnrollmentCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetTrustedAccessProgramOrganizationEnrollmentRequest
 *   programIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetTrustedAccessProgramOrganizationEnrollmentCommand(input);
 * const response = await client.send(command);
 * // { // GetTrustedAccessProgramOrganizationEnrollmentResponse
 * //   optIn: "inherit" || "enabled" || "disabled", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetTrustedAccessProgramOrganizationEnrollmentCommandInput - {@link GetTrustedAccessProgramOrganizationEnrollmentCommandInput}
 * @returns {@link GetTrustedAccessProgramOrganizationEnrollmentCommandOutput}
 * @see {@link GetTrustedAccessProgramOrganizationEnrollmentCommandInput} for command's `input` shape.
 * @see {@link GetTrustedAccessProgramOrganizationEnrollmentCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
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
export class GetTrustedAccessProgramOrganizationEnrollmentCommand extends command<GetTrustedAccessProgramOrganizationEnrollmentCommandInput, GetTrustedAccessProgramOrganizationEnrollmentCommandOutput>(
  _ep0,
  _mw0,
  "GetTrustedAccessProgramOrganizationEnrollment",
  GetTrustedAccessProgramOrganizationEnrollment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrustedAccessProgramOrganizationEnrollmentRequest;
      output: GetTrustedAccessProgramOrganizationEnrollmentResponse;
    };
    sdk: {
      input: GetTrustedAccessProgramOrganizationEnrollmentCommandInput;
      output: GetTrustedAccessProgramOrganizationEnrollmentCommandOutput;
    };
  };
}
