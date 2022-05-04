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

import { ListServicePipelineOutputsInput, ListServicePipelineOutputsOutput } from "../models/models_0";
import {
  deserializeAws_json1_0ListServicePipelineOutputsCommand,
  serializeAws_json1_0ListServicePipelineOutputsCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface ListServicePipelineOutputsCommandInput extends ListServicePipelineOutputsInput {}
export interface ListServicePipelineOutputsCommandOutput extends ListServicePipelineOutputsOutput, __MetadataBearer {}

/**
 * <p>View a list service pipeline infrastructure as code outputs with detail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServicePipelineOutputsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServicePipelineOutputsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new ListServicePipelineOutputsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServicePipelineOutputsCommandInput} for command's `input` shape.
 * @see {@link ListServicePipelineOutputsCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class ListServicePipelineOutputsCommand extends $Command<
  ListServicePipelineOutputsCommandInput,
  ListServicePipelineOutputsCommandOutput,
  ProtonClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListServicePipelineOutputsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServicePipelineOutputsCommandInput, ListServicePipelineOutputsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "ListServicePipelineOutputsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServicePipelineOutputsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListServicePipelineOutputsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListServicePipelineOutputsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListServicePipelineOutputsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServicePipelineOutputsCommandOutput> {
    return deserializeAws_json1_0ListServicePipelineOutputsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
