// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMaintenanceWindowTargetRequest, UpdateMaintenanceWindowTargetResult } from "../models/models_1";
import { UpdateMaintenanceWindowTarget$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Modifies the target of an existing maintenance window. You can change the following:
 *
 * - Name
 * - Description
 * - Owner
 * - IDs for an ID target
 * - Tags for a Tag target
 * - From any supported tag type to another. The three supported tag types are ID target, Tag target, and resource group. For more information, see Target.
 *
 * > **Note:** If a parameter is null, then the corresponding field isn't modified.
 *
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
 *
 * Error returned when the ID specified for a resource, such as a maintenance window or patch baseline, doesn't exist.
 *
 * For information about resource quotas in Amazon Web Services Systems Manager, see [Systems Manager service quotas](https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm) in the *Amazon Web Services General Reference*.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class UpdateMaintenanceWindowTargetCommand extends command<UpdateMaintenanceWindowTargetCommandInput, UpdateMaintenanceWindowTargetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMaintenanceWindowTarget",
  UpdateMaintenanceWindowTarget$
) {
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
