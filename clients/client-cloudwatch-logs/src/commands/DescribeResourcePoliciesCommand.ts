// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeResourcePoliciesRequest, DescribeResourcePoliciesResponse } from "../models/models_0";
import { DescribeResourcePolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeResourcePoliciesCommand}.
 */
export interface DescribeResourcePoliciesCommandInput extends DescribeResourcePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourcePoliciesCommand}.
 */
export interface DescribeResourcePoliciesCommandOutput extends DescribeResourcePoliciesResponse, __MetadataBearer {}

/**
 * Lists the resource policies in this account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeResourcePoliciesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeResourcePoliciesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeResourcePoliciesRequest
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 *   resourceArn: "STRING_VALUE",
 *   policyScope: "ACCOUNT" || "RESOURCE",
 * };
 * const command = new DescribeResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourcePoliciesResponse
 * //   resourcePolicies: [ // ResourcePolicies
 * //     { // ResourcePolicy
 * //       policyName: "STRING_VALUE",
 * //       policyDocument: "STRING_VALUE",
 * //       lastUpdatedTime: Number("long"),
 * //       policyScope: "ACCOUNT" || "RESOURCE",
 * //       resourceArn: "STRING_VALUE",
 * //       revisionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeResourcePoliciesCommandInput - {@link DescribeResourcePoliciesCommandInput}
 * @returns {@link DescribeResourcePoliciesCommandOutput}
 * @see {@link DescribeResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class DescribeResourcePoliciesCommand extends command<DescribeResourcePoliciesCommandInput, DescribeResourcePoliciesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeResourcePolicies",
  DescribeResourcePolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourcePoliciesRequest;
      output: DescribeResourcePoliciesResponse;
    };
    sdk: {
      input: DescribeResourcePoliciesCommandInput;
      output: DescribeResourcePoliciesCommandOutput;
    };
  };
}
