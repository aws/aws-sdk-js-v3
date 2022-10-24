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
  PutContactPolicyRequest,
  PutContactPolicyRequestFilterSensitiveLog,
  PutContactPolicyResult,
  PutContactPolicyResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutContactPolicyCommand,
  serializeAws_json1_1PutContactPolicyCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

export interface PutContactPolicyCommandInput extends PutContactPolicyRequest {}
export interface PutContactPolicyCommandOutput extends PutContactPolicyResult, __MetadataBearer {}

/**
 * <p>Adds a resource policy to the specified contact or escalation plan. The resource policy
 *          is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up
 *             cross-account functionality</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, PutContactPolicyCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, PutContactPolicyCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new PutContactPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutContactPolicyCommandInput} for command's `input` shape.
 * @see {@link PutContactPolicyCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 */
export class PutContactPolicyCommand extends $Command<
  PutContactPolicyCommandInput,
  PutContactPolicyCommandOutput,
  SSMContactsClientResolvedConfig
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

  constructor(readonly input: PutContactPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutContactPolicyCommandInput, PutContactPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutContactPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "PutContactPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutContactPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutContactPolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutContactPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutContactPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutContactPolicyCommandOutput> {
    return deserializeAws_json1_1PutContactPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
