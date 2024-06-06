// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStackSetAutoDeploymentTargetsInput, ListStackSetAutoDeploymentTargetsOutput } from "../models/models_0";
import {
  de_ListStackSetAutoDeploymentTargetsCommand,
  se_ListStackSetAutoDeploymentTargetsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStackSetAutoDeploymentTargetsCommand}.
 */
export interface ListStackSetAutoDeploymentTargetsCommandInput extends ListStackSetAutoDeploymentTargetsInput {}
/**
 * @public
 *
 * The output of {@link ListStackSetAutoDeploymentTargetsCommand}.
 */
export interface ListStackSetAutoDeploymentTargetsCommandOutput
  extends ListStackSetAutoDeploymentTargetsOutput,
    __MetadataBearer {}

/**
 * <p>Returns summary information about deployment targets for a stack set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetAutoDeploymentTargetsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetAutoDeploymentTargetsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListStackSetAutoDeploymentTargetsInput
 *   StackSetName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new ListStackSetAutoDeploymentTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListStackSetAutoDeploymentTargetsOutput
 * //   Summaries: [ // StackSetAutoDeploymentTargetSummaries
 * //     { // StackSetAutoDeploymentTargetSummary
 * //       OrganizationalUnitId: "STRING_VALUE",
 * //       Regions: [ // RegionList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackSetAutoDeploymentTargetsCommandInput - {@link ListStackSetAutoDeploymentTargetsCommandInput}
 * @returns {@link ListStackSetAutoDeploymentTargetsCommandOutput}
 * @see {@link ListStackSetAutoDeploymentTargetsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetAutoDeploymentTargetsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified stack set doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class ListStackSetAutoDeploymentTargetsCommand extends $Command
  .classBuilder<
    ListStackSetAutoDeploymentTargetsCommandInput,
    ListStackSetAutoDeploymentTargetsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "ListStackSetAutoDeploymentTargets", {})
  .n("CloudFormationClient", "ListStackSetAutoDeploymentTargetsCommand")
  .f(void 0, void 0)
  .ser(se_ListStackSetAutoDeploymentTargetsCommand)
  .de(de_ListStackSetAutoDeploymentTargetsCommand)
  .build() {}
