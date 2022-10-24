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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import {
  ListGatewayGroupsRequest,
  ListGatewayGroupsRequestFilterSensitiveLog,
  ListGatewayGroupsResponse,
  ListGatewayGroupsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListGatewayGroupsCommand,
  serializeAws_json1_1ListGatewayGroupsCommand,
} from "../protocols/Aws_json1_1";

export interface ListGatewayGroupsCommandInput extends ListGatewayGroupsRequest {}
export interface ListGatewayGroupsCommandOutput extends ListGatewayGroupsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of gateway group summaries. Use GetGatewayGroup to retrieve details of
 *          a specific gateway group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, ListGatewayGroupsCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, ListGatewayGroupsCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new ListGatewayGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGatewayGroupsCommandInput} for command's `input` shape.
 * @see {@link ListGatewayGroupsCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 */
export class ListGatewayGroupsCommand extends $Command<
  ListGatewayGroupsCommandInput,
  ListGatewayGroupsCommandOutput,
  AlexaForBusinessClientResolvedConfig
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

  constructor(readonly input: ListGatewayGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGatewayGroupsCommandInput, ListGatewayGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListGatewayGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ListGatewayGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGatewayGroupsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListGatewayGroupsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGatewayGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListGatewayGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGatewayGroupsCommandOutput> {
    return deserializeAws_json1_1ListGatewayGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
