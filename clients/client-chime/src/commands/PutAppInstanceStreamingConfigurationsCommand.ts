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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  PutAppInstanceStreamingConfigurationsRequest,
  PutAppInstanceStreamingConfigurationsRequestFilterSensitiveLog,
  PutAppInstanceStreamingConfigurationsResponse,
  PutAppInstanceStreamingConfigurationsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1PutAppInstanceStreamingConfigurationsCommand,
  serializeAws_restJson1PutAppInstanceStreamingConfigurationsCommand,
} from "../protocols/Aws_restJson1";

export interface PutAppInstanceStreamingConfigurationsCommandInput
  extends PutAppInstanceStreamingConfigurationsRequest {}
export interface PutAppInstanceStreamingConfigurationsCommandOutput
  extends PutAppInstanceStreamingConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>The data streaming configurations of an <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, PutAppInstanceStreamingConfigurationsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, PutAppInstanceStreamingConfigurationsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new PutAppInstanceStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppInstanceStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link PutAppInstanceStreamingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class PutAppInstanceStreamingConfigurationsCommand extends $Command<
  PutAppInstanceStreamingConfigurationsCommandInput,
  PutAppInstanceStreamingConfigurationsCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: PutAppInstanceStreamingConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAppInstanceStreamingConfigurationsCommandInput, PutAppInstanceStreamingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAppInstanceStreamingConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "PutAppInstanceStreamingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAppInstanceStreamingConfigurationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutAppInstanceStreamingConfigurationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutAppInstanceStreamingConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutAppInstanceStreamingConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAppInstanceStreamingConfigurationsCommandOutput> {
    return deserializeAws_restJson1PutAppInstanceStreamingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
