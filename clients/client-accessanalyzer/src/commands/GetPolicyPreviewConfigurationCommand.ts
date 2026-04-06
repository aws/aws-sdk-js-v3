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
import type { GetPolicyPreviewConfigurationRequest, GetPolicyPreviewConfigurationResponse } from "../models/models_0";
import { GetPolicyPreviewConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPolicyPreviewConfigurationCommand}.
 */
export interface GetPolicyPreviewConfigurationCommandInput extends GetPolicyPreviewConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetPolicyPreviewConfigurationCommand}.
 */
export interface GetPolicyPreviewConfigurationCommandOutput extends GetPolicyPreviewConfigurationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the policy preview configuration for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetPolicyPreviewConfigurationCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetPolicyPreviewConfigurationCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = {};
 * const command = new GetPolicyPreviewConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyPreviewConfigurationResponse
 * //   policyPreviewConfigurations: [ // PolicyPreviewConfigurationList
 * //     { // PolicyPreviewConfiguration
 * //       scope: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPolicyPreviewConfigurationCommandInput - {@link GetPolicyPreviewConfigurationCommandInput}
 * @returns {@link GetPolicyPreviewConfigurationCommandOutput}
 * @see {@link GetPolicyPreviewConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetPolicyPreviewConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
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
 * @example Successfully retrieved policy preview configuration
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new GetPolicyPreviewConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   policyPreviewConfigurations: [
 *     {
 *       createdAt: "2023-05-01T10:00:00Z",
 *       scope: "GLOBAL",
 *       status: "ACTIVE",
 *       updatedAt: "2023-05-01T10:30:00Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetPolicyPreviewConfigurationCommand extends $Command
  .classBuilder<
    GetPolicyPreviewConfigurationCommandInput,
    GetPolicyPreviewConfigurationCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "GetPolicyPreviewConfiguration", {})
  .n("AccessAnalyzerClient", "GetPolicyPreviewConfigurationCommand")
  .sc(GetPolicyPreviewConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetPolicyPreviewConfigurationResponse;
    };
    sdk: {
      input: GetPolicyPreviewConfigurationCommandInput;
      output: GetPolicyPreviewConfigurationCommandOutput;
    };
  };
}
