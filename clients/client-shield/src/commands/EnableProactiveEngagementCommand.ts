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
  EnableProactiveEngagementRequest,
  EnableProactiveEngagementRequestFilterSensitiveLog,
  EnableProactiveEngagementResponse,
  EnableProactiveEngagementResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1EnableProactiveEngagementCommand,
  serializeAws_json1_1EnableProactiveEngagementCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

export interface EnableProactiveEngagementCommandInput extends EnableProactiveEngagementRequest {}
export interface EnableProactiveEngagementCommandOutput extends EnableProactiveEngagementResponse, __MetadataBearer {}

/**
 * <p>Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, EnableProactiveEngagementCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, EnableProactiveEngagementCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new EnableProactiveEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableProactiveEngagementCommandInput} for command's `input` shape.
 * @see {@link EnableProactiveEngagementCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 */
export class EnableProactiveEngagementCommand extends $Command<
  EnableProactiveEngagementCommandInput,
  EnableProactiveEngagementCommandOutput,
  ShieldClientResolvedConfig
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

  constructor(readonly input: EnableProactiveEngagementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableProactiveEngagementCommandInput, EnableProactiveEngagementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableProactiveEngagementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "EnableProactiveEngagementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableProactiveEngagementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EnableProactiveEngagementResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableProactiveEngagementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableProactiveEngagementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableProactiveEngagementCommandOutput> {
    return deserializeAws_json1_1EnableProactiveEngagementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
