// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeFileSystemsRequest, DescribeFileSystemsResponse } from "../models/models_0";
import { DescribeFileSystems } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFileSystemsCommand}.
 */
export interface DescribeFileSystemsCommandInput extends DescribeFileSystemsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFileSystemsCommand}.
 */
export interface DescribeFileSystemsCommandOutput extends DescribeFileSystemsResponse, __MetadataBearer {}

/**
 * <p>Returns the description of a specific Amazon EFS file system if either the file system
 *         <code>CreationToken</code> or the <code>FileSystemId</code> is provided. Otherwise, it
 *       returns descriptions of all file systems owned by the caller's Amazon Web Services account in the
 *       Amazon Web Services Region of the endpoint that you're calling.</p>
 *          <p>When retrieving all file system descriptions, you can optionally specify the
 *         <code>MaxItems</code> parameter to limit the number of descriptions in a response.
 *       This number is automatically set to 100. If more file system descriptions remain,
 *       Amazon EFS returns a <code>NextMarker</code>, an opaque token, in the response. In this case,
 *       you should send a subsequent request with the <code>Marker</code> request parameter set to the
 *       value of <code>NextMarker</code>. </p>
 *          <p>To retrieve a list of your file system descriptions, this operation is used in an
 *       iterative process, where <code>DescribeFileSystems</code> is called first without the
 *         <code>Marker</code> and then the operation continues to call it with the <code>Marker</code>
 *       parameter set to the value of the <code>NextMarker</code> from the previous response until the
 *       response has no <code>NextMarker</code>. </p>
 *          <p> The order of file systems returned in the response of one
 *         <code>DescribeFileSystems</code> call and the order of file systems returned across the
 *       responses of a multi-call iteration is unspecified. </p>
 *          <p> This operation requires permissions for the
 *         <code>elasticfilesystem:DescribeFileSystems</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeFileSystemsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeFileSystemsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // DescribeFileSystemsRequest
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 *   CreationToken: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE",
 * };
 * const command = new DescribeFileSystemsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFileSystemsResponse
 * //   Marker: "STRING_VALUE",
 * //   FileSystems: [ // FileSystemDescriptions
 * //     { // FileSystemDescription
 * //       OwnerId: "STRING_VALUE", // required
 * //       CreationToken: "STRING_VALUE", // required
 * //       FileSystemId: "STRING_VALUE", // required
 * //       FileSystemArn: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LifeCycleState: "creating" || "available" || "updating" || "deleting" || "deleted" || "error", // required
 * //       Name: "STRING_VALUE",
 * //       NumberOfMountTargets: Number("int"), // required
 * //       SizeInBytes: { // FileSystemSize
 * //         Value: Number("long"), // required
 * //         Timestamp: new Date("TIMESTAMP"),
 * //         ValueInIA: Number("long"),
 * //         ValueInStandard: Number("long"),
 * //         ValueInArchive: Number("long"),
 * //       },
 * //       PerformanceMode: "generalPurpose" || "maxIO", // required
 * //       Encrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       ThroughputMode: "bursting" || "provisioned" || "elastic",
 * //       ProvisionedThroughputInMibps: Number("double"),
 * //       AvailabilityZoneName: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       Tags: [ // Tags // required
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       FileSystemProtection: { // FileSystemProtectionDescription
 * //         ReplicationOverwriteProtection: "ENABLED" || "DISABLED" || "REPLICATING",
 * //       },
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFileSystemsCommandInput - {@link DescribeFileSystemsCommandInput}
 * @returns {@link DescribeFileSystemsCommandOutput}
 * @see {@link DescribeFileSystemsCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeFileSystemsCommand extends $Command
  .classBuilder<
    DescribeFileSystemsCommandInput,
    DescribeFileSystemsCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MagnolioAPIService_v20150201", "DescribeFileSystems", {})
  .n("EFSClient", "DescribeFileSystemsCommand")
  .sc(DescribeFileSystems)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFileSystemsRequest;
      output: DescribeFileSystemsResponse;
    };
    sdk: {
      input: DescribeFileSystemsCommandInput;
      output: DescribeFileSystemsCommandOutput;
    };
  };
}
