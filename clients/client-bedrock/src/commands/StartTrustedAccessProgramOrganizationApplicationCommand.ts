// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartTrustedAccessProgramOrganizationApplicationRequest,
  StartTrustedAccessProgramOrganizationApplicationResponse,
} from "../models/models_1";
import { StartTrustedAccessProgramOrganizationApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartTrustedAccessProgramOrganizationApplicationCommand}.
 */
export interface StartTrustedAccessProgramOrganizationApplicationCommandInput extends StartTrustedAccessProgramOrganizationApplicationRequest {}
/**
 * @public
 *
 * The output of {@link StartTrustedAccessProgramOrganizationApplicationCommand}.
 */
export interface StartTrustedAccessProgramOrganizationApplicationCommandOutput extends StartTrustedAccessProgramOrganizationApplicationResponse, __MetadataBearer {}

/**
 * <p>Prepare a provider application handoff for the calling account's current organization. Requires operation permission and management-account or Bedrock-specific delegated-administrator authority. This does not submit an application, grant eligibility, or change enrollment. Programs without self-service applications return ValidationException with guidance to contact the AWS account team. Repeated calls can issue fresh tokens. Successful responses use Cache-Control: no-store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, StartTrustedAccessProgramOrganizationApplicationCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, StartTrustedAccessProgramOrganizationApplicationCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // StartTrustedAccessProgramOrganizationApplicationRequest
 *   programIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StartTrustedAccessProgramOrganizationApplicationCommand(input);
 * const response = await client.send(command);
 * // { // StartTrustedAccessProgramOrganizationApplicationResponse
 * //   result: { // TrustedAccessProgramApplicationResult Union: only one key present
 * //     providerHandoff: { // TrustedAccessProgramProviderHandoff
 * //       enrollmentUrl: "STRING_VALUE",
 * //       applicationToken: "STRING_VALUE", // required
 * //       applicationTokenExpiresAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartTrustedAccessProgramOrganizationApplicationCommandInput - {@link StartTrustedAccessProgramOrganizationApplicationCommandInput}
 * @returns {@link StartTrustedAccessProgramOrganizationApplicationCommandOutput}
 * @see {@link StartTrustedAccessProgramOrganizationApplicationCommandInput} for command's `input` shape.
 * @see {@link StartTrustedAccessProgramOrganizationApplicationCommandOutput} for command's `response` shape.
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
export class StartTrustedAccessProgramOrganizationApplicationCommand extends command<StartTrustedAccessProgramOrganizationApplicationCommandInput, StartTrustedAccessProgramOrganizationApplicationCommandOutput>(
  _ep0,
  _mw0,
  "StartTrustedAccessProgramOrganizationApplication",
  StartTrustedAccessProgramOrganizationApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTrustedAccessProgramOrganizationApplicationRequest;
      output: StartTrustedAccessProgramOrganizationApplicationResponse;
    };
    sdk: {
      input: StartTrustedAccessProgramOrganizationApplicationCommandInput;
      output: StartTrustedAccessProgramOrganizationApplicationCommandOutput;
    };
  };
}
