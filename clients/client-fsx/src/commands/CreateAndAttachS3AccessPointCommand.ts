// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAndAttachS3AccessPointRequest, CreateAndAttachS3AccessPointResponse } from "../models/models_0";
import { CreateAndAttachS3AccessPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAndAttachS3AccessPointCommand}.
 */
export interface CreateAndAttachS3AccessPointCommandInput extends CreateAndAttachS3AccessPointRequest {}
/**
 * @public
 *
 * The output of {@link CreateAndAttachS3AccessPointCommand}.
 */
export interface CreateAndAttachS3AccessPointCommandOutput extends CreateAndAttachS3AccessPointResponse, __MetadataBearer {}

/**
 * Creates an S3 access point and attaches it to an Amazon FSx volume. For FSx for OpenZFS file systems, the volume must be hosted on a high-availability file system, either Single-AZ or Multi-AZ. For more information, see [Accessing your data using Amazon S3 access points](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/s3accesspoints-for-FSx.html). in the Amazon FSx for OpenZFS User Guide.
 *
 * The requester requires the following permissions to perform these actions:
 *
 * - `fsx:CreateAndAttachS3AccessPoint`
 * - `s3:CreateAccessPoint`
 * - `s3:GetAccessPoint`
 * - `s3:PutAccessPointPolicy`
 * - `s3:DeleteAccessPoint`
 *
 * The following actions are related to `CreateAndAttachS3AccessPoint`:
 *
 * - DescribeS3AccessPointAttachments
 * - DetachAndDeleteS3AccessPoint
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateAndAttachS3AccessPointCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateAndAttachS3AccessPointCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // CreateAndAttachS3AccessPointRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Type: "OPENZFS" || "ONTAP", // required
 *   OpenZFSConfiguration: { // CreateAndAttachS3AccessPointOpenZFSConfiguration
 *     VolumeId: "STRING_VALUE", // required
 *     FileSystemIdentity: { // OpenZFSFileSystemIdentity
 *       Type: "POSIX", // required
 *       PosixUser: { // OpenZFSPosixFileSystemUser
 *         Uid: Number("long"), // required
 *         Gid: Number("long"), // required
 *         SecondaryGids: [ // FileSystemSecondaryGIDs
 *           Number("long"),
 *         ],
 *       },
 *     },
 *   },
 *   OntapConfiguration: { // CreateAndAttachS3AccessPointOntapConfiguration
 *     VolumeId: "STRING_VALUE", // required
 *     FileSystemIdentity: { // OntapFileSystemIdentity
 *       Type: "UNIX" || "WINDOWS", // required
 *       UnixUser: { // OntapUnixFileSystemUser
 *         Name: "STRING_VALUE", // required
 *       },
 *       WindowsUser: { // OntapWindowsFileSystemUser
 *         Name: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   S3AccessPoint: { // CreateAndAttachS3AccessPointS3Configuration
 *     VpcConfiguration: { // S3AccessPointVpcConfiguration
 *       VpcId: "STRING_VALUE",
 *     },
 *     Policy: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAndAttachS3AccessPointCommand(input);
 * const response = await client.send(command);
 * // { // CreateAndAttachS3AccessPointResponse
 * //   S3AccessPointAttachment: { // S3AccessPointAttachment
 * //     Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "UPDATING" || "FAILED" || "MISCONFIGURED",
 * //     LifecycleTransitionReason: { // LifecycleTransitionReason
 * //       Message: "STRING_VALUE",
 * //     },
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Name: "STRING_VALUE",
 * //     Type: "OPENZFS" || "ONTAP",
 * //     OpenZFSConfiguration: { // S3AccessPointOpenZFSConfiguration
 * //       VolumeId: "STRING_VALUE",
 * //       FileSystemIdentity: { // OpenZFSFileSystemIdentity
 * //         Type: "POSIX", // required
 * //         PosixUser: { // OpenZFSPosixFileSystemUser
 * //           Uid: Number("long"), // required
 * //           Gid: Number("long"), // required
 * //           SecondaryGids: [ // FileSystemSecondaryGIDs
 * //             Number("long"),
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     OntapConfiguration: { // S3AccessPointOntapConfiguration
 * //       VolumeId: "STRING_VALUE",
 * //       FileSystemIdentity: { // OntapFileSystemIdentity
 * //         Type: "UNIX" || "WINDOWS", // required
 * //         UnixUser: { // OntapUnixFileSystemUser
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //         WindowsUser: { // OntapWindowsFileSystemUser
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //     S3AccessPoint: { // S3AccessPoint
 * //       ResourceARN: "STRING_VALUE",
 * //       Alias: "STRING_VALUE",
 * //       VpcConfiguration: { // S3AccessPointVpcConfiguration
 * //         VpcId: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAndAttachS3AccessPointCommandInput - {@link CreateAndAttachS3AccessPointCommandInput}
 * @returns {@link CreateAndAttachS3AccessPointCommandOutput}
 * @see {@link CreateAndAttachS3AccessPointCommandInput} for command's `input` shape.
 * @see {@link CreateAndAttachS3AccessPointCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link AccessPointAlreadyOwnedByYou} (client fault)
 *
 * An access point with that name already exists in the Amazon Web Services Region in your Amazon Web Services account.
 *
 * @throws {@link BadRequest} (client fault)
 *
 * A generic error indicating a failure with a client request.
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *
 * The error returned when a second request is received with the same client request token but different parameters settings. A client request token should always uniquely identify a single request.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * A generic error indicating a server-side failure.
 *
 * @throws {@link InvalidAccessPoint} (client fault)
 *
 * The access point specified doesn't exist.
 *
 * @throws {@link InvalidRequest} (client fault)
 *
 * The action or operation requested is invalid. Verify that the action is typed correctly.
 *
 * @throws {@link TooManyAccessPoints} (client fault)
 *
 * You have reached the maximum number of S3 access points attachments allowed for your account in this Amazon Web Services Region, or for the file system. For more information, or to request an increase, see [Service quotas on FSx resources](https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/limits.html) in the FSx for OpenZFS User Guide.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * The requested operation is not supported for this resource or API.
 *
 * @throws {@link VolumeNotFound} (client fault)
 *
 * No Amazon FSx volumes were found based upon the supplied parameters.
 *
 * @throws {@link FSxServiceException}
 *
 * Base exception class for all service exceptions from FSx service.
 *
 * @public
 */
export class CreateAndAttachS3AccessPointCommand extends command<CreateAndAttachS3AccessPointCommandInput, CreateAndAttachS3AccessPointCommandOutput>(
  _ep0,
  _mw0,
  "CreateAndAttachS3AccessPoint",
  CreateAndAttachS3AccessPoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAndAttachS3AccessPointRequest;
      output: CreateAndAttachS3AccessPointResponse;
    };
    sdk: {
      input: CreateAndAttachS3AccessPointCommandInput;
      output: CreateAndAttachS3AccessPointCommandOutput;
    };
  };
}
