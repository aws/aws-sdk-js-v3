// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetReadSetMetadataRequest, GetReadSetMetadataResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetReadSetMetadataCommand, se_GetReadSetMetadataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReadSetMetadataCommand}.
 */
export interface GetReadSetMetadataCommandInput extends GetReadSetMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetReadSetMetadataCommand}.
 */
export interface GetReadSetMetadataCommandOutput extends GetReadSetMetadataResponse, __MetadataBearer {}

/**
 * <p>Gets details about a read set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetReadSetMetadataCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetReadSetMetadataCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OmicsClient(config);
 * const input = { // GetReadSetMetadataRequest
 *   id: "STRING_VALUE", // required
 *   sequenceStoreId: "STRING_VALUE", // required
 * };
 * const command = new GetReadSetMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetReadSetMetadataResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   sequenceStoreId: "STRING_VALUE", // required
 * //   subjectId: "STRING_VALUE",
 * //   sampleId: "STRING_VALUE",
 * //   status: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   fileType: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   sequenceInformation: { // SequenceInformation
 * //     totalReadCount: Number("long"),
 * //     totalBaseCount: Number("long"),
 * //     generatedFrom: "STRING_VALUE",
 * //     alignment: "STRING_VALUE",
 * //   },
 * //   referenceArn: "STRING_VALUE",
 * //   files: { // ReadSetFiles
 * //     source1: { // FileInformation
 * //       totalParts: Number("int"),
 * //       partSize: Number("long"),
 * //       contentLength: Number("long"),
 * //       s3Access: { // ReadSetS3Access
 * //         s3Uri: "STRING_VALUE",
 * //       },
 * //     },
 * //     source2: {
 * //       totalParts: Number("int"),
 * //       partSize: Number("long"),
 * //       contentLength: Number("long"),
 * //       s3Access: {
 * //         s3Uri: "STRING_VALUE",
 * //       },
 * //     },
 * //     index: {
 * //       totalParts: Number("int"),
 * //       partSize: Number("long"),
 * //       contentLength: Number("long"),
 * //       s3Access: {
 * //         s3Uri: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   statusMessage: "STRING_VALUE",
 * //   creationType: "STRING_VALUE",
 * //   etag: { // ETag
 * //     algorithm: "STRING_VALUE",
 * //     source1: "STRING_VALUE",
 * //     source2: "STRING_VALUE",
 * //   },
 * //   creationJobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetReadSetMetadataCommandInput - {@link GetReadSetMetadataCommandInput}
 * @returns {@link GetReadSetMetadataCommandOutput}
 * @see {@link GetReadSetMetadataCommandInput} for command's `input` shape.
 * @see {@link GetReadSetMetadataCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
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
 * @public
 */
export class GetReadSetMetadataCommand extends $Command
  .classBuilder<
    GetReadSetMetadataCommandInput,
    GetReadSetMetadataCommandOutput,
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
  .s("Omics", "GetReadSetMetadata", {})
  .n("OmicsClient", "GetReadSetMetadataCommand")
  .f(void 0, void 0)
  .ser(se_GetReadSetMetadataCommand)
  .de(de_GetReadSetMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetReadSetMetadataRequest;
      output: GetReadSetMetadataResponse;
    };
    sdk: {
      input: GetReadSetMetadataCommandInput;
      output: GetReadSetMetadataCommandOutput;
    };
  };
}
