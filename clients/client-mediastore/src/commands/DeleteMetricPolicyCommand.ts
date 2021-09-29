import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { DeleteMetricPolicyInput, DeleteMetricPolicyOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteMetricPolicyCommand,
  serializeAws_json1_1DeleteMetricPolicyCommand,
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

export interface DeleteMetricPolicyCommandInput extends DeleteMetricPolicyInput {}
export interface DeleteMetricPolicyCommandOutput extends DeleteMetricPolicyOutput, __MetadataBearer {}

/**
 * <p>Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteMetricPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DeleteMetricPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new DeleteMetricPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMetricPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteMetricPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteMetricPolicyCommand extends $Command<
  DeleteMetricPolicyCommandInput,
  DeleteMetricPolicyCommandOutput,
  MediaStoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMetricPolicyCommandInput) {
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
  ): Handler<DeleteMetricPolicyCommandInput, DeleteMetricPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "DeleteMetricPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMetricPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMetricPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMetricPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteMetricPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMetricPolicyCommandOutput> {
    return deserializeAws_json1_1DeleteMetricPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
