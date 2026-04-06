// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AccessAnalyzerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreatePolicyPreviewConfigurationRequest,
  CreatePolicyPreviewConfigurationResponse,
} from "../models/models_0";
import { CreatePolicyPreviewConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePolicyPreviewConfigurationCommand}.
 */
export interface CreatePolicyPreviewConfigurationCommandInput extends CreatePolicyPreviewConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreatePolicyPreviewConfigurationCommand}.
 */
export interface CreatePolicyPreviewConfigurationCommandOutput extends CreatePolicyPreviewConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a policy preview configuration for your account. The configuration enables IAM Access Analyzer to collect and store CloudTrail authorization events needed for policy preview analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CreatePolicyPreviewConfigurationCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CreatePolicyPreviewConfigurationCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // CreatePolicyPreviewConfigurationRequest
 *   clientToken: "STRING_VALUE",
 *   scope: "STRING_VALUE",
 * };
 * const command = new CreatePolicyPreviewConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreatePolicyPreviewConfigurationResponse
 * //   status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreatePolicyPreviewConfigurationCommandInput - {@link CreatePolicyPreviewConfigurationCommandInput}
 * @returns {@link CreatePolicyPreviewConfigurationCommandOutput}
 * @see {@link CreatePolicyPreviewConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyPreviewConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quote met error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 *
 * @example Successfully created policy preview configuration
 * ```javascript
 * //
 * const input = {
 *   clientToken: "unique-token-123",
 *   scope: "GLOBAL"
 * };
 * const command = new CreatePolicyPreviewConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   status: "PENDING_CREATION"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreatePolicyPreviewConfigurationCommand extends $Command
  .classBuilder<
    CreatePolicyPreviewConfigurationCommandInput,
    CreatePolicyPreviewConfigurationCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "CreatePolicyPreviewConfiguration", {})
  .n("AccessAnalyzerClient", "CreatePolicyPreviewConfigurationCommand")
  .sc(CreatePolicyPreviewConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePolicyPreviewConfigurationRequest;
      output: CreatePolicyPreviewConfigurationResponse;
    };
    sdk: {
      input: CreatePolicyPreviewConfigurationCommandInput;
      output: CreatePolicyPreviewConfigurationCommandOutput;
    };
  };
}
