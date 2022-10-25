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
  CreateLaunchRequest,
  CreateLaunchRequestFilterSensitiveLog,
  CreateLaunchResponse,
  CreateLaunchResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateLaunchCommand,
  serializeAws_restJson1CreateLaunchCommand,
} from "../protocols/Aws_restJson1";

export interface CreateLaunchCommandInput extends CreateLaunchRequest {}
export interface CreateLaunchCommandOutput extends CreateLaunchResponse, __MetadataBearer {}

/**
 * <p>Creates a <i>launch</i> of a given feature. Before you create a launch, you
 *       must create the feature to use for the launch.</p>
 *          <p>You can use a launch to safely validate new features by serving them to a specified
 *       percentage of your users while you roll out the feature. You can monitor the performance of
 *       the new feature to help you decide when to ramp up traffic to more users. This helps you
 *       reduce risk and identify unintended consequences before you fully launch the feature.</p>
 *          <p>Don't use this operation to update an existing launch. Instead, use
 *        <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateLaunch.html">UpdateLaunch</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, CreateLaunchCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, CreateLaunchCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new CreateLaunchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLaunchCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 */
export class CreateLaunchCommand extends $Command<
  CreateLaunchCommandInput,
  CreateLaunchCommandOutput,
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

  constructor(readonly input: CreateLaunchCommandInput) {
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
  ): Handler<CreateLaunchCommandInput, CreateLaunchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateLaunchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "CreateLaunchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLaunchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLaunchResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLaunchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateLaunchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLaunchCommandOutput> {
    return deserializeAws_restJson1CreateLaunchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
