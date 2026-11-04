// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTagsRequest, DescribeTagsResponse } from "../models/models_0";
import { DescribeTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTagsCommand}.
 */
export interface DescribeTagsCommandInput extends DescribeTagsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTagsCommand}.
 */
export interface DescribeTagsCommandOutput extends DescribeTagsResponse, __MetadataBearer {}

/**
 * > **Note:** DEPRECATED - The `DescribeTags` action is deprecated and not maintained. To view tags associated with EFS resources, use the `ListTagsForResource` API action.
 *
 * Returns the tags associated with a file system. The order of tags returned in the response of one `DescribeTags` call and the order of tags returned across the responses of a multiple-call iteration (when using pagination) is unspecified.
 *
 * This operation requires permissions for the `elasticfilesystem:DescribeTags` action.
 *
 * @deprecated Use ListTagsForResource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeTagsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeTagsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // DescribeTagsRequest
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTagsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTagsResponse
 * //   Marker: "STRING_VALUE",
 * //   Tags: [ // Tags // required
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTagsCommandInput - {@link DescribeTagsCommandInput}
 * @returns {@link DescribeTagsCommandOutput}
 * @see {@link DescribeTagsCommandInput} for command's `input` shape.
 * @see {@link DescribeTagsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *
 * Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *
 * Returned if the specified `FileSystemId` value doesn't exist in the requester's Amazon Web Services account.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Returned if an error occurred on the server side.
 *
 * @throws {@link EFSServiceException}
 *
 * Base exception class for all service exceptions from EFS service.
 *
 * @example To describe the tags for a file system
 * ```javascript
 * // This operation describes all of a file system's tags.
 * const input = {
 *   FileSystemId: "fs-01234567"
 * };
 * const command = new DescribeTagsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Tags: [
 *     {
 *       Key: "Name",
 *       Value: "MyFileSystem"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeTagsCommand extends command<DescribeTagsCommandInput, DescribeTagsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTags",
  DescribeTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTagsRequest;
      output: DescribeTagsResponse;
    };
    sdk: {
      input: DescribeTagsCommandInput;
      output: DescribeTagsCommandOutput;
    };
  };
}
