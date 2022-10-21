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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import {
  StopStackSetOperationInput,
  StopStackSetOperationInputFilterSensitiveLog,
  StopStackSetOperationOutput,
  StopStackSetOperationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryStopStackSetOperationCommand,
  serializeAws_queryStopStackSetOperationCommand,
} from "../protocols/Aws_query";

export interface StopStackSetOperationCommandInput extends StopStackSetOperationInput {}
export interface StopStackSetOperationCommandOutput extends StopStackSetOperationOutput, __MetadataBearer {}

/**
 * <p>Stops an in-progress operation on a stack set and its associated stack instances.
 *          StackSets will cancel all the unstarted stack instance deployments and wait for those are
 *          in-progress to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, StopStackSetOperationCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, StopStackSetOperationCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new StopStackSetOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopStackSetOperationCommandInput} for command's `input` shape.
 * @see {@link StopStackSetOperationCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class StopStackSetOperationCommand extends $Command<
  StopStackSetOperationCommandInput,
  StopStackSetOperationCommandOutput,
  CloudFormationClientResolvedConfig
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

  constructor(readonly input: StopStackSetOperationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopStackSetOperationCommandInput, StopStackSetOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopStackSetOperationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "StopStackSetOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopStackSetOperationInputFilterSensitiveLog,
      outputFilterSensitiveLog: StopStackSetOperationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopStackSetOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStopStackSetOperationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopStackSetOperationCommandOutput> {
    return deserializeAws_queryStopStackSetOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
