// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UploadReadSetPartRequest, UploadReadSetPartResponse } from "../models/models_0";
import { UploadReadSetPart$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UploadReadSetPartCommand}.
 */
export interface UploadReadSetPartCommandInput extends Omit<UploadReadSetPartRequest, "payload"> {
  payload: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link UploadReadSetPartCommand}.
 */
export interface UploadReadSetPartCommandOutput extends UploadReadSetPartResponse, __MetadataBearer {}

/**
 * Uploads a specific part of a read set into a sequence store. When you a upload a read set part with a part number that already exists, the new part replaces the existing one. This operation returns a JSON formatted response containing a string identifier that is used to confirm that parts are being added to the intended upload.
 *
 * For more information, see [Direct upload to a sequence store](https://docs.aws.amazon.com/omics/latest/dev/synchronous-uploads.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, UploadReadSetPartCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, UploadReadSetPartCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // UploadReadSetPartRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 *   partSource: "STRING_VALUE", // required
 *   partNumber: Number("int"), // required
 *   payload: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes // required
 * };
 * const command = new UploadReadSetPartCommand(input);
 * const response = await client.send(command);
 * // { // UploadReadSetPartResponse
 * //   checksum: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UploadReadSetPartCommandInput - {@link UploadReadSetPartCommandInput}
 * @returns {@link UploadReadSetPartCommandOutput}
 * @see {@link UploadReadSetPartCommandInput} for command's `input` shape.
 * @see {@link UploadReadSetPartCommandOutput} for command's `response` shape.
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
 * @throws {@link NotSupportedOperationException} (client fault)
 *
 * The operation is not supported by Amazon Omics, or the API does not exist.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
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
export class UploadReadSetPartCommand extends command<UploadReadSetPartCommandInput, UploadReadSetPartCommandOutput>(
  _ep0,
  _mw0,
  "UploadReadSetPart",
  UploadReadSetPart$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UploadReadSetPartRequest;
      output: UploadReadSetPartResponse;
    };
    sdk: {
      input: UploadReadSetPartCommandInput;
      output: UploadReadSetPartCommandOutput;
    };
  };
}
