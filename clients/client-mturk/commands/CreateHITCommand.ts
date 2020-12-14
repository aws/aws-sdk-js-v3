import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { CreateHITRequest, CreateHITResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateHITCommand, serializeAws_json1_1CreateHITCommand } from "../protocols/Aws_json1_1";
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

export type CreateHITCommandInput = CreateHITRequest;
export type CreateHITCommandOutput = CreateHITResponse & __MetadataBearer;

/**
 * <p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT).
 *             The new HIT is made available for Workers to find and accept on the Amazon Mechanical
 *             Turk website. </p>
 *         <p>
 *             This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p>
 *         <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs.
 *         </p>
 *
 *         <p>CreateHIT also supports several ways to provide question data: by providing a value
 *             for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing
 *             a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>.
 *         </p>
 *
 *         <note>
 *             <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see
 *             <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p>
 *         </note>
 */
export class CreateHITCommand extends $Command<
  CreateHITCommandInput,
  CreateHITCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateHITCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHITCommandInput, CreateHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "CreateHITCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHITRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateHITResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateHITCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHITCommandOutput> {
    return deserializeAws_json1_1CreateHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
