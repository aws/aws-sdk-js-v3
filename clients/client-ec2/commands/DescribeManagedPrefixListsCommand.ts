import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeManagedPrefixListsRequest, DescribeManagedPrefixListsResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeManagedPrefixListsCommand,
  serializeAws_ec2DescribeManagedPrefixListsCommand,
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

export type DescribeManagedPrefixListsCommandInput = DescribeManagedPrefixListsRequest;
export type DescribeManagedPrefixListsCommandOutput = DescribeManagedPrefixListsResult & __MetadataBearer;

/**
 * <p>Describes your managed prefix lists and any AWS-managed prefix lists.</p>
 *         <p>To view the entries for your prefix list, use <a>GetManagedPrefixListEntries</a>.</p>
 */
export class DescribeManagedPrefixListsCommand extends $Command<
  DescribeManagedPrefixListsCommandInput,
  DescribeManagedPrefixListsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeManagedPrefixListsCommandInput) {
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
  ): Handler<DescribeManagedPrefixListsCommandInput, DescribeManagedPrefixListsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeManagedPrefixListsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeManagedPrefixListsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeManagedPrefixListsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeManagedPrefixListsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeManagedPrefixListsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeManagedPrefixListsCommandOutput> {
    return deserializeAws_ec2DescribeManagedPrefixListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
