// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportDecoderManifestRequest, ImportDecoderManifestResponse } from "../models/models_0";
import { ImportDecoderManifest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a decoder manifest using your existing CAN DBC file from your local device.
 *
 * The CAN signal name must be unique and not repeated across CAN message definitions in a .dbc file.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, ImportDecoderManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, ImportDecoderManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
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
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link DecoderManifestValidationException} (client fault)
 *
 * The request couldn't be completed because it contains signal decoders with one or more validation errors.
 *
 * @throws {@link InvalidSignalsException} (client fault)
 *
 * The request couldn't be completed because it contains signals that aren't valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class ImportDecoderManifestCommand extends command<ImportDecoderManifestCommandInput, ImportDecoderManifestCommandOutput>(
  _ep0,
  _mw0,
  "ImportDecoderManifest",
  ImportDecoderManifest$
) {
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
