// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRecoveryGroupRequest, CreateRecoveryGroupResponse } from "../models/models_0";
import { de_CreateRecoveryGroupCommand, se_CreateRecoveryGroupCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link CreateRecoveryGroupCommand}.
 */
export interface CreateRecoveryGroupCommandInput extends CreateRecoveryGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecoveryGroupCommand}.
 */
export interface CreateRecoveryGroupCommandOutput extends CreateRecoveryGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a recovery group in an account. A recovery group corresponds to an application and includes a list of the cells that make up the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, CreateRecoveryGroupCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, CreateRecoveryGroupCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // import type { Route53RecoveryReadinessClientConfig } from "@aws-sdk/client-route53-recovery-readiness";
 * const config = {}; // type is Route53RecoveryReadinessClientConfig
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // CreateRecoveryGroupRequest
 *   Cells: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   RecoveryGroupName: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRecoveryGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateRecoveryGroupResponse
 * //   Cells: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   RecoveryGroupArn: "STRING_VALUE",
 * //   RecoveryGroupName: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRecoveryGroupCommandInput - {@link CreateRecoveryGroupCommandInput}
 * @returns {@link CreateRecoveryGroupCommandOutput}
 * @see {@link CreateRecoveryGroupCommandInput} for command's `input` shape.
 * @see {@link CreateRecoveryGroupCommandOutput} for command's `response` shape.
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
export class CreateRecoveryGroupCommand extends $Command
  .classBuilder<
    CreateRecoveryGroupCommandInput,
    CreateRecoveryGroupCommandOutput,
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
  .s("Route53RecoveryReadiness", "CreateRecoveryGroup", {})
  .n("Route53RecoveryReadinessClient", "CreateRecoveryGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateRecoveryGroupCommand)
  .de(de_CreateRecoveryGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRecoveryGroupRequest;
      output: CreateRecoveryGroupResponse;
    };
    sdk: {
      input: CreateRecoveryGroupCommandInput;
      output: CreateRecoveryGroupCommandOutput;
    };
  };
}
