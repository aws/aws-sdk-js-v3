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
import { ResetSnapshotAttributeRequest, ResetSnapshotAttributeRequestFilterSensitiveLog } from "../models/models_6";
import {
  deserializeAws_ec2ResetSnapshotAttributeCommand,
  serializeAws_ec2ResetSnapshotAttributeCommand,
} from "../protocols/Aws_ec2";

export interface ResetSnapshotAttributeCommandInput extends ResetSnapshotAttributeRequest {}
export interface ResetSnapshotAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Resets permission settings for the specified snapshot.</p>
 *          <p>For more information about modifying snapshot permissions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot-permissions.html">Share a snapshot</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetSnapshotAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetSnapshotAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ResetSnapshotAttributeCommand extends $Command<
  ResetSnapshotAttributeCommandInput,
  ResetSnapshotAttributeCommandOutput,
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

  constructor(readonly input: ResetSnapshotAttributeCommandInput) {
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
  ): Handler<ResetSnapshotAttributeCommandInput, ResetSnapshotAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetSnapshotAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ResetSnapshotAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetSnapshotAttributeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetSnapshotAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ResetSnapshotAttributeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetSnapshotAttributeCommandOutput> {
    return deserializeAws_ec2ResetSnapshotAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
