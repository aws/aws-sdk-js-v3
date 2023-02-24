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
  GetCustomRulePolicyRequest,
  GetCustomRulePolicyRequestFilterSensitiveLog,
  GetCustomRulePolicyResponse,
  GetCustomRulePolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetCustomRulePolicyCommand,
  serializeAws_json1_1GetCustomRulePolicyCommand,
} from "../protocols/Aws_json1_1";

export interface GetCustomRulePolicyCommandInput extends GetCustomRulePolicyRequest {}
export interface GetCustomRulePolicyCommandOutput extends GetCustomRulePolicyResponse, __MetadataBearer {}

/**
 * <p>Returns the policy definition containing the logic for your Config Custom Policy rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetCustomRulePolicyCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetCustomRulePolicyCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetCustomRulePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCustomRulePolicyCommandInput} for command's `input` shape.
 * @see {@link GetCustomRulePolicyCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class GetCustomRulePolicyCommand extends $Command<
  GetCustomRulePolicyCommandInput,
  GetCustomRulePolicyCommandOutput,
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

  constructor(readonly input: GetCustomRulePolicyCommandInput) {
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
  ): Handler<GetCustomRulePolicyCommandInput, GetCustomRulePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCustomRulePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "GetCustomRulePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCustomRulePolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCustomRulePolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCustomRulePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCustomRulePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCustomRulePolicyCommandOutput> {
    return deserializeAws_json1_1GetCustomRulePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
