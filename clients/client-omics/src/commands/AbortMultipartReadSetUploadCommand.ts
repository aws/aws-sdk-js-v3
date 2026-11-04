// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AbortMultipartReadSetUploadRequest, AbortMultipartReadSetUploadResponse } from "../models/models_0";
import { AbortMultipartReadSetUpload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AbortMultipartReadSetUploadCommand}.
 */
export interface AbortMultipartReadSetUploadCommandInput extends AbortMultipartReadSetUploadRequest {}
/**
 * @public
 *
 * The output of {@link AbortMultipartReadSetUploadCommand}.
 */
export interface AbortMultipartReadSetUploadCommandOutput extends AbortMultipartReadSetUploadResponse, __MetadataBearer {}

/**
 * Stops a multipart read set upload into a sequence store and returns a response with no body if the operation is successful. To confirm that a multipart read set upload has been stopped, use the `ListMultipartReadSetUploads` API operation to view all active multipart read set uploads.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, AbortMultipartReadSetUploadCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, AbortMultipartReadSetUploadCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // AbortMultipartReadSetUploadRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   uploadId: "STRING_VALUE", // required
 * };
 * const command = new AbortMultipartReadSetUploadCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AbortMultipartReadSetUploadCommandInput - {@link AbortMultipartReadSetUploadCommandInput}
 * @returns {@link AbortMultipartReadSetUploadCommandOutput}
 * @see {@link AbortMultipartReadSetUploadCommandInput} for command's `input` shape.
 * @see {@link AbortMultipartReadSetUploadCommandOutput} for command's `response` shape.
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
export class AbortMultipartReadSetUploadCommand extends command<AbortMultipartReadSetUploadCommandInput, AbortMultipartReadSetUploadCommandOutput>(
  _ep0,
  _mw0,
  "AbortMultipartReadSetUpload",
  AbortMultipartReadSetUpload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AbortMultipartReadSetUploadRequest;
      output: {};
    };
    sdk: {
      input: AbortMultipartReadSetUploadCommandInput;
      output: AbortMultipartReadSetUploadCommandOutput;
    };
  };
}
