import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { TagInput, TagOutput } from "../models/models_0";
import { deserializeAws_restJson1TagCommand, serializeAws_restJson1TagCommand } from "../protocols/Aws_restJson1";
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

export type TagCommandInput = TagInput;
export type TagCommandOutput = TagOutput & __MetadataBearer;

/**
 * <p>Adds tags to a resource group with the specified ARN. Existing tags on a resource
 *             group are not changed if they are not specified in the request parameters.</p>
 *         <important>
 *             <p>Do not store personally identifiable information (PII) or other confidential or
 *                 sensitive information in tags. We use tags to provide you with billing and
 *                 administration services. Tags are not intended to be used for private or sensitive
 *                 data.</p>
 *         </important>
 */
export class TagCommand extends $Command<TagCommandInput, TagCommandOutput, ResourceGroupsClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TagCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagCommandInput, TagCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsClient";
    const commandName = "TagCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TagInput.filterSensitiveLog,
      outputFilterSensitiveLog: TagOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TagCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TagCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagCommandOutput> {
    return deserializeAws_restJson1TagCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
