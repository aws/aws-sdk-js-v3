// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AccessPointDescription, CreateAccessPointRequest } from "../models/models_0";
import { CreateAccessPoint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessPointCommand}.
 */
export interface CreateAccessPointCommandInput extends CreateAccessPointRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessPointCommand}.
 */
export interface CreateAccessPointCommandOutput extends AccessPointDescription, __MetadataBearer {}

/**
 * <p>Creates an EFS access point. An access point is an application-specific view
 *       into an EFS file system that applies an operating system user and group, and a file
 *       system path, to any file system request made through the access point. The operating system
 *       user and group override any identity information provided by the NFS client. The file system
 *       path is exposed as the access point's root directory. Applications using the access point can
 *       only access data in the application's own directory and any subdirectories. A file system can
 *       have a maximum of 10,000 access points unless you request an increase. To learn more, see
 *         <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Mounting a file
 *         system using EFS access points</a>.</p>
 *          <note>
 *             <p>If multiple requests to create access points on the same file system are sent in quick
 *         succession, and the file system is near the limit of access points, you may experience a
 *         throttling response for these requests. This is to ensure that the file system does not
 *         exceed the stated access point limit.</p>
 *          </note>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:CreateAccessPoint</code> action.</p>
 *          <p>Access points can be tagged on creation. If tags are specified in the creation action, IAM
 *       performs additional authorization on the <code>elasticfilesystem:TagResource</code> action to
 *       verify if users have permissions to create tags. Therefore, you must grant explicit
 *       permissions to use the <code>elasticfilesystem:TagResource</code> action. For more
 *       information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/using-tags-efs.html#supported-iam-actions-tagging.html">Granting
 *         permissions to tag resources during creation</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, CreateAccessPointCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, CreateAccessPointCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // CreateAccessPointRequest
 *   ClientToken: "STRING_VALUE", // required
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   FileSystemId: "STRING_VALUE", // required
 *   PosixUser: { // PosixUser
 *     Uid: Number("long"), // required
 *     Gid: Number("long"), // required
 *     SecondaryGids: [ // SecondaryGids
 *       Number("long"),
 *     ],
 *   },
 *   RootDirectory: { // RootDirectory
 *     Path: "STRING_VALUE",
 *     CreationInfo: { // CreationInfo
 *       OwnerUid: Number("long"), // required
 *       OwnerGid: Number("long"), // required
 *       Permissions: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateAccessPointCommand(input);
 * const response = await client.send(command);
 * // { // AccessPointDescription
 * //   ClientToken: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Tags: [ // Tags
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   AccessPointId: "STRING_VALUE",
 * //   AccessPointArn: "STRING_VALUE",
 * //   FileSystemId: "STRING_VALUE",
 * //   PosixUser: { // PosixUser
 * //     Uid: Number("long"), // required
 * //     Gid: Number("long"), // required
 * //     SecondaryGids: [ // SecondaryGids
 * //       Number("long"),
 * //     ],
 * //   },
 * //   RootDirectory: { // RootDirectory
 * //     Path: "STRING_VALUE",
 * //     CreationInfo: { // CreationInfo
 * //       OwnerUid: Number("long"), // required
 * //       OwnerGid: Number("long"), // required
 * //       Permissions: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   OwnerId: "STRING_VALUE",
 * //   LifeCycleState: "creating" || "available" || "updating" || "deleting" || "deleted" || "error",
 * // };
 *
 * ```
 *
 * @param CreateAccessPointCommandInput - {@link CreateAccessPointCommandInput}
 * @returns {@link CreateAccessPointCommandOutput}
 * @see {@link CreateAccessPointCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPointCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link AccessPointAlreadyExists} (client fault)
 *  <p>Returned if the access point that you are trying to create already exists, with the
 *             creation token you provided in the request.</p>
 *
 * @throws {@link AccessPointLimitExceeded} (client fault)
 *  <p>Returned if the Amazon Web Services account has already created the maximum number of access points
 *             allowed per file system. For more informaton, see <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#limits-efs-resources-per-account-per-region">https://docs.aws.amazon.com/efs/latest/ug/limits.html#limits-efs-resources-per-account-per-region</a>.</p>
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link IncorrectFileSystemLifeCycleState} (client fault)
 *  <p>Returned if the file system's lifecycle state is not "available".</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Returned when the <code>CreateAccessPoint</code> API action is called too quickly and
 *             the number of Access Points on the file system is nearing the
 *             <a href="https://docs.aws.amazon.com/efs/latest/ug/limits.html#limits-efs-resources-per-account-per-region">limit of 120</a>.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 *
 * @public
 */
export class CreateAccessPointCommand extends $Command
  .classBuilder<
    CreateAccessPointCommandInput,
    CreateAccessPointCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MagnolioAPIService_v20150201", "CreateAccessPoint", {})
  .n("EFSClient", "CreateAccessPointCommand")
  .sc(CreateAccessPoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessPointRequest;
      output: AccessPointDescription;
    };
    sdk: {
      input: CreateAccessPointCommandInput;
      output: CreateAccessPointCommandOutput;
    };
  };
}
