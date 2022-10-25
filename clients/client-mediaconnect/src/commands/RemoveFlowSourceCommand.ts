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

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import {
  RemoveFlowSourceRequest,
  RemoveFlowSourceRequestFilterSensitiveLog,
  RemoveFlowSourceResponse,
  RemoveFlowSourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RemoveFlowSourceCommand,
  serializeAws_restJson1RemoveFlowSourceCommand,
} from "../protocols/Aws_restJson1";

export interface RemoveFlowSourceCommandInput extends RemoveFlowSourceRequest {}
export interface RemoveFlowSourceCommandOutput extends RemoveFlowSourceResponse, __MetadataBearer {}

/**
 * Removes a source from an existing flow. This request can be made only if there is more than one source on the flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, RemoveFlowSourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, RemoveFlowSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new RemoveFlowSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveFlowSourceCommandInput} for command's `input` shape.
 * @see {@link RemoveFlowSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 */
export class RemoveFlowSourceCommand extends $Command<
  RemoveFlowSourceCommandInput,
  RemoveFlowSourceCommandOutput,
  MediaConnectClientResolvedConfig
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

  constructor(readonly input: RemoveFlowSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveFlowSourceCommandInput, RemoveFlowSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveFlowSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "RemoveFlowSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveFlowSourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RemoveFlowSourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveFlowSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveFlowSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveFlowSourceCommandOutput> {
    return deserializeAws_restJson1RemoveFlowSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
