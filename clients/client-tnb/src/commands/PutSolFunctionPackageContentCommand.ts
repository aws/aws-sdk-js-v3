// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutSolFunctionPackageContentInput, PutSolFunctionPackageContentOutput } from "../models/models_0";
import { PutSolFunctionPackageContent } from "../schemas/schemas_3_Sol";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type PutSolFunctionPackageContentCommandInputType = Omit<PutSolFunctionPackageContentInput, "file"> & {
  file: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link PutSolFunctionPackageContentCommand}.
 */
export interface PutSolFunctionPackageContentCommandInput extends PutSolFunctionPackageContentCommandInputType {}
/**
 * @public
 *
 * The output of {@link PutSolFunctionPackageContentCommand}.
 */
export interface PutSolFunctionPackageContentCommandOutput
  extends PutSolFunctionPackageContentOutput,
    __MetadataBearer {}

/**
 * <p>Uploads the contents of a function package.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, PutSolFunctionPackageContentCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, PutSolFunctionPackageContentCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * // import type { TnbClientConfig } from "@aws-sdk/client-tnb";
 * const config = {}; // type is TnbClientConfig
 * const client = new TnbClient(config);
 * const input = { // PutSolFunctionPackageContentInput
 *   vnfPkgId: "STRING_VALUE", // required
 *   contentType: "application/zip",
 *   file: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new PutSolFunctionPackageContentCommand(input);
 * const response = await client.send(command);
 * // { // PutSolFunctionPackageContentOutput
 * //   id: "STRING_VALUE", // required
 * //   vnfdId: "STRING_VALUE", // required
 * //   vnfProductName: "STRING_VALUE", // required
 * //   vnfProvider: "STRING_VALUE", // required
 * //   vnfdVersion: "STRING_VALUE", // required
 * //   metadata: { // PutSolFunctionPackageContentMetadata
 * //     vnfd: { // FunctionArtifactMeta
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
 * @param PutSolFunctionPackageContentCommandInput - {@link PutSolFunctionPackageContentCommandInput}
 * @returns {@link PutSolFunctionPackageContentCommandOutput}
 * @see {@link PutSolFunctionPackageContentCommandInput} for command's `input` shape.
 * @see {@link PutSolFunctionPackageContentCommandOutput} for command's `response` shape.
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
 * @example Upload a function package content
 * ```javascript
 * //
 * const input = {
 *   contentType: "application/zip",
 *   file: "UEsDBBQAAAAAAPqLiVMAAAAAAAAAAAAAAAAMACAAZnJlZTVnYy1hbWYvVVQNAAcIrrJhBK",
 *   vnfPkgId: "fp-07aa863e53460a2a6"
 * };
 * const command = new PutSolFunctionPackageContentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   id: "fp-07aa863e53460a2a6",
 *   metadata: {
 *     vnfd: {
 *       overrides:       []
 *     }
 *   },
 *   vnfProductName: "Sample AMF",
 *   vnfProvider: "Sample",
 *   vnfdId: "0d72acd9-e45d-4644-9bcd-1fe67cd0e2c8",
 *   vnfdVersion: "1.0.0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutSolFunctionPackageContentCommand extends $Command
  .classBuilder<
    PutSolFunctionPackageContentCommandInput,
    PutSolFunctionPackageContentCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TNB", "PutSolFunctionPackageContent", {})
  .n("TnbClient", "PutSolFunctionPackageContentCommand")
  .sc(PutSolFunctionPackageContent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSolFunctionPackageContentInput;
      output: PutSolFunctionPackageContentOutput;
    };
    sdk: {
      input: PutSolFunctionPackageContentCommandInput;
      output: PutSolFunctionPackageContentCommandOutput;
    };
  };
}
