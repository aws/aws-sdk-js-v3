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
  ListProfilesRequest,
  ListProfilesRequestFilterSensitiveLog,
  ListProfilesResponse,
  ListProfilesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListProfilesCommand,
  serializeAws_json1_1ListProfilesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

export interface ListProfilesCommandInput extends ListProfilesRequest {}
export interface ListProfilesCommandOutput extends ListProfilesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the profiles for your system. If you want to limit the results to a
 *       certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the
 *       command previously and received a value for <code>NextToken</code>, you can supply that value
 *       to continue listing profiles from where you left off.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListProfilesCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListProfilesCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new ListProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfilesCommandInput} for command's `input` shape.
 * @see {@link ListProfilesCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 */
export class ListProfilesCommand extends $Command<
  ListProfilesCommandInput,
  ListProfilesCommandOutput,
  TransferClientResolvedConfig
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

  constructor(readonly input: ListProfilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProfilesCommandInput, ListProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListProfilesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "ListProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProfilesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListProfilesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListProfilesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProfilesCommandOutput> {
    return deserializeAws_json1_1ListProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
