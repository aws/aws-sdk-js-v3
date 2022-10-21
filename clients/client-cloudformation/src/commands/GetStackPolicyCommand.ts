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
  GetStackPolicyInput,
  GetStackPolicyInputFilterSensitiveLog,
  GetStackPolicyOutput,
  GetStackPolicyOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetStackPolicyCommand,
  serializeAws_queryGetStackPolicyCommand,
} from "../protocols/Aws_query";

export interface GetStackPolicyCommandInput extends GetStackPolicyInput {}
export interface GetStackPolicyCommandOutput extends GetStackPolicyOutput, __MetadataBearer {}

/**
 * <p>Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null
 *          value is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, GetStackPolicyCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, GetStackPolicyCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new GetStackPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStackPolicyCommandInput} for command's `input` shape.
 * @see {@link GetStackPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class GetStackPolicyCommand extends $Command<
  GetStackPolicyCommandInput,
  GetStackPolicyCommandOutput,
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

  constructor(readonly input: GetStackPolicyCommandInput) {
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
  ): Handler<GetStackPolicyCommandInput, GetStackPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetStackPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "GetStackPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetStackPolicyInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetStackPolicyOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetStackPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetStackPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetStackPolicyCommandOutput> {
    return deserializeAws_queryGetStackPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
