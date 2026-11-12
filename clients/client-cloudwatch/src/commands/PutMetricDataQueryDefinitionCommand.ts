// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutMetricDataQueryDefinitionInput, PutMetricDataQueryDefinitionOutput } from "../models/models_0";
import { PutMetricDataQueryDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutMetricDataQueryDefinitionCommand}.
 */
export interface PutMetricDataQueryDefinitionCommandInput extends PutMetricDataQueryDefinitionInput {}
/**
 * @public
 *
 * The output of {@link PutMetricDataQueryDefinitionCommand}.
 */
export interface PutMetricDataQueryDefinitionCommandOutput extends PutMetricDataQueryDefinitionOutput, __MetadataBearer {}

/**
 * <p>Creates or updates a metric data query definition.</p>
 *          <p>A metric data query definition saves a metric query so that you can reuse it later.
 *             It includes the query expression, the query language, and a path that names the
 *             definition and can organize it into folders. When you save a definition,
 *                 CloudWatch doesn't validate or run its expression.</p>
 *          <p>To create a definition, omit <code>Id</code>. CloudWatch generates the ID and
 *             returns it. To update a definition, specify its <code>Id</code>. An update replaces the
 *             path, expression, and type, and keeps the creation time.</p>
 *          <p>The path must be unique in your account and Region. If another definition already
 *             uses the path, the request fails with a <code>ConflictException</code>.</p>
 *          <p>You can have up to 1,000 metric data query definitions in each Region of your
 *             account. A request that would create more fails with a
 *                 <code>LimitExceededException</code>.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>To create or update a definition, you need the
 *                 <code>cloudwatch:PutMetricDataQueryDefinition</code> permission on the metric data
 *             query definition resource. The resource ARN has the format
 *                 <code>arn:aws:cloudwatch:Region:account-id:metric-query-definition/Id</code>.</p>
 *          <p>To add tags when you create a definition, you also need the
 *                 <code>cloudwatch:TagResource</code> permission. You can use the
 *                 <code>aws:RequestTag/$\{TagKey\}</code> and <code>aws:TagKeys</code> condition keys
 *             to control which tags can be added.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutMetricDataQueryDefinitionCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutMetricDataQueryDefinitionCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // PutMetricDataQueryDefinitionInput
 *   Id: "STRING_VALUE",
 *   Path: "STRING_VALUE", // required
 *   Expression: "STRING_VALUE", // required
 *   Type: "PROMQL" || "SQL" || "METRIC_MATH", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutMetricDataQueryDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // PutMetricDataQueryDefinitionOutput
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
 * @param PutMetricDataQueryDefinitionCommandInput - {@link PutMetricDataQueryDefinitionCommandInput}
 * @returns {@link PutMetricDataQueryDefinitionCommandOutput}
 * @see {@link PutMetricDataQueryDefinitionCommandInput} for command's `input` shape.
 * @see {@link PutMetricDataQueryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation exceeded one or more limits.</p>
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
export class PutMetricDataQueryDefinitionCommand extends command<PutMetricDataQueryDefinitionCommandInput, PutMetricDataQueryDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "PutMetricDataQueryDefinition",
  PutMetricDataQueryDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMetricDataQueryDefinitionInput;
      output: PutMetricDataQueryDefinitionOutput;
    };
    sdk: {
      input: PutMetricDataQueryDefinitionCommandInput;
      output: PutMetricDataQueryDefinitionCommandOutput;
    };
  };
}
