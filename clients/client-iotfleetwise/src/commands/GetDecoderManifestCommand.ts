// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDecoderManifestRequest, GetDecoderManifestResponse } from "../models/models_0";
import { GetDecoderManifest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDecoderManifestCommand}.
 */
export interface GetDecoderManifestCommandInput extends GetDecoderManifestRequest {}
/**
 * @public
 *
 * The output of {@link GetDecoderManifestCommand}.
 */
export interface GetDecoderManifestCommandOutput extends GetDecoderManifestResponse, __MetadataBearer {}

/**
 * Retrieves information about a created decoder manifest.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetDecoderManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetDecoderManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // GetDecoderManifestRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetDecoderManifestCommand(input);
 * const response = await client.send(command);
 * // { // GetDecoderManifestResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   modelManifestArn: "STRING_VALUE",
 * //   status: "ACTIVE" || "DRAFT" || "INVALID" || "VALIDATING",
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModificationTime: new Date("TIMESTAMP"), // required
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDecoderManifestCommandInput - {@link GetDecoderManifestCommandInput}
 * @returns {@link GetDecoderManifestCommandOutput}
 * @see {@link GetDecoderManifestCommandInput} for command's `input` shape.
 * @see {@link GetDecoderManifestCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
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
export class GetDecoderManifestCommand extends command<GetDecoderManifestCommandInput, GetDecoderManifestCommandOutput>(
  _ep0,
  _mw0,
  "GetDecoderManifest",
  GetDecoderManifest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDecoderManifestRequest;
      output: GetDecoderManifestResponse;
    };
    sdk: {
      input: GetDecoderManifestCommandInput;
      output: GetDecoderManifestCommandOutput;
    };
  };
}
