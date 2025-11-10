// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetBucketBundlesRequest, GetBucketBundlesResult } from "../models/models_0";
import { GetBucketBundles } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketBundlesCommand}.
 */
export interface GetBucketBundlesCommandInput extends GetBucketBundlesRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketBundlesCommand}.
 */
export interface GetBucketBundlesCommandOutput extends GetBucketBundlesResult, __MetadataBearer {}

/**
 * <p>Returns the bundles that you can apply to a Amazon Lightsail bucket.</p>
 *          <p>The bucket bundle specifies the monthly cost, storage quota, and data transfer quota for a
 *       bucket.</p>
 *          <p>Use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_UpdateBucketBundle.html">UpdateBucketBundle</a> action to update the
 *       bundle for a bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBucketBundlesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBucketBundlesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetBucketBundlesRequest
 *   includeInactive: true || false,
 * };
 * const command = new GetBucketBundlesCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketBundlesResult
 * //   bundles: [ // BucketBundleList
 * //     { // BucketBundle
 * //       bundleId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       price: Number("float"),
 * //       storagePerMonthInGb: Number("int"),
 * //       transferPerMonthInGb: Number("int"),
 * //       isActive: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBucketBundlesCommandInput - {@link GetBucketBundlesCommandInput}
 * @returns {@link GetBucketBundlesCommandOutput}
 * @see {@link GetBucketBundlesCommandInput} for command's `input` shape.
 * @see {@link GetBucketBundlesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class GetBucketBundlesCommand extends $Command
  .classBuilder<
    GetBucketBundlesCommandInput,
    GetBucketBundlesCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "GetBucketBundles", {})
  .n("LightsailClient", "GetBucketBundlesCommand")
  .sc(GetBucketBundles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketBundlesRequest;
      output: GetBucketBundlesResult;
    };
    sdk: {
      input: GetBucketBundlesCommandInput;
      output: GetBucketBundlesCommandOutput;
    };
  };
}
