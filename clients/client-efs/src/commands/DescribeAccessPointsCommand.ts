// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAccessPointsRequest, DescribeAccessPointsResponse } from "../models/models_0";
import { DescribeAccessPoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAccessPointsCommand}.
 */
export interface DescribeAccessPointsCommandInput extends DescribeAccessPointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccessPointsCommand}.
 */
export interface DescribeAccessPointsCommandOutput extends DescribeAccessPointsResponse, __MetadataBearer {}

/**
 * Returns the description of a specific Amazon EFS access point if the `AccessPointId` is provided. If you provide an EFS `FileSystemId`, it returns descriptions of all access points for that file system. You can provide either an `AccessPointId` or a `FileSystemId` in the request, but not both.
 *
 * This operation requires permissions for the `elasticfilesystem:DescribeAccessPoints` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeAccessPointsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeAccessPointsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // DescribeAccessPointsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   AccessPointId: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE",
 * };
 * const command = new DescribeAccessPointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccessPointsResponse
 * //   AccessPoints: [ // AccessPointDescriptions
 * //     { // AccessPointDescription
 * //       ClientToken: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       AccessPointId: "STRING_VALUE",
 * //       AccessPointArn: "STRING_VALUE",
 * //       FileSystemId: "STRING_VALUE",
 * //       PosixUser: { // PosixUser
 * //         Uid: Number("long"), // required
 * //         Gid: Number("long"), // required
 * //         SecondaryGids: [ // SecondaryGids
 * //           Number("long"),
 * //         ],
 * //       },
 * //       RootDirectory: { // RootDirectory
 * //         Path: "STRING_VALUE",
 * //         CreationInfo: { // CreationInfo
 * //           OwnerUid: Number("long"), // required
 * //           OwnerGid: Number("long"), // required
 * //           Permissions: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       OwnerId: "STRING_VALUE",
 * //       LifeCycleState: "creating" || "available" || "updating" || "deleting" || "deleted" || "error",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAccessPointsCommandInput - {@link DescribeAccessPointsCommandInput}
 * @returns {@link DescribeAccessPointsCommandOutput}
 * @see {@link DescribeAccessPointsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccessPointsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link AccessPointNotFound} (client fault)
 *
 * Returned if the specified `AccessPointId` value doesn't exist in the requester's Amazon Web Services account.
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
 * @public
 */
export class DescribeAccessPointsCommand extends command<DescribeAccessPointsCommandInput, DescribeAccessPointsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAccessPoints",
  DescribeAccessPoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccessPointsRequest;
      output: DescribeAccessPointsResponse;
    };
    sdk: {
      input: DescribeAccessPointsCommandInput;
      output: DescribeAccessPointsCommandOutput;
    };
  };
}
