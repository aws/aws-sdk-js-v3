// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import type {
  DescribeS3AccessPointAttachmentsRequest,
  DescribeS3AccessPointAttachmentsResponse,
} from "../models/models_0";
import { DescribeS3AccessPointAttachments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeS3AccessPointAttachmentsCommand}.
 */
export interface DescribeS3AccessPointAttachmentsCommandInput extends DescribeS3AccessPointAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeS3AccessPointAttachmentsCommand}.
 */
export interface DescribeS3AccessPointAttachmentsCommandOutput
  extends DescribeS3AccessPointAttachmentsResponse,
    __MetadataBearer {}

/**
 * <p>Describes one or more S3 access points attached to Amazon FSx volumes.</p>
 *          <p>The requester requires the following permission to perform this action:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>fsx:DescribeS3AccessPointAttachments</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeS3AccessPointAttachmentsCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeS3AccessPointAttachmentsCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DescribeS3AccessPointAttachmentsRequest
 *   Names: [ // S3AccessPointAttachmentNames
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // S3AccessPointAttachmentsFilters
 *     { // S3AccessPointAttachmentsFilter
 *       Name: "file-system-id" || "volume-id" || "type",
 *       Values: [ // S3AccessPointAttachmentsFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeS3AccessPointAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeS3AccessPointAttachmentsResponse
 * //   S3AccessPointAttachments: [ // S3AccessPointAttachments
 * //     { // S3AccessPointAttachment
 * //       Lifecycle: "AVAILABLE" || "CREATING" || "DELETING" || "UPDATING" || "FAILED" || "MISCONFIGURED",
 * //       LifecycleTransitionReason: { // LifecycleTransitionReason
 * //         Message: "STRING_VALUE",
 * //       },
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE",
 * //       Type: "OPENZFS" || "ONTAP",
 * //       OpenZFSConfiguration: { // S3AccessPointOpenZFSConfiguration
 * //         VolumeId: "STRING_VALUE",
 * //         FileSystemIdentity: { // OpenZFSFileSystemIdentity
 * //           Type: "POSIX", // required
 * //           PosixUser: { // OpenZFSPosixFileSystemUser
 * //             Uid: Number("long"), // required
 * //             Gid: Number("long"), // required
 * //             SecondaryGids: [ // FileSystemSecondaryGIDs
 * //               Number("long"),
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       OntapConfiguration: { // S3AccessPointOntapConfiguration
 * //         VolumeId: "STRING_VALUE",
 * //         FileSystemIdentity: { // OntapFileSystemIdentity
 * //           Type: "UNIX" || "WINDOWS", // required
 * //           UnixUser: { // OntapUnixFileSystemUser
 * //             Name: "STRING_VALUE", // required
 * //           },
 * //           WindowsUser: { // OntapWindowsFileSystemUser
 * //             Name: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //       S3AccessPoint: { // S3AccessPoint
 * //         ResourceARN: "STRING_VALUE",
 * //         Alias: "STRING_VALUE",
 * //         VpcConfiguration: { // S3AccessPointVpcConfiguration
 * //           VpcId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeS3AccessPointAttachmentsCommandInput - {@link DescribeS3AccessPointAttachmentsCommandInput}
 * @returns {@link DescribeS3AccessPointAttachmentsCommandOutput}
 * @see {@link DescribeS3AccessPointAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeS3AccessPointAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link S3AccessPointAttachmentNotFound} (client fault)
 *  <p>The access point specified was not found.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class DescribeS3AccessPointAttachmentsCommand extends $Command
  .classBuilder<
    DescribeS3AccessPointAttachmentsCommandInput,
    DescribeS3AccessPointAttachmentsCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSimbaAPIService_v20180301", "DescribeS3AccessPointAttachments", {})
  .n("FSxClient", "DescribeS3AccessPointAttachmentsCommand")
  .sc(DescribeS3AccessPointAttachments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeS3AccessPointAttachmentsRequest;
      output: DescribeS3AccessPointAttachmentsResponse;
    };
    sdk: {
      input: DescribeS3AccessPointAttachmentsCommandInput;
      output: DescribeS3AccessPointAttachmentsCommandOutput;
    };
  };
}
