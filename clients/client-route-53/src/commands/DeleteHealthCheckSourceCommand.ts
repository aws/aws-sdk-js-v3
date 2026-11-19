// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import type { DeleteHealthCheckSourceRequest, DeleteHealthCheckSourceResponse } from "../models/models_0";
import { DeleteHealthCheckSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteHealthCheckSourceCommand}.
 */
export interface DeleteHealthCheckSourceCommandInput extends DeleteHealthCheckSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHealthCheckSourceCommand}.
 */
export interface DeleteHealthCheckSourceCommandOutput extends DeleteHealthCheckSourceResponse, __MetadataBearer {}

/**
 * <p>Deletes a health check source. Before you delete a health check source, delete or update any health checks that reference it. Otherwise, the request fails with <code>InvalidInput</code>. The request also fails with <code>InvalidInput</code> if the status of the health check source is <code>CREATE_PENDING</code> or <code>CREATE_IN_PROGRESS</code>. Wait until the status is <code>CREATE_COMPLETED</code> or <code>CREATE_FAILED</code>, and then try again.</p>
 *          <p>Route 53 deletes a health check source asynchronously, and the initial <code>HealthCheckSourceStatus</code> is <code>DELETE_PENDING</code>. Call <code>GetHealthCheckSource</code> to track progress. After the deletion completes, <code>GetHealthCheckSource</code> returns <code>NoSuchHealthCheckSource</code> and the health check source no longer appears in the results of <code>ListHealthCheckSources</code>. If you delete a health check source that is already deleted, the request fails with <code>NoSuchHealthCheckSource</code>.</p>
 *          <p>To use this operation, you must have the <code>route53:DeleteHealthCheckSource</code> permission. You must also have permission to create a service-linked role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteHealthCheckSourceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteHealthCheckSourceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // DeleteHealthCheckSourceRequest
 *   HealthCheckSourceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteHealthCheckSourceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteHealthCheckSourceResponse
 * //   HealthCheckSourceId: "STRING_VALUE", // required
 * //   HealthCheckSourceStatus: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_COMPLETED" || "CREATE_FAILED" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETED" || "DELETE_FAILED", // required
 * // };
 *
 * ```
 *
 * @param DeleteHealthCheckSourceCommandInput - {@link DeleteHealthCheckSourceCommandInput}
 * @returns {@link DeleteHealthCheckSourceCommandOutput}
 * @see {@link DeleteHealthCheckSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteHealthCheckSourceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHealthCheckSource} (client fault)
 *  <p>No health check source exists with the specified ID. Verify that the ID is correct and that the health check source hasn't been deleted.</p>
 *
 * @throws {@link PriorRequestNotComplete} (client fault)
 *  <p>If Amazon Route 53 can't process a request before the next request arrives, it will
 * 			reject subsequent requests for the same hosted zone and return an <code>HTTP 400
 * 				error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly
 * 			for the same request, we recommend that you wait, in intervals of increasing duration,
 * 			before you try the request again.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class DeleteHealthCheckSourceCommand extends command<DeleteHealthCheckSourceCommandInput, DeleteHealthCheckSourceCommandOutput>(
  _ep0,
  _mw2,
  "DeleteHealthCheckSource",
  DeleteHealthCheckSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHealthCheckSourceRequest;
      output: DeleteHealthCheckSourceResponse;
    };
    sdk: {
      input: DeleteHealthCheckSourceCommandInput;
      output: DeleteHealthCheckSourceCommandOutput;
    };
  };
}
