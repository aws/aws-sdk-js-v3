// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDistributionTenantRequest } from "../models/models_0";
import { DeleteDistributionTenant } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a distribution tenant. If you use this API operation to delete a distribution tenant that is currently enabled, the request will fail.</p> <p>To delete a distribution tenant, you must first disable the distribution tenant by using the <code>UpdateDistributionTenant</code> API operation.</p>
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
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 *
 * @throws {@link ResourceNotDisabled} (client fault)
 *  <p>The specified CloudFront resource hasn't been disabled yet.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class DeleteDistributionTenantCommand extends $Command
  .classBuilder<
    DeleteDistributionTenantCommandInput,
    DeleteDistributionTenantCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "DeleteDistributionTenant", {})
  .n("CloudFrontClient", "DeleteDistributionTenantCommand")
  .sc(DeleteDistributionTenant)
  .build() {
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
