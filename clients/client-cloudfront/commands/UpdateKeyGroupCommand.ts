import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateKeyGroupRequest, UpdateKeyGroupResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateKeyGroupCommand,
  serializeAws_restXmlUpdateKeyGroupCommand,
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

export type UpdateKeyGroupCommandInput = UpdateKeyGroupRequest;
export type UpdateKeyGroupCommandOutput = UpdateKeyGroupResult & __MetadataBearer;

/**
 * <p>Updates a key group.</p>
 * 		       <p>When you update a key group, all the fields are updated with the values provided in
 * 			the request. You cannot update some fields independent of others. To update a key
 * 			group:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Get the current key group with <code>GetKeyGroup</code> or
 * 					<code>GetKeyGroupConfig</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Locally modify the fields in the key group that you want to update. For
 * 					example, add or remove public key IDs.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including
 * 					the fields that you modified and those that you didn’t.</p>
 * 			         </li>
 *          </ol>
 */
export class UpdateKeyGroupCommand extends $Command<
  UpdateKeyGroupCommandInput,
  UpdateKeyGroupCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateKeyGroupCommandInput) {
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
  ): Handler<UpdateKeyGroupCommandInput, UpdateKeyGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateKeyGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateKeyGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateKeyGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateKeyGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateKeyGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateKeyGroupCommandOutput> {
    return deserializeAws_restXmlUpdateKeyGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
