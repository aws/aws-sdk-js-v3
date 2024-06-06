// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListImagesRequest, ListImagesResponse } from "../models/models_3";
import { de_ListImagesCommand, se_ListImagesCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImagesCommand}.
 */
export interface ListImagesCommandInput extends ListImagesRequest {}
/**
 * @public
 *
 * The output of {@link ListImagesCommand}.
 */
export interface ListImagesCommandOutput extends ListImagesResponse, __MetadataBearer {}

/**
 * <p>Lists the images in your account and their properties. The list can be filtered by
 *         creation time or modified time, and whether the image name contains a specified string.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListImagesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListImagesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListImagesRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   SortBy: "CREATION_TIME" || "LAST_MODIFIED_TIME" || "IMAGE_NAME",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 * };
 * const command = new ListImagesCommand(input);
 * const response = await client.send(command);
 * // { // ListImagesResponse
 * //   Images: [ // Images
 * //     { // Image
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       FailureReason: "STRING_VALUE",
 * //       ImageArn: "STRING_VALUE", // required
 * //       ImageName: "STRING_VALUE", // required
 * //       ImageStatus: "CREATING" || "CREATED" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED", // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImagesCommandInput - {@link ListImagesCommandInput}
 * @returns {@link ListImagesCommandOutput}
 * @see {@link ListImagesCommandInput} for command's `input` shape.
 * @see {@link ListImagesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListImagesCommand extends $Command
  .classBuilder<
    ListImagesCommandInput,
    ListImagesCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListImages", {})
  .n("SageMakerClient", "ListImagesCommand")
  .f(void 0, void 0)
  .ser(se_ListImagesCommand)
  .de(de_ListImagesCommand)
  .build() {}
