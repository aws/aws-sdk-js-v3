// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateInvalidationForDistributionTenantRequest,
  CreateInvalidationForDistributionTenantResult,
} from "../models/models_0";
import { CreateInvalidationForDistributionTenant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateInvalidationForDistributionTenantCommand}.
 */
export interface CreateInvalidationForDistributionTenantCommandInput extends CreateInvalidationForDistributionTenantRequest {}
/**
 * @public
 *
 * The output of {@link CreateInvalidationForDistributionTenantCommand}.
 */
export interface CreateInvalidationForDistributionTenantCommandOutput extends CreateInvalidationForDistributionTenantResult, __MetadataBearer {}

/**
 * Creates an invalidation for a distribution tenant. For more information, see [Invalidating files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html) in the *Amazon CloudFront Developer Guide*.
 *
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
 *
 * Access denied.
 *
 * @throws {@link BatchTooLarge} (client fault)
 *
 * Invalidation batch specified is too large.
 *
 * @throws {@link EntityNotFound} (client fault)
 *
 * The entity was not found.
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *
 * The value of `Quantity` and the size of `Items` don't match.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link MissingBody} (client fault)
 *
 * This operation requires a body. Ensure that the body is present and the `Content-Type` header is set.
 *
 * @throws {@link TooManyInvalidationsInProgress} (client fault)
 *
 * You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class CreateInvalidationForDistributionTenantCommand extends command<CreateInvalidationForDistributionTenantCommandInput, CreateInvalidationForDistributionTenantCommandOutput>(
  _ep0,
  _mw0,
  "CreateInvalidationForDistributionTenant",
  CreateInvalidationForDistributionTenant$
) {
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
