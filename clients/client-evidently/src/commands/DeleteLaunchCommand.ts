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
  DeleteLaunchRequest,
  DeleteLaunchRequestFilterSensitiveLog,
  DeleteLaunchResponse,
  DeleteLaunchResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteLaunchCommand,
  serializeAws_restJson1DeleteLaunchCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteLaunchCommandInput extends DeleteLaunchRequest {}
export interface DeleteLaunchCommandOutput extends DeleteLaunchResponse, __MetadataBearer {}

/**
 * <p>Deletes an Evidently launch. The feature used for the launch is not deleted.</p>
 *          <p>To stop a launch without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopLaunch.html">StopLaunch</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, DeleteLaunchCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, DeleteLaunchCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new DeleteLaunchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLaunchCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 */
export class DeleteLaunchCommand extends $Command<
  DeleteLaunchCommandInput,
  DeleteLaunchCommandOutput,
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

  constructor(readonly input: DeleteLaunchCommandInput) {
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
  ): Handler<DeleteLaunchCommandInput, DeleteLaunchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteLaunchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "DeleteLaunchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLaunchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteLaunchResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLaunchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteLaunchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLaunchCommandOutput> {
    return deserializeAws_restJson1DeleteLaunchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
