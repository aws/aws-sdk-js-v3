// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeMountTargetSecurityGroupsRequest,
  DescribeMountTargetSecurityGroupsResponse,
} from "../models/models_0";
import { DescribeMountTargetSecurityGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeMountTargetSecurityGroupsCommandOutput extends DescribeMountTargetSecurityGroupsResponse, __MetadataBearer {}

/**
 * Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not `deleted`.
 *
 * This operation requires permissions for the following actions:
 *
 * - `elasticfilesystem:DescribeMountTargetSecurityGroups` action on the mount target's file system.
 * - `ec2:DescribeNetworkInterfaceAttribute` action on the mount target's network interface.
 *
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
 *
 * Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.
 *
 * @throws {@link IncorrectMountTargetState} (client fault)
 *
 * Returned if the mount target is not in the correct state for the operation.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Returned if an error occurred on the server side.
 *
 * @throws {@link MountTargetNotFound} (client fault)
 *
 * Returned if there is no mount target with the specified ID found in the caller's Amazon Web Services account.
 *
 * @throws {@link EFSServiceException}
 *
 * Base exception class for all service exceptions from EFS service.
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
export class DescribeMountTargetSecurityGroupsCommand extends command<DescribeMountTargetSecurityGroupsCommandInput, DescribeMountTargetSecurityGroupsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMountTargetSecurityGroups",
  DescribeMountTargetSecurityGroups$
) {
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
