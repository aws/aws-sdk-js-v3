// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  AssociateSubnetCidrBlockRequest,
  AssociateSubnetCidrBlockRequestFilterSensitiveLog,
  AssociateSubnetCidrBlockResult,
  AssociateSubnetCidrBlockResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AssociateSubnetCidrBlockCommand,
  serializeAws_ec2AssociateSubnetCidrBlockCommand,
} from "../protocols/Aws_ec2";

export interface AssociateSubnetCidrBlockCommandInput extends AssociateSubnetCidrBlockRequest {}
export interface AssociateSubnetCidrBlockCommandOutput extends AssociateSubnetCidrBlockResult, __MetadataBearer {}

/**
 * <p>Associates a CIDR block with your subnet. You can only associate a single IPv6 CIDR
 *             block with your subnet. An IPv6 CIDR block must have a prefix length of /64.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateSubnetCidrBlockCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateSubnetCidrBlockCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateSubnetCidrBlockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSubnetCidrBlockCommandInput} for command's `input` shape.
 * @see {@link AssociateSubnetCidrBlockCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AssociateSubnetCidrBlockCommand extends $Command<
  AssociateSubnetCidrBlockCommandInput,
  AssociateSubnetCidrBlockCommandOutput,
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

  constructor(readonly input: AssociateSubnetCidrBlockCommandInput) {
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
  ): Handler<AssociateSubnetCidrBlockCommandInput, AssociateSubnetCidrBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateSubnetCidrBlockCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateSubnetCidrBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateSubnetCidrBlockRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateSubnetCidrBlockResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateSubnetCidrBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateSubnetCidrBlockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateSubnetCidrBlockCommandOutput> {
    return deserializeAws_ec2AssociateSubnetCidrBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
