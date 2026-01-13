// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetInvalidationRequest, GetInvalidationResult } from "../models/models_0";
import { GetInvalidation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInvalidationCommand}.
 */
export interface GetInvalidationCommandInput extends GetInvalidationRequest {}
/**
 * @public
 *
 * The output of {@link GetInvalidationCommand}.
 */
export interface GetInvalidationCommandOutput extends GetInvalidationResult, __MetadataBearer {}

/**
 * <p>Get the information about an invalidation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetInvalidationCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetInvalidationCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetInvalidationRequest
 *   DistributionId: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetInvalidationCommand(input);
 * const response = await client.send(command);
 * // { // GetInvalidationResult
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
 * @param GetInvalidationCommandInput - {@link GetInvalidationCommandInput}
 * @returns {@link GetInvalidationCommandOutput}
 * @see {@link GetInvalidationCommandInput} for command's `input` shape.
 * @see {@link GetInvalidationCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *  <p>The specified distribution does not exist.</p>
 *
 * @throws {@link NoSuchInvalidation} (client fault)
 *  <p>The specified invalidation does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetInvalidationCommand extends $Command
  .classBuilder<
    GetInvalidationCommandInput,
    GetInvalidationCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "GetInvalidation", {})
  .n("CloudFrontClient", "GetInvalidationCommand")
  .sc(GetInvalidation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInvalidationRequest;
      output: GetInvalidationResult;
    };
    sdk: {
      input: GetInvalidationCommandInput;
      output: GetInvalidationCommandOutput;
    };
  };
}
