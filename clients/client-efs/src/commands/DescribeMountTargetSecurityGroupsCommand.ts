// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeMountTargetSecurityGroupsRequest,
  DescribeMountTargetSecurityGroupsResponse,
} from "../models/models_0";
import {
  de_DescribeMountTargetSecurityGroupsCommand,
  se_DescribeMountTargetSecurityGroupsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMountTargetSecurityGroupsCommand}.
 */
export interface DescribeMountTargetSecurityGroupsCommandInput extends DescribeMountTargetSecurityGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMountTargetSecurityGroupsCommand}.
 */
export interface DescribeMountTargetSecurityGroupsCommandOutput
  extends DescribeMountTargetSecurityGroupsResponse,
    __MetadataBearer {}

/**
 * <p>Returns the security groups currently in effect for a mount target. This operation
 *       requires that the network interface of the mount target has been created and the lifecycle
 *       state of the mount target is not <code>deleted</code>.</p>
 *          <p>This operation requires permissions for the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>elasticfilesystem:DescribeMountTargetSecurityGroups</code> action on the mount
 *           target's file system. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ec2:DescribeNetworkInterfaceAttribute</code> action on the mount target's
 *           network interface. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeMountTargetSecurityGroupsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeMountTargetSecurityGroupsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // DescribeMountTargetSecurityGroupsRequest
 *   MountTargetId: "STRING_VALUE", // required
 * };
 * const command = new DescribeMountTargetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMountTargetSecurityGroupsResponse
 * //   SecurityGroups: [ // SecurityGroups // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeMountTargetSecurityGroupsCommandInput - {@link DescribeMountTargetSecurityGroupsCommandInput}
 * @returns {@link DescribeMountTargetSecurityGroupsCommandOutput}
 * @see {@link DescribeMountTargetSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeMountTargetSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link IncorrectMountTargetState} (client fault)
 *  <p>Returned if the mount target is not in the correct state for the
 *             operation.</p>
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
 * @example To describe the security groups for a mount target
 * ```javascript
 * // This operation describes all of the security groups for a file system's mount target.
 * const input = {
 *   MountTargetId: "fsmt-12340abc"
 * };
 * const command = new DescribeMountTargetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SecurityGroups: [
 *     "sg-4567abcd"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeMountTargetSecurityGroupsCommand extends $Command
  .classBuilder<
    DescribeMountTargetSecurityGroupsCommandInput,
    DescribeMountTargetSecurityGroupsCommandOutput,
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
  .s("MagnolioAPIService_v20150201", "DescribeMountTargetSecurityGroups", {})
  .n("EFSClient", "DescribeMountTargetSecurityGroupsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMountTargetSecurityGroupsCommand)
  .de(de_DescribeMountTargetSecurityGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMountTargetSecurityGroupsRequest;
      output: DescribeMountTargetSecurityGroupsResponse;
    };
    sdk: {
      input: DescribeMountTargetSecurityGroupsCommandInput;
      output: DescribeMountTargetSecurityGroupsCommandOutput;
    };
  };
}
