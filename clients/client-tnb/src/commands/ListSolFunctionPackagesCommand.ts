// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSolFunctionPackagesInput, ListSolFunctionPackagesOutput } from "../models/models_0";
import { ListSolFunctionPackages } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSolFunctionPackagesCommand}.
 */
export interface ListSolFunctionPackagesCommandInput extends ListSolFunctionPackagesInput {}
/**
 * @public
 *
 * The output of {@link ListSolFunctionPackagesCommand}.
 */
export interface ListSolFunctionPackagesCommandOutput extends ListSolFunctionPackagesOutput, __MetadataBearer {}

/**
 * <p>Lists information about function packages.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolFunctionPackagesCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolFunctionPackagesCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // ListSolFunctionPackagesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSolFunctionPackagesCommand(input);
 * const response = await client.send(command);
 * // { // ListSolFunctionPackagesOutput
 * //   nextToken: "STRING_VALUE",
 * //   functionPackages: [ // ListSolFunctionPackageResources // required
 * //     { // ListSolFunctionPackageInfo
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       onboardingState: "CREATED" || "ONBOARDED" || "ERROR", // required
 * //       operationalState: "ENABLED" || "DISABLED", // required
 * //       usageState: "IN_USE" || "NOT_IN_USE", // required
 * //       vnfdId: "STRING_VALUE",
 * //       vnfProvider: "STRING_VALUE",
 * //       vnfProductName: "STRING_VALUE",
 * //       vnfdVersion: "STRING_VALUE",
 * //       metadata: { // ListSolFunctionPackageMetadata
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         lastModified: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSolFunctionPackagesCommandInput - {@link ListSolFunctionPackagesCommandInput}
 * @returns {@link ListSolFunctionPackagesCommandOutput}
 * @see {@link ListSolFunctionPackagesCommandInput} for command's `input` shape.
 * @see {@link ListSolFunctionPackagesCommandOutput} for command's `response` shape.
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
 * @example List information about multiple function packages without PaginationToken
 * ```javascript
 * //
 * const input = {
 *   maxResults: 25,
 *   nextToken: ""
 * };
 * const command = new ListSolFunctionPackagesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   functionPackages: [
 *     {
 *       arn: "arn:aws:tnb:us-west-2:123456789000:function-package/fp-07aa863e53460a2a6",
 *       id: "fp-07aa863e53460a2a6",
 *       metadata: {
 *         createdAt: "2022-06-10T19:48:34Z",
 *         lastModified: "2022-06-10T21:48:33Z"
 *       },
 *       onboardingState: "ONBOARDED",
 *       operationalState: "ENABLED",
 *       usageState: "IN_USE",
 *       vnfProductName: "NRF",
 *       vnfProvider: "VNFBuilder",
 *       vnfdId: "arn:aws:tnb:123456789000:vnf/nrf",
 *       vnfdVersion: "1.0"
 *     }
 *   ],
 *   nextToken: "ug2E9SheCpyAmeLItmHF99a8GNI6yAHxXIvgBkdiA2ixKvqdhYpNBLWHDl6vGnWt7Y4CB6m1Dkz86gSwcDouMO1pSrN%2BlGY2kbNtfTeMgnuB6bmwP/UU12r7MkHQyPCWMYG8OuCXkDBOYeX8qjRDTJ5vxAyrwtynaB6XDNDZA2DscCjcD7kpNzf3xlPRCwd6"
 * }
 * *\/
 * ```
 *
 * @example List information about multiple function packages with PaginationToken
 * ```javascript
 * //
 * const input = {
 *   maxResults: 25,
 *   nextToken: "ug2E9SheCpyAmeLItmHF99a8GNI6yAHxXIvgBkdiA2ixKvqdhYpNBLWHDl6vGnWt7Y4CB6m1Dkz86gSwcDouMO1pSrN%2BlGY2kbNtfTeMgnuB6bmwP/UU12r7MkHQyPCWMYG8OuCXkDBOYeX8qjRDTJ5vxAyrwtynaB6XDNDZA2DscCjcD7kpNzf3xlPRCwd6"
 * };
 * const command = new ListSolFunctionPackagesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   functionPackages: [
 *     {
 *       arn: "arn:aws:tnb:us-west-2:123456789000:function-package/fp-07aa863e53460a2a6",
 *       id: "fp-07aa863e53460a2a6",
 *       metadata: {
 *         createdAt: "2022-06-10T19:48:34Z",
 *         lastModified: "2022-06-10T21:48:33Z"
 *       },
 *       onboardingState: "ONBOARDED",
 *       operationalState: "ENABLED",
 *       usageState: "IN_USE",
 *       vnfProductName: "NRF",
 *       vnfProvider: "VNFBuilder",
 *       vnfdId: "arn:aws:tnb:123456789000:vnf/nrf",
 *       vnfdVersion: "1.0"
 *     }
 *   ],
 *   nextToken: "ug2E9SheCpyAmeLItmHF98uvZTosFhZ1wyglENkc3UZ12UuRLmtGtojRynFjRR5zW%2FycBL6QX8AU%2B1IRWL%2BVjNNL7KBiaD87KM9WcUMQzryLtOazGHexujJncJJ0YGsxSLSrmPGx7dM1EoNKX8oxYA%3D%3D"
 * }
 * *\/
 * ```
 *
 * @example No more function packages to return
 * ```javascript
 * //
 * const input = {
 *   maxResults: 25,
 *   nextToken: "ug2E9SheCpyAmeLItmHF98uvZTosFhZ1wyglENkc3UZ12UuRLmtGtojRynFjRR5zW%2FycBL6QX8AU%2B1IRWL%2BVjNNL7KBiaD87KM9WcUMQzryLtOazGHexujJncJJ0YGsxSLSrmPGx7dM1EoNKX8oxYA%3D%3D"
 * };
 * const command = new ListSolFunctionPackagesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   functionPackages:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSolFunctionPackagesCommand extends $Command
  .classBuilder<
    ListSolFunctionPackagesCommandInput,
    ListSolFunctionPackagesCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "ListSolFunctionPackages", {})
  .n("TnbClient", "ListSolFunctionPackagesCommand")
  .sc(ListSolFunctionPackages)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSolFunctionPackagesInput;
      output: ListSolFunctionPackagesOutput;
    };
    sdk: {
      input: ListSolFunctionPackagesCommandInput;
      output: ListSolFunctionPackagesCommandOutput;
    };
  };
}
