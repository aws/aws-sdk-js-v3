// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { CreateMountTargetRequest, MountTargetDescription } from "../models/models_0";
import { de_CreateMountTargetCommand, se_CreateMountTargetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Creates a mount target for a file system. You can then mount the file system on EC2
 *       instances by using the mount target.</p>
 *          <p>You can create one mount target in each Availability Zone in your VPC. All EC2
 *       instances in a VPC within a given Availability Zone share a single mount target for a given
 *       file system. If you have multiple subnets in an Availability Zone, you create a mount target
 *       in one of the subnets. EC2 instances do not need to be in the same subnet as the mount target
 *       in order to access their file system.</p>
 *          <p>You can create only one mount target for an EFS file system using One Zone storage
 *       classes. You must create that mount target in the same Availability Zone in which the file
 *       system is located. Use the <code>AvailabilityZoneName</code> and
 *         <code>AvailabiltyZoneId</code> properties in the <a>DescribeFileSystems</a>
 *       response object to get this information. Use the <code>subnetId</code> associated with the
 *       file system's Availability Zone when creating the mount target.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html">Amazon EFS: How it Works</a>. </p>
 *          <p>To create a mount target for a file system, the file system's lifecycle state must be
 *         <code>available</code>. For more information, see <a>DescribeFileSystems</a>.</p>
 *          <p>In the request, provide the following:</p>
 *          <ul>
 *             <li>
 *                <p>The file system ID for which you are creating the mount
 *         target.</p>
 *             </li>
 *             <li>
 *                <p>A subnet ID, which determines the following:</p>
 *                <ul>
 *                   <li>
 *                      <p>The VPC in which Amazon EFS creates the mount target</p>
 *                   </li>
 *                   <li>
 *                      <p>The Availability Zone in which Amazon EFS creates the mount target</p>
 *                   </li>
 *                   <li>
 *                      <p>The IP address range from which Amazon EFS selects the IP address of the mount target
 *               (if you don't specify an IP address in the request)</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>After creating the mount target, Amazon EFS returns a response that includes, a
 *         <code>MountTargetId</code> and an <code>IpAddress</code>. You use this IP address when
 *       mounting the file system in an EC2 instance. You can also use the mount target's DNS name
 *       when mounting the file system. The EC2 instance on which you mount the file system by using
 *       the mount target can resolve the mount target's DNS name to its IP address. For more
 *       information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/how-it-works.html#how-it-works-implementation">How it Works:
 *         Implementation Overview</a>. </p>
 *          <p>Note that you can create mount targets for a file system in only one VPC, and there can
 *       be only one mount target per Availability Zone. That is, if the file system already has one or
 *       more mount targets created for it, the subnet specified in the request to add another mount
 *       target must meet the following requirements:</p>
 *          <ul>
 *             <li>
 *                <p>Must belong to the same VPC as the subnets of the existing mount targets</p>
 *             </li>
 *             <li>
 *                <p>Must not be in the same Availability Zone as any of the subnets of the existing
 *           mount targets</p>
 *             </li>
 *          </ul>
 *          <p>If the request satisfies the requirements, Amazon EFS does the following:</p>
 *          <ul>
 *             <li>
 *                <p>Creates a new mount target in the specified subnet.</p>
 *             </li>
 *             <li>
 *                <p>Also creates a new network interface in the subnet as follows:</p>
 *                <ul>
 *                   <li>
 *                      <p>If the request provides an <code>IpAddress</code>, Amazon EFS assigns that IP
 *               address to the network interface. Otherwise, Amazon EFS assigns a free address in the
 *               subnet (in the same way that the Amazon EC2 <code>CreateNetworkInterface</code> call
 *               does when a request does not specify a primary private IP address).</p>
 *                   </li>
 *                   <li>
 *                      <p>If the request provides <code>SecurityGroups</code>, this network interface is
 *               associated with those security groups. Otherwise, it belongs to the default security
 *               group for the subnet's VPC.</p>
 *                   </li>
 *                   <li>
 *                      <p>Assigns the description <code>Mount target <i>fsmt-id</i> for
 *                 file system <i>fs-id</i>
 *                         </code> where <code>
 *                            <i>fsmt-id</i>
 *                         </code> is the mount target ID, and <code>
 *                            <i>fs-id</i>
 *                         </code> is the <code>FileSystemId</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>Sets the <code>requesterManaged</code> property of the network interface to
 *                 <code>true</code>, and the <code>requesterId</code> value to
 *               <code>EFS</code>.</p>
 *                   </li>
 *                </ul>
 *                <p>Each Amazon EFS mount target has one corresponding requester-managed EC2 network
 *           interface. After the network interface is created, Amazon EFS sets the
 *             <code>NetworkInterfaceId</code> field in the mount target's description to the
 *           network interface ID, and the <code>IpAddress</code> field to its address. If network
 *           interface creation fails, the entire <code>CreateMountTarget</code> operation
 *           fails.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The <code>CreateMountTarget</code> call returns only after creating the network
 *         interface, but while the mount target state is still <code>creating</code>, you can check
 *         the mount target creation status by calling the <a>DescribeMountTargets</a> operation, which among other things returns the mount
 *         target state.</p>
 *          </note>
 *          <p>We recommend that you create a mount target in each of the Availability Zones. There
 *       are cost considerations for using a file system in an Availability Zone through a mount target
 *       created in another Availability Zone. For more information, see <a href="http://aws.amazon.com/efs/">Amazon EFS</a>. In addition, by always using a mount target local to the
 *       instance's Availability Zone, you eliminate a partial failure scenario. If the
 *       Availability Zone in which your mount target is created goes down, then you can't access
 *       your file system through that mount target. </p>
 *          <p>This operation requires permissions for the following action on the file
 *       system:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>elasticfilesystem:CreateMountTarget</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>This operation also requires permissions for the following Amazon EC2
 *       actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ec2:DescribeSubnets</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ec2:DescribeNetworkInterfaces</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ec2:CreateNetworkInterface</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, CreateMountTargetCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, CreateMountTargetCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // CreateMountTargetRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   SubnetId: "STRING_VALUE", // required
 *   IpAddress: "STRING_VALUE",
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
 *  <p>Returned if the Availability Zone that was specified for a mount target is
 *             different from the Availability Zone that was specified for One Zone storage.
 *             For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html">Regional and One Zone storage redundancy</a>.</p>
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
 * @throws {@link IpAddressInUse} (client fault)
 *  <p>Returned if the request specified an <code>IpAddress</code> that is already in use
 *             in the subnet.</p>
 *
 * @throws {@link MountTargetConflict} (client fault)
 *  <p>Returned if the mount target would violate one of the specified restrictions based
 *             on the file system's existing mount targets.</p>
 *
 * @throws {@link NetworkInterfaceLimitExceeded} (client fault)
 *  <p>The calling account has reached the limit for elastic network interfaces for the
 *             specific Amazon Web Services Region. Either delete some network interfaces or request
 *             that the account quota be raised. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Appendix_Limits.html">Amazon VPC Quotas</a>
 *             in the <i>Amazon VPC User Guide</i> (see the <b>Network
 *                 interfaces per Region</b> entry in the <b>Network
 *                 interfaces</b> table). </p>
 *
 * @throws {@link NoFreeAddressesInSubnet} (client fault)
 *  <p>Returned if <code>IpAddress</code> was not specified in the request and there are
 *             no free IP addresses in the subnet.</p>
 *
 * @throws {@link SecurityGroupLimitExceeded} (client fault)
 *  <p>Returned if the size of <code>SecurityGroups</code> specified in the request is
 *             greater than five.</p>
 *
 * @throws {@link SecurityGroupNotFound} (client fault)
 *  <p>Returned if one of the specified security groups doesn't exist in the subnet's
 *             virtual private cloud (VPC).</p>
 *
 * @throws {@link SubnetNotFound} (client fault)
 *  <p>Returned if there is no subnet with ID <code>SubnetId</code> provided in the
 *             request.</p>
 *
 * @throws {@link UnsupportedAvailabilityZone} (client fault)
 *  <p>Returned if the requested Amazon EFS functionality is not available in the specified Availability Zone.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 * @example To create a new mount target
 * ```javascript
 * // This operation creates a new mount target for an EFS file system.
 * const input = {
 *   "FileSystemId": "fs-01234567",
 *   "SubnetId": "subnet-1234abcd"
 * };
 * const command = new CreateMountTargetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FileSystemId": "fs-01234567",
 *   "IpAddress": "192.0.0.2",
 *   "LifeCycleState": "creating",
 *   "MountTargetId": "fsmt-12340abc",
 *   "NetworkInterfaceId": "eni-cedf6789",
 *   "OwnerId": "012345678912",
 *   "SubnetId": "subnet-1234abcd"
 * }
 * *\/
 * // example id: to-create-a-new-mount-target-1481842289329
 * ```
 *
 */
export class CreateMountTargetCommand extends $Command<
  CreateMountTargetCommandInput,
  CreateMountTargetCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateMountTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMountTargetCommandInput, CreateMountTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMountTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "CreateMountTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MagnolioAPIService_v20150201",
        operation: "CreateMountTarget",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateMountTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMountTargetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMountTargetCommandOutput> {
    return de_CreateMountTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
