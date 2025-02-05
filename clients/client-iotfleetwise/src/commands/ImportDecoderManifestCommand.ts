// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { ImportDecoderManifestRequest, ImportDecoderManifestResponse } from "../models/models_0";
import { de_ImportDecoderManifestCommand, se_ImportDecoderManifestCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportDecoderManifestCommand}.
 */
export interface ImportDecoderManifestCommandInput extends ImportDecoderManifestRequest {}
/**
 * @public
 *
 * The output of {@link ImportDecoderManifestCommand}.
 */
export interface ImportDecoderManifestCommandOutput extends ImportDecoderManifestResponse, __MetadataBearer {}

/**
 * <p> Creates a decoder manifest using your existing CAN DBC file from your local device.
 *         </p>
 *          <p>The CAN signal name must be unique and not repeated across CAN message definitions in a .dbc file. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ImportDecoderManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ImportDecoderManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTFleetWiseClient(config);
 * const input = { // ImportDecoderManifestRequest
 *   name: "STRING_VALUE", // required
 *   networkFileDefinitions: [ // NetworkFileDefinitions // required
 *     { // NetworkFileDefinition Union: only one key present
 *       canDbc: { // CanDbcDefinition
 *         networkInterface: "STRING_VALUE", // required
 *         canDbcFiles: [ // NetworkFilesList // required
 *           new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         ],
 *         signalsMap: { // ModelSignalsMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new ImportDecoderManifestCommand(input);
 * const response = await client.send(command);
 * // { // ImportDecoderManifestResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ImportDecoderManifestCommandInput - {@link ImportDecoderManifestCommandInput}
 * @returns {@link ImportDecoderManifestCommandOutput}
 * @see {@link ImportDecoderManifestCommandInput} for command's `input` shape.
 * @see {@link ImportDecoderManifestCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link DecoderManifestValidationException} (client fault)
 *  <p>The request couldn't be completed because it contains signal decoders with one or more
 *             validation errors.</p>
 *
 * @throws {@link InvalidSignalsException} (client fault)
 *  <p>The request couldn't be completed because it contains signals that aren't
 *             valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 * @public
 */
export class ImportDecoderManifestCommand extends $Command
  .classBuilder<
    ImportDecoderManifestCommandInput,
    ImportDecoderManifestCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "ImportDecoderManifest", {})
  .n("IoTFleetWiseClient", "ImportDecoderManifestCommand")
  .f(void 0, void 0)
  .ser(se_ImportDecoderManifestCommand)
  .de(de_ImportDecoderManifestCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportDecoderManifestRequest;
      output: ImportDecoderManifestResponse;
    };
    sdk: {
      input: ImportDecoderManifestCommandInput;
      output: ImportDecoderManifestCommandOutput;
    };
  };
}
