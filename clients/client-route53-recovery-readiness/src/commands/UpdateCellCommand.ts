// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCellRequest, UpdateCellResponse } from "../models/models_0";
import { UpdateCell$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCellCommand}.
 */
export interface UpdateCellCommandInput extends UpdateCellRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCellCommand}.
 */
export interface UpdateCellCommandOutput extends UpdateCellResponse, __MetadataBearer {}

/**
 * <p>Updates a cell to replace the list of nested cells with a new list of nested cells.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, UpdateCellCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, UpdateCellCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // import type { Route53RecoveryReadinessClientConfig } from "@aws-sdk/client-route53-recovery-readiness";
 * const config = {}; // type is Route53RecoveryReadinessClientConfig
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // UpdateCellRequest
 *   CellName: "STRING_VALUE", // required
 *   Cells: [ // __listOf__string // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateCellCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCellResponse
 * //   CellArn: "STRING_VALUE",
 * //   CellName: "STRING_VALUE",
 * //   Cells: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   ParentReadinessScopes: [
 * //     "STRING_VALUE",
 * //   ],
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCellCommandInput - {@link UpdateCellCommandInput}
 * @returns {@link UpdateCellCommandOutput}
 * @see {@link UpdateCellCommandInput} for command's `input` shape.
 * @see {@link UpdateCellCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link Route53RecoveryReadinessServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryReadiness service.</p>
 *
 *
 * @public
 */
export class UpdateCellCommand extends command<UpdateCellCommandInput, UpdateCellCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCell",
  UpdateCell$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCellRequest;
      output: UpdateCellResponse;
    };
    sdk: {
      input: UpdateCellCommandInput;
      output: UpdateCellCommandOutput;
    };
  };
}
