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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  StartRemediationExecutionRequest,
  StartRemediationExecutionRequestFilterSensitiveLog,
  StartRemediationExecutionResponse,
  StartRemediationExecutionResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1StartRemediationExecutionCommand,
  serializeAws_json1_1StartRemediationExecutionCommand,
} from "../protocols/Aws_json1_1";

export interface StartRemediationExecutionCommandInput extends StartRemediationExecutionRequest {}
export interface StartRemediationExecutionCommandOutput extends StartRemediationExecutionResponse, __MetadataBearer {}

/**
 * <p>Runs an on-demand remediation for the specified Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p>
 * 			      <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StartRemediationExecutionCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StartRemediationExecutionCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new StartRemediationExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartRemediationExecutionCommandInput} for command's `input` shape.
 * @see {@link StartRemediationExecutionCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class StartRemediationExecutionCommand extends $Command<
  StartRemediationExecutionCommandInput,
  StartRemediationExecutionCommandOutput,
  ConfigServiceClientResolvedConfig
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

  constructor(readonly input: StartRemediationExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartRemediationExecutionCommandInput, StartRemediationExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartRemediationExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "StartRemediationExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartRemediationExecutionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartRemediationExecutionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartRemediationExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartRemediationExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartRemediationExecutionCommandOutput> {
    return deserializeAws_json1_1StartRemediationExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
