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
  EnableFastSnapshotRestoresRequest,
  EnableFastSnapshotRestoresRequestFilterSensitiveLog,
  EnableFastSnapshotRestoresResult,
  EnableFastSnapshotRestoresResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2EnableFastSnapshotRestoresCommand,
  serializeAws_ec2EnableFastSnapshotRestoresCommand,
} from "../protocols/Aws_ec2";

export interface EnableFastSnapshotRestoresCommandInput extends EnableFastSnapshotRestoresRequest {}
export interface EnableFastSnapshotRestoresCommandOutput extends EnableFastSnapshotRestoresResult, __MetadataBearer {}

/**
 * <p>Enables fast snapshot restores for the specified snapshots in the specified Availability Zones.</p>
 *          <p>You get the full benefit of fast snapshot restores after they enter the <code>enabled</code> state.
 *       To get the current state of fast snapshot restores, use <a>DescribeFastSnapshotRestores</a>.
 *       To disable fast snapshot restores, use <a>DisableFastSnapshotRestores</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-fast-snapshot-restore.html">Amazon EBS fast snapshot
 *       restore</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableFastSnapshotRestoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableFastSnapshotRestoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableFastSnapshotRestoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableFastSnapshotRestoresCommandInput} for command's `input` shape.
 * @see {@link EnableFastSnapshotRestoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class EnableFastSnapshotRestoresCommand extends $Command<
  EnableFastSnapshotRestoresCommandInput,
  EnableFastSnapshotRestoresCommandOutput,
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

  constructor(readonly input: EnableFastSnapshotRestoresCommandInput) {
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
  ): Handler<EnableFastSnapshotRestoresCommandInput, EnableFastSnapshotRestoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableFastSnapshotRestoresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableFastSnapshotRestoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableFastSnapshotRestoresRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EnableFastSnapshotRestoresResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableFastSnapshotRestoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2EnableFastSnapshotRestoresCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableFastSnapshotRestoresCommandOutput> {
    return deserializeAws_ec2EnableFastSnapshotRestoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
