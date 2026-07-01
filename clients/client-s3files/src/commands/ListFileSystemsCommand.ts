// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFileSystemsRequest, ListFileSystemsResponse } from "../models/models_0";
import { ListFileSystems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFileSystemsCommand}.
 */
export interface ListFileSystemsCommandInput extends ListFileSystemsRequest {}
/**
 * @public
 *
 * The output of {@link ListFileSystemsCommand}.
 */
export interface ListFileSystemsCommandOutput extends ListFileSystemsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all S3 File Systems owned by the account with optional filtering by bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, ListFileSystemsCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, ListFileSystemsCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // ListFileSystemsRequest
 *   bucket: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFileSystemsCommand(input);
 * const response = await client.send(command);
 * // { // ListFileSystemsResponse
 * //   nextToken: "STRING_VALUE",
 * //   fileSystems: [ // FileSystems // required
 * //     { // ListFileSystemsDescription
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       fileSystemArn: "STRING_VALUE", // required
 * //       fileSystemId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       bucket: "STRING_VALUE", // required
 * //       status: "available" || "creating" || "deleting" || "deleted" || "error" || "updating", // required
 * //       statusMessage: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE", // required
 * //       ownerId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFileSystemsCommandInput - {@link ListFileSystemsCommandInput}
 * @returns {@link ListFileSystemsCommandOutput}
 * @see {@link ListFileSystemsCommandInput} for command's `input` shape.
 * @see {@link ListFileSystemsCommandOutput} for command's `response` shape.
 * @see {@link S3FilesClientResolvedConfig | config} for S3FilesClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are not valid. Check the parameter values and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Retry your request using exponential backoff.</p>
 *
 * @throws {@link S3FilesServiceException}
 * <p>Base exception class for all service exceptions from S3Files service.</p>
 *
 *
 * @public
 */
export class ListFileSystemsCommand extends command<ListFileSystemsCommandInput, ListFileSystemsCommandOutput>(
  _ep0,
  _mw0,
  "ListFileSystems",
  ListFileSystems$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFileSystemsRequest;
      output: ListFileSystemsResponse;
    };
    sdk: {
      input: ListFileSystemsCommandInput;
      output: ListFileSystemsCommandOutput;
    };
  };
}
