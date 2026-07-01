// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSolNetworkPackageInput, GetSolNetworkPackageOutput } from "../models/models_0";
import { GetSolNetworkPackage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSolNetworkPackageCommand}.
 */
export interface GetSolNetworkPackageCommandInput extends GetSolNetworkPackageInput {}
/**
 * @public
 *
 * The output of {@link GetSolNetworkPackageCommand}.
 */
export interface GetSolNetworkPackageCommandOutput extends GetSolNetworkPackageOutput, __MetadataBearer {}

/**
 * <p>Gets the details of a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolNetworkPackageCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolNetworkPackageCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // GetSolNetworkPackageInput
 *   nsdInfoId: "STRING_VALUE", // required
 * };
 * const command = new GetSolNetworkPackageCommand(input);
 * const response = await client.send(command);
 * // { // GetSolNetworkPackageOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   nsdOnboardingState: "CREATED" || "ONBOARDED" || "ERROR", // required
 * //   nsdOperationalState: "ENABLED" || "DISABLED", // required
 * //   nsdUsageState: "IN_USE" || "NOT_IN_USE", // required
 * //   nsdId: "STRING_VALUE", // required
 * //   nsdName: "STRING_VALUE", // required
 * //   nsdVersion: "STRING_VALUE", // required
 * //   vnfPkgIds: [ // VnfPkgIdList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   metadata: { // GetSolNetworkPackageMetadata
 * //     nsd: { // NetworkArtifactMeta
 * //       overrides: [ // OverrideList
 * //         { // ToscaOverride
 * //           name: "STRING_VALUE",
 * //           defaultValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModified: new Date("TIMESTAMP"), // required
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSolNetworkPackageCommandInput - {@link GetSolNetworkPackageCommandInput}
 * @returns {@link GetSolNetworkPackageCommandOutput}
 * @see {@link GetSolNetworkPackageCommandInput} for command's `input` shape.
 * @see {@link GetSolNetworkPackageCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
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
 * @example Describe an individual Sol network package
 * ```javascript
 * //
 * const input = {
 *   nsdInfoId: "np-0d5b823eb5c2a9241"
 * };
 * const command = new GetSolNetworkPackageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:tnb:us-west-2:123456789000:network-package/np-0d5b823eb5c2a9241",
 *   id: "np-0d5b823eb5c2a9241",
 *   metadata: {
 *     createdAt: "2022-06-10T19:48:34Z",
 *     lastModified: "2022-06-10T21:48:33Z",
 *     nsd: {
 *       overrides: [
 *         {
 *           defaultValue: "10.0.0.0/24",
 *           name: "cidr_block"
 *         },
 *         {
 *           name: "some_vnf.vnf_prop"
 *         }
 *       ]
 *     }
 *   },
 *   nsdId: "be1abe66-1fcc-11ec-9621-0242ac130002",
 *   nsdName: "Sample-City",
 *   nsdOnboardingState: "ONBOARDED",
 *   nsdOperationalState: "ENABLED",
 *   nsdUsageState: "IN_USE",
 *   nsdVersion: "1.0",
 *   vnfPkgIds: [
 *     "fp-0b627c4a170a97f79",
 *     "fp-8c253b2e898d23f92"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSolNetworkPackageCommand extends command<GetSolNetworkPackageCommandInput, GetSolNetworkPackageCommandOutput>(
  _ep0,
  _mw0,
  "GetSolNetworkPackage",
  GetSolNetworkPackage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSolNetworkPackageInput;
      output: GetSolNetworkPackageOutput;
    };
    sdk: {
      input: GetSolNetworkPackageCommandInput;
      output: GetSolNetworkPackageCommandOutput;
    };
  };
}
