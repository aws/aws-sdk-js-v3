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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import {
  UpdateLaunchRequest,
  UpdateLaunchRequestFilterSensitiveLog,
  UpdateLaunchResponse,
  UpdateLaunchResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateLaunchCommand,
  serializeAws_restJson1UpdateLaunchCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateLaunchCommandInput extends UpdateLaunchRequest {}
export interface UpdateLaunchCommandOutput extends UpdateLaunchResponse, __MetadataBearer {}

/**
 * <p>Updates a launch of a given feature. </p>
 *          <p>Don't use this operation to update the tags of an existing launch. Instead, use
 *       <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, UpdateLaunchCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, UpdateLaunchCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new UpdateLaunchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLaunchCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 */
export class UpdateLaunchCommand extends $Command<
  UpdateLaunchCommandInput,
  UpdateLaunchCommandOutput,
  EvidentlyClientResolvedConfig
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

  constructor(readonly input: UpdateLaunchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EvidentlyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLaunchCommandInput, UpdateLaunchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateLaunchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "UpdateLaunchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLaunchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateLaunchResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateLaunchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateLaunchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLaunchCommandOutput> {
    return deserializeAws_restJson1UpdateLaunchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
