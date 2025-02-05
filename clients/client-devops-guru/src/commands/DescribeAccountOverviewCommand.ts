// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAccountOverviewRequest, DescribeAccountOverviewResponse } from "../models/models_0";
import { de_DescribeAccountOverviewCommand, se_DescribeAccountOverviewCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountOverviewCommand}.
 */
export interface DescribeAccountOverviewCommandInput extends DescribeAccountOverviewRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountOverviewCommand}.
 */
export interface DescribeAccountOverviewCommandOutput extends DescribeAccountOverviewResponse, __MetadataBearer {}

/**
 * <p> For the time range passed in, returns the number of open reactive insight that were
 * 			created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all
 * 			closed reactive insights. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeAccountOverviewCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeAccountOverviewCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DevOpsGuruClient(config);
 * const input = { // DescribeAccountOverviewRequest
 *   FromTime: new Date("TIMESTAMP"), // required
 *   ToTime: new Date("TIMESTAMP"),
 * };
 * const command = new DescribeAccountOverviewCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountOverviewResponse
 * //   ReactiveInsights: Number("int"), // required
 * //   ProactiveInsights: Number("int"), // required
 * //   MeanTimeToRecoverInMilliseconds: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param DescribeAccountOverviewCommandInput - {@link DescribeAccountOverviewCommandInput}
 * @returns {@link DescribeAccountOverviewCommandOutput}
 * @see {@link DescribeAccountOverviewCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountOverviewCommandOutput} for command's `response` shape.
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
export class DescribeAccountOverviewCommand extends $Command
  .classBuilder<
    DescribeAccountOverviewCommandInput,
    DescribeAccountOverviewCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CapstoneControlPlaneService", "DescribeAccountOverview", {})
  .n("DevOpsGuruClient", "DescribeAccountOverviewCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAccountOverviewCommand)
  .de(de_DescribeAccountOverviewCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccountOverviewRequest;
      output: DescribeAccountOverviewResponse;
    };
    sdk: {
      input: DescribeAccountOverviewCommandInput;
      output: DescribeAccountOverviewCommandOutput;
    };
  };
}
