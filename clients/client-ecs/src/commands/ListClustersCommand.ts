import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { ListClustersRequest, ListClustersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListClustersCommand,
  serializeAws_json1_1ListClustersCommand,
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

export interface ListClustersCommandInput extends ListClustersRequest {}
export interface ListClustersCommandOutput extends ListClustersResponse, __MetadataBearer {}

/**
 * <p>Returns a list of existing clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListClustersCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListClustersCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClustersCommandInput} for command's `input` shape.
 * @see {@link ListClustersCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListClustersCommand extends $Command<
  ListClustersCommandInput,
  ListClustersCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListClustersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListClustersCommandInput, ListClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ListClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListClustersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListClustersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListClustersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClustersCommandOutput> {
    return deserializeAws_json1_1ListClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
