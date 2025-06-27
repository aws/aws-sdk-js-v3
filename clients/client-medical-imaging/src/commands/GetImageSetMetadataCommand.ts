// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import {
  GetImageSetMetadataRequest,
  GetImageSetMetadataResponse,
  GetImageSetMetadataResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetImageSetMetadataCommand, se_GetImageSetMetadataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetImageSetMetadataCommandOutput
  extends Omit<GetImageSetMetadataResponse, "imageSetMetadataBlob">,
    __MetadataBearer {
  imageSetMetadataBlob: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Get metadata attributes for an image set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, GetImageSetMetadataCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, GetImageSetMetadataCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
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
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the service.</p>
 *
 * @throws {@link MedicalImagingServiceException}
 * <p>Base exception class for all service exceptions from MedicalImaging service.</p>
 *
 *
 * @public
 */
export class GetImageSetMetadataCommand extends $Command
  .classBuilder<
    GetImageSetMetadataCommandInput,
    GetImageSetMetadataCommandOutput,
    MedicalImagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MedicalImagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AHIGatewayService", "GetImageSetMetadata", {})
  .n("MedicalImagingClient", "GetImageSetMetadataCommand")
  .f(void 0, GetImageSetMetadataResponseFilterSensitiveLog)
  .ser(se_GetImageSetMetadataCommand)
  .de(de_GetImageSetMetadataCommand)
  .build() {
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
