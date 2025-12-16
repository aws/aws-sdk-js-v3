// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { type GetSolFunctionPackageDescriptorInput, GetSolFunctionPackageDescriptorOutput } from "../models/models_0";
import { GetSolFunctionPackageDescriptor$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSolFunctionPackageDescriptorCommand}.
 */
export interface GetSolFunctionPackageDescriptorCommandInput extends GetSolFunctionPackageDescriptorInput {}
/**
 * @public
 */
export type GetSolFunctionPackageDescriptorCommandOutputType = Omit<GetSolFunctionPackageDescriptorOutput, "vnfd"> & {
  vnfd?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetSolFunctionPackageDescriptorCommand}.
 */
export interface GetSolFunctionPackageDescriptorCommandOutput
  extends GetSolFunctionPackageDescriptorCommandOutputType,
    __MetadataBearer {}

/**
 * <p>Gets a function package descriptor in a function package.</p>
 *          <p>A function package descriptor is a .yaml file in a function package that uses the TOSCA standard to describe how the network function in the function package should run on your network.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolFunctionPackageDescriptorCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolFunctionPackageDescriptorCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // GetSolFunctionPackageDescriptorInput
 *   vnfPkgId: "STRING_VALUE", // required
 *   accept: "text/plain", // required
 * };
 * const command = new GetSolFunctionPackageDescriptorCommand(input);
 * const response = await client.send(command);
 * // { // GetSolFunctionPackageDescriptorOutput
 * //   contentType: "text/plain",
 * //   vnfd: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param GetSolFunctionPackageDescriptorCommandInput - {@link GetSolFunctionPackageDescriptorCommandInput}
 * @returns {@link GetSolFunctionPackageDescriptorCommandOutput}
 * @see {@link GetSolFunctionPackageDescriptorCommandInput} for command's `input` shape.
 * @see {@link GetSolFunctionPackageDescriptorCommandOutput} for command's `response` shape.
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
 * @example Get the descriptor of a function package
 * ```javascript
 * //
 * const input = {
 *   accept: "text/plain",
 *   vnfPkgId: "fp-07aa863e53460a2a6"
 * };
 * const command = new GetSolFunctionPackageDescriptorCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   contentType: "text/plain",
 *   vnfd: "dGVzdCBjb250ZW50IGhlcmU="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSolFunctionPackageDescriptorCommand extends $Command
  .classBuilder<
    GetSolFunctionPackageDescriptorCommandInput,
    GetSolFunctionPackageDescriptorCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "GetSolFunctionPackageDescriptor", {})
  .n("TnbClient", "GetSolFunctionPackageDescriptorCommand")
  .sc(GetSolFunctionPackageDescriptor$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSolFunctionPackageDescriptorInput;
      output: GetSolFunctionPackageDescriptorOutput;
    };
    sdk: {
      input: GetSolFunctionPackageDescriptorCommandInput;
      output: GetSolFunctionPackageDescriptorCommandOutput;
    };
  };
}
