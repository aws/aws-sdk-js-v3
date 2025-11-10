// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSolFunctionPackageContentInput, GetSolFunctionPackageContentOutput } from "../models/models_0";
import { GetSolFunctionPackageContent } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSolFunctionPackageContentCommand}.
 */
export interface GetSolFunctionPackageContentCommandInput extends GetSolFunctionPackageContentInput {}
/**
 * @public
 */
export type GetSolFunctionPackageContentCommandOutputType = Omit<
  GetSolFunctionPackageContentOutput,
  "packageContent"
> & {
  packageContent?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetSolFunctionPackageContentCommand}.
 */
export interface GetSolFunctionPackageContentCommandOutput
  extends GetSolFunctionPackageContentCommandOutputType,
    __MetadataBearer {}

/**
 * <p>Gets the contents of a function package.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolFunctionPackageContentCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolFunctionPackageContentCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // GetSolFunctionPackageContentInput
 *   vnfPkgId: "STRING_VALUE", // required
 *   accept: "application/zip", // required
 * };
 * const command = new GetSolFunctionPackageContentCommand(input);
 * const response = await client.send(command);
 * // { // GetSolFunctionPackageContentOutput
 * //   contentType: "application/zip",
 * //   packageContent: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param GetSolFunctionPackageContentCommandInput - {@link GetSolFunctionPackageContentCommandInput}
 * @returns {@link GetSolFunctionPackageContentCommandOutput}
 * @see {@link GetSolFunctionPackageContentCommandInput} for command's `input` shape.
 * @see {@link GetSolFunctionPackageContentCommandOutput} for command's `response` shape.
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
 * @example Get the content of a function package
 * ```javascript
 * //
 * const input = {
 *   accept: "application/zip",
 *   vnfPkgId: "fp-07aa863e53460a2a6"
 * };
 * const command = new GetSolFunctionPackageContentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   contentType: "application/zip",
 *   packageContent: "dGVzdCBjb250ZW50IGhlcmU="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSolFunctionPackageContentCommand extends $Command
  .classBuilder<
    GetSolFunctionPackageContentCommandInput,
    GetSolFunctionPackageContentCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "GetSolFunctionPackageContent", {})
  .n("TnbClient", "GetSolFunctionPackageContentCommand")
  .sc(GetSolFunctionPackageContent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSolFunctionPackageContentInput;
      output: GetSolFunctionPackageContentOutput;
    };
    sdk: {
      input: GetSolFunctionPackageContentCommandInput;
      output: GetSolFunctionPackageContentCommandOutput;
    };
  };
}
