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
  AssociateTrunkInterfaceRequest,
  AssociateTrunkInterfaceRequestFilterSensitiveLog,
  AssociateTrunkInterfaceResult,
  AssociateTrunkInterfaceResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AssociateTrunkInterfaceCommand,
  serializeAws_ec2AssociateTrunkInterfaceCommand,
} from "../protocols/Aws_ec2";

export interface AssociateTrunkInterfaceCommandInput extends AssociateTrunkInterfaceRequest {}
export interface AssociateTrunkInterfaceCommandOutput extends AssociateTrunkInterfaceResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This API action is currently in <b>limited preview only</b>.
 *                 If you are interested in using this feature, contact your account manager.</p>
 *          </note>
 *          <p>Associates a branch network interface with a trunk network interface.</p>
 *          <p>Before you create the association, run the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html">create-network-interface</a> command and set
 *             <code>--interface-type</code> to <code>trunk</code>. You must also create a network interface for each branch network interface that you want to associate with the trunk network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateTrunkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateTrunkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateTrunkInterfaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTrunkInterfaceCommandInput} for command's `input` shape.
 * @see {@link AssociateTrunkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AssociateTrunkInterfaceCommand extends $Command<
  AssociateTrunkInterfaceCommandInput,
  AssociateTrunkInterfaceCommandOutput,
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

  constructor(readonly input: AssociateTrunkInterfaceCommandInput) {
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
  ): Handler<AssociateTrunkInterfaceCommandInput, AssociateTrunkInterfaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateTrunkInterfaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateTrunkInterfaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateTrunkInterfaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateTrunkInterfaceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateTrunkInterfaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateTrunkInterfaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateTrunkInterfaceCommandOutput> {
    return deserializeAws_ec2AssociateTrunkInterfaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
