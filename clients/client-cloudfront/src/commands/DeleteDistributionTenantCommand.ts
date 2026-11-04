// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDistributionTenantRequest } from "../models/models_0";
import { DeleteDistributionTenant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDistributionTenantCommand}.
 */
export interface DeleteDistributionTenantCommandInput extends DeleteDistributionTenantRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDistributionTenantCommand}.
 */
export interface DeleteDistributionTenantCommandOutput extends __MetadataBearer {}

/**
 * Deletes a distribution tenant. If you use this API operation to delete a distribution tenant that is currently enabled, the request will fail.
 *
 * To delete a distribution tenant, you must first disable the distribution tenant by using the `UpdateDistributionTenant` API operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteDistributionTenantCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteDistributionTenantCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteDistributionTenantRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new DeleteDistributionTenantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDistributionTenantCommandInput - {@link DeleteDistributionTenantCommandInput}
 * @returns {@link DeleteDistributionTenantCommandOutput}
 * @see {@link DeleteDistributionTenantCommandInput} for command's `input` shape.
 * @see {@link DeleteDistributionTenantCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link EntityNotFound} (client fault)
 *
 * The entity was not found.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link ResourceNotDisabled} (client fault)
 *
 * The specified CloudFront resource hasn't been disabled yet.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class DeleteDistributionTenantCommand extends command<DeleteDistributionTenantCommandInput, DeleteDistributionTenantCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDistributionTenant",
  DeleteDistributionTenant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDistributionTenantRequest;
      output: {};
    };
    sdk: {
      input: DeleteDistributionTenantCommandInput;
      output: DeleteDistributionTenantCommandOutput;
    };
  };
}
