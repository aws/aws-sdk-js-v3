// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import { GetImageFrameRequest, GetImageFrameResponse } from "../models/models_0";
import { GetImageFrame } from "../schemas/schemas_1_Image";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetImageFrameCommand}.
 */
export interface GetImageFrameCommandInput extends GetImageFrameRequest {}
/**
 * @public
 *
 * The output of {@link GetImageFrameCommand}.
 */
export interface GetImageFrameCommandOutput extends Omit<GetImageFrameResponse, "imageFrameBlob">, __MetadataBearer {
  imageFrameBlob: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Get an image frame (pixel data) for an image set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, GetImageFrameCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, GetImageFrameCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // import type { MedicalImagingClientConfig } from "@aws-sdk/client-medical-imaging";
 * const config = {}; // type is MedicalImagingClientConfig
 * const client = new MedicalImagingClient(config);
 * const input = { // GetImageFrameRequest
 *   datastoreId: "STRING_VALUE", // required
 *   imageSetId: "STRING_VALUE", // required
 *   imageFrameInformation: { // ImageFrameInformation
 *     imageFrameId: "STRING_VALUE", // required
 *   },
 * };
 * const command = new GetImageFrameCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.imageFrameBlob.transformToByteArray();
 * // const str = await response.imageFrameBlob.transformToString();
 * // response.imageFrameBlob.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // GetImageFrameResponse
 * //   imageFrameBlob: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes // required
 * //   contentType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImageFrameCommandInput - {@link GetImageFrameCommandInput}
 * @returns {@link GetImageFrameCommandOutput}
 * @see {@link GetImageFrameCommandInput} for command's `input` shape.
 * @see {@link GetImageFrameCommandOutput} for command's `response` shape.
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
export class GetImageFrameCommand extends $Command
  .classBuilder<
    GetImageFrameCommandInput,
    GetImageFrameCommandOutput,
    MedicalImagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MedicalImagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AHIGatewayService", "GetImageFrame", {})
  .n("MedicalImagingClient", "GetImageFrameCommand")
  .sc(GetImageFrame)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImageFrameRequest;
      output: GetImageFrameResponse;
    };
    sdk: {
      input: GetImageFrameCommandInput;
      output: GetImageFrameCommandOutput;
    };
  };
}
