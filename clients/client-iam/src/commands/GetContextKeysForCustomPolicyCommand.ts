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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  GetContextKeysForCustomPolicyRequest,
  GetContextKeysForCustomPolicyRequestFilterSensitiveLog,
  GetContextKeysForPolicyResponse,
  GetContextKeysForPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetContextKeysForCustomPolicyCommand,
  serializeAws_queryGetContextKeysForCustomPolicyCommand,
} from "../protocols/Aws_query";

export interface GetContextKeysForCustomPolicyCommandInput extends GetContextKeysForCustomPolicyRequest {}
export interface GetContextKeysForCustomPolicyCommandOutput extends GetContextKeysForPolicyResponse, __MetadataBearer {}

/**
 * <p>Gets a list of all of the context keys referenced in the input policies. The policies
 *             are supplied as a list of one or more strings. To get the context keys from policies
 *             associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p>
 *         <p>Context keys are variables maintained by Amazon Web Services and its services that provide details
 *             about the context of an API query request. Context keys can be evaluated by testing
 *             against a value specified in an IAM policy. Use
 *                 <code>GetContextKeysForCustomPolicy</code> to understand what key names and values
 *             you must supply when you call <a>SimulateCustomPolicy</a>. Note that all
 *             parameters are shown in unencoded form here for clarity but must be URL encoded to be
 *             included as a part of a real HTML request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetContextKeysForCustomPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetContextKeysForCustomPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetContextKeysForCustomPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContextKeysForCustomPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContextKeysForCustomPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class GetContextKeysForCustomPolicyCommand extends $Command<
  GetContextKeysForCustomPolicyCommandInput,
  GetContextKeysForCustomPolicyCommandOutput,
  IAMClientResolvedConfig
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

  constructor(readonly input: GetContextKeysForCustomPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContextKeysForCustomPolicyCommandInput, GetContextKeysForCustomPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContextKeysForCustomPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetContextKeysForCustomPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContextKeysForCustomPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetContextKeysForPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContextKeysForCustomPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetContextKeysForCustomPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContextKeysForCustomPolicyCommandOutput> {
    return deserializeAws_queryGetContextKeysForCustomPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
