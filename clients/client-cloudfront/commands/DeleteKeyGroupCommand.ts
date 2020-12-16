import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteKeyGroupRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteKeyGroupCommand,
  serializeAws_restXmlDeleteKeyGroupCommand,
} from "../protocols/Aws_restXml";
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

export type DeleteKeyGroupCommandInput = DeleteKeyGroupRequest;
export type DeleteKeyGroupCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a key group.</p>
 * 		       <p>You cannot delete a key group that is referenced in a cache behavior. First update
 * 			your distributions to remove the key group from all cache behaviors, then delete the key
 * 			group.</p>
 * 		       <p>To delete a key group, you must provide the key group’s identifier and version. To get
 * 			these values, use <code>ListKeyGroups</code> followed by <code>GetKeyGroup</code> or
 * 			<code>GetKeyGroupConfig</code>.</p>
 */
export class DeleteKeyGroupCommand extends $Command<
  DeleteKeyGroupCommandInput,
  DeleteKeyGroupCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteKeyGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteKeyGroupCommandInput, DeleteKeyGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DeleteKeyGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteKeyGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteKeyGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteKeyGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteKeyGroupCommandOutput> {
    return deserializeAws_restXmlDeleteKeyGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
