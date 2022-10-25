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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import {
  ListContactsRequest,
  ListContactsRequestFilterSensitiveLog,
  ListContactsResponse,
  ListContactsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListContactsCommand,
  serializeAws_restJson1ListContactsCommand,
} from "../protocols/Aws_restJson1";

export interface ListContactsCommandInput extends ListContactsRequest {}
export interface ListContactsCommandOutput extends ListContactsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of contacts.</p>
 *          <p>If <code>statusList</code> contains AVAILABLE, the request must include
 *       <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListContactsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListContactsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ListContactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContactsCommandInput} for command's `input` shape.
 * @see {@link ListContactsCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 */
export class ListContactsCommand extends $Command<
  ListContactsCommandInput,
  ListContactsCommandOutput,
  GroundStationClientResolvedConfig
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

  constructor(readonly input: ListContactsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListContactsCommandInput, ListContactsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListContactsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "ListContactsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListContactsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListContactsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListContactsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListContactsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListContactsCommandOutput> {
    return deserializeAws_restJson1ListContactsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
