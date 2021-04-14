import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ResolveRoomRequest, ResolveRoomResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ResolveRoomCommand,
  serializeAws_json1_1ResolveRoomCommand,
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

export type ResolveRoomCommandInput = ResolveRoomRequest;
export type ResolveRoomCommandOutput = ResolveRoomResponse & __MetadataBearer;

/**
 * <p>Determines the details for the room from which a skill request was invoked. This
 *          operation is used by skill developers.</p>
 *          <p>To query ResolveRoom from an Alexa skill, the skill ID needs to be authorized. When
 *          the skill is using an AWS Lambda function, the skill is automatically authorized when you
 *          publish your skill as a private skill to your AWS account. Skills that are hosted using a
 *          custom web service must be manually authorized. To get your skill authorized, contact AWS
 *          Support with your AWS account ID that queries the ResolveRoom API and skill ID. </p>
 */
export class ResolveRoomCommand extends $Command<
  ResolveRoomCommandInput,
  ResolveRoomCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResolveRoomCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResolveRoomCommandInput, ResolveRoomCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ResolveRoomCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResolveRoomRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResolveRoomResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResolveRoomCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResolveRoomCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResolveRoomCommandOutput> {
    return deserializeAws_json1_1ResolveRoomCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
