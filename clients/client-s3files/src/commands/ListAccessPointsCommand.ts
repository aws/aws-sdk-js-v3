// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAccessPointsRequest, ListAccessPointsResponse } from "../models/models_0";
import type { S3FilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3FilesClient";
import { ListAccessPoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessPointsCommand}.
 */
export interface ListAccessPointsCommandInput extends ListAccessPointsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessPointsCommand}.
 */
export interface ListAccessPointsCommandOutput extends ListAccessPointsResponse, __MetadataBearer {}

/**
 * <p>Returns resource information for all S3 File System Access Points associated with the specified S3 File System.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, ListAccessPointsCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, ListAccessPointsCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // ListAccessPointsRequest
 *   fileSystemId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAccessPointsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessPointsResponse
 * //   nextToken: "STRING_VALUE",
 * //   accessPoints: [ // AccessPoints // required
 * //     { // ListAccessPointsDescription
 * //       accessPointArn: "STRING_VALUE", // required
 * //       accessPointId: "STRING_VALUE", // required
 * //       fileSystemId: "STRING_VALUE", // required
 * //       status: "available" || "creating" || "deleting" || "deleted" || "error" || "updating", // required
 * //       ownerId: "STRING_VALUE", // required
 * //       posixUser: { // PosixUser
 * //         uid: Number("long"), // required
 * //         gid: Number("long"), // required
 * //         secondaryGids: [ // SecondaryGids
 * //           Number("long"),
 * //         ],
 * //       },
 * //       rootDirectory: { // RootDirectory
 * //         path: "STRING_VALUE",
 * //         creationPermissions: { // CreationPermissions
 * //           ownerUid: Number("long"), // required
 * //           ownerGid: Number("long"), // required
 * //           permissions: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAccessPointsCommandInput - {@link ListAccessPointsCommandInput}
 * @returns {@link ListAccessPointsCommandOutput}
 * @see {@link ListAccessPointsCommandInput} for command's `input` shape.
 * @see {@link ListAccessPointsCommandOutput} for command's `response` shape.
 * @see {@link S3FilesClientResolvedConfig | config} for S3FilesClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource exists and that you have permission to access it.</p>
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
export class ListAccessPointsCommand extends $Command
  .classBuilder<
    ListAccessPointsCommandInput,
    ListAccessPointsCommandOutput,
    S3FilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3FilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3Files", "ListAccessPoints", {})
  .n("S3FilesClient", "ListAccessPointsCommand")
  .sc(ListAccessPoints$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessPointsRequest;
      output: ListAccessPointsResponse;
    };
    sdk: {
      input: ListAccessPointsCommandInput;
      output: ListAccessPointsCommandOutput;
    };
  };
}
