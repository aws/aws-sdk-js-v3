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
  UpdateScheduledActionRequest,
  UpdateScheduledActionRequestFilterSensitiveLog,
  UpdateScheduledActionResponse,
  UpdateScheduledActionResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  deserializeAws_restJson1UpdateScheduledActionCommand,
  serializeAws_restJson1UpdateScheduledActionCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link UpdateScheduledActionCommand}.
 */
export interface UpdateScheduledActionCommandInput extends UpdateScheduledActionRequest {}
/**
 * The output of {@link UpdateScheduledActionCommand}.
 */
export interface UpdateScheduledActionCommandOutput extends UpdateScheduledActionResponse, __MetadataBearer {}

/**
 * <p>Reschedules a planned domain configuration change for a later time. This change can be a
 *    scheduled <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">service software
 *     update</a> or a <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html#auto-tune-types">blue/green
 *      Auto-Tune enhancement</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, UpdateScheduledActionCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, UpdateScheduledActionCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new UpdateScheduledActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateScheduledActionCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 */
export class UpdateScheduledActionCommand extends $Command<
  UpdateScheduledActionCommandInput,
  UpdateScheduledActionCommandOutput,
  OpenSearchClientResolvedConfig
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

  constructor(readonly input: UpdateScheduledActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateScheduledActionCommandInput, UpdateScheduledActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateScheduledActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "UpdateScheduledActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateScheduledActionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateScheduledActionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateScheduledActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateScheduledActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateScheduledActionCommandOutput> {
    return deserializeAws_restJson1UpdateScheduledActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
