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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  ListTrafficDistributionGroupsRequest,
  ListTrafficDistributionGroupsRequestFilterSensitiveLog,
  ListTrafficDistributionGroupsResponse,
  ListTrafficDistributionGroupsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListTrafficDistributionGroupsCommand,
  serializeAws_restJson1ListTrafficDistributionGroupsCommand,
} from "../protocols/Aws_restJson1";

export interface ListTrafficDistributionGroupsCommandInput extends ListTrafficDistributionGroupsRequest {}
export interface ListTrafficDistributionGroupsCommandOutput
  extends ListTrafficDistributionGroupsResponse,
    __MetadataBearer {}

/**
 * <p>Lists traffic distribution groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListTrafficDistributionGroupsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListTrafficDistributionGroupsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListTrafficDistributionGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrafficDistributionGroupsCommandInput} for command's `input` shape.
 * @see {@link ListTrafficDistributionGroupsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ListTrafficDistributionGroupsCommand extends $Command<
  ListTrafficDistributionGroupsCommandInput,
  ListTrafficDistributionGroupsCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: ListTrafficDistributionGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTrafficDistributionGroupsCommandInput, ListTrafficDistributionGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTrafficDistributionGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListTrafficDistributionGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTrafficDistributionGroupsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTrafficDistributionGroupsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTrafficDistributionGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTrafficDistributionGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTrafficDistributionGroupsCommandOutput> {
    return deserializeAws_restJson1ListTrafficDistributionGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
