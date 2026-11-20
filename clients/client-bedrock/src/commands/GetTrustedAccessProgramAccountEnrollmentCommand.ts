// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetTrustedAccessProgramAccountEnrollmentRequest,
  GetTrustedAccessProgramAccountEnrollmentResponse,
} from "../models/models_1";
import { GetTrustedAccessProgramAccountEnrollment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTrustedAccessProgramAccountEnrollmentCommand}.
 */
export interface GetTrustedAccessProgramAccountEnrollmentCommandInput extends GetTrustedAccessProgramAccountEnrollmentRequest {}
/**
 * @public
 *
 * The output of {@link GetTrustedAccessProgramAccountEnrollmentCommand}.
 */
export interface GetTrustedAccessProgramAccountEnrollmentCommandOutput extends GetTrustedAccessProgramAccountEnrollmentResponse, __MetadataBearer {}

/**
 * <p>Gets the calling account's stored enrollment setting for a trusted access program. The account is derived from the authenticated caller. Use GetTrustedAccessProgram to retrieve the resolved participation status, including organization inheritance. If no enrollment is stored, returns inherit without timestamps.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetTrustedAccessProgramAccountEnrollmentCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetTrustedAccessProgramAccountEnrollmentCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetTrustedAccessProgramAccountEnrollmentRequest
 *   programIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetTrustedAccessProgramAccountEnrollmentCommand(input);
 * const response = await client.send(command);
 * // { // GetTrustedAccessProgramAccountEnrollmentResponse
 * //   optIn: "inherit" || "enabled" || "disabled", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetTrustedAccessProgramAccountEnrollmentCommandInput - {@link GetTrustedAccessProgramAccountEnrollmentCommandInput}
 * @returns {@link GetTrustedAccessProgramAccountEnrollmentCommandOutput}
 * @see {@link GetTrustedAccessProgramAccountEnrollmentCommandInput} for command's `input` shape.
 * @see {@link GetTrustedAccessProgramAccountEnrollmentCommandOutput} for command's `response` shape.
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
export class GetTrustedAccessProgramAccountEnrollmentCommand extends command<GetTrustedAccessProgramAccountEnrollmentCommandInput, GetTrustedAccessProgramAccountEnrollmentCommandOutput>(
  _ep0,
  _mw0,
  "GetTrustedAccessProgramAccountEnrollment",
  GetTrustedAccessProgramAccountEnrollment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrustedAccessProgramAccountEnrollmentRequest;
      output: GetTrustedAccessProgramAccountEnrollmentResponse;
    };
    sdk: {
      input: GetTrustedAccessProgramAccountEnrollmentCommandInput;
      output: GetTrustedAccessProgramAccountEnrollmentCommandOutput;
    };
  };
}
