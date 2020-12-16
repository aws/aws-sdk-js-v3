import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { DetectEntitiesV2Request, DetectEntitiesV2Response } from "../models/models_0";
import {
  deserializeAws_json1_1DetectEntitiesV2Command,
  serializeAws_json1_1DetectEntitiesV2Command,
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

export type DetectEntitiesV2CommandInput = DetectEntitiesV2Request;
export type DetectEntitiesV2CommandOutput = DetectEntitiesV2Response & __MetadataBearer;

/**
 * <p>Inspects the clinical text for a variety of medical entities and returns specific
 *       information about them such as entity category, location, and confidence score on that
 *       information. Amazon Comprehend Medical only detects medical entities in English language
 *       texts.</p>
 *          <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a>
 *       operation. This new action uses a different model for determining the entities in your medical
 *       text and changes the way that some entities are returned in the output. You should use the
 *         <code>DetectEntitiesV2</code> operation in all new applications.</p>
 *          <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and
 *         <code>Direction</code> entities as attributes instead of types. </p>
 */
export class DetectEntitiesV2Command extends $Command<
  DetectEntitiesV2CommandInput,
  DetectEntitiesV2CommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectEntitiesV2CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectEntitiesV2CommandInput, DetectEntitiesV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "DetectEntitiesV2Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectEntitiesV2Request.filterSensitiveLog,
      outputFilterSensitiveLog: DetectEntitiesV2Response.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectEntitiesV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectEntitiesV2Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectEntitiesV2CommandOutput> {
    return deserializeAws_json1_1DetectEntitiesV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
