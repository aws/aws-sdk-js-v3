import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { PutAttributesRequest, PutAttributesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutAttributesCommand,
  serializeAws_json1_1PutAttributesCommand,
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

export type PutAttributesCommandInput = PutAttributesRequest;
export type PutAttributesCommandOutput = PutAttributesResponse & __MetadataBearer;

/**
 * <p>Create or update an attribute on an Amazon ECS resource. If the attribute does not exist,
 * 			it is created. If the attribute exists, its value is replaced with the specified value.
 * 			To delete an attribute, use <a>DeleteAttributes</a>. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html#attributes">Attributes</a> in the
 * 			<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 */
export class PutAttributesCommand extends $Command<
  PutAttributesCommandInput,
  PutAttributesCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAttributesCommandInput) {
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
  ): Handler<PutAttributesCommandInput, PutAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "PutAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAttributesCommandOutput> {
    return deserializeAws_json1_1PutAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
