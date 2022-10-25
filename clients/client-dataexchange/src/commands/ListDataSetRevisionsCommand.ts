// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import {
  ListDataSetRevisionsRequest,
  ListDataSetRevisionsRequestFilterSensitiveLog,
  ListDataSetRevisionsResponse,
  ListDataSetRevisionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListDataSetRevisionsCommand,
  serializeAws_restJson1ListDataSetRevisionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListDataSetRevisionsCommandInput extends ListDataSetRevisionsRequest {}
export interface ListDataSetRevisionsCommandOutput extends ListDataSetRevisionsResponse, __MetadataBearer {}

/**
 * <p>This operation lists a data set's revisions sorted by CreatedAt in descending order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListDataSetRevisionsCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, ListDataSetRevisionsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new ListDataSetRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataSetRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListDataSetRevisionsCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 */
export class ListDataSetRevisionsCommand extends $Command<
  ListDataSetRevisionsCommandInput,
  ListDataSetRevisionsCommandOutput,
  DataExchangeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListDataSetRevisionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataExchangeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataSetRevisionsCommandInput, ListDataSetRevisionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDataSetRevisionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataExchangeClient";
    const commandName = "ListDataSetRevisionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDataSetRevisionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDataSetRevisionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDataSetRevisionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDataSetRevisionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataSetRevisionsCommandOutput> {
    return deserializeAws_restJson1ListDataSetRevisionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
