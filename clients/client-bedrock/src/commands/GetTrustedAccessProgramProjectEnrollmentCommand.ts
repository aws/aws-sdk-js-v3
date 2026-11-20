// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetTrustedAccessProgramProjectEnrollmentRequest,
  GetTrustedAccessProgramProjectEnrollmentResponse,
} from "../models/models_1";
import { GetTrustedAccessProgramProjectEnrollment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTrustedAccessProgramProjectEnrollmentCommand}.
 */
export interface GetTrustedAccessProgramProjectEnrollmentCommandInput extends GetTrustedAccessProgramProjectEnrollmentRequest {}
/**
 * @public
 *
 * The output of {@link GetTrustedAccessProgramProjectEnrollmentCommand}.
 */
export interface GetTrustedAccessProgramProjectEnrollmentCommandOutput extends GetTrustedAccessProgramProjectEnrollmentResponse, __MetadataBearer {}

/**
 * <p>Gets a named project's stored enrollment setting for a trusted access program. The project must exist in this Region and be owned by the calling account. Archived projects remain readable until they expire. Use GetTrustedAccessProgram with projectIdentifier to retrieve resolved participation, including account and organization inheritance. If no enrollment is stored, returns inherit without timestamps.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetTrustedAccessProgramProjectEnrollmentCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetTrustedAccessProgramProjectEnrollmentCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetTrustedAccessProgramProjectEnrollmentRequest
 *   programIdentifier: "STRING_VALUE", // required
 *   projectIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetTrustedAccessProgramProjectEnrollmentCommand(input);
 * const response = await client.send(command);
 * // { // GetTrustedAccessProgramProjectEnrollmentResponse
 * //   optIn: "inherit" || "enabled" || "disabled", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetTrustedAccessProgramProjectEnrollmentCommandInput - {@link GetTrustedAccessProgramProjectEnrollmentCommandInput}
 * @returns {@link GetTrustedAccessProgramProjectEnrollmentCommandOutput}
 * @see {@link GetTrustedAccessProgramProjectEnrollmentCommandInput} for command's `input` shape.
 * @see {@link GetTrustedAccessProgramProjectEnrollmentCommandOutput} for command's `response` shape.
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
export class GetTrustedAccessProgramProjectEnrollmentCommand extends command<GetTrustedAccessProgramProjectEnrollmentCommandInput, GetTrustedAccessProgramProjectEnrollmentCommandOutput>(
  _ep0,
  _mw0,
  "GetTrustedAccessProgramProjectEnrollment",
  GetTrustedAccessProgramProjectEnrollment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrustedAccessProgramProjectEnrollmentRequest;
      output: GetTrustedAccessProgramProjectEnrollmentResponse;
    };
    sdk: {
      input: GetTrustedAccessProgramProjectEnrollmentCommandInput;
      output: GetTrustedAccessProgramProjectEnrollmentCommandOutput;
    };
  };
}
