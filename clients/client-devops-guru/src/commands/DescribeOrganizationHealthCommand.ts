// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeOrganizationHealthRequest, DescribeOrganizationHealthResponse } from "../models/models_0";
import { DescribeOrganizationHealth$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns active insights, predictive insights, and resource hours analyzed in last hour.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeOrganizationHealthCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeOrganizationHealthCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
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
export class DescribeOrganizationHealthCommand extends command<DescribeOrganizationHealthCommandInput, DescribeOrganizationHealthCommandOutput>(
  _ep0,
  _mw0,
  "DescribeOrganizationHealth",
  DescribeOrganizationHealth$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOrganizationHealthRequest;
      output: DescribeOrganizationHealthResponse;
    };
    sdk: {
      input: DescribeOrganizationHealthCommandInput;
      output: DescribeOrganizationHealthCommandOutput;
    };
  };
}
