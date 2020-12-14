import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { PutCorsPolicyInput, PutCorsPolicyOutput } from "../models/models_0";
import {
  deserializeAws_json1_1PutCorsPolicyCommand,
  serializeAws_json1_1PutCorsPolicyCommand,
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

export type PutCorsPolicyCommandInput = PutCorsPolicyInput;
export type PutCorsPolicyCommandOutput = PutCorsPolicyOutput & __MetadataBearer;

/**
 * <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that
 *          the container can service cross-origin requests. For example, you might want to enable a
 *          request whose origin is http://www.example.com to access your AWS Elemental MediaStore
 *          container at my.example.container.com by using the browser's XMLHttpRequest
 *          capability.</p>
 *          <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS
 *          policy, you configure rules that identify origins and the HTTP methods that can be executed
 *          on your container. The policy can contain up to 398,000 characters. You can add up to 100
 *          rules to a CORS policy. If more than one rule applies, the service uses the first
 *          applicable rule listed.</p>
 *          <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
 */
export class PutCorsPolicyCommand extends $Command<
  PutCorsPolicyCommandInput,
  PutCorsPolicyCommandOutput,
  MediaStoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutCorsPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutCorsPolicyCommandInput, PutCorsPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "PutCorsPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutCorsPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutCorsPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutCorsPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutCorsPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutCorsPolicyCommandOutput> {
    return deserializeAws_json1_1PutCorsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
