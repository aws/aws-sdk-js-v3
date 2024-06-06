// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecoveryGroupsRequest, ListRecoveryGroupsResponse } from "../models/models_0";
import { de_ListRecoveryGroupsCommand, se_ListRecoveryGroupsCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link ListRecoveryGroupsCommand}.
 */
export interface ListRecoveryGroupsCommandInput extends ListRecoveryGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecoveryGroupsCommand}.
 */
export interface ListRecoveryGroupsCommandOutput extends ListRecoveryGroupsResponse, __MetadataBearer {}

/**
 * <p>Lists the recovery groups in an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, ListRecoveryGroupsCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, ListRecoveryGroupsCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // ListRecoveryGroupsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRecoveryGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecoveryGroupsResponse
 * //   NextToken: "STRING_VALUE",
 * //   RecoveryGroups: [ // __listOfRecoveryGroupOutput
 * //     { // RecoveryGroupOutput
 * //       Cells: [ // __listOf__string // required
 * //         "STRING_VALUE",
 * //       ],
 * //       RecoveryGroupArn: "STRING_VALUE", // required
 * //       RecoveryGroupName: "STRING_VALUE", // required
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRecoveryGroupsCommandInput - {@link ListRecoveryGroupsCommandInput}
 * @returns {@link ListRecoveryGroupsCommandOutput}
 * @see {@link ListRecoveryGroupsCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryGroupsCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
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
 * @public
 */
export class ListRecoveryGroupsCommand extends $Command
  .classBuilder<
    ListRecoveryGroupsCommandInput,
    ListRecoveryGroupsCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53RecoveryReadiness", "ListRecoveryGroups", {})
  .n("Route53RecoveryReadinessClient", "ListRecoveryGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListRecoveryGroupsCommand)
  .de(de_ListRecoveryGroupsCommand)
  .build() {}
