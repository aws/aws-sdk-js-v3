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
  GetDataProtectionPolicyInput,
  GetDataProtectionPolicyInputFilterSensitiveLog,
  GetDataProtectionPolicyResponse,
  GetDataProtectionPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetDataProtectionPolicyCommand,
  serializeAws_queryGetDataProtectionPolicyCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

export interface GetDataProtectionPolicyCommandInput extends GetDataProtectionPolicyInput {}
export interface GetDataProtectionPolicyCommandOutput extends GetDataProtectionPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified inline <code>DataProtectionPolicy</code> document that is
 *             stored in the specified Amazon SNS topic. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetDataProtectionPolicyCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetDataProtectionPolicyCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new GetDataProtectionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataProtectionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDataProtectionPolicyCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 */
export class GetDataProtectionPolicyCommand extends $Command<
  GetDataProtectionPolicyCommandInput,
  GetDataProtectionPolicyCommandOutput,
  SNSClientResolvedConfig
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

  constructor(readonly input: GetDataProtectionPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataProtectionPolicyCommandInput, GetDataProtectionPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataProtectionPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "GetDataProtectionPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDataProtectionPolicyInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetDataProtectionPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDataProtectionPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetDataProtectionPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataProtectionPolicyCommandOutput> {
    return deserializeAws_queryGetDataProtectionPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
