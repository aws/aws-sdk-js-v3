// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCellRequest, UpdateCellResponse } from "../models/models_0";
import { de_UpdateCellCommand, se_UpdateCellCommand } from "../protocols/Aws_restJson1";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class UpdateCellCommand extends $Command
  .classBuilder<
    UpdateCellCommandInput,
    UpdateCellCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53RecoveryReadiness", "UpdateCell", {})
  .n("Route53RecoveryReadinessClient", "UpdateCellCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCellCommand)
  .de(de_UpdateCellCommand)
  .build() {
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
