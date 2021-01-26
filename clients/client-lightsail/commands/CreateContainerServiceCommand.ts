import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateContainerServiceRequest, CreateContainerServiceResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateContainerServiceCommand,
  serializeAws_json1_1CreateContainerServiceCommand,
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

export type CreateContainerServiceCommandInput = CreateContainerServiceRequest;
export type CreateContainerServiceCommandOutput = CreateContainerServiceResult & __MetadataBearer;

/**
 * <p>Creates an Amazon Lightsail container service.</p>
 *
 *          <p>A Lightsail container service is a compute resource to which you can deploy containers.
 *       For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-containers">Container services in Amazon Lightsail</a> in the <i>Lightsail Dev
 *         Guide</i>.</p>
 */
export class CreateContainerServiceCommand extends $Command<
  CreateContainerServiceCommandInput,
  CreateContainerServiceCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateContainerServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateContainerServiceCommandInput, CreateContainerServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateContainerServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateContainerServiceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateContainerServiceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateContainerServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateContainerServiceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateContainerServiceCommandOutput> {
    return deserializeAws_json1_1CreateContainerServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
