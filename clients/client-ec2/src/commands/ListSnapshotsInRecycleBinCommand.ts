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
  ListSnapshotsInRecycleBinRequest,
  ListSnapshotsInRecycleBinRequestFilterSensitiveLog,
  ListSnapshotsInRecycleBinResult,
  ListSnapshotsInRecycleBinResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2ListSnapshotsInRecycleBinCommand,
  serializeAws_ec2ListSnapshotsInRecycleBinCommand,
} from "../protocols/Aws_ec2";

export interface ListSnapshotsInRecycleBinCommandInput extends ListSnapshotsInRecycleBinRequest {}
export interface ListSnapshotsInRecycleBinCommandOutput extends ListSnapshotsInRecycleBinResult, __MetadataBearer {}

/**
 * <p>Lists one or more snapshots that are currently in the Recycle Bin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ListSnapshotsInRecycleBinCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ListSnapshotsInRecycleBinCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ListSnapshotsInRecycleBinCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSnapshotsInRecycleBinCommandInput} for command's `input` shape.
 * @see {@link ListSnapshotsInRecycleBinCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ListSnapshotsInRecycleBinCommand extends $Command<
  ListSnapshotsInRecycleBinCommandInput,
  ListSnapshotsInRecycleBinCommandOutput,
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

  constructor(readonly input: ListSnapshotsInRecycleBinCommandInput) {
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
  ): Handler<ListSnapshotsInRecycleBinCommandInput, ListSnapshotsInRecycleBinCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSnapshotsInRecycleBinCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ListSnapshotsInRecycleBinCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSnapshotsInRecycleBinRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSnapshotsInRecycleBinResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSnapshotsInRecycleBinCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ListSnapshotsInRecycleBinCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSnapshotsInRecycleBinCommandOutput> {
    return deserializeAws_ec2ListSnapshotsInRecycleBinCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
