// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDashboardRequest, DeleteDashboardResponse } from "../models/models_0";
import { DeleteDashboard$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDashboardCommand}.
 */
export interface DeleteDashboardCommandInput extends DeleteDashboardRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDashboardCommand}.
 */
export interface DeleteDashboardCommandOutput extends DeleteDashboardResponse, __MetadataBearer {}

/**
 * <p>
 * Deletes the specified dashboard. You cannot delete a dashboard that has termination protection enabled.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DeleteDashboardCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, DeleteDashboardCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // DeleteDashboardRequest
 *   DashboardId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDashboardCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDashboardCommandInput - {@link DeleteDashboardCommandInput}
 * @returns {@link DeleteDashboardCommandOutput}
 * @see {@link DeleteDashboardCommandInput} for command's `input` shape.
 * @see {@link DeleteDashboardCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when the specified resource is not ready for an operation. This
 *          can occur when you try to run an operation on a resource before CloudTrail has time
 *          to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the
 *          operation again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the specified resource is not found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class DeleteDashboardCommand extends command<DeleteDashboardCommandInput, DeleteDashboardCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDashboard",
  DeleteDashboard$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDashboardRequest;
      output: {};
    };
    sdk: {
      input: DeleteDashboardCommandInput;
      output: DeleteDashboardCommandOutput;
    };
  };
}
