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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeNetworkInterfaceAttributeRequest, DescribeNetworkInterfaceAttributeResult } from "../models/models_4";
import {
  de_DescribeNetworkInterfaceAttributeCommand,
  se_DescribeNetworkInterfaceAttributeCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeNetworkInterfaceAttributeCommand}.
 */
export interface DescribeNetworkInterfaceAttributeCommandInput extends DescribeNetworkInterfaceAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkInterfaceAttributeCommand}.
 */
export interface DescribeNetworkInterfaceAttributeCommandOutput
  extends DescribeNetworkInterfaceAttributeResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes a network interface attribute. You can specify only one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkInterfaceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkInterfaceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkInterfaceAttributeRequest
 *   Attribute: "description" || "groupSet" || "sourceDestCheck" || "attachment",
 *   DryRun: true || false,
 *   NetworkInterfaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkInterfaceAttributeResult
 * //   Attachment: { // NetworkInterfaceAttachment
 * //     AttachTime: new Date("TIMESTAMP"),
 * //     AttachmentId: "STRING_VALUE",
 * //     DeleteOnTermination: true || false,
 * //     DeviceIndex: Number("int"),
 * //     NetworkCardIndex: Number("int"),
 * //     InstanceId: "STRING_VALUE",
 * //     InstanceOwnerId: "STRING_VALUE",
 * //     Status: "attaching" || "attached" || "detaching" || "detached",
 * //     EnaSrdSpecification: { // AttachmentEnaSrdSpecification
 * //       EnaSrdEnabled: true || false,
 * //       EnaSrdUdpSpecification: { // AttachmentEnaSrdUdpSpecification
 * //         EnaSrdUdpEnabled: true || false,
 * //       },
 * //     },
 * //   },
 * //   Description: { // AttributeValue
 * //     Value: "STRING_VALUE",
 * //   },
 * //   Groups: [ // GroupIdentifierList
 * //     { // GroupIdentifier
 * //       GroupName: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NetworkInterfaceId: "STRING_VALUE",
 * //   SourceDestCheck: { // AttributeBooleanValue
 * //     Value: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeNetworkInterfaceAttributeCommandInput - {@link DescribeNetworkInterfaceAttributeCommandInput}
 * @returns {@link DescribeNetworkInterfaceAttributeCommandOutput}
 * @see {@link DescribeNetworkInterfaceAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkInterfaceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe the attachment attribute of a network interface
 * ```javascript
 * // This example describes the attachment attribute of the specified network interface.
 * const input = {
 *   "Attribute": "attachment",
 *   "NetworkInterfaceId": "eni-686ea200"
 * };
 * const command = new DescribeNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Attachment": {
 *     "AttachTime": "2015-05-21T20:02:20.000Z",
 *     "AttachmentId": "eni-attach-43348162",
 *     "DeleteOnTermination": true,
 *     "DeviceIndex": 0,
 *     "InstanceId": "i-1234567890abcdef0",
 *     "InstanceOwnerId": "123456789012",
 *     "Status": "attached"
 *   },
 *   "NetworkInterfaceId": "eni-686ea200"
 * }
 * *\/
 * // example id: ec2-describe-network-interface-attribute-1
 * ```
 *
 * @example To describe the description attribute of a network interface
 * ```javascript
 * // This example describes the description attribute of the specified network interface.
 * const input = {
 *   "Attribute": "description",
 *   "NetworkInterfaceId": "eni-686ea200"
 * };
 * const command = new DescribeNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Description": {
 *     "Value": "My description"
 *   },
 *   "NetworkInterfaceId": "eni-686ea200"
 * }
 * *\/
 * // example id: ec2-describe-network-interface-attribute-2
 * ```
 *
 * @example To describe the groupSet attribute of a network interface
 * ```javascript
 * // This example describes the groupSet attribute of the specified network interface.
 * const input = {
 *   "Attribute": "groupSet",
 *   "NetworkInterfaceId": "eni-686ea200"
 * };
 * const command = new DescribeNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Groups": [
 *     {
 *       "GroupId": "sg-903004f8",
 *       "GroupName": "my-security-group"
 *     }
 *   ],
 *   "NetworkInterfaceId": "eni-686ea200"
 * }
 * *\/
 * // example id: ec2-describe-network-interface-attribute-3
 * ```
 *
 * @example To describe the sourceDestCheck attribute of a network interface
 * ```javascript
 * // This example describes the sourceDestCheck attribute of the specified network interface.
 * const input = {
 *   "Attribute": "sourceDestCheck",
 *   "NetworkInterfaceId": "eni-686ea200"
 * };
 * const command = new DescribeNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NetworkInterfaceId": "eni-686ea200",
 *   "SourceDestCheck": {
 *     "Value": true
 *   }
 * }
 * *\/
 * // example id: ec2-describe-network-interface-attribute-4
 * ```
 *
 */
export class DescribeNetworkInterfaceAttributeCommand extends $Command<
  DescribeNetworkInterfaceAttributeCommandInput,
  DescribeNetworkInterfaceAttributeCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DescribeNetworkInterfaceAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNetworkInterfaceAttributeCommandInput, DescribeNetworkInterfaceAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNetworkInterfaceAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeNetworkInterfaceAttributeCommand";
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
    input: DescribeNetworkInterfaceAttributeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeNetworkInterfaceAttributeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNetworkInterfaceAttributeCommandOutput> {
    return de_DescribeNetworkInterfaceAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
