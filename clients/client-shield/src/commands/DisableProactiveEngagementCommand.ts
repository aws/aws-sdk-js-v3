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
  DisableProactiveEngagementRequest,
  DisableProactiveEngagementRequestFilterSensitiveLog,
  DisableProactiveEngagementResponse,
  DisableProactiveEngagementResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisableProactiveEngagementCommand,
  serializeAws_json1_1DisableProactiveEngagementCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

export interface DisableProactiveEngagementCommandInput extends DisableProactiveEngagementRequest {}
export interface DisableProactiveEngagementCommandOutput extends DisableProactiveEngagementResponse, __MetadataBearer {}

/**
 * <p>Removes authorization from the Shield Response Team (SRT) to notify contacts about escalations to the SRT and to initiate proactive customer support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisableProactiveEngagementCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisableProactiveEngagementCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DisableProactiveEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableProactiveEngagementCommandInput} for command's `input` shape.
 * @see {@link DisableProactiveEngagementCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 */
export class DisableProactiveEngagementCommand extends $Command<
  DisableProactiveEngagementCommandInput,
  DisableProactiveEngagementCommandOutput,
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

  constructor(readonly input: DisableProactiveEngagementCommandInput) {
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
  ): Handler<DisableProactiveEngagementCommandInput, DisableProactiveEngagementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableProactiveEngagementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DisableProactiveEngagementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableProactiveEngagementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisableProactiveEngagementResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableProactiveEngagementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableProactiveEngagementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableProactiveEngagementCommandOutput> {
    return deserializeAws_json1_1DisableProactiveEngagementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
