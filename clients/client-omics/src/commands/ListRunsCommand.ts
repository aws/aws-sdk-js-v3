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

import {
  ListRunsRequest,
  ListRunsRequestFilterSensitiveLog,
  ListRunsResponse,
  ListRunsResponseFilterSensitiveLog,
} from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  deserializeAws_restJson1ListRunsCommand,
  serializeAws_restJson1ListRunsCommand,
} from "../protocols/Aws_restJson1";

export interface ListRunsCommandInput extends ListRunsRequest {}
export interface ListRunsCommandOutput extends ListRunsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListRunsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListRunsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const command = new ListRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRunsCommandInput} for command's `input` shape.
 * @see {@link ListRunsCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 */
export class ListRunsCommand extends $Command<ListRunsCommandInput, ListRunsCommandOutput, OmicsClientResolvedConfig> {
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

  constructor(readonly input: ListRunsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OmicsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRunsCommandInput, ListRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListRunsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "ListRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRunsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRunsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRunsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRunsCommandOutput> {
    return deserializeAws_restJson1ListRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
