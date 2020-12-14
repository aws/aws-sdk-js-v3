import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AllocateHostsRequest, AllocateHostsResult } from "../models/models_0";
import { deserializeAws_ec2AllocateHostsCommand, serializeAws_ec2AllocateHostsCommand } from "../protocols/Aws_ec2";
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

export type AllocateHostsCommandInput = AllocateHostsRequest;
export type AllocateHostsCommandOutput = AllocateHostsResult & __MetadataBearer;

/**
 * <p>Allocates a Dedicated Host to your account. At a minimum, specify the supported instance
 *         	type or instance family, the Availability Zone in which to allocate the host, and the number of
 *         	hosts to allocate.</p>
 */
export class AllocateHostsCommand extends $Command<
  AllocateHostsCommandInput,
  AllocateHostsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AllocateHostsCommandInput) {
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
  ): Handler<AllocateHostsCommandInput, AllocateHostsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AllocateHostsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AllocateHostsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AllocateHostsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AllocateHostsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AllocateHostsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AllocateHostsCommandOutput> {
    return deserializeAws_ec2AllocateHostsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
