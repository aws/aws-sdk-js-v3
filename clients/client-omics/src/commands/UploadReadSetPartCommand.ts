// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UploadReadSetPartRequest,
  UploadReadSetPartRequestFilterSensitiveLog,
  UploadReadSetPartResponse,
} from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_UploadReadSetPartCommand, se_UploadReadSetPartCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This operation uploads a specific part of a read set. If you upload a new part using a previously used part number, the previously uploaded part will be overwritten.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, UploadReadSetPartCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, UploadReadSetPartCommand } = require("@aws-sdk/client-omics"); // CommonJS import
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link NotSupportedOperationException} (client fault)
 *  <p> The operation is not supported by Amazon Omics, or the API does not exist. </p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
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
export class UploadReadSetPartCommand extends $Command
  .classBuilder<
    UploadReadSetPartCommandInput,
    UploadReadSetPartCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "UploadReadSetPart", {})
  .n("OmicsClient", "UploadReadSetPartCommand")
  .f(UploadReadSetPartRequestFilterSensitiveLog, void 0)
  .ser(se_UploadReadSetPartCommand)
  .de(de_UploadReadSetPartCommand)
  .build() {
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
