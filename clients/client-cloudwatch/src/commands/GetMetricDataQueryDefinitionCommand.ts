// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMetricDataQueryDefinitionInput, GetMetricDataQueryDefinitionOutput } from "../models/models_0";
import { GetMetricDataQueryDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMetricDataQueryDefinitionCommand}.
 */
export interface GetMetricDataQueryDefinitionCommandInput extends GetMetricDataQueryDefinitionInput {}
/**
 * @public
 *
 * The output of {@link GetMetricDataQueryDefinitionCommand}.
 */
export interface GetMetricDataQueryDefinitionCommandOutput extends GetMetricDataQueryDefinitionOutput, __MetadataBearer {}

/**
 * <p>Returns a metric data query definition, including its expression.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>To get a definition, you need the
 *                 <code>cloudwatch:GetMetricDataQueryDefinition</code> permission on the metric data
 *             query definition resource. You can use the <code>aws:ResourceTag/$\{TagKey\}</code>
 *             condition key to control access based on the tags of the definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricDataQueryDefinitionCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricDataQueryDefinitionCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // GetMetricDataQueryDefinitionInput
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetMetricDataQueryDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricDataQueryDefinitionOutput
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Path: "STRING_VALUE", // required
 * //   Expression: "STRING_VALUE", // required
 * //   Type: "PROMQL" || "SQL" || "METRIC_MATH", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   UpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetMetricDataQueryDefinitionCommandInput - {@link GetMetricDataQueryDefinitionCommandInput}
 * @returns {@link GetMetricDataQueryDefinitionCommandOutput}
 * @see {@link GetMetricDataQueryDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetMetricDataQueryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class GetMetricDataQueryDefinitionCommand extends command<GetMetricDataQueryDefinitionCommandInput, GetMetricDataQueryDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "GetMetricDataQueryDefinition",
  GetMetricDataQueryDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMetricDataQueryDefinitionInput;
      output: GetMetricDataQueryDefinitionOutput;
    };
    sdk: {
      input: GetMetricDataQueryDefinitionCommandInput;
      output: GetMetricDataQueryDefinitionCommandOutput;
    };
  };
}
