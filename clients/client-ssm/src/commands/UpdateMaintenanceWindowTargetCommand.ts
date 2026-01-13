// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateMaintenanceWindowTargetRequest, UpdateMaintenanceWindowTargetResult } from "../models/models_1";
import { UpdateMaintenanceWindowTarget$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMaintenanceWindowTargetCommand}.
 */
export interface UpdateMaintenanceWindowTargetCommandInput extends UpdateMaintenanceWindowTargetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMaintenanceWindowTargetCommand}.
 */
export interface UpdateMaintenanceWindowTargetCommandOutput extends UpdateMaintenanceWindowTargetResult, __MetadataBearer {}

/**
 * <p>Modifies the target of an existing maintenance window. You
 *    can change the following:</p>
 *          <ul>
 *             <li>
 *                <p>Name</p>
 *             </li>
 *             <li>
 *                <p>Description</p>
 *             </li>
 *             <li>
 *                <p>Owner</p>
 *             </li>
 *             <li>
 *                <p>IDs for an ID target</p>
 *             </li>
 *             <li>
 *                <p>Tags for a Tag target</p>
 *             </li>
 *             <li>
 *                <p>From any supported tag type to another. The three supported tag types are ID target, Tag
 *      target, and resource group. For more information, see <a>Target</a>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If a parameter is null, then the corresponding field isn't modified.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateMaintenanceWindowTargetCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateMaintenanceWindowTargetCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // UpdateMaintenanceWindowTargetRequest
 *   WindowId: "STRING_VALUE", // required
 *   WindowTargetId: "STRING_VALUE", // required
 *   Targets: [ // Targets
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
 *   Replace: true || false,
 * };
 * const command = new UpdateMaintenanceWindowTargetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMaintenanceWindowTargetResult
 * //   WindowId: "STRING_VALUE",
 * //   WindowTargetId: "STRING_VALUE",
 * //   Targets: [ // Targets
 * //     { // Target
 * //       Key: "STRING_VALUE",
 * //       Values: [ // TargetValues
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   OwnerInformation: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMaintenanceWindowTargetCommandInput - {@link UpdateMaintenanceWindowTargetCommandInput}
 * @returns {@link UpdateMaintenanceWindowTargetCommandOutput}
 * @see {@link UpdateMaintenanceWindowTargetCommandInput} for command's `input` shape.
 * @see {@link UpdateMaintenanceWindowTargetCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class UpdateMaintenanceWindowTargetCommand extends $Command
  .classBuilder<
    UpdateMaintenanceWindowTargetCommandInput,
    UpdateMaintenanceWindowTargetCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "UpdateMaintenanceWindowTarget", {})
  .n("SSMClient", "UpdateMaintenanceWindowTargetCommand")
  .sc(UpdateMaintenanceWindowTarget$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMaintenanceWindowTargetRequest;
      output: UpdateMaintenanceWindowTargetResult;
    };
    sdk: {
      input: UpdateMaintenanceWindowTargetCommandInput;
      output: UpdateMaintenanceWindowTargetCommandOutput;
    };
  };
}
