// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAccountHealthRequest, DescribeAccountHealthResponse } from "../models/models_0";
import { DescribeAccountHealth } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountHealthCommand}.
 */
export interface DescribeAccountHealthCommandInput extends DescribeAccountHealthRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountHealthCommand}.
 */
export interface DescribeAccountHealthCommandOutput extends DescribeAccountHealthResponse, __MetadataBearer {}

/**
 * <p> Returns the number of open reactive insights, the number of open proactive insights,
 * 			and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the
 * 			health of operations in your Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeAccountHealthCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeAccountHealthCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = {};
 * const command = new DescribeAccountHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountHealthResponse
 * //   OpenReactiveInsights: Number("int"), // required
 * //   OpenProactiveInsights: Number("int"), // required
 * //   MetricsAnalyzed: Number("int"), // required
 * //   ResourceHours: Number("long"), // required
 * //   AnalyzedResourceCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeAccountHealthCommandInput - {@link DescribeAccountHealthCommandInput}
 * @returns {@link DescribeAccountHealthCommandOutput}
 * @see {@link DescribeAccountHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountHealthCommandOutput} for command's `response` shape.
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
export class DescribeAccountHealthCommand extends $Command
  .classBuilder<
    DescribeAccountHealthCommandInput,
    DescribeAccountHealthCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CapstoneControlPlaneService", "DescribeAccountHealth", {})
  .n("DevOpsGuruClient", "DescribeAccountHealthCommand")
  .sc(DescribeAccountHealth)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeAccountHealthResponse;
    };
    sdk: {
      input: DescribeAccountHealthCommandInput;
      output: DescribeAccountHealthCommandOutput;
    };
  };
}
