// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCellRequest, CreateCellResponse } from "../models/models_0";
import { de_CreateCellCommand, se_CreateCellCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link CreateCellCommand}.
 */
export interface CreateCellCommandInput extends CreateCellRequest {}
/**
 * @public
 *
 * The output of {@link CreateCellCommand}.
 */
export interface CreateCellCommandOutput extends CreateCellResponse, __MetadataBearer {}

/**
 * <p>Creates a cell in an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, CreateCellCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, CreateCellCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // CreateCellRequest
 *   CellName: "STRING_VALUE", // required
 *   Cells: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCellCommand(input);
 * const response = await client.send(command);
 * // { // CreateCellResponse
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
 * @param CreateCellCommandInput - {@link CreateCellCommandInput}
 * @returns {@link CreateCellCommandOutput}
 * @see {@link CreateCellCommandInput} for command's `input` shape.
 * @see {@link CreateCellCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred.
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
export class CreateCellCommand extends $Command
  .classBuilder<
    CreateCellCommandInput,
    CreateCellCommandOutput,
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
  .s("Route53RecoveryReadiness", "CreateCell", {})
  .n("Route53RecoveryReadinessClient", "CreateCellCommand")
  .f(void 0, void 0)
  .ser(se_CreateCellCommand)
  .de(de_CreateCellCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCellRequest;
      output: CreateCellResponse;
    };
    sdk: {
      input: CreateCellCommandInput;
      output: CreateCellCommandOutput;
    };
  };
}
