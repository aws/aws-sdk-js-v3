// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CreateAndAttachS3AccessPointRequest, CreateAndAttachS3AccessPointResponse } from "../models/models_0";
import {
  de_CreateAndAttachS3AccessPointCommand,
  se_CreateAndAttachS3AccessPointCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CreateAndAttachS3AccessPointCommandOutput
  extends CreateAndAttachS3AccessPointResponse,
    __MetadataBearer {}

/**
 * <p>Creates an S3 access point and attaches it to an Amazon FSx volume. For FSx for OpenZFS file systems, the
 *          volume must be hosted on a high-availability file system, either Single-AZ or Multi-AZ. For more information,
 *          see <a href="fsx/latest/OpenZFSGuide/s3accesspoints-for-FSx.html">Accessing your data using  access points</a>
 *          in the Amazon FSx for OpenZFS User Guide.
 *       </p>
 *          <p>The requester requires the following permissions to perform these actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>fsx:CreateAndAttachS3AccessPoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>s3:CreateAccessPoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>s3:GetAccessPoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>s3:PutAccessPointPolicy</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>s3:DeleteAccessPoint</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>The following actions are related to <code>CreateAndAttachS3AccessPoint</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeS3AccessPointAttachments</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DetachAndDeleteS3AccessPoint</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateAndAttachS3AccessPointCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateAndAttachS3AccessPointCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // CreateAndAttachS3AccessPointRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Type: "OPENZFS", // required
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
 * //     Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "UPDATING" || "FAILED",
 * //     LifecycleTransitionReason: { // LifecycleTransitionReason
 * //       Message: "STRING_VALUE",
 * //     },
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Name: "STRING_VALUE",
 * //     Type: "OPENZFS",
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
 *  <p>An access point with that name already exists in the Amazon Web Services Region in your Amazon Web Services account.</p>
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link InvalidAccessPoint} (client fault)
 *  <p>The access point specified doesn't exist.</p>
 *
 * @throws {@link InvalidRequest} (client fault)
 *  <p>The action or operation requested is invalid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link TooManyAccessPoints} (client fault)
 *  <p>You have reached the maximum number of S3 access points attachments allowed for your account in this Amazon Web Services Region, or for the file system. For more information, or to request an increase,
 *          see <a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/limits.html">Service quotas on FSx resources</a> in the FSx for OpenZFS User Guide.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link VolumeNotFound} (client fault)
 *  <p>No Amazon FSx volumes were found based upon the supplied parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class CreateAndAttachS3AccessPointCommand extends $Command
  .classBuilder<
    CreateAndAttachS3AccessPointCommandInput,
    CreateAndAttachS3AccessPointCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSimbaAPIService_v20180301", "CreateAndAttachS3AccessPoint", {})
  .n("FSxClient", "CreateAndAttachS3AccessPointCommand")
  .f(void 0, void 0)
  .ser(se_CreateAndAttachS3AccessPointCommand)
  .de(de_CreateAndAttachS3AccessPointCommand)
  .build() {
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
