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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import {
  ListGraphsRequest,
  ListGraphsRequestFilterSensitiveLog,
  ListGraphsResponse,
  ListGraphsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListGraphsCommand,
  serializeAws_restJson1ListGraphsCommand,
} from "../protocols/Aws_restJson1";

export interface ListGraphsCommandInput extends ListGraphsRequest {}
export interface ListGraphsCommandOutput extends ListGraphsResponse, __MetadataBearer {}

/**
 * <p>Returns the list of behavior graphs that the calling account is an administrator account
 *          of. This operation can only be called by an administrator account.</p>
 *          <p>Because an account can currently only be the administrator of one behavior graph within
 *          a Region, the results always contain a single behavior graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListGraphsCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListGraphsCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new ListGraphsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGraphsCommandInput} for command's `input` shape.
 * @see {@link ListGraphsCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 */
export class ListGraphsCommand extends $Command<
  ListGraphsCommandInput,
  ListGraphsCommandOutput,
  DetectiveClientResolvedConfig
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

  constructor(readonly input: ListGraphsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGraphsCommandInput, ListGraphsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListGraphsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "ListGraphsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGraphsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListGraphsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGraphsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListGraphsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGraphsCommandOutput> {
    return deserializeAws_restJson1ListGraphsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
