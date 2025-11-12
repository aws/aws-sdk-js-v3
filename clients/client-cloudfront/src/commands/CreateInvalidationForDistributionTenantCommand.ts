// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateInvalidationForDistributionTenantRequest,
  CreateInvalidationForDistributionTenantResult,
} from "../models/models_0";
import { CreateInvalidationForDistributionTenant } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInvalidationForDistributionTenantCommand}.
 */
export interface CreateInvalidationForDistributionTenantCommandInput
  extends CreateInvalidationForDistributionTenantRequest {}
/**
 * @public
 *
 * The output of {@link CreateInvalidationForDistributionTenantCommand}.
 */
export interface CreateInvalidationForDistributionTenantCommandOutput
  extends CreateInvalidationForDistributionTenantResult,
    __MetadataBearer {}

/**
 * <p>Creates an invalidation for a distribution tenant. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating files</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateInvalidationForDistributionTenantCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateInvalidationForDistributionTenantCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // CreateInvalidationForDistributionTenantRequest
 *   Id: "STRING_VALUE", // required
 *   InvalidationBatch: { // InvalidationBatch
 *     Paths: { // Paths
 *       Quantity: Number("int"), // required
 *       Items: [ // PathList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     CallerReference: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateInvalidationForDistributionTenantCommand(input);
 * const response = await client.send(command);
 * // { // CreateInvalidationForDistributionTenantResult
 * //   Location: "STRING_VALUE",
 * //   Invalidation: { // Invalidation
 * //     Id: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE", // required
 * //     CreateTime: new Date("TIMESTAMP"), // required
 * //     InvalidationBatch: { // InvalidationBatch
 * //       Paths: { // Paths
 * //         Quantity: Number("int"), // required
 * //         Items: [ // PathList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       CallerReference: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateInvalidationForDistributionTenantCommandInput - {@link CreateInvalidationForDistributionTenantCommandInput}
 * @returns {@link CreateInvalidationForDistributionTenantCommandOutput}
 * @see {@link CreateInvalidationForDistributionTenantCommandInput} for command's `input` shape.
 * @see {@link CreateInvalidationForDistributionTenantCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link BatchTooLarge} (client fault)
 *  <p>Invalidation batch specified is too large.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link MissingBody} (client fault)
 *  <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
 *
 * @throws {@link TooManyInvalidationsInProgress} (client fault)
 *  <p>You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class CreateInvalidationForDistributionTenantCommand extends $Command
  .classBuilder<
    CreateInvalidationForDistributionTenantCommandInput,
    CreateInvalidationForDistributionTenantCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "CreateInvalidationForDistributionTenant", {})
  .n("CloudFrontClient", "CreateInvalidationForDistributionTenantCommand")
  .sc(CreateInvalidationForDistributionTenant)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInvalidationForDistributionTenantRequest;
      output: CreateInvalidationForDistributionTenantResult;
    };
    sdk: {
      input: CreateInvalidationForDistributionTenantCommandInput;
      output: CreateInvalidationForDistributionTenantCommandOutput;
    };
  };
}
