// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import type {
  GetFindingsPublicationConfigurationRequest,
  GetFindingsPublicationConfigurationResponse,
} from "../models/models_0";
import { GetFindingsPublicationConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingsPublicationConfigurationCommand}.
 */
export interface GetFindingsPublicationConfigurationCommandInput extends GetFindingsPublicationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingsPublicationConfigurationCommand}.
 */
export interface GetFindingsPublicationConfigurationCommandOutput extends GetFindingsPublicationConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the configuration settings for publishing findings to Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetFindingsPublicationConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetFindingsPublicationConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = {};
 * const command = new GetFindingsPublicationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingsPublicationConfigurationResponse
 * //   securityHubConfiguration: { // SecurityHubConfiguration
 * //     publishClassificationFindings: true || false, // required
 * //     publishPolicyFindings: true || false, // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFindingsPublicationConfigurationCommandInput - {@link GetFindingsPublicationConfigurationCommandInput}
 * @returns {@link GetFindingsPublicationConfigurationCommandOutput}
 * @see {@link GetFindingsPublicationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetFindingsPublicationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class GetFindingsPublicationConfigurationCommand extends $Command
  .classBuilder<
    GetFindingsPublicationConfigurationCommandInput,
    GetFindingsPublicationConfigurationCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "GetFindingsPublicationConfiguration", {})
  .n("Macie2Client", "GetFindingsPublicationConfigurationCommand")
  .sc(GetFindingsPublicationConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetFindingsPublicationConfigurationResponse;
    };
    sdk: {
      input: GetFindingsPublicationConfigurationCommandInput;
      output: GetFindingsPublicationConfigurationCommandOutput;
    };
  };
}
