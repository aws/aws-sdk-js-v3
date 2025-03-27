// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRecoveryGroupRequest, GetRecoveryGroupResponse } from "../models/models_0";
import { de_GetRecoveryGroupCommand, se_GetRecoveryGroupCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link GetRecoveryGroupCommand}.
 */
export interface GetRecoveryGroupCommandInput extends GetRecoveryGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetRecoveryGroupCommand}.
 */
export interface GetRecoveryGroupCommandOutput extends GetRecoveryGroupResponse, __MetadataBearer {}

/**
 * <p>Gets details about a recovery group, including a list of the cells that are included in it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, GetRecoveryGroupCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, GetRecoveryGroupCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // GetRecoveryGroupRequest
 *   RecoveryGroupName: "STRING_VALUE", // required
 * };
 * const command = new GetRecoveryGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetRecoveryGroupResponse
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
 * @param GetRecoveryGroupCommandInput - {@link GetRecoveryGroupCommandInput}
 * @returns {@link GetRecoveryGroupCommandOutput}
 * @see {@link GetRecoveryGroupCommandInput} for command's `input` shape.
 * @see {@link GetRecoveryGroupCommandOutput} for command's `response` shape.
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
export class GetRecoveryGroupCommand extends $Command
  .classBuilder<
    GetRecoveryGroupCommandInput,
    GetRecoveryGroupCommandOutput,
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
  .s("Route53RecoveryReadiness", "GetRecoveryGroup", {})
  .n("Route53RecoveryReadinessClient", "GetRecoveryGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetRecoveryGroupCommand)
  .de(de_GetRecoveryGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecoveryGroupRequest;
      output: GetRecoveryGroupResponse;
    };
    sdk: {
      input: GetRecoveryGroupCommandInput;
      output: GetRecoveryGroupCommandOutput;
    };
  };
}
