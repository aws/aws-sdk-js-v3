import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListSubscribedWorkteamsRequest, ListSubscribedWorkteamsResponse } from "../models/models_2";
import {
  deserializeAws_json1_1ListSubscribedWorkteamsCommand,
  serializeAws_json1_1ListSubscribedWorkteamsCommand,
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

export interface ListSubscribedWorkteamsCommandInput extends ListSubscribedWorkteamsRequest {}
export interface ListSubscribedWorkteamsCommandOutput extends ListSubscribedWorkteamsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of the work teams that you are subscribed to in the Amazon Web Services Marketplace. The
 *             list may be empty if no work team satisfies the filter specified in the
 *                 <code>NameContains</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListSubscribedWorkteamsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListSubscribedWorkteamsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListSubscribedWorkteamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSubscribedWorkteamsCommandInput} for command's `input` shape.
 * @see {@link ListSubscribedWorkteamsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSubscribedWorkteamsCommand extends $Command<
  ListSubscribedWorkteamsCommandInput,
  ListSubscribedWorkteamsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSubscribedWorkteamsCommandInput) {
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
  ): Handler<ListSubscribedWorkteamsCommandInput, ListSubscribedWorkteamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListSubscribedWorkteamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSubscribedWorkteamsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSubscribedWorkteamsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSubscribedWorkteamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSubscribedWorkteamsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSubscribedWorkteamsCommandOutput> {
    return deserializeAws_json1_1ListSubscribedWorkteamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
