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
  DisableFastSnapshotRestoresRequest,
  DisableFastSnapshotRestoresRequestFilterSensitiveLog,
  DisableFastSnapshotRestoresResult,
  DisableFastSnapshotRestoresResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2DisableFastSnapshotRestoresCommand,
  serializeAws_ec2DisableFastSnapshotRestoresCommand,
} from "../protocols/Aws_ec2";

export interface DisableFastSnapshotRestoresCommandInput extends DisableFastSnapshotRestoresRequest {}
export interface DisableFastSnapshotRestoresCommandOutput extends DisableFastSnapshotRestoresResult, __MetadataBearer {}

/**
 * <p>Disables fast snapshot restores for the specified snapshots in the specified Availability Zones.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableFastSnapshotRestoresCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableFastSnapshotRestoresCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableFastSnapshotRestoresCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableFastSnapshotRestoresCommandInput} for command's `input` shape.
 * @see {@link DisableFastSnapshotRestoresCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DisableFastSnapshotRestoresCommand extends $Command<
  DisableFastSnapshotRestoresCommandInput,
  DisableFastSnapshotRestoresCommandOutput,
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

  constructor(readonly input: DisableFastSnapshotRestoresCommandInput) {
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
  ): Handler<DisableFastSnapshotRestoresCommandInput, DisableFastSnapshotRestoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableFastSnapshotRestoresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableFastSnapshotRestoresCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableFastSnapshotRestoresRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisableFastSnapshotRestoresResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableFastSnapshotRestoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DisableFastSnapshotRestoresCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableFastSnapshotRestoresCommandOutput> {
    return deserializeAws_ec2DisableFastSnapshotRestoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
