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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  ListStagingAccountsRequest,
  ListStagingAccountsRequestFilterSensitiveLog,
  ListStagingAccountsResponse,
  ListStagingAccountsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListStagingAccountsCommand,
  serializeAws_restJson1ListStagingAccountsCommand,
} from "../protocols/Aws_restJson1";

export interface ListStagingAccountsCommandInput extends ListStagingAccountsRequest {}
export interface ListStagingAccountsCommandOutput extends ListStagingAccountsResponse, __MetadataBearer {}

/**
 * <p>Returns an array of staging accounts for existing extended source servers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ListStagingAccountsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ListStagingAccountsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const command = new ListStagingAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStagingAccountsCommandInput} for command's `input` shape.
 * @see {@link ListStagingAccountsCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 */
export class ListStagingAccountsCommand extends $Command<
  ListStagingAccountsCommandInput,
  ListStagingAccountsCommandOutput,
  DrsClientResolvedConfig
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

  constructor(readonly input: ListStagingAccountsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStagingAccountsCommandInput, ListStagingAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStagingAccountsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "ListStagingAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStagingAccountsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListStagingAccountsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStagingAccountsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListStagingAccountsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStagingAccountsCommandOutput> {
    return deserializeAws_restJson1ListStagingAccountsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
