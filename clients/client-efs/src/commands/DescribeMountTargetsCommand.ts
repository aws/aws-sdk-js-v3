// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMountTargetsRequest, DescribeMountTargetsResponse } from "../models/models_0";
import { de_DescribeMountTargetsCommand, se_DescribeMountTargetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMountTargetsCommand}.
 */
export interface DescribeMountTargetsCommandInput extends DescribeMountTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMountTargetsCommand}.
 */
export interface DescribeMountTargetsCommandOutput extends DescribeMountTargetsResponse, __MetadataBearer {}

/**
 * <p>Returns the descriptions of all the current mount targets, or a specific mount target,
 *       for a file system. When requesting all of the current mount targets, the order of mount
 *       targets returned in the response is unspecified.</p>
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:DescribeMountTargets</code> action, on either the file system ID
 *       that you specify in <code>FileSystemId</code>, or on the file system of the mount target that
 *       you specify in <code>MountTargetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeMountTargetsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeMountTargetsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // DescribeMountTargetsRequest
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE",
 *   MountTargetId: "STRING_VALUE",
 *   AccessPointId: "STRING_VALUE",
 * };
 * const command = new DescribeMountTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMountTargetsResponse
 * //   Marker: "STRING_VALUE",
 * //   MountTargets: [ // MountTargetDescriptions
 * //     { // MountTargetDescription
 * //       OwnerId: "STRING_VALUE",
 * //       MountTargetId: "STRING_VALUE", // required
 * //       FileSystemId: "STRING_VALUE", // required
 * //       SubnetId: "STRING_VALUE", // required
 * //       LifeCycleState: "creating" || "available" || "updating" || "deleting" || "deleted" || "error", // required
 * //       IpAddress: "STRING_VALUE",
 * //       Ipv6Address: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       AvailabilityZoneName: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMountTargetsCommandInput - {@link DescribeMountTargetsCommandInput}
 * @returns {@link DescribeMountTargetsCommandOutput}
 * @see {@link DescribeMountTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeMountTargetsCommandOutput} for command's `response` shape.
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
 * @throws {@link MountTargetNotFound} (client fault)
 *  <p>Returned if there is no mount target with the specified ID found in the
 *             caller's Amazon Web Services account.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 *
 * @example To describe the mount targets for a file system
 * ```javascript
 * // This operation describes all of a file system's mount targets.
 * const input = {
 *   FileSystemId: "fs-01234567"
 * };
 * const command = new DescribeMountTargetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   MountTargets: [
 *     {
 *       FileSystemId: "fs-01234567",
 *       IpAddress: "192.0.0.2",
 *       LifeCycleState: "available",
 *       MountTargetId: "fsmt-12340abc",
 *       NetworkInterfaceId: "eni-cedf6789",
 *       OwnerId: "012345678912",
 *       SubnetId: "subnet-1234abcd"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeMountTargetsCommand extends $Command
  .classBuilder<
    DescribeMountTargetsCommandInput,
    DescribeMountTargetsCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MagnolioAPIService_v20150201", "DescribeMountTargets", {})
  .n("EFSClient", "DescribeMountTargetsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMountTargetsCommand)
  .de(de_DescribeMountTargetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMountTargetsRequest;
      output: DescribeMountTargetsResponse;
    };
    sdk: {
      input: DescribeMountTargetsCommandInput;
      output: DescribeMountTargetsCommandOutput;
    };
  };
}
