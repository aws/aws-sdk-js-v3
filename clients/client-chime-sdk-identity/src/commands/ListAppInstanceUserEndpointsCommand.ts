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

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import {
  ListAppInstanceUserEndpointsRequest,
  ListAppInstanceUserEndpointsRequestFilterSensitiveLog,
  ListAppInstanceUserEndpointsResponse,
  ListAppInstanceUserEndpointsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAppInstanceUserEndpointsCommand,
  serializeAws_restJson1ListAppInstanceUserEndpointsCommand,
} from "../protocols/Aws_restJson1";

export interface ListAppInstanceUserEndpointsCommandInput extends ListAppInstanceUserEndpointsRequest {}
export interface ListAppInstanceUserEndpointsCommandOutput
  extends ListAppInstanceUserEndpointsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the <code>AppInstanceUserEndpoints</code> created under a single <code>AppInstanceUser</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, ListAppInstanceUserEndpointsCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, ListAppInstanceUserEndpointsCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const command = new ListAppInstanceUserEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppInstanceUserEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListAppInstanceUserEndpointsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 */
export class ListAppInstanceUserEndpointsCommand extends $Command<
  ListAppInstanceUserEndpointsCommandInput,
  ListAppInstanceUserEndpointsCommandOutput,
  ChimeSDKIdentityClientResolvedConfig
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

  constructor(readonly input: ListAppInstanceUserEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppInstanceUserEndpointsCommandInput, ListAppInstanceUserEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAppInstanceUserEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKIdentityClient";
    const commandName = "ListAppInstanceUserEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAppInstanceUserEndpointsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAppInstanceUserEndpointsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAppInstanceUserEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAppInstanceUserEndpointsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAppInstanceUserEndpointsCommandOutput> {
    return deserializeAws_restJson1ListAppInstanceUserEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
