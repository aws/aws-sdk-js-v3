// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetReferenceRequest, GetReferenceResponse } from "../models/models_0";
import { GetReference$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Downloads parts of data from a reference genome and returns the reference file in the same format that it was uploaded.
 *
 * For more information, see [Creating a HealthOmics reference store](https://docs.aws.amazon.com/omics/latest/dev/create-reference-store.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RangeNotSatisfiableException} (client fault)
 *
 * The ranges specified in the request are not valid.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class GetReferenceCommand extends command<GetReferenceCommandInput, GetReferenceCommandOutput>(
  _ep0,
  _mw0,
  "GetReference",
  GetReference$
) {
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
