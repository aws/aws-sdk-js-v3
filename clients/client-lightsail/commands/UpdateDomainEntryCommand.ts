import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateDomainEntryRequest, UpdateDomainEntryResult } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateDomainEntryCommand,
  serializeAws_json1_1UpdateDomainEntryCommand,
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

export type UpdateDomainEntryCommandInput = UpdateDomainEntryRequest;
export type UpdateDomainEntryCommandOutput = UpdateDomainEntryResult & __MetadataBearer;

/**
 * <p>Updates a domain recordset after it is created.</p>
 *          <p>The <code>update domain entry</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>domain name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class UpdateDomainEntryCommand extends $Command<
  UpdateDomainEntryCommandInput,
  UpdateDomainEntryCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDomainEntryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDomainEntryCommandInput, UpdateDomainEntryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "UpdateDomainEntryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDomainEntryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDomainEntryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDomainEntryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDomainEntryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDomainEntryCommandOutput> {
    return deserializeAws_json1_1UpdateDomainEntryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
