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

import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import {
  ListMemberAccountsRequest,
  ListMemberAccountsRequestFilterSensitiveLog,
  ListMemberAccountsResult,
  ListMemberAccountsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListMemberAccountsCommand,
  serializeAws_json1_1ListMemberAccountsCommand,
} from "../protocols/Aws_json1_1";

export interface ListMemberAccountsCommandInput extends ListMemberAccountsRequest {}
export interface ListMemberAccountsCommandOutput extends ListMemberAccountsResult, __MetadataBearer {}

/**
 * <p>(Discontinued) Lists all Amazon Macie Classic member accounts for the current Macie
 *       Classic administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, ListMemberAccountsCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, ListMemberAccountsCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new ListMemberAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMemberAccountsCommandInput} for command's `input` shape.
 * @see {@link ListMemberAccountsCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for MacieClient's `config` shape.
 *
 */
export class ListMemberAccountsCommand extends $Command<
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput,
  MacieClientResolvedConfig
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

  constructor(readonly input: ListMemberAccountsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MacieClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMemberAccountsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "ListMemberAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMemberAccountsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListMemberAccountsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMemberAccountsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMemberAccountsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMemberAccountsCommandOutput> {
    return deserializeAws_json1_1ListMemberAccountsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
