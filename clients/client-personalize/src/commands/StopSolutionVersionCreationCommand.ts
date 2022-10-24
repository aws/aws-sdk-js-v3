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
  StopSolutionVersionCreationRequest,
  StopSolutionVersionCreationRequestFilterSensitiveLog,
} from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import {
  deserializeAws_json1_1StopSolutionVersionCreationCommand,
  serializeAws_json1_1StopSolutionVersionCreationCommand,
} from "../protocols/Aws_json1_1";

export interface StopSolutionVersionCreationCommandInput extends StopSolutionVersionCreationRequest {}
export interface StopSolutionVersionCreationCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops creating a solution version that is in a state of CREATE_PENDING or CREATE IN_PROGRESS.
 *       </p>
 *          <p>Depending on the current state of the solution version, the solution version state changes as follows:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE_PENDING > CREATE_STOPPED</p>
 *                <p>or</p>
 *             </li>
 *             <li>
 *                <p>CREATE_IN_PROGRESS > CREATE_STOPPING > CREATE_STOPPED</p>
 *             </li>
 *          </ul>
 *          <p>You are billed for all of the training completed up
 *       until you stop the solution version creation. You cannot resume creating a solution version once it has been stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, StopSolutionVersionCreationCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, StopSolutionVersionCreationCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new StopSolutionVersionCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopSolutionVersionCreationCommandInput} for command's `input` shape.
 * @see {@link StopSolutionVersionCreationCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 */
export class StopSolutionVersionCreationCommand extends $Command<
  StopSolutionVersionCreationCommandInput,
  StopSolutionVersionCreationCommandOutput,
  PersonalizeClientResolvedConfig
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

  constructor(readonly input: StopSolutionVersionCreationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopSolutionVersionCreationCommandInput, StopSolutionVersionCreationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopSolutionVersionCreationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "StopSolutionVersionCreationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopSolutionVersionCreationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopSolutionVersionCreationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopSolutionVersionCreationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopSolutionVersionCreationCommandOutput> {
    return deserializeAws_json1_1StopSolutionVersionCreationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
