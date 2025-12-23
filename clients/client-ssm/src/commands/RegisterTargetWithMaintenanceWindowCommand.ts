// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  RegisterTargetWithMaintenanceWindowRequest,
  RegisterTargetWithMaintenanceWindowResult,
} from "../models/models_1";
import { RegisterTargetWithMaintenanceWindow$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterTargetWithMaintenanceWindowCommand}.
 */
export interface RegisterTargetWithMaintenanceWindowCommandInput extends RegisterTargetWithMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link RegisterTargetWithMaintenanceWindowCommand}.
 */
export interface RegisterTargetWithMaintenanceWindowCommandOutput extends RegisterTargetWithMaintenanceWindowResult, __MetadataBearer {}

/**
 * <p>Registers a target with a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterTargetWithMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterTargetWithMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // RegisterTargetWithMaintenanceWindowRequest
 *   WindowId: "STRING_VALUE", // required
 *   ResourceType: "INSTANCE" || "RESOURCE_GROUP", // required
 *   Targets: [ // Targets // required
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   OwnerInformation: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new RegisterTargetWithMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // RegisterTargetWithMaintenanceWindowResult
 * //   WindowTargetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterTargetWithMaintenanceWindowCommandInput - {@link RegisterTargetWithMaintenanceWindowCommandInput}
 * @returns {@link RegisterTargetWithMaintenanceWindowCommandOutput}
 * @see {@link RegisterTargetWithMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link RegisterTargetWithMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link IdempotentParameterMismatch} (client fault)
 *  <p>Error returned when an idempotent operation is retried and the parameters don't match the
 *    original call to the API with the same idempotency token. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Error returned when the caller has exceeded the default resource quotas. For example, too
 *    many maintenance windows or patch baselines have been created.</p>
 *          <p>For information about resource quotas in Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class RegisterTargetWithMaintenanceWindowCommand extends $Command
  .classBuilder<
    RegisterTargetWithMaintenanceWindowCommandInput,
    RegisterTargetWithMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "RegisterTargetWithMaintenanceWindow", {})
  .n("SSMClient", "RegisterTargetWithMaintenanceWindowCommand")
  .sc(RegisterTargetWithMaintenanceWindow$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterTargetWithMaintenanceWindowRequest;
      output: RegisterTargetWithMaintenanceWindowResult;
    };
    sdk: {
      input: RegisterTargetWithMaintenanceWindowCommandInput;
      output: RegisterTargetWithMaintenanceWindowCommandOutput;
    };
  };
}
