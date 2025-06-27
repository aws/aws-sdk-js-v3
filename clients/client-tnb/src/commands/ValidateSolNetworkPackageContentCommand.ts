// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ValidateSolNetworkPackageContentInput,
  ValidateSolNetworkPackageContentInputFilterSensitiveLog,
  ValidateSolNetworkPackageContentOutput,
} from "../models/models_0";
import {
  de_ValidateSolNetworkPackageContentCommand,
  se_ValidateSolNetworkPackageContentCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type ValidateSolNetworkPackageContentCommandInputType = Omit<ValidateSolNetworkPackageContentInput, "file"> & {
  file: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link ValidateSolNetworkPackageContentCommand}.
 */
export interface ValidateSolNetworkPackageContentCommandInput
  extends ValidateSolNetworkPackageContentCommandInputType {}
/**
 * @public
 *
 * The output of {@link ValidateSolNetworkPackageContentCommand}.
 */
export interface ValidateSolNetworkPackageContentCommandOutput
  extends ValidateSolNetworkPackageContentOutput,
    __MetadataBearer {}

/**
 * <p>Validates network package content. This can be used as a dry run before uploading
 *          network package content with <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_PutSolNetworkPackageContent.html">PutSolNetworkPackageContent</a>.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ValidateSolNetworkPackageContentCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ValidateSolNetworkPackageContentCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // ValidateSolNetworkPackageContentInput
 *   nsdInfoId: "STRING_VALUE", // required
 *   contentType: "application/zip",
 *   file: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new ValidateSolNetworkPackageContentCommand(input);
 * const response = await client.send(command);
 * // { // ValidateSolNetworkPackageContentOutput
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   nsdId: "STRING_VALUE", // required
 * //   nsdName: "STRING_VALUE", // required
 * //   nsdVersion: "STRING_VALUE", // required
 * //   vnfPkgIds: [ // VnfPkgIdList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   metadata: { // ValidateSolNetworkPackageContentMetadata
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
 * @param ValidateSolNetworkPackageContentCommandInput - {@link ValidateSolNetworkPackageContentCommandInput}
 * @returns {@link ValidateSolNetworkPackageContentCommandOutput}
 * @see {@link ValidateSolNetworkPackageContentCommandInput} for command's `input` shape.
 * @see {@link ValidateSolNetworkPackageContentCommandOutput} for command's `response` shape.
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
 * @example Validate the network package content of a NSD archive
 * ```javascript
 * //
 * const input = {
 *   contentType: "application/zip",
 *   file: "UEsDBBQAAAAAAPqLiVMAAAAAAAAAAAAAA",
 *   nsdInfoId: "np-0d5b823eb5c2a9241"
 * };
 * const command = new ValidateSolNetworkPackageContentCommand(input);
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
export class ValidateSolNetworkPackageContentCommand extends $Command
  .classBuilder<
    ValidateSolNetworkPackageContentCommandInput,
    ValidateSolNetworkPackageContentCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TNB", "ValidateSolNetworkPackageContent", {})
  .n("TnbClient", "ValidateSolNetworkPackageContentCommand")
  .f(ValidateSolNetworkPackageContentInputFilterSensitiveLog, void 0)
  .ser(se_ValidateSolNetworkPackageContentCommand)
  .de(de_ValidateSolNetworkPackageContentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ValidateSolNetworkPackageContentInput;
      output: ValidateSolNetworkPackageContentOutput;
    };
    sdk: {
      input: ValidateSolNetworkPackageContentCommandInput;
      output: ValidateSolNetworkPackageContentCommandOutput;
    };
  };
}
