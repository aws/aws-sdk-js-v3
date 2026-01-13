// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSolFunctionPackageInput, GetSolFunctionPackageOutput } from "../models/models_0";
import { GetSolFunctionPackage$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSolFunctionPackageCommand}.
 */
export interface GetSolFunctionPackageCommandInput extends GetSolFunctionPackageInput {}
/**
 * @public
 *
 * The output of {@link GetSolFunctionPackageCommand}.
 */
export interface GetSolFunctionPackageCommandOutput extends GetSolFunctionPackageOutput, __MetadataBearer {}

/**
 * <p>Gets the details of an individual function package, such as the operational state and
 *          whether the package is in use.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network..</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolFunctionPackageCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolFunctionPackageCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // GetSolFunctionPackageInput
 *   vnfPkgId: "STRING_VALUE", // required
 * };
 * const command = new GetSolFunctionPackageCommand(input);
 * const response = await client.send(command);
 * // { // GetSolFunctionPackageOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   onboardingState: "CREATED" || "ONBOARDED" || "ERROR", // required
 * //   operationalState: "ENABLED" || "DISABLED", // required
 * //   usageState: "IN_USE" || "NOT_IN_USE", // required
 * //   vnfdId: "STRING_VALUE",
 * //   vnfProvider: "STRING_VALUE",
 * //   vnfProductName: "STRING_VALUE",
 * //   vnfdVersion: "STRING_VALUE",
 * //   metadata: { // GetSolFunctionPackageMetadata
 * //     vnfd: { // FunctionArtifactMeta
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
 * @param GetSolFunctionPackageCommandInput - {@link GetSolFunctionPackageCommandInput}
 * @returns {@link GetSolFunctionPackageCommandOutput}
 * @see {@link GetSolFunctionPackageCommandInput} for command's `input` shape.
 * @see {@link GetSolFunctionPackageCommandOutput} for command's `response` shape.
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
 * @example Describe a function package with correct vnfPkgId
 * ```javascript
 * //
 * const input = {
 *   vnfPkgId: "fp-07aa863e53460a2a6"
 * };
 * const command = new GetSolFunctionPackageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:tnb:us-west-2:123456789000:function-package/fp-07aa863e53460a2a6",
 *   id: "fp-07aa863e53460a2a6",
 *   metadata: {
 *     createdAt: "2022-06-10T19:48:34Z",
 *     lastModified: "2022-06-10T21:48:33Z",
 *     vnfd: {
 *       overrides:       []
 *     }
 *   },
 *   onboardingState: "ONBOARDED",
 *   operationalState: "ENABLED",
 *   usageState: "IN_USE",
 *   vnfProductName: "NRF",
 *   vnfProvider: "VNFBuilder",
 *   vnfdId: "eefaac4a-cf5c-4b1f-869e-9d31a9fa6d71",
 *   vnfdVersion: "1.0.0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSolFunctionPackageCommand extends $Command
  .classBuilder<
    GetSolFunctionPackageCommandInput,
    GetSolFunctionPackageCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "GetSolFunctionPackage", {})
  .n("TnbClient", "GetSolFunctionPackageCommand")
  .sc(GetSolFunctionPackage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSolFunctionPackageInput;
      output: GetSolFunctionPackageOutput;
    };
    sdk: {
      input: GetSolFunctionPackageCommandInput;
      output: GetSolFunctionPackageCommandOutput;
    };
  };
}
