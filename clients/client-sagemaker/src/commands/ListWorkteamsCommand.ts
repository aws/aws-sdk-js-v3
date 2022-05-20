// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ListWorkteamsRequest, ListWorkteamsResponse } from "../models/models_3";
import {
  deserializeAws_json1_1ListWorkteamsCommand,
  serializeAws_json1_1ListWorkteamsCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface ListWorkteamsCommandInput extends ListWorkteamsRequest {}
export interface ListWorkteamsCommandOutput extends ListWorkteamsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of private work teams that you have defined in a region. The list may be empty if
 *             no work team satisfies the filter specified in the <code>NameContains</code>
 *             parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListWorkteamsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListWorkteamsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListWorkteamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkteamsCommandInput} for command's `input` shape.
 * @see {@link ListWorkteamsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class ListWorkteamsCommand extends $Command<
  ListWorkteamsCommandInput,
  ListWorkteamsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWorkteamsCommandInput) {
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
  ): Handler<ListWorkteamsCommandInput, ListWorkteamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListWorkteamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWorkteamsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWorkteamsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListWorkteamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListWorkteamsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkteamsCommandOutput> {
    return deserializeAws_json1_1ListWorkteamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
