// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMultipartReadSetUploadRequest, CreateMultipartReadSetUploadResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  de_CreateMultipartReadSetUploadCommand,
  se_CreateMultipartReadSetUploadCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMultipartReadSetUploadCommand}.
 */
export interface CreateMultipartReadSetUploadCommandInput extends CreateMultipartReadSetUploadRequest {}
/**
 * @public
 *
 * The output of {@link CreateMultipartReadSetUploadCommand}.
 */
export interface CreateMultipartReadSetUploadCommandOutput
  extends CreateMultipartReadSetUploadResponse,
    __MetadataBearer {}

/**
 * <p>Begins a multipart read set upload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateMultipartReadSetUploadCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateMultipartReadSetUploadCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // CreateMultipartReadSetUploadRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   sourceFileType: "STRING_VALUE", // required
 *   subjectId: "STRING_VALUE", // required
 *   sampleId: "STRING_VALUE", // required
 *   generatedFrom: "STRING_VALUE",
 *   referenceArn: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMultipartReadSetUploadCommand(input);
 * const response = await client.send(command);
 * // { // CreateMultipartReadSetUploadResponse
 * //   sequenceStoreId: "STRING_VALUE", // required
 * //   uploadId: "STRING_VALUE", // required
 * //   sourceFileType: "STRING_VALUE", // required
 * //   subjectId: "STRING_VALUE", // required
 * //   sampleId: "STRING_VALUE", // required
 * //   generatedFrom: "STRING_VALUE",
 * //   referenceArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateMultipartReadSetUploadCommandInput - {@link CreateMultipartReadSetUploadCommandInput}
 * @returns {@link CreateMultipartReadSetUploadCommandOutput}
 * @see {@link CreateMultipartReadSetUploadCommandInput} for command's `input` shape.
 * @see {@link CreateMultipartReadSetUploadCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link NotSupportedOperationException} (client fault)
 *  <p>
 *       The operation is not supported by Amazon Omics, or the API does not exist.
 *     </p>
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
export class CreateMultipartReadSetUploadCommand extends $Command
  .classBuilder<
    CreateMultipartReadSetUploadCommandInput,
    CreateMultipartReadSetUploadCommandOutput,
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
  .s("Omics", "CreateMultipartReadSetUpload", {})
  .n("OmicsClient", "CreateMultipartReadSetUploadCommand")
  .f(void 0, void 0)
  .ser(se_CreateMultipartReadSetUploadCommand)
  .de(de_CreateMultipartReadSetUploadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMultipartReadSetUploadRequest;
      output: CreateMultipartReadSetUploadResponse;
    };
    sdk: {
      input: CreateMultipartReadSetUploadCommandInput;
      output: CreateMultipartReadSetUploadCommandOutput;
    };
  };
}
