// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDashboardsInput, DeleteDashboardsOutput } from "../models/models_0";
import { DeleteDashboards$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDashboardsCommand}.
 */
export interface DeleteDashboardsCommandInput extends DeleteDashboardsInput {}
/**
 * @public
 *
 * The output of {@link DeleteDashboardsCommand}.
 */
export interface DeleteDashboardsCommandOutput extends DeleteDashboardsOutput, __MetadataBearer {}

/**
 * Deletes all dashboards that you specify. You can specify up to 100 dashboards to delete. If there is an error during this call, the operation attempts to delete as many dashboards as possible.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteDashboardsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteDashboardsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // DeleteDashboardsInput
 *   DashboardNames: [ // DashboardNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteDashboardsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDashboardsCommandInput - {@link DeleteDashboardsCommandInput}
 * @returns {@link DeleteDashboardsCommandOutput}
 * @see {@link DeleteDashboardsCommandInput} for command's `input` shape.
 * @see {@link DeleteDashboardsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation attempted to create a resource that already exists.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *
 * Request processing has failed due to some unknown error, exception, or failure.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of an input parameter is bad or out-of-range.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class DeleteDashboardsCommand extends command<DeleteDashboardsCommandInput, DeleteDashboardsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDashboards",
  DeleteDashboards$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDashboardsInput;
      output: {};
    };
    sdk: {
      input: DeleteDashboardsCommandInput;
      output: DeleteDashboardsCommandOutput;
    };
  };
}
