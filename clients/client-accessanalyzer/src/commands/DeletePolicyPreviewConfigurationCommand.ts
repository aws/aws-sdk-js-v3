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
  DeletePolicyPreviewConfigurationRequest,
  DeletePolicyPreviewConfigurationResponse,
} from "../models/models_0";
import { DeletePolicyPreviewConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePolicyPreviewConfigurationCommand}.
 */
export interface DeletePolicyPreviewConfigurationCommandInput extends DeletePolicyPreviewConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeletePolicyPreviewConfigurationCommand}.
 */
export interface DeletePolicyPreviewConfigurationCommandOutput extends DeletePolicyPreviewConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes the policy preview configuration for your account. After deletion, IAM Access Analyzer will stop collecting CloudTrail authorization events for policy preview analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, DeletePolicyPreviewConfigurationCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, DeletePolicyPreviewConfigurationCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // DeletePolicyPreviewConfigurationRequest
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeletePolicyPreviewConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePolicyPreviewConfigurationCommandInput - {@link DeletePolicyPreviewConfigurationCommandInput}
 * @returns {@link DeletePolicyPreviewConfigurationCommandOutput}
 * @see {@link DeletePolicyPreviewConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyPreviewConfigurationCommandOutput} for command's `response` shape.
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
 * @example Successfully deleted policy preview configuration
 * ```javascript
 * //
 * const input = {
 *   clientToken: "unique-token-456"
 * };
 * const command = new DeletePolicyPreviewConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeletePolicyPreviewConfigurationCommand extends $Command
  .classBuilder<
    DeletePolicyPreviewConfigurationCommandInput,
    DeletePolicyPreviewConfigurationCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "DeletePolicyPreviewConfiguration", {})
  .n("AccessAnalyzerClient", "DeletePolicyPreviewConfigurationCommand")
  .sc(DeletePolicyPreviewConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePolicyPreviewConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeletePolicyPreviewConfigurationCommandInput;
      output: DeletePolicyPreviewConfigurationCommandOutput;
    };
  };
}
