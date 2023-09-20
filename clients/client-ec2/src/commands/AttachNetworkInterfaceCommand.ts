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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AttachNetworkInterfaceRequest, AttachNetworkInterfaceResult } from "../models/models_0";
import { de_AttachNetworkInterfaceCommand, se_AttachNetworkInterfaceCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AttachNetworkInterfaceCommand}.
 */
export interface AttachNetworkInterfaceCommandInput extends AttachNetworkInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link AttachNetworkInterfaceCommand}.
 */
export interface AttachNetworkInterfaceCommandOutput extends AttachNetworkInterfaceResult, __MetadataBearer {}

/**
 * @public
 * <p>Attaches a network interface to an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachNetworkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachNetworkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AttachNetworkInterfaceRequest
 *   DeviceIndex: Number("int"), // required
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   NetworkCardIndex: Number("int"),
 *   EnaSrdSpecification: { // EnaSrdSpecification
 *     EnaSrdEnabled: true || false,
 *     EnaSrdUdpSpecification: { // EnaSrdUdpSpecification
 *       EnaSrdUdpEnabled: true || false,
 *     },
 *   },
 * };
 * const command = new AttachNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * // { // AttachNetworkInterfaceResult
 * //   AttachmentId: "STRING_VALUE",
 * //   NetworkCardIndex: Number("int"),
 * // };
 *
 * ```
 *
 * @param AttachNetworkInterfaceCommandInput - {@link AttachNetworkInterfaceCommandInput}
 * @returns {@link AttachNetworkInterfaceCommandOutput}
 * @see {@link AttachNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link AttachNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To attach a network interface to an instance
 * ```javascript
 * // This example attaches the specified network interface to the specified instance.
 * const input = {
 *   "DeviceIndex": 1,
 *   "InstanceId": "i-1234567890abcdef0",
 *   "NetworkInterfaceId": "eni-e5aa89a3"
 * };
 * const command = new AttachNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AttachmentId": "eni-attach-66c4350a"
 * }
 * *\/
 * // example id: ec2-attach-network-interface-1
 * ```
 *
 */
export class AttachNetworkInterfaceCommand extends $Command<
  AttachNetworkInterfaceCommandInput,
  AttachNetworkInterfaceCommandOutput,
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
  constructor(readonly input: AttachNetworkInterfaceCommandInput) {
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
  ): Handler<AttachNetworkInterfaceCommandInput, AttachNetworkInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachNetworkInterfaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AttachNetworkInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "AttachNetworkInterface",
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
  private serialize(input: AttachNetworkInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AttachNetworkInterfaceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachNetworkInterfaceCommandOutput> {
    return de_AttachNetworkInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
