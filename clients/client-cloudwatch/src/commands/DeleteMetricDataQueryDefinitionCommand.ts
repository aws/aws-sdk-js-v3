// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMetricDataQueryDefinitionInput, DeleteMetricDataQueryDefinitionOutput } from "../models/models_0";
import { DeleteMetricDataQueryDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMetricDataQueryDefinitionCommand}.
 */
export interface DeleteMetricDataQueryDefinitionCommandInput extends DeleteMetricDataQueryDefinitionInput {}
/**
 * @public
 *
 * The output of {@link DeleteMetricDataQueryDefinitionCommand}.
 */
export interface DeleteMetricDataQueryDefinitionCommandOutput extends DeleteMetricDataQueryDefinitionOutput, __MetadataBearer {}

/**
 * <p>Deletes a metric data query definition.</p>
 *          <p>This operation is idempotent. If the definition doesn't exist, the operation succeeds
 *             without returning an error.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>To delete a definition, you need the
 *                 <code>cloudwatch:DeleteMetricDataQueryDefinition</code> permission on the metric
 *             data query definition resource. You can use the <code>aws:ResourceTag/$\{TagKey\}</code>
 *             condition key to control access based on the tags of the definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteMetricDataQueryDefinitionCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteMetricDataQueryDefinitionCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // DeleteMetricDataQueryDefinitionInput
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteMetricDataQueryDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMetricDataQueryDefinitionCommandInput - {@link DeleteMetricDataQueryDefinitionCommandInput}
 * @returns {@link DeleteMetricDataQueryDefinitionCommandOutput}
 * @see {@link DeleteMetricDataQueryDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteMetricDataQueryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class DeleteMetricDataQueryDefinitionCommand extends command<DeleteMetricDataQueryDefinitionCommandInput, DeleteMetricDataQueryDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMetricDataQueryDefinition",
  DeleteMetricDataQueryDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMetricDataQueryDefinitionInput;
      output: {};
    };
    sdk: {
      input: DeleteMetricDataQueryDefinitionCommandInput;
      output: DeleteMetricDataQueryDefinitionCommandOutput;
    };
  };
}
