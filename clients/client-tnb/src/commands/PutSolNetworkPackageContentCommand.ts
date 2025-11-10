// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutSolNetworkPackageContentInput, PutSolNetworkPackageContentOutput } from "../models/models_0";
import { PutSolNetworkPackageContent } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type PutSolNetworkPackageContentCommandInputType = Omit<PutSolNetworkPackageContentInput, "file"> & {
  file: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link PutSolNetworkPackageContentCommand}.
 */
export interface PutSolNetworkPackageContentCommandInput extends PutSolNetworkPackageContentCommandInputType {}
/**
 * @public
 *
 * The output of {@link PutSolNetworkPackageContentCommand}.
 */
export interface PutSolNetworkPackageContentCommandOutput extends PutSolNetworkPackageContentOutput, __MetadataBearer {}

/**
 * <p>Uploads the contents of a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, PutSolNetworkPackageContentCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, PutSolNetworkPackageContentCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // PutSolNetworkPackageContentInput
 *   nsdInfoId: "STRING_VALUE", // required
 *   contentType: "application/zip",
 *   file: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new PutSolNetworkPackageContentCommand(input);
 * const response = await client.send(command);
 * // { // PutSolNetworkPackageContentOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   nsdId: "STRING_VALUE", // required
 * //   nsdName: "STRING_VALUE", // required
 * //   nsdVersion: "STRING_VALUE", // required
 * //   vnfPkgIds: [ // VnfPkgIdList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   metadata: { // PutSolNetworkPackageContentMetadata
 * //     nsd: { // NetworkArtifactMeta
 * //       overrides: [ // OverrideList
 * //         { // ToscaOverride
 * //           name: "STRING_VALUE",
 * //           defaultValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutSolNetworkPackageContentCommandInput - {@link PutSolNetworkPackageContentCommandInput}
 * @returns {@link PutSolNetworkPackageContentCommandOutput}
 * @see {@link PutSolNetworkPackageContentCommandInput} for command's `input` shape.
 * @see {@link PutSolNetworkPackageContentCommandOutput} for command's `response` shape.
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
 * @example Upload the network package content of an NSD archive
 * ```javascript
 * //
 * const input = {
 *   contentType: "application/zip",
 *   file: "UEsDBBQAAAAAAPqLiVMAAAAAAAAAAAAAA",
 *   nsdInfoId: "np-0d5b823eb5c2a9241"
 * };
 * const command = new PutSolNetworkPackageContentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:tnb:us-west-2:123456789000:network-package/np-0d5b823eb5c2a9241",
 *   id: "np-0d5b823eb5c2a9241",
 *   metadata: {
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
 *   nsdId: "0d72acd9-e45d-4644-9bcd-1fe67cd0e2c8",
 *   nsdName: "Sample Single Cluster",
 *   nsdVersion: "1.0.0",
 *   vnfPkgIds: [
 *     "fp-1234567890abcdabc",
 *     "fp-0b627c4a170a97f79"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutSolNetworkPackageContentCommand extends $Command
  .classBuilder<
    PutSolNetworkPackageContentCommandInput,
    PutSolNetworkPackageContentCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "PutSolNetworkPackageContent", {})
  .n("TnbClient", "PutSolNetworkPackageContentCommand")
  .sc(PutSolNetworkPackageContent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSolNetworkPackageContentInput;
      output: PutSolNetworkPackageContentOutput;
    };
    sdk: {
      input: PutSolNetworkPackageContentCommandInput;
      output: PutSolNetworkPackageContentCommandOutput;
    };
  };
}
