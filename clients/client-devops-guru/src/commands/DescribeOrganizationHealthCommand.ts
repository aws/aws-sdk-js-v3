// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeOrganizationHealthRequest, DescribeOrganizationHealthResponse } from "../models/models_0";
import { de_DescribeOrganizationHealthCommand, se_DescribeOrganizationHealthCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationHealthCommand}.
 */
export interface DescribeOrganizationHealthCommandInput extends DescribeOrganizationHealthRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationHealthCommand}.
 */
export interface DescribeOrganizationHealthCommandOutput extends DescribeOrganizationHealthResponse, __MetadataBearer {}

/**
 * <p>Returns active insights, predictive insights, and resource hours analyzed in last
 * 			hour.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeOrganizationHealthCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeOrganizationHealthCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // DescribeOrganizationHealthRequest
 *   AccountIds: [ // AccountIdList
 *     "STRING_VALUE",
 *   ],
 *   OrganizationalUnitIds: [ // OrganizationalUnitIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeOrganizationHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationHealthResponse
 * //   OpenReactiveInsights: Number("int"), // required
 * //   OpenProactiveInsights: Number("int"), // required
 * //   MetricsAnalyzed: Number("int"), // required
 * //   ResourceHours: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationHealthCommandInput - {@link DescribeOrganizationHealthCommandInput}
 * @returns {@link DescribeOrganizationHealthCommandOutput}
 * @see {@link DescribeOrganizationHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationHealthCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeOrganizationHealthCommand extends $Command
  .classBuilder<
    DescribeOrganizationHealthCommandInput,
    DescribeOrganizationHealthCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CapstoneControlPlaneService", "DescribeOrganizationHealth", {})
  .n("DevOpsGuruClient", "DescribeOrganizationHealthCommand")
  .f(void 0, void 0)
  .ser(se_DescribeOrganizationHealthCommand)
  .de(de_DescribeOrganizationHealthCommand)
  .build() {}
