// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetImageSetMetadataRequest, GetImageSetMetadataResponse } from "../models/models_0";
import { GetImageSetMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetImageSetMetadataCommand}.
 */
export interface GetImageSetMetadataCommandInput extends GetImageSetMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetImageSetMetadataCommand}.
 */
export interface GetImageSetMetadataCommandOutput extends Omit<GetImageSetMetadataResponse, "imageSetMetadataBlob">, __MetadataBearer {
  imageSetMetadataBlob: StreamingBlobPayloadOutputTypes;
}

/**
 * Get metadata attributes for an image set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, GetImageSetMetadataCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, GetImageSetMetadataCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // import type { MedicalImagingClientConfig } from "@aws-sdk/client-medical-imaging";
 * const config = {}; // type is MedicalImagingClientConfig
 * const client = new MedicalImagingClient(config);
 * const input = { // GetImageSetMetadataRequest
 *   datastoreId: "STRING_VALUE", // required
 *   imageSetId: "STRING_VALUE", // required
 *   versionId: "STRING_VALUE",
 * };
 * const command = new GetImageSetMetadataCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.imageSetMetadataBlob.transformToByteArray();
 * // const str = await response.imageSetMetadataBlob.transformToString();
 * // response.imageSetMetadataBlob.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // GetImageSetMetadataResponse
 * //   imageSetMetadataBlob: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes // required
 * //   contentType: "STRING_VALUE",
 * //   contentEncoding: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImageSetMetadataCommandInput - {@link GetImageSetMetadataCommandInput}
 * @returns {@link GetImageSetMetadataCommandOutput}
 * @see {@link GetImageSetMetadataCommandInput} for command's `input` shape.
 * @see {@link GetImageSetMetadataCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints set by the service.
 *
 * @throws {@link MedicalImagingServiceException}
 *
 * Base exception class for all service exceptions from MedicalImaging service.
 *
 * @public
 */
export class GetImageSetMetadataCommand extends command<GetImageSetMetadataCommandInput, GetImageSetMetadataCommandOutput>(
  _ep0,
  _mw0,
  "GetImageSetMetadata",
  GetImageSetMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImageSetMetadataRequest;
      output: GetImageSetMetadataResponse;
    };
    sdk: {
      input: GetImageSetMetadataCommandInput;
      output: GetImageSetMetadataCommandOutput;
    };
  };
}
