import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { EnableLDAPSRequest, EnableLDAPSResult } from "../models/models_0";
import {
  deserializeAws_json1_1EnableLDAPSCommand,
  serializeAws_json1_1EnableLDAPSCommand,
} from "../protocols/Aws_json1_1";
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

export type EnableLDAPSCommandInput = EnableLDAPSRequest;
export type EnableLDAPSCommandOutput = EnableLDAPSResult & __MetadataBearer;

/**
 * <p>Activates the switch for the specific directory to always use LDAP secure calls.</p>
 */
export class EnableLDAPSCommand extends $Command<
  EnableLDAPSCommandInput,
  EnableLDAPSCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableLDAPSCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableLDAPSCommandInput, EnableLDAPSCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "EnableLDAPSCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableLDAPSRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableLDAPSResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableLDAPSCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableLDAPSCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableLDAPSCommandOutput> {
    return deserializeAws_json1_1EnableLDAPSCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
