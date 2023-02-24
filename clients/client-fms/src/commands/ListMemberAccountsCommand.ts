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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import {
  ListMemberAccountsRequest,
  ListMemberAccountsRequestFilterSensitiveLog,
  ListMemberAccountsResponse,
  ListMemberAccountsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListMemberAccountsCommand,
  serializeAws_json1_1ListMemberAccountsCommand,
} from "../protocols/Aws_json1_1";

export interface ListMemberAccountsCommandInput extends ListMemberAccountsRequest {}
export interface ListMemberAccountsCommandOutput extends ListMemberAccountsResponse, __MetadataBearer {}

/**
 * <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the
 *       administrator's Amazon Web Services organization.</p>
 *          <p>The <code>ListMemberAccounts</code> must be submitted by the account that is set as the
 *       Firewall Manager administrator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListMemberAccountsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListMemberAccountsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListMemberAccountsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMemberAccountsCommandInput} for command's `input` shape.
 * @see {@link ListMemberAccountsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 */
export class ListMemberAccountsCommand extends $Command<
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput,
  FMSClientResolvedConfig
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
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMemberAccountsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "ListMemberAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMemberAccountsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListMemberAccountsResponseFilterSensitiveLog,
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
