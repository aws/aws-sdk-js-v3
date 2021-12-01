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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListClustersV2Request, ListClustersV2Response } from "../models/models_0";
import {
  deserializeAws_restJson1ListClustersV2Command,
  serializeAws_restJson1ListClustersV2Command,
} from "../protocols/Aws_restJson1";

export interface ListClustersV2CommandInput extends ListClustersV2Request {}
export interface ListClustersV2CommandOutput extends ListClustersV2Response, __MetadataBearer {}

/**
 * <p>Returns a list of all the MSK clusters in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListClustersV2Command } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListClustersV2Command } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const command = new ListClustersV2Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListClustersV2CommandInput} for command's `input` shape.
 * @see {@link ListClustersV2CommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 */
export class ListClustersV2Command extends $Command<
  ListClustersV2CommandInput,
  ListClustersV2CommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListClustersV2CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListClustersV2CommandInput, ListClustersV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "ListClustersV2Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListClustersV2Request.filterSensitiveLog,
      outputFilterSensitiveLog: ListClustersV2Response.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListClustersV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListClustersV2Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClustersV2CommandOutput> {
    return deserializeAws_restJson1ListClustersV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
