// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetReferenceRequest, GetReferenceResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { GetReference } from "../schemas/schemas_6_Reference";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReferenceCommand}.
 */
export interface GetReferenceCommandInput extends GetReferenceRequest {}
/**
 * @public
 *
 * The output of {@link GetReferenceCommand}.
 */
export interface GetReferenceCommandOutput extends Omit<GetReferenceResponse, "payload">, __MetadataBearer {
  payload?: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Downloads parts of data from a reference genome and returns the reference file in the same format that it was uploaded.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/create-reference-store.html">Creating a HealthOmics reference store</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetReferenceCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetReferenceCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetReferenceRequest
 *   id: "STRING_VALUE", // required
 *   referenceStoreId: "STRING_VALUE", // required
 *   range: "STRING_VALUE",
 *   partNumber: Number("int"), // required
 *   file: "STRING_VALUE",
 * };
 * const command = new GetReferenceCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.payload.transformToByteArray();
 * // const str = await response.payload.transformToString();
 * // response.payload.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // GetReferenceResponse
 * //   payload: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * // };
 *
 * ```
 *
 * @param GetReferenceCommandInput - {@link GetReferenceCommandInput}
 * @returns {@link GetReferenceCommandOutput}
 * @see {@link GetReferenceCommandInput} for command's `input` shape.
 * @see {@link GetReferenceCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RangeNotSatisfiableException} (client fault)
 *  <p>The ranges specified in the request are not valid.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class GetReferenceCommand extends $Command
  .classBuilder<
    GetReferenceCommandInput,
    GetReferenceCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "GetReference", {})
  .n("OmicsClient", "GetReferenceCommand")
  .sc(GetReference)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReferenceRequest;
      output: GetReferenceResponse;
    };
    sdk: {
      input: GetReferenceCommandInput;
      output: GetReferenceCommandOutput;
    };
  };
}
