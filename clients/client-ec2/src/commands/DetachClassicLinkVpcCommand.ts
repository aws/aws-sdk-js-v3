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
import { DetachClassicLinkVpcRequest, DetachClassicLinkVpcResult } from "../models/models_5";
import { de_DetachClassicLinkVpcCommand, se_DetachClassicLinkVpcCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetachClassicLinkVpcCommand}.
 */
export interface DetachClassicLinkVpcCommandInput extends DetachClassicLinkVpcRequest {}
/**
 * @public
 *
 * The output of {@link DetachClassicLinkVpcCommand}.
 */
export interface DetachClassicLinkVpcCommandOutput extends DetachClassicLinkVpcResult, __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Unlinks (detaches) a linked EC2-Classic instance from a VPC. After the instance has been unlinked,
 * 		    the VPC security groups are no longer associated with it. An instance is automatically unlinked from
 * 		    a VPC when it's stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachClassicLinkVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachClassicLinkVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DetachClassicLinkVpcRequest
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 * };
 * const command = new DetachClassicLinkVpcCommand(input);
 * const response = await client.send(command);
 * // { // DetachClassicLinkVpcResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DetachClassicLinkVpcCommandInput - {@link DetachClassicLinkVpcCommandInput}
 * @returns {@link DetachClassicLinkVpcCommandOutput}
 * @see {@link DetachClassicLinkVpcCommandInput} for command's `input` shape.
 * @see {@link DetachClassicLinkVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DetachClassicLinkVpcCommand extends $Command<
  DetachClassicLinkVpcCommandInput,
  DetachClassicLinkVpcCommandOutput,
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
  constructor(readonly input: DetachClassicLinkVpcCommandInput) {
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
  ): Handler<DetachClassicLinkVpcCommandInput, DetachClassicLinkVpcCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetachClassicLinkVpcCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DetachClassicLinkVpcCommand";
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
  private serialize(input: DetachClassicLinkVpcCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetachClassicLinkVpcCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachClassicLinkVpcCommandOutput> {
    return de_DetachClassicLinkVpcCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
