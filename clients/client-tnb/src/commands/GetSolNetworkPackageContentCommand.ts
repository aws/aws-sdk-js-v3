// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { type GetSolNetworkPackageContentInput, GetSolNetworkPackageContentOutput } from "../models/models_0";
import { GetSolNetworkPackageContent$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSolNetworkPackageContentCommand}.
 */
export interface GetSolNetworkPackageContentCommandInput extends GetSolNetworkPackageContentInput {}
/**
 * @public
 */
export type GetSolNetworkPackageContentCommandOutputType = Omit<GetSolNetworkPackageContentOutput, "nsdContent"> & {
  nsdContent?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetSolNetworkPackageContentCommand}.
 */
export interface GetSolNetworkPackageContentCommandOutput extends GetSolNetworkPackageContentCommandOutputType, __MetadataBearer {}

/**
 * <p>Gets the contents of a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, GetSolNetworkPackageContentCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, GetSolNetworkPackageContentCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // GetSolNetworkPackageContentInput
 *   nsdInfoId: "STRING_VALUE", // required
 *   accept: "application/zip", // required
 * };
 * const command = new GetSolNetworkPackageContentCommand(input);
 * const response = await client.send(command);
 * // { // GetSolNetworkPackageContentOutput
 * //   contentType: "application/zip",
 * //   nsdContent: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param GetSolNetworkPackageContentCommandInput - {@link GetSolNetworkPackageContentCommandInput}
 * @returns {@link GetSolNetworkPackageContentCommandOutput}
 * @see {@link GetSolNetworkPackageContentCommandInput} for command's `input` shape.
 * @see {@link GetSolNetworkPackageContentCommandOutput} for command's `response` shape.
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
 * @example Get a network package Content
 * ```javascript
 * //
 * const input = {
 *   accept: "application/zip",
 *   nsdInfoId: "np-0d5b823eb5c2a9241"
 * };
 * const command = new GetSolNetworkPackageContentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   contentType: "application/zip",
 *   nsdContent: "dGVzdCBjb250ZW50IGhlcmU="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSolNetworkPackageContentCommand extends $Command
  .classBuilder<
    GetSolNetworkPackageContentCommandInput,
    GetSolNetworkPackageContentCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "GetSolNetworkPackageContent", {})
  .n("TnbClient", "GetSolNetworkPackageContentCommand")
  .sc(GetSolNetworkPackageContent$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSolNetworkPackageContentInput;
      output: GetSolNetworkPackageContentOutput;
    };
    sdk: {
      input: GetSolNetworkPackageContentCommandInput;
      output: GetSolNetworkPackageContentCommandOutput;
    };
  };
}
