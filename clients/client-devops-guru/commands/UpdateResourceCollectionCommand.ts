import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { UpdateResourceCollectionRequest, UpdateResourceCollectionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateResourceCollectionCommand,
  serializeAws_restJson1UpdateResourceCollectionCommand,
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

export type UpdateResourceCollectionCommandInput = UpdateResourceCollectionRequest;
export type UpdateResourceCollectionCommandOutput = UpdateResourceCollectionResponse & __MetadataBearer;

/**
 * <p> Updates the collection of resources that DevOps Guru analyzes.
 * 			The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
 *       	only the AWS resources that are defined in the stacks. This method also creates the IAM role required for you
 * 			to use DevOps Guru. </p>
 */
export class UpdateResourceCollectionCommand extends $Command<
  UpdateResourceCollectionCommandInput,
  UpdateResourceCollectionCommandOutput,
  DevOpsGuruClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateResourceCollectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateResourceCollectionCommandInput, UpdateResourceCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "UpdateResourceCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateResourceCollectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateResourceCollectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateResourceCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateResourceCollectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResourceCollectionCommandOutput> {
    return deserializeAws_restJson1UpdateResourceCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
