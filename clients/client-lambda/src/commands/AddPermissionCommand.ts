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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  AddPermissionRequest,
  AddPermissionRequestFilterSensitiveLog,
  AddPermissionResponse,
  AddPermissionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AddPermissionCommand,
  serializeAws_restJson1AddPermissionCommand,
} from "../protocols/Aws_restJson1";

export interface AddPermissionCommandInput extends AddPermissionRequest {}
export interface AddPermissionCommandOutput extends AddPermissionResponse, __MetadataBearer {}

/**
 * <p>Grants an Amazon Web Service, Amazon Web Services account, or Amazon Web Services organization
 *       permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict
 *       access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name
 *       (ARN) of that version or alias to invoke the function. Note: Lambda does not support adding policies
 *       to version $LATEST.</p>
 *          <p>To grant permission to another account, specify the account ID as the <code>Principal</code>. To grant
 *       permission to an organization defined in Organizations, specify the organization ID as the
 *         <code>PrincipalOrgID</code>. For Amazon Web Services, the principal is a domain-style identifier that
 *       the service defines, such as <code>s3.amazonaws.com</code> or <code>sns.amazonaws.com</code>. For Amazon Web Services, you can also specify the ARN of the associated resource as the <code>SourceArn</code>. If
 *       you grant permission to a service principal without specifying the source, other accounts could potentially
 *       configure resources in their account to invoke your Lambda function.</p>
 *          <p>This operation adds a statement to a resource-based permissions policy for the function. For more information
 *       about function policies, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html">Using resource-based policies for Lambda</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, AddPermissionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, AddPermissionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new AddPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddPermissionCommandInput} for command's `input` shape.
 * @see {@link AddPermissionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class AddPermissionCommand extends $Command<
  AddPermissionCommandInput,
  AddPermissionCommandOutput,
  LambdaClientResolvedConfig
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

  constructor(readonly input: AddPermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddPermissionCommandInput, AddPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AddPermissionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "AddPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddPermissionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AddPermissionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddPermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddPermissionCommandOutput> {
    return deserializeAws_restJson1AddPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
