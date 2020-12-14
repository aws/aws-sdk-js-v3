import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyManagedPrefixListRequest, ModifyManagedPrefixListResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyManagedPrefixListCommand,
  serializeAws_ec2ModifyManagedPrefixListCommand,
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

export type ModifyManagedPrefixListCommandInput = ModifyManagedPrefixListRequest;
export type ModifyManagedPrefixListCommandOutput = ModifyManagedPrefixListResult & __MetadataBearer;

/**
 * <p>Modifies the specified managed prefix list.</p>
 *         <p>Adding or removing entries in a prefix list creates a new version of the prefix list.
 *             Changing the name of the prefix list does not affect the version.</p>
 *         <p>If you specify a current version number that does not match the true current version
 *             number, the request fails.</p>
 */
export class ModifyManagedPrefixListCommand extends $Command<
  ModifyManagedPrefixListCommandInput,
  ModifyManagedPrefixListCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyManagedPrefixListCommandInput) {
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
  ): Handler<ModifyManagedPrefixListCommandInput, ModifyManagedPrefixListCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyManagedPrefixListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyManagedPrefixListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyManagedPrefixListResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyManagedPrefixListCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyManagedPrefixListCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyManagedPrefixListCommandOutput> {
    return deserializeAws_ec2ModifyManagedPrefixListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
