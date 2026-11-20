// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTrustedAccessProgramRequest, GetTrustedAccessProgramResponse } from "../models/models_1";
import { GetTrustedAccessProgram$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTrustedAccessProgramCommand}.
 */
export interface GetTrustedAccessProgramCommandInput extends GetTrustedAccessProgramRequest {}
/**
 * @public
 *
 * The output of {@link GetTrustedAccessProgramCommand}.
 */
export interface GetTrustedAccessProgramCommandOutput extends GetTrustedAccessProgramResponse, __MetadataBearer {}

/**
 * <p>Gets trusted access program details and resolves participation for your account and its current organization. If you specify a project, Amazon Bedrock resolves participation for the project, including inheritance from the account and organization. Archived projects remain readable until they expire. Returns the same flat summary as a ListTrustedAccessPrograms item. An absent or invisible program returns ResourceNotFoundException.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetTrustedAccessProgramCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetTrustedAccessProgramCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetTrustedAccessProgramRequest
 *   programIdentifier: "STRING_VALUE", // required
 *   projectIdentifier: "STRING_VALUE",
 * };
 * const command = new GetTrustedAccessProgramCommand(input);
 * const response = await client.send(command);
 * // { // GetTrustedAccessProgramResponse
 * //   programId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE", // required
 * //   providerName: "STRING_VALUE", // required
 * //   detailsUrl: "STRING_VALUE", // required
 * //   enrollmentUrl: "STRING_VALUE",
 * //   status: "requestable" || "eligible" || "enabled" || "disabled" || "revoked", // required
 * //   statusReason: "STRING_VALUE",
 * //   source: "organization" || "account" || "project" || "program_default", // required
 * //   eligibilityScope: "organization" || "account" || "project" || "program_default",
 * //   resolvedFor: { // TrustedAccessResolutionContext
 * //     accountId: "STRING_VALUE", // required
 * //     projectArn: "STRING_VALUE",
 * //   },
 * //   optIn: "inherit" || "enabled" || "disabled", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetTrustedAccessProgramCommandInput - {@link GetTrustedAccessProgramCommandInput}
 * @returns {@link GetTrustedAccessProgramCommandOutput}
 * @see {@link GetTrustedAccessProgramCommandInput} for command's `input` shape.
 * @see {@link GetTrustedAccessProgramCommandOutput} for command's `response` shape.
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
export class GetTrustedAccessProgramCommand extends command<GetTrustedAccessProgramCommandInput, GetTrustedAccessProgramCommandOutput>(
  _ep0,
  _mw0,
  "GetTrustedAccessProgram",
  GetTrustedAccessProgram$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrustedAccessProgramRequest;
      output: GetTrustedAccessProgramResponse;
    };
    sdk: {
      input: GetTrustedAccessProgramCommandInput;
      output: GetTrustedAccessProgramCommandOutput;
    };
  };
}
