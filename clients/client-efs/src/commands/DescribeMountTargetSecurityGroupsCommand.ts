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
} from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
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
export { __MetadataBearer, $Command };
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
 * @public
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
 * @example To describe the security groups for a mount target
 * ```javascript
 * // This operation describes all of the security groups for a file system's mount target.
 * const input = {
 *   "MountTargetId": "fsmt-12340abc"
 * };
 * const command = new DescribeMountTargetSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SecurityGroups": [
 *     "sg-4567abcd"
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-security-groups-for-a-mount-target-1481849317823
 * ```
 *
 */
export class DescribeMountTargetSecurityGroupsCommand extends $Command<
  DescribeMountTargetSecurityGroupsCommandInput,
  DescribeMountTargetSecurityGroupsCommandOutput,
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
  constructor(readonly input: DescribeMountTargetSecurityGroupsCommandInput) {
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
  ): Handler<DescribeMountTargetSecurityGroupsCommandInput, DescribeMountTargetSecurityGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMountTargetSecurityGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeMountTargetSecurityGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: DescribeMountTargetSecurityGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeMountTargetSecurityGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMountTargetSecurityGroupsCommandOutput> {
    return de_DescribeMountTargetSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
