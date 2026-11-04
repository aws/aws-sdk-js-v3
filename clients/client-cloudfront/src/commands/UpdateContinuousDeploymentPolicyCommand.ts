// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateContinuousDeploymentPolicyRequest,
  UpdateContinuousDeploymentPolicyResult,
} from "../models/models_1";
import { UpdateContinuousDeploymentPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateContinuousDeploymentPolicyCommand}.
 */
export interface UpdateContinuousDeploymentPolicyCommandInput extends UpdateContinuousDeploymentPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContinuousDeploymentPolicyCommand}.
 */
export interface UpdateContinuousDeploymentPolicyCommandOutput extends UpdateContinuousDeploymentPolicyResult, __MetadataBearer {}

/**
 * Updates a continuous deployment policy. You can update a continuous deployment policy to enable or disable it, to change the percentage of traffic that it sends to the staging distribution, or to change the staging distribution that it sends traffic to.
 *
 * When you update a continuous deployment policy configuration, all the fields are updated with the values that are provided in the request. You cannot update some fields independent of others. To update a continuous deployment policy configuration:
 *
 * 1. Use `GetContinuousDeploymentPolicyConfig` to get the current configuration.
 * 2. Locally modify the fields in the continuous deployment policy configuration that you want to update.
 * 3. Use `UpdateContinuousDeploymentPolicy`, providing the entire continuous deployment policy configuration, including the fields that you modified and those that you didn't.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateContinuousDeploymentPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateContinuousDeploymentPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateContinuousDeploymentPolicyRequest
 *   ContinuousDeploymentPolicyConfig: { // ContinuousDeploymentPolicyConfig
 *     StagingDistributionDnsNames: { // StagingDistributionDnsNames
 *       Quantity: Number("int"), // required
 *       Items: [ // StagingDistributionDnsNameList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     Enabled: true || false, // required
 *     TrafficConfig: { // TrafficConfig
 *       SingleWeightConfig: { // ContinuousDeploymentSingleWeightConfig
 *         Weight: Number("float"), // required
 *         SessionStickinessConfig: { // SessionStickinessConfig
 *           IdleTTL: Number("int"), // required
 *           MaximumTTL: Number("int"), // required
 *         },
 *       },
 *       SingleHeaderConfig: { // ContinuousDeploymentSingleHeaderConfig
 *         Header: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *       Type: "SingleWeight" || "SingleHeader", // required
 *     },
 *   },
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateContinuousDeploymentPolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContinuousDeploymentPolicyResult
 * //   ContinuousDeploymentPolicy: { // ContinuousDeploymentPolicy
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     ContinuousDeploymentPolicyConfig: { // ContinuousDeploymentPolicyConfig
 * //       StagingDistributionDnsNames: { // StagingDistributionDnsNames
 * //         Quantity: Number("int"), // required
 * //         Items: [ // StagingDistributionDnsNameList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Enabled: true || false, // required
 * //       TrafficConfig: { // TrafficConfig
 * //         SingleWeightConfig: { // ContinuousDeploymentSingleWeightConfig
 * //           Weight: Number("float"), // required
 * //           SessionStickinessConfig: { // SessionStickinessConfig
 * //             IdleTTL: Number("int"), // required
 * //             MaximumTTL: Number("int"), // required
 * //           },
 * //         },
 * //         SingleHeaderConfig: { // ContinuousDeploymentSingleHeaderConfig
 * //           Header: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //         Type: "SingleWeight" || "SingleHeader", // required
 * //       },
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateContinuousDeploymentPolicyCommandInput - {@link UpdateContinuousDeploymentPolicyCommandInput}
 * @returns {@link UpdateContinuousDeploymentPolicyCommandOutput}
 * @see {@link UpdateContinuousDeploymentPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateContinuousDeploymentPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *
 * The value of `Quantity` and the size of `Items` don't match.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchContinuousDeploymentPolicy} (client fault)
 *
 * The continuous deployment policy doesn't exist.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link StagingDistributionInUse} (client fault)
 *
 * A continuous deployment policy for this staging distribution already exists.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class UpdateContinuousDeploymentPolicyCommand extends command<UpdateContinuousDeploymentPolicyCommandInput, UpdateContinuousDeploymentPolicyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateContinuousDeploymentPolicy",
  UpdateContinuousDeploymentPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateContinuousDeploymentPolicyRequest;
      output: UpdateContinuousDeploymentPolicyResult;
    };
    sdk: {
      input: UpdateContinuousDeploymentPolicyCommandInput;
      output: UpdateContinuousDeploymentPolicyCommandOutput;
    };
  };
}
