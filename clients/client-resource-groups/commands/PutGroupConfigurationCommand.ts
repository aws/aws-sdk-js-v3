import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { PutGroupConfigurationInput, PutGroupConfigurationOutput } from "../models/models_0";
import {
  deserializeAws_restJson1PutGroupConfigurationCommand,
  serializeAws_restJson1PutGroupConfigurationCommand,
} from "../protocols/Aws_restJson1";
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

export type PutGroupConfigurationCommandInput = PutGroupConfigurationInput;
export type PutGroupConfigurationCommandOutput = PutGroupConfigurationOutput & __MetadataBearer;

/**
 * <p>Attaches a service configuration to the specified group. This occurs asynchronously,
 *             and can take time to complete. You can use <a>GetGroupConfiguration</a> to
 *             check the status of the update.</p>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                 <p>
 *                   <code>resource-groups:PutGroupConfiguration</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export class PutGroupConfigurationCommand extends $Command<
  PutGroupConfigurationCommandInput,
  PutGroupConfigurationCommandOutput,
  ResourceGroupsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutGroupConfigurationCommandInput) {
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
  ): Handler<PutGroupConfigurationCommandInput, PutGroupConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsClient";
    const commandName = "PutGroupConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutGroupConfigurationInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutGroupConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutGroupConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutGroupConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutGroupConfigurationCommandOutput> {
    return deserializeAws_restJson1PutGroupConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
