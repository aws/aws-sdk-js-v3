// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ValidateSolFunctionPackageContentInput, ValidateSolFunctionPackageContentOutput } from "../models/models_0";
import {
  de_ValidateSolFunctionPackageContentCommand,
  se_ValidateSolFunctionPackageContentCommand,
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
export type ValidateSolFunctionPackageContentCommandInputType = Omit<ValidateSolFunctionPackageContentInput, "file"> & {
  file: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link ValidateSolFunctionPackageContentCommand}.
 */
export interface ValidateSolFunctionPackageContentCommandInput
  extends ValidateSolFunctionPackageContentCommandInputType {}
/**
 * @public
 *
 * The output of {@link ValidateSolFunctionPackageContentCommand}.
 */
export interface ValidateSolFunctionPackageContentCommandOutput
  extends ValidateSolFunctionPackageContentOutput,
    __MetadataBearer {}

/**
 * <p>Validates function package content. This can be used as a dry run before uploading function package content with <a href="https://docs.aws.amazon.com/tnb/latest/APIReference/API_PutSolFunctionPackageContent.html">PutSolFunctionPackageContent</a>.</p>
 *          <p>A function package is a .zip file in CSAR (Cloud Service Archive) format that contains a network function (an ETSI standard telecommunication application) and function package descriptor that uses the TOSCA standard to describe how the network functions should run on your network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ValidateSolFunctionPackageContentCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ValidateSolFunctionPackageContentCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // ValidateSolFunctionPackageContentInput
 *   vnfPkgId: "STRING_VALUE", // required
 *   contentType: "application/zip",
 *   file: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new ValidateSolFunctionPackageContentCommand(input);
 * const response = await client.send(command);
 * // { // ValidateSolFunctionPackageContentOutput
 * //   id: "STRING_VALUE", // required
 * //   vnfdId: "STRING_VALUE", // required
 * //   vnfProductName: "STRING_VALUE", // required
 * //   vnfProvider: "STRING_VALUE", // required
 * //   vnfdVersion: "STRING_VALUE", // required
 * //   metadata: { // ValidateSolFunctionPackageContentMetadata
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
 * @param ValidateSolFunctionPackageContentCommandInput - {@link ValidateSolFunctionPackageContentCommandInput}
 * @returns {@link ValidateSolFunctionPackageContentCommandOutput}
 * @see {@link ValidateSolFunctionPackageContentCommandInput} for command's `input` shape.
 * @see {@link ValidateSolFunctionPackageContentCommandOutput} for command's `response` shape.
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
 *  <p>Unable to process the request because the client provided input failed to satisfy request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 * @public
 */
export class ValidateSolFunctionPackageContentCommand extends $Command
  .classBuilder<
    ValidateSolFunctionPackageContentCommandInput,
    ValidateSolFunctionPackageContentCommandOutput,
    TnbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TnbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TNB", "ValidateSolFunctionPackageContent", {})
  .n("TnbClient", "ValidateSolFunctionPackageContentCommand")
  .f(void 0, void 0)
  .ser(se_ValidateSolFunctionPackageContentCommand)
  .de(de_ValidateSolFunctionPackageContentCommand)
  .build() {}
