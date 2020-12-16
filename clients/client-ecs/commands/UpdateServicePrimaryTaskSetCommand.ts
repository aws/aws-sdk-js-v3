import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateServicePrimaryTaskSetRequest, UpdateServicePrimaryTaskSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand,
  serializeAws_json1_1UpdateServicePrimaryTaskSetCommand,
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

export type UpdateServicePrimaryTaskSetCommandInput = UpdateServicePrimaryTaskSetRequest;
export type UpdateServicePrimaryTaskSetCommandOutput = UpdateServicePrimaryTaskSetResponse & __MetadataBearer;

/**
 * <p>Modifies which task set in a service is the primary task set. Any parameters that are
 * 			updated on the primary task set in a service will transition to the service. This is
 * 			used when a service uses the <code>EXTERNAL</code> deployment controller type. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
 * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export class UpdateServicePrimaryTaskSetCommand extends $Command<
  UpdateServicePrimaryTaskSetCommandInput,
  UpdateServicePrimaryTaskSetCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateServicePrimaryTaskSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServicePrimaryTaskSetCommandInput, UpdateServicePrimaryTaskSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "UpdateServicePrimaryTaskSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServicePrimaryTaskSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateServicePrimaryTaskSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateServicePrimaryTaskSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateServicePrimaryTaskSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateServicePrimaryTaskSetCommandOutput> {
    return deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
