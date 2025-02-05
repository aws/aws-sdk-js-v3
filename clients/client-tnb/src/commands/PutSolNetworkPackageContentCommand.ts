// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutSolNetworkPackageContentInput,
  PutSolNetworkPackageContentInputFilterSensitiveLog,
  PutSolNetworkPackageContentOutput,
} from "../models/models_0";
import {
  de_PutSolNetworkPackageContentCommand,
  se_PutSolNetworkPackageContentCommand,
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TNB", "PutSolNetworkPackageContent", {})
  .n("TnbClient", "PutSolNetworkPackageContentCommand")
  .f(PutSolNetworkPackageContentInputFilterSensitiveLog, void 0)
  .ser(se_PutSolNetworkPackageContentCommand)
  .de(de_PutSolNetworkPackageContentCommand)
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
