// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetReferenceMetadataRequest, GetReferenceMetadataResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetReferenceMetadataCommand, se_GetReferenceMetadataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetReferenceMetadataCommand}.
 */
export interface GetReferenceMetadataCommandInput extends GetReferenceMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetReferenceMetadataCommand}.
 */
export interface GetReferenceMetadataCommandOutput extends GetReferenceMetadataResponse, __MetadataBearer {}

/**
 * <p>Gets information about a genome reference's metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetReferenceMetadataCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetReferenceMetadataCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // GetReferenceMetadataRequest
 *   id: "STRING_VALUE", // required
 *   referenceStoreId: "STRING_VALUE", // required
 * };
 * const command = new GetReferenceMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetReferenceMetadataResponse
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   referenceStoreId: "STRING_VALUE", // required
 * //   md5: "STRING_VALUE", // required
 * //   status: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   files: { // ReferenceFiles
 * //     source: { // FileInformation
 * //       totalParts: Number("int"),
 * //       partSize: Number("long"),
 * //       contentLength: Number("long"),
 * //       s3Access: { // ReadSetS3Access
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
 * // };
 *
 * ```
 *
 * @param GetReferenceMetadataCommandInput - {@link GetReferenceMetadataCommandInput}
 * @returns {@link GetReferenceMetadataCommandOutput}
 * @see {@link GetReferenceMetadataCommandInput} for command's `input` shape.
 * @see {@link GetReferenceMetadataCommandOutput} for command's `response` shape.
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
export class GetReferenceMetadataCommand extends $Command
  .classBuilder<
    GetReferenceMetadataCommandInput,
    GetReferenceMetadataCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "GetReferenceMetadata", {})
  .n("OmicsClient", "GetReferenceMetadataCommand")
  .f(void 0, void 0)
  .ser(se_GetReferenceMetadataCommand)
  .de(de_GetReferenceMetadataCommand)
  .build() {}
