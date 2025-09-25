// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeOrganizationOverviewRequest, DescribeOrganizationOverviewResponse } from "../models/models_0";
import { DescribeOrganizationOverview } from "../schemas/schemas_1_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationOverviewCommand}.
 */
export interface DescribeOrganizationOverviewCommandInput extends DescribeOrganizationOverviewRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationOverviewCommand}.
 */
export interface DescribeOrganizationOverviewCommandOutput
  extends DescribeOrganizationOverviewResponse,
    __MetadataBearer {}

/**
 * <p>Returns an overview of your organization's history based on the specified time range.
 * 			The overview includes the total reactive and proactive insights.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeOrganizationOverviewCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeOrganizationOverviewCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // DescribeOrganizationOverviewRequest
 *   FromTime: new Date("TIMESTAMP"), // required
 *   ToTime: new Date("TIMESTAMP"),
 *   AccountIds: [ // AccountIdList
 *     "STRING_VALUE",
 *   ],
 *   OrganizationalUnitIds: [ // OrganizationalUnitIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeOrganizationOverviewCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationOverviewResponse
 * //   ReactiveInsights: Number("int"), // required
 * //   ProactiveInsights: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationOverviewCommandInput - {@link DescribeOrganizationOverviewCommandInput}
 * @returns {@link DescribeOrganizationOverviewCommandOutput}
 * @see {@link DescribeOrganizationOverviewCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationOverviewCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 *
 * @public
 */
export class DescribeOrganizationOverviewCommand extends $Command
  .classBuilder<
    DescribeOrganizationOverviewCommandInput,
    DescribeOrganizationOverviewCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CapstoneControlPlaneService", "DescribeOrganizationOverview", {})
  .n("DevOpsGuruClient", "DescribeOrganizationOverviewCommand")
  .sc(DescribeOrganizationOverview)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOrganizationOverviewRequest;
      output: DescribeOrganizationOverviewResponse;
    };
    sdk: {
      input: DescribeOrganizationOverviewCommandInput;
      output: DescribeOrganizationOverviewCommandOutput;
    };
  };
}
