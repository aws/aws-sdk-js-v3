// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { de_TagResourceCommand, se_TagResourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceRequest {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {}

/**
 * <p>Tags an Amazon FSx resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, TagResourceCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, TagResourceCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // TagResourceRequest
 *   ResourceARN: "STRING_VALUE", // required
 *   Tags: [ // Tags // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link NotServiceResourceError} (client fault)
 *  <p>The resource specified for the tagging operation is not a resource type owned by
 *             Amazon FSx. Use the API of the relevant service to perform the operation. </p>
 *
 * @throws {@link ResourceDoesNotSupportTagging} (client fault)
 *  <p>The resource specified does not support tagging. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>The resource specified by the Amazon Resource Name (ARN) can't be found.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 * @public
 * @example To tag a resource
 * ```javascript
 * // This operation tags an Amazon FSx resource.
 * const input = {
 *   "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0498eed5fe91001ec",
 *   "Tags": [
 *     {
 *       "Key": "Name",
 *       "Value": "MyFileSystem"
 *     }
 *   ]
 * };
 * const command = new TagResourceCommand(input);
 * await client.send(command);
 * // example id: to-tag-a-fsx-resource-1481847318371
 * ```
 *
 */
export class TagResourceCommand extends $Command
  .classBuilder<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSimbaAPIService_v20180301", "TagResource", {})
  .n("FSxClient", "TagResourceCommand")
  .f(void 0, void 0)
  .ser(se_TagResourceCommand)
  .de(de_TagResourceCommand)
  .build() {}
