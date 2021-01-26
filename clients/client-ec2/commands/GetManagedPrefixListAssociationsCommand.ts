import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetManagedPrefixListAssociationsRequest, GetManagedPrefixListAssociationsResult } from "../models/models_4";
import {
  deserializeAws_ec2GetManagedPrefixListAssociationsCommand,
  serializeAws_ec2GetManagedPrefixListAssociationsCommand,
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

export type GetManagedPrefixListAssociationsCommandInput = GetManagedPrefixListAssociationsRequest;
export type GetManagedPrefixListAssociationsCommandOutput = GetManagedPrefixListAssociationsResult & __MetadataBearer;

/**
 * <p>Gets information about the resources that are associated with the specified managed prefix list.</p>
 */
export class GetManagedPrefixListAssociationsCommand extends $Command<
  GetManagedPrefixListAssociationsCommandInput,
  GetManagedPrefixListAssociationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetManagedPrefixListAssociationsCommandInput) {
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
  ): Handler<GetManagedPrefixListAssociationsCommandInput, GetManagedPrefixListAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetManagedPrefixListAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetManagedPrefixListAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetManagedPrefixListAssociationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetManagedPrefixListAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetManagedPrefixListAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetManagedPrefixListAssociationsCommandOutput> {
    return deserializeAws_ec2GetManagedPrefixListAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
