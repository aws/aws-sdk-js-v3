// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAccessPointsRequest, DescribeAccessPointsResponse } from "../models/models_0";
import { DescribeAccessPoints } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the description of a specific Amazon EFS access point if the
 *         <code>AccessPointId</code> is provided. If you provide an EFS
 *         <code>FileSystemId</code>, it returns descriptions of all access points for that file
 *       system. You can provide either an <code>AccessPointId</code> or a <code>FileSystemId</code> in
 *       the request, but not both. </p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>
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
 *  <p>Returned if the specified <code>AccessPointId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
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
 * @public
 */
export class DescribeAccessPointsCommand extends $Command
  .classBuilder<
    DescribeAccessPointsCommandInput,
    DescribeAccessPointsCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MagnolioAPIService_v20150201", "DescribeAccessPoints", {})
  .n("EFSClient", "DescribeAccessPointsCommand")
  .sc(DescribeAccessPoints)
  .build() {
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
