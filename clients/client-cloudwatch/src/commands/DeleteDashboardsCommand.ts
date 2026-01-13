// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDashboardsInput, DeleteDashboardsOutput } from "../models/models_0";
import { DeleteDashboards$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes all dashboards that you specify. You can specify up to 100 dashboards to
 *             delete. If there is an error during this call, no dashboards are deleted.</p>
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
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link DashboardNotFoundError} (client fault)
 *  <p>The specified dashboard does not exist.</p>
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Request processing has failed due to some unknown error, exception, or
 *             failure.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class DeleteDashboardsCommand extends $Command
  .classBuilder<
    DeleteDashboardsCommandInput,
    DeleteDashboardsCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "DeleteDashboards", {})
  .n("CloudWatchClient", "DeleteDashboardsCommand")
  .sc(DeleteDashboards$)
  .build() {
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
