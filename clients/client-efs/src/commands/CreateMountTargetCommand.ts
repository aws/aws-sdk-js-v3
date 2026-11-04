// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMountTargetRequest, MountTargetDescription } from "../models/models_0";
import { CreateMountTarget$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMountTargetCommand}.
 */
export interface CreateMountTargetCommandInput extends CreateMountTargetRequest {}
/**
 * @public
 *
 * The output of {@link CreateMountTargetCommand}.
 */
export interface CreateMountTargetCommandOutput extends MountTargetDescription, __MetadataBearer {}

/**
 * Creates a mount target for a file system. You can then mount the file system on EC2 instances by using the mount target.
 *
 * You can create one mount target in each Availability Zone in your VPC. All EC2 instances in a VPC within a given Availability Zone share a single mount target for a given file system. If you have multiple subnets in an Availability Zone, you create a mount target in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target in order to access their file system.
 *
 * You can create only one mount target for a One Zone file system. You must create that mount target in the same Availability Zone in which the file system is located. Use the `AvailabilityZoneName` and `AvailabiltyZoneId` properties in the DescribeFileSystems response object to get this information. Use the `subnetId` associated with the file system's Availability Zone when creating the mount target.
 *
 * For more information, see [Amazon EFS: How it Works](https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html).
 *
 * To create a mount target for a file system, the file system's lifecycle state must be `available`. For more information, see DescribeFileSystems.
 *
 * In the request, provide the following:
 *
 * - The file system ID for which you are creating the mount target.
 * - A subnet ID, which determines the following:
 *
 *   - The VPC in which Amazon EFS creates the mount target
 *   - The Availability Zone in which Amazon EFS creates the mount target
 *   - The IP address range from which Amazon EFS selects the IP address of the mount target (if you don't specify an IP address in the request)
 *
 * After creating the mount target, Amazon EFS returns a response that includes, a `MountTargetId` and an `IpAddress`. You use this IP address when mounting the file system in an EC2 instance. You can also use the mount target's DNS name when mounting the file system. The EC2 instance on which you mount the file system by using the mount target can resolve the mount target's DNS name to its IP address. For more information, see [How it Works: Implementation Overview](https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html#how-it-works-implementation).
 *
 * Note that you can create mount targets for a file system in only one VPC, and there can be only one mount target per Availability Zone. That is, if the file system already has one or more mount targets created for it, the subnet specified in the request to add another mount target must meet the following requirements:
 *
 * - Must belong to the same VPC as the subnets of the existing mount targets
 * - Must not be in the same Availability Zone as any of the subnets of the existing mount targets
 *
 * If the request satisfies the requirements, Amazon EFS does the following:
 *
 * - Creates a new mount target in the specified subnet.
 * - Also creates a new network interface in the subnet as follows:
 *
 *   - If the request provides an `IpAddress`, Amazon EFS assigns that IP address to the network interface. Otherwise, Amazon EFS assigns a free address in the subnet (in the same way that the Amazon EC2 `CreateNetworkInterface` call does when a request does not specify a primary private IP address).
 *   - If the request provides `SecurityGroups`, this network interface is associated with those security groups. Otherwise, it belongs to the default security group for the subnet's VPC.
 *   - Assigns the description `Mount target fsmt-id for file system fs-id` where `fsmt-id` is the mount target ID, and `fs-id` is the `FileSystemId`.
 *   - Sets the `requesterManaged` property of the network interface to `true`, and the `requesterId` value to `EFS`.
 *
 *   Each Amazon EFS mount target has one corresponding requester-managed EC2 network interface. After the network interface is created, Amazon EFS sets the `NetworkInterfaceId` field in the mount target's description to the network interface ID, and the `IpAddress` field to its address. If network interface creation fails, the entire `CreateMountTarget` operation fails.
 *
 * > **Note:** The `CreateMountTarget` call returns only after creating the network interface, but while the mount target state is still `creating`, you can check the mount target creation status by calling the DescribeMountTargets operation, which among other things returns the mount target state.
 *
 * We recommend that you create a mount target in each of the Availability Zones. There are cost considerations for using a file system in an Availability Zone through a mount target created in another Availability Zone. For more information, see [Amazon EFS pricing](http://aws.amazon.com/efs/pricing/). In addition, by always using a mount target local to the instance's Availability Zone, you eliminate a partial failure scenario. If the Availability Zone in which your mount target is created goes down, then you can't access your file system through that mount target.
 *
 * This operation requires permissions for the following action on the file system:
 *
 * - `elasticfilesystem:CreateMountTarget`
 *
 * This operation also requires permissions for the following Amazon EC2 actions:
 *
 * - `ec2:DescribeSubnets`
 * - `ec2:DescribeNetworkInterfaces`
 * - `ec2:CreateNetworkInterface`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, CreateMountTargetCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, CreateMountTargetCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // CreateMountTargetRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   SubnetId: "STRING_VALUE", // required
 *   IpAddress: "STRING_VALUE",
 *   Ipv6Address: "STRING_VALUE",
 *   IpAddressType: "IPV4_ONLY" || "IPV6_ONLY" || "DUAL_STACK",
 *   SecurityGroups: [ // SecurityGroups
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateMountTargetCommand(input);
 * const response = await client.send(command);
 * // { // MountTargetDescription
 * //   OwnerId: "STRING_VALUE",
 * //   MountTargetId: "STRING_VALUE", // required
 * //   FileSystemId: "STRING_VALUE", // required
 * //   SubnetId: "STRING_VALUE", // required
 * //   LifeCycleState: "creating" || "available" || "updating" || "deleting" || "deleted" || "error", // required
 * //   IpAddress: "STRING_VALUE",
 * //   Ipv6Address: "STRING_VALUE",
 * //   NetworkInterfaceId: "STRING_VALUE",
 * //   AvailabilityZoneId: "STRING_VALUE",
 * //   AvailabilityZoneName: "STRING_VALUE",
 * //   VpcId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMountTargetCommandInput - {@link CreateMountTargetCommandInput}
 * @returns {@link CreateMountTargetCommandOutput}
 * @see {@link CreateMountTargetCommandInput} for command's `input` shape.
 * @see {@link CreateMountTargetCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link AvailabilityZonesMismatch} (client fault)
 *
 * Returned if the Availability Zone that was specified for a mount target is different from the Availability Zone that was specified for One Zone storage. For more information, see [Regional and One Zone storage redundancy](https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html).
 *
 * @throws {@link BadRequest} (client fault)
 *
 * Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *
 * Returned if the specified `FileSystemId` value doesn't exist in the requester's Amazon Web Services account.
 *
 * @throws {@link IncorrectFileSystemLifeCycleState} (client fault)
 *
 * Returned if the file system's lifecycle state is not "available".
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Returned if an error occurred on the server side.
 *
 * @throws {@link IpAddressInUse} (client fault)
 *
 * Returned if the request specified an `IpAddress` that is already in use in the subnet.
 *
 * @throws {@link MountTargetConflict} (client fault)
 *
 * Returned if the mount target would violate one of the specified restrictions based on the file system's existing mount targets.
 *
 * @throws {@link NetworkInterfaceLimitExceeded} (client fault)
 *
 * The calling account has reached the limit for elastic network interfaces for the specific Amazon Web Services Region. Either delete some network interfaces or request that the account quota be raised. For more information, see [Amazon VPC Quotas](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html) in the *Amazon VPC User Guide* (see the **Network interfaces per Region** entry in the **Network interfaces** table).
 *
 * @throws {@link NoFreeAddressesInSubnet} (client fault)
 *
 * Returned if `IpAddress` was not specified in the request and there are no free IP addresses in the subnet.
 *
 * @throws {@link SecurityGroupLimitExceeded} (client fault)
 *
 * Returned if the number of `SecurityGroups` specified in the request is greater than the limit, which is based on account quota. Either delete some security groups or request that the account quota be raised. For more information, see [Amazon VPC Quotas](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html) in the *Amazon VPC User Guide* (see the **Security Groups** table).
 *
 * @throws {@link SecurityGroupNotFound} (client fault)
 *
 * Returned if one of the specified security groups doesn't exist in the subnet's virtual private cloud (VPC).
 *
 * @throws {@link SubnetNotFound} (client fault)
 *
 * Returned if there is no subnet with ID `SubnetId` provided in the request.
 *
 * @throws {@link UnsupportedAvailabilityZone} (client fault)
 *
 * Returned if the requested Amazon EFS functionality is not available in the specified Availability Zone.
 *
 * @throws {@link EFSServiceException}
 *
 * Base exception class for all service exceptions from EFS service.
 *
 * @example To create a new mount target
 * ```javascript
 * // This operation creates a new mount target for an EFS file system.
 * const input = {
 *   FileSystemId: "fs-01234567",
 *   SubnetId: "subnet-1234abcd"
 * };
 * const command = new CreateMountTargetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   FileSystemId: "fs-01234567",
 *   IpAddress: "192.0.0.2",
 *   LifeCycleState: "creating",
 *   MountTargetId: "fsmt-12340abc",
 *   NetworkInterfaceId: "eni-cedf6789",
 *   OwnerId: "012345678912",
 *   SubnetId: "subnet-1234abcd"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateMountTargetCommand extends command<CreateMountTargetCommandInput, CreateMountTargetCommandOutput>(
  _ep0,
  _mw0,
  "CreateMountTarget",
  CreateMountTarget$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMountTargetRequest;
      output: MountTargetDescription;
    };
    sdk: {
      input: CreateMountTargetCommandInput;
      output: CreateMountTargetCommandOutput;
    };
  };
}
