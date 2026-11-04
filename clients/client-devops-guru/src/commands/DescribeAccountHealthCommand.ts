// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAccountHealthRequest, DescribeAccountHealthResponse } from "../models/models_0";
import { DescribeAccountHealth$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account.
 *
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
 *
 * You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal failure in an Amazon service occurred.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to a request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Contains information about data passed in to a field during a request that is not valid.
 *
 * @throws {@link DevOpsGuruServiceException}
 *
 * Base exception class for all service exceptions from DevOpsGuru service.
 *
 * @public
 */
export class DescribeAccountHealthCommand extends command<DescribeAccountHealthCommandInput, DescribeAccountHealthCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAccountHealth",
  DescribeAccountHealth$
) {
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
