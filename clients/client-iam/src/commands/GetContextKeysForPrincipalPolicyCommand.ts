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
  GetContextKeysForPolicyResponse,
  GetContextKeysForPolicyResponseFilterSensitiveLog,
  GetContextKeysForPrincipalPolicyRequest,
  GetContextKeysForPrincipalPolicyRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetContextKeysForPrincipalPolicyCommand,
  serializeAws_queryGetContextKeysForPrincipalPolicyCommand,
} from "../protocols/Aws_query";

export interface GetContextKeysForPrincipalPolicyCommandInput extends GetContextKeysForPrincipalPolicyRequest {}
export interface GetContextKeysForPrincipalPolicyCommandOutput
  extends GetContextKeysForPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of all of the context keys referenced in all the IAM policies that are
 *             attached to the specified IAM entity. The entity can be an IAM user, group, or role.
 *             If you specify a user, then the request also includes all of the policies attached to
 *             groups that the user is a member of.</p>
 *         <p>You can optionally include a list of one or more additional policies, specified as
 *             strings. If you want to include <i>only</i> a list of policies by string,
 *             use <a>GetContextKeysForCustomPolicy</a> instead.</p>
 *         <p>
 *             <b>Note:</b> This operation discloses information about the
 *             permissions granted to other users. If you do not want users to see other user's
 *             permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p>
 *         <p>Context keys are variables maintained by Amazon Web Services and its services that provide details
 *             about the context of an API query request. Context keys can be evaluated by testing
 *             against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetContextKeysForPrincipalPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetContextKeysForPrincipalPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetContextKeysForPrincipalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContextKeysForPrincipalPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContextKeysForPrincipalPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class GetContextKeysForPrincipalPolicyCommand extends $Command<
  GetContextKeysForPrincipalPolicyCommandInput,
  GetContextKeysForPrincipalPolicyCommandOutput,
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

  constructor(readonly input: GetContextKeysForPrincipalPolicyCommandInput) {
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
  ): Handler<GetContextKeysForPrincipalPolicyCommandInput, GetContextKeysForPrincipalPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContextKeysForPrincipalPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetContextKeysForPrincipalPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContextKeysForPrincipalPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetContextKeysForPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetContextKeysForPrincipalPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetContextKeysForPrincipalPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContextKeysForPrincipalPolicyCommandOutput> {
    return deserializeAws_queryGetContextKeysForPrincipalPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
