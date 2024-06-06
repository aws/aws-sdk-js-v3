// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListImageVersionsRequest, ListImageVersionsResponse } from "../models/models_3";
import { de_ListImageVersionsCommand, se_ListImageVersionsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImageVersionsCommand}.
 */
export interface ListImageVersionsCommandInput extends ListImageVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListImageVersionsCommand}.
 */
export interface ListImageVersionsCommandOutput extends ListImageVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists the versions of a specified image and their properties. The list can be filtered
 *         by creation time or modified time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListImageVersionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListImageVersionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListImageVersionsRequest
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   ImageName: "STRING_VALUE", // required
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SortBy: "CREATION_TIME" || "LAST_MODIFIED_TIME" || "VERSION",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 * };
 * const command = new ListImageVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListImageVersionsResponse
 * //   ImageVersions: [ // ImageVersions
 * //     { // ImageVersion
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       FailureReason: "STRING_VALUE",
 * //       ImageArn: "STRING_VALUE", // required
 * //       ImageVersionArn: "STRING_VALUE", // required
 * //       ImageVersionStatus: "CREATING" || "CREATED" || "CREATE_FAILED" || "DELETING" || "DELETE_FAILED", // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       Version: Number("int"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImageVersionsCommandInput - {@link ListImageVersionsCommandInput}
 * @returns {@link ListImageVersionsCommandOutput}
 * @see {@link ListImageVersionsCommandInput} for command's `input` shape.
 * @see {@link ListImageVersionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListImageVersionsCommand extends $Command
  .classBuilder<
    ListImageVersionsCommandInput,
    ListImageVersionsCommandOutput,
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
  .s("SageMaker", "ListImageVersions", {})
  .n("SageMakerClient", "ListImageVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListImageVersionsCommand)
  .de(de_ListImageVersionsCommand)
  .build() {}
