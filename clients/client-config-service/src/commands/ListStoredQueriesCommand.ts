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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  ListStoredQueriesRequest,
  ListStoredQueriesRequestFilterSensitiveLog,
  ListStoredQueriesResponse,
  ListStoredQueriesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListStoredQueriesCommand,
  serializeAws_json1_1ListStoredQueriesCommand,
} from "../protocols/Aws_json1_1";

export interface ListStoredQueriesCommandInput extends ListStoredQueriesRequest {}
export interface ListStoredQueriesCommandOutput extends ListStoredQueriesResponse, __MetadataBearer {}

/**
 * <p>Lists the stored queries for a single Amazon Web Services account and a single Amazon Web Services Region. The default is 100. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, ListStoredQueriesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, ListStoredQueriesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new ListStoredQueriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStoredQueriesCommandInput} for command's `input` shape.
 * @see {@link ListStoredQueriesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class ListStoredQueriesCommand extends $Command<
  ListStoredQueriesCommandInput,
  ListStoredQueriesCommandOutput,
  ConfigServiceClientResolvedConfig
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

  constructor(readonly input: ListStoredQueriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStoredQueriesCommandInput, ListStoredQueriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStoredQueriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "ListStoredQueriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStoredQueriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListStoredQueriesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStoredQueriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListStoredQueriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStoredQueriesCommandOutput> {
    return deserializeAws_json1_1ListStoredQueriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
