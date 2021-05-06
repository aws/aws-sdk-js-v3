import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { AddAssociationRequest, AddAssociationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AddAssociationCommand,
  serializeAws_json1_1AddAssociationCommand,
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

export interface AddAssociationCommandInput extends AddAssociationRequest {}
export interface AddAssociationCommandOutput extends AddAssociationResponse, __MetadataBearer {}

/**
 * <p>Creates an <i>association</i> between the source and the destination. A
 *         source can be associated with multiple destinations, and a destination can be associated
 *         with multiple sources. An association is a lineage tracking entity. For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
 *           ML Lineage Tracking</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, AddAssociationCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, AddAssociationCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new AddAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddAssociationCommandInput} for command's `input` shape.
 * @see {@link AddAssociationCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AddAssociationCommand extends $Command<
  AddAssociationCommandInput,
  AddAssociationCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddAssociationCommandInput, AddAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "AddAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddAssociationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddAssociationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddAssociationCommandOutput> {
    return deserializeAws_json1_1AddAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
