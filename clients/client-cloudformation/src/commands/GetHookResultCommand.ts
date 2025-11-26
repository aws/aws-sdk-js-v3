// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetHookResultInput, GetHookResultOutput } from "../models/models_0";
import { GetHookResult } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHookResultCommand}.
 */
export interface GetHookResultCommandInput extends GetHookResultInput {}
/**
 * @public
 *
 * The output of {@link GetHookResultCommand}.
 */
export interface GetHookResultCommandOutput extends GetHookResultOutput, __MetadataBearer {}

/**
 * <p>Retrieves detailed information and remediation guidance for a Hook invocation
 *       result.</p>
 *          <p>If the Hook uses a KMS key to encrypt annotations, callers of the
 *         <code>GetHookResult</code> operation must have <code>kms:Decrypt</code> permissions. For
 *       more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-kms-key-policy.html">KMS key policy
 *         and permissions for encrypting CloudFormation Hooks results at rest</a> in the
 *         <i>CloudFormation Hooks User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, GetHookResultCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, GetHookResultCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // GetHookResultInput
 *   HookResultId: "STRING_VALUE",
 * };
 * const command = new GetHookResultCommand(input);
 * const response = await client.send(command);
 * // { // GetHookResultOutput
 * //   HookResultId: "STRING_VALUE",
 * //   InvocationPoint: "PRE_PROVISION",
 * //   FailureMode: "FAIL" || "WARN",
 * //   TypeName: "STRING_VALUE",
 * //   OriginalTypeName: "STRING_VALUE",
 * //   TypeVersionId: "STRING_VALUE",
 * //   TypeConfigurationVersionId: "STRING_VALUE",
 * //   TypeArn: "STRING_VALUE",
 * //   Status: "HOOK_IN_PROGRESS" || "HOOK_COMPLETE_SUCCEEDED" || "HOOK_COMPLETE_FAILED" || "HOOK_FAILED",
 * //   HookStatusReason: "STRING_VALUE",
 * //   InvokedAt: new Date("TIMESTAMP"),
 * //   Target: { // HookTarget
 * //     TargetType: "RESOURCE", // required
 * //     TargetTypeName: "STRING_VALUE", // required
 * //     TargetId: "STRING_VALUE", // required
 * //     Action: "CREATE" || "UPDATE" || "DELETE" || "IMPORT", // required
 * //   },
 * //   Annotations: [ // AnnotationList
 * //     { // Annotation
 * //       AnnotationName: "STRING_VALUE",
 * //       Status: "PASSED" || "FAILED" || "SKIPPED",
 * //       StatusMessage: "STRING_VALUE",
 * //       RemediationMessage: "STRING_VALUE",
 * //       RemediationLink: "STRING_VALUE",
 * //       SeverityLevel: "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetHookResultCommandInput - {@link GetHookResultCommandInput}
 * @returns {@link GetHookResultCommandOutput}
 * @see {@link GetHookResultCommandInput} for command's `input` shape.
 * @see {@link GetHookResultCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link HookResultNotFoundException} (client fault)
 *  <p>The specified target doesn't have any requested Hook invocations.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class GetHookResultCommand extends $Command
  .classBuilder<
    GetHookResultCommandInput,
    GetHookResultCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "GetHookResult", {})
  .n("CloudFormationClient", "GetHookResultCommand")
  .sc(GetHookResult)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHookResultInput;
      output: GetHookResultOutput;
    };
    sdk: {
      input: GetHookResultCommandInput;
      output: GetHookResultCommandOutput;
    };
  };
}
