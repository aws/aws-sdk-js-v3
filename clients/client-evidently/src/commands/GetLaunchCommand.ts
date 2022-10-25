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
  GetLaunchRequest,
  GetLaunchRequestFilterSensitiveLog,
  GetLaunchResponse,
  GetLaunchResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetLaunchCommand,
  serializeAws_restJson1GetLaunchCommand,
} from "../protocols/Aws_restJson1";

export interface GetLaunchCommandInput extends GetLaunchRequest {}
export interface GetLaunchCommandOutput extends GetLaunchResponse, __MetadataBearer {}

/**
 * <p>Returns the details about one launch. You must already know the
 *        launch name. To retrieve a list of launches in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListLaunches.html">ListLaunches</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, GetLaunchCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, GetLaunchCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new GetLaunchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchCommandInput} for command's `input` shape.
 * @see {@link GetLaunchCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 */
export class GetLaunchCommand extends $Command<
  GetLaunchCommandInput,
  GetLaunchCommandOutput,
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

  constructor(readonly input: GetLaunchCommandInput) {
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
  ): Handler<GetLaunchCommandInput, GetLaunchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetLaunchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "GetLaunchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLaunchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLaunchResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLaunchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLaunchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLaunchCommandOutput> {
    return deserializeAws_restJson1GetLaunchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
