import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { PutMetricPolicyInput, PutMetricPolicyOutput } from "../models/models_0";
import {
  deserializeAws_json1_1PutMetricPolicyCommand,
  serializeAws_json1_1PutMetricPolicyCommand,
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

export type PutMetricPolicyCommandInput = PutMetricPolicyInput;
export type PutMetricPolicyCommandOutput = PutMetricPolicyOutput & __MetadataBearer;

/**
 * <p>The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.</p>
 */
export class PutMetricPolicyCommand extends $Command<
  PutMetricPolicyCommandInput,
  PutMetricPolicyCommandOutput,
  MediaStoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutMetricPolicyCommandInput) {
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
  ): Handler<PutMetricPolicyCommandInput, PutMetricPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "PutMetricPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutMetricPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutMetricPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutMetricPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutMetricPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutMetricPolicyCommandOutput> {
    return deserializeAws_json1_1PutMetricPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
