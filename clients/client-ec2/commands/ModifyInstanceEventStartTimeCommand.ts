import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceEventStartTimeRequest, ModifyInstanceEventStartTimeResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyInstanceEventStartTimeCommand,
  serializeAws_ec2ModifyInstanceEventStartTimeCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ModifyInstanceEventStartTimeCommandInput = ModifyInstanceEventStartTimeRequest;
export type ModifyInstanceEventStartTimeCommandOutput = ModifyInstanceEventStartTimeResult & __MetadataBearer;

/**
 * <p>Modifies the start time for a scheduled Amazon EC2 instance event.</p>
 */
export class ModifyInstanceEventStartTimeCommand extends $Command<
  ModifyInstanceEventStartTimeCommandInput,
  ModifyInstanceEventStartTimeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyInstanceEventStartTimeCommandInput) {
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
  ): Handler<ModifyInstanceEventStartTimeCommandInput, ModifyInstanceEventStartTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyInstanceEventStartTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyInstanceEventStartTimeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyInstanceEventStartTimeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyInstanceEventStartTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyInstanceEventStartTimeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyInstanceEventStartTimeCommandOutput> {
    return deserializeAws_ec2ModifyInstanceEventStartTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
