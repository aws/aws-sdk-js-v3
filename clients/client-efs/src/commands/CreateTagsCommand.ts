// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTagsRequest } from "../models/models_0";
import { CreateTags } from "../schemas/schemas_1_Tags";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTagsCommand}.
 */
export interface CreateTagsCommandInput extends CreateTagsRequest {}
/**
 * @public
 *
 * The output of {@link CreateTagsCommand}.
 */
export interface CreateTagsCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>DEPRECATED - <code>CreateTags</code> is deprecated and not maintained. To create tags for EFS
 *         resources, use the  API action.</p>
 *          </note>
 *          <p>Creates or overwrites tags associated with a file system. Each tag is a key-value pair. If
 *       a tag key specified in the request already exists on the file system, this operation
 *       overwrites its value with the value provided in the request. If you add the <code>Name</code>
 *       tag to your file system, Amazon EFS returns it in the response to the <a>DescribeFileSystems</a> operation. </p>
 *          <p>This operation requires permission for the <code>elasticfilesystem:CreateTags</code>
 *       action.</p>
 *
 * @deprecated Use TagResource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, CreateTagsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, CreateTagsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // CreateTagsRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   Tags: [ // Tags // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateTagsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateTagsCommandInput - {@link CreateTagsCommandInput}
 * @returns {@link CreateTagsCommandOutput}
 * @see {@link CreateTagsCommandInput} for command's `input` shape.
 * @see {@link CreateTagsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 *
 * @example To create a new tag
 * ```javascript
 * // This operation creates a new tag for an EFS file system.
 * const input = {
 *   FileSystemId: "fs-01234567",
 *   Tags: [
 *     {
 *       Key: "Name",
 *       Value: "MyFileSystem"
 *     }
 *   ]
 * };
 * const command = new CreateTagsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CreateTagsCommand extends $Command
  .classBuilder<
    CreateTagsCommandInput,
    CreateTagsCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MagnolioAPIService_v20150201", "CreateTags", {})
  .n("EFSClient", "CreateTagsCommand")
  .sc(CreateTags)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTagsRequest;
      output: {};
    };
    sdk: {
      input: CreateTagsCommandInput;
      output: CreateTagsCommandOutput;
    };
  };
}
