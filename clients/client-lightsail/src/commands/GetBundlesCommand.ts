// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import type { GetBundlesRequest, GetBundlesResult } from "../models/models_0";
import { GetBundles } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBundlesCommand}.
 */
export interface GetBundlesCommandInput extends GetBundlesRequest {}
/**
 * @public
 *
 * The output of {@link GetBundlesCommand}.
 */
export interface GetBundlesCommandOutput extends GetBundlesResult, __MetadataBearer {}

/**
 * <p>Returns the bundles that you can apply to an Amazon Lightsail instance when you create
 *       it.</p>
 *          <p>A bundle describes the specifications of an instance, such as the monthly cost, amount of
 *       memory, the number of vCPUs, amount of storage space, and monthly network data transfer
 *       quota.</p>
 *          <note>
 *             <p>Bundles are referred to as <i>instance plans</i> in the Lightsail
 *         console.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBundlesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBundlesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetBundlesRequest
 *   includeInactive: true || false,
 *   pageToken: "STRING_VALUE",
 *   appCategory: "LfR",
 * };
 * const command = new GetBundlesCommand(input);
 * const response = await client.send(command);
 * // { // GetBundlesResult
 * //   bundles: [ // BundleList
 * //     { // Bundle
 * //       price: Number("float"),
 * //       cpuCount: Number("int"),
 * //       diskSizeInGb: Number("int"),
 * //       bundleId: "STRING_VALUE",
 * //       instanceType: "STRING_VALUE",
 * //       isActive: true || false,
 * //       name: "STRING_VALUE",
 * //       power: Number("int"),
 * //       ramSizeInGb: Number("float"),
 * //       transferPerMonthInGb: Number("int"),
 * //       supportedPlatforms: [ // InstancePlatformList
 * //         "LINUX_UNIX" || "WINDOWS",
 * //       ],
 * //       supportedAppCategories: [ // AppCategoryList
 * //         "LfR",
 * //       ],
 * //       publicIpv4AddressCount: Number("int"),
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBundlesCommandInput - {@link GetBundlesCommandInput}
 * @returns {@link GetBundlesCommandOutput}
 * @see {@link GetBundlesCommandInput} for command's `input` shape.
 * @see {@link GetBundlesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
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
export class GetBundlesCommand extends $Command
  .classBuilder<
    GetBundlesCommandInput,
    GetBundlesCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "GetBundles", {})
  .n("LightsailClient", "GetBundlesCommand")
  .sc(GetBundles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBundlesRequest;
      output: GetBundlesResult;
    };
    sdk: {
      input: GetBundlesCommandInput;
      output: GetBundlesCommandOutput;
    };
  };
}
