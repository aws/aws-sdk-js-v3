// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSolNetworkPackagesInput, ListSolNetworkPackagesOutput } from "../models/models_0";
import { ListSolNetworkPackages } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSolNetworkPackagesCommand}.
 */
export interface ListSolNetworkPackagesCommandInput extends ListSolNetworkPackagesInput {}
/**
 * @public
 *
 * The output of {@link ListSolNetworkPackagesCommand}.
 */
export interface ListSolNetworkPackagesCommandOutput extends ListSolNetworkPackagesOutput, __MetadataBearer {}

/**
 * <p>Lists network packages.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolNetworkPackagesCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolNetworkPackagesCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // ListSolNetworkPackagesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSolNetworkPackagesCommand(input);
 * const response = await client.send(command);
 * // { // ListSolNetworkPackagesOutput
 * //   nextToken: "STRING_VALUE",
 * //   networkPackages: [ // ListSolNetworkPackageResources // required
 * //     { // ListSolNetworkPackageInfo
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       nsdOnboardingState: "CREATED" || "ONBOARDED" || "ERROR", // required
 * //       nsdOperationalState: "ENABLED" || "DISABLED", // required
 * //       nsdUsageState: "IN_USE" || "NOT_IN_USE", // required
 * //       nsdId: "STRING_VALUE",
 * //       nsdName: "STRING_VALUE",
 * //       nsdVersion: "STRING_VALUE",
 * //       nsdDesigner: "STRING_VALUE",
 * //       nsdInvariantId: "STRING_VALUE",
 * //       vnfPkgIds: [ // VnfPkgIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       metadata: { // ListSolNetworkPackageMetadata
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         lastModified: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSolNetworkPackagesCommandInput - {@link ListSolNetworkPackagesCommandInput}
 * @returns {@link ListSolNetworkPackagesCommandOutput}
 * @see {@link ListSolNetworkPackagesCommandInput} for command's `input` shape.
 * @see {@link ListSolNetworkPackagesCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception caused by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Unable to process the request because the client provided input failed to satisfy
 *          request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 *
 * @example List information about multiple network packages without PaginationToken
 * ```javascript
 * //
 * const input = {
 *   maxResults: 25,
 *   nextToken: ""
 * };
 * const command = new ListSolNetworkPackagesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   networkPackages: [
 *     {
 *       arn: "arn:aws:tnb:us-west-2:123456789000:network-package/np-0d5b823eb5c2a9241",
 *       id: "np-0d5b823eb5c2a9241",
 *       metadata: {
 *         createdAt: "2022-06-10T19:48:34Z",
 *         lastModified: "2022-06-10T21:48:33Z"
 *       },
 *       nsdDesigner: "Sample",
 *       nsdId: "be1abe66-1fcc-11ec-9621-0242ac130002",
 *       nsdInvariantId: "SAMPLE_CITY",
 *       nsdName: "Sample-City",
 *       nsdOnboardingState: "ONBOARDED",
 *       nsdOperationalState: "ENABLED",
 *       nsdUsageState: "IN_USE",
 *       nsdVersion: "1.0",
 *       vnfPkgIds: [
 *         "fp-0b627c4a170a97f79",
 *         "fp-09a2ba09fad0212cd"
 *       ]
 *     },
 *     {
 *       arn: "arn:aws:tnb:us-west-2:123456789000:network-package/np-0d5b823eb5c2a9789",
 *       id: "np-0d5b823eb5c2a9789",
 *       metadata: {
 *         createdAt: "2022-06-10T19:48:34Z",
 *         lastModified: "2022-06-10T21:48:33Z"
 *       },
 *       nsdOnboardingState: "CREATED",
 *       nsdOperationalState: "DISABLED",
 *       nsdUsageState: "NOT_IN_USE"
 *     }
 *   ],
 *   nextToken: "ug2E9SheCpyAmeLItmHF99a8GNI6yAHxXIvgBkdiA2ixKvqdhYpNBLWHDl6vGnWt7Y4CB6m1Dkz86gSwcDouMO1pSrN%2BlGY2kbNtfTeMgnuB6bmwP/UU12r7MkHQyPCWMYG8OuCXkDBOYeX8qjRDTJ5vxAyrwtynaB6XDNDZA2DscCjcD7kpNzf3xlPRCwd6"
 * }
 * *\/
 * ```
 *
 * @example List information about multiple network packages with PaginationToken
 * ```javascript
 * //
 * const input = {
 *   maxResults: 25,
 *   nextToken: "ug2E9SheCpyAmeLItmHF95t1rBBsFyzy5hsuauDTqaukll3AGHaTz%2B4utHS3OMuMcyKW6Hmk25aB6wtV%2BFxCx9Adw5fDSq9D8lVa6sr0Sq0BF7Fj0mYegd0a/XiFP4j/58ZIrtRl0M3Z55Z/wTqwIietXJVfFX84ZnIMjiEiFb3KIIdrKS8vSgMZ18t3Gj5p"
 * };
 * const command = new ListSolNetworkPackagesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   networkPackages: [
 *     {
 *       arn: "arn:aws:tnb:us-west-2:123456789000:network-package/np-0d5b823eb5c2a9241",
 *       id: "np-0d5b823eb5c2a9241",
 *       metadata: {
 *         createdAt: "2022-06-10T19:48:34Z",
 *         lastModified: "2022-06-10T21:48:33Z"
 *       },
 *       nsdDesigner: "Sample",
 *       nsdId: "be1abe66-1fcc-11ec-9621-0242ac130002",
 *       nsdInvariantId: "SAMPLE_CITY",
 *       nsdName: "Sample-City",
 *       nsdOnboardingState: "ONBOARDED",
 *       nsdOperationalState: "ENABLED",
 *       nsdUsageState: "IN_USE",
 *       nsdVersion: "1.0",
 *       vnfPkgIds: [
 *         "fp-0b627c4a170a97f79",
 *         "fp-09a2ba09fad0212cd"
 *       ]
 *     }
 *   ],
 *   nextToken: "ug2E9SheCpyAmeLItmHF93AYTN36C2xOijk0IW9FbkywwkM3QphGA%2BMbsKhEhOl3nacLxMMiBL9WOhOdo/ZCXfmS2/tHpzuWjvSODvivIJONDw3bUxYqjsT2w/lDWekKm9cRGhLaK6kCr1XBvm3USj/r6dBDL3gHYrwfmEGL7MRffCgc2IqYOL6O2Mhvbn89"
 * }
 * *\/
 * ```
 *
 * @example No more network packages to return
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListSolNetworkPackagesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   networkPackages:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSolNetworkPackagesCommand extends $Command
  .classBuilder<
    ListSolNetworkPackagesCommandInput,
    ListSolNetworkPackagesCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "ListSolNetworkPackages", {})
  .n("TnbClient", "ListSolNetworkPackagesCommand")
  .sc(ListSolNetworkPackages)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSolNetworkPackagesInput;
      output: ListSolNetworkPackagesOutput;
    };
    sdk: {
      input: ListSolNetworkPackagesCommandInput;
      output: ListSolNetworkPackagesCommandOutput;
    };
  };
}
