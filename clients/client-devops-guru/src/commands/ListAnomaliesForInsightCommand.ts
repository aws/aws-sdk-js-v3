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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import {
  ListAnomaliesForInsightRequest,
  ListAnomaliesForInsightRequestFilterSensitiveLog,
  ListAnomaliesForInsightResponse,
  ListAnomaliesForInsightResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAnomaliesForInsightCommand,
  serializeAws_restJson1ListAnomaliesForInsightCommand,
} from "../protocols/Aws_restJson1";

export interface ListAnomaliesForInsightCommandInput extends ListAnomaliesForInsightRequest {}
export interface ListAnomaliesForInsightCommandOutput extends ListAnomaliesForInsightResponse, __MetadataBearer {}

/**
 * <p> Returns a list of the anomalies that belong to an insight that you specify using its
 * 			ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListAnomaliesForInsightCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListAnomaliesForInsightCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new ListAnomaliesForInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnomaliesForInsightCommandInput} for command's `input` shape.
 * @see {@link ListAnomaliesForInsightCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class ListAnomaliesForInsightCommand extends $Command<
  ListAnomaliesForInsightCommandInput,
  ListAnomaliesForInsightCommandOutput,
  DevOpsGuruClientResolvedConfig
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

  constructor(readonly input: ListAnomaliesForInsightCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAnomaliesForInsightCommandInput, ListAnomaliesForInsightCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAnomaliesForInsightCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "ListAnomaliesForInsightCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAnomaliesForInsightRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAnomaliesForInsightResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAnomaliesForInsightCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAnomaliesForInsightCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAnomaliesForInsightCommandOutput> {
    return deserializeAws_restJson1ListAnomaliesForInsightCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
