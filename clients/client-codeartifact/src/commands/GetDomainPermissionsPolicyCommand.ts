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

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import {
  GetDomainPermissionsPolicyRequest,
  GetDomainPermissionsPolicyRequestFilterSensitiveLog,
  GetDomainPermissionsPolicyResult,
  GetDomainPermissionsPolicyResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetDomainPermissionsPolicyCommand,
  serializeAws_restJson1GetDomainPermissionsPolicyCommand,
} from "../protocols/Aws_restJson1";

export interface GetDomainPermissionsPolicyCommandInput extends GetDomainPermissionsPolicyRequest {}
export interface GetDomainPermissionsPolicyCommandOutput extends GetDomainPermissionsPolicyResult, __MetadataBearer {}

/**
 * <p>
 *         Returns the resource policy attached to the specified domain.
 *       </p>
 *          <note>
 *             <p>
 *          The policy is a resource-based policy, not an identity-based policy. For more information, see
 *          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based policies
 *            and resource-based policies </a> in the <i>IAM User Guide</i>.
 *        </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetDomainPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetDomainPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new GetDomainPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDomainPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDomainPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 */
export class GetDomainPermissionsPolicyCommand extends $Command<
  GetDomainPermissionsPolicyCommandInput,
  GetDomainPermissionsPolicyCommandOutput,
  CodeartifactClientResolvedConfig
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

  constructor(readonly input: GetDomainPermissionsPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDomainPermissionsPolicyCommandInput, GetDomainPermissionsPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDomainPermissionsPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "GetDomainPermissionsPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDomainPermissionsPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDomainPermissionsPolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDomainPermissionsPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDomainPermissionsPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDomainPermissionsPolicyCommandOutput> {
    return deserializeAws_restJson1GetDomainPermissionsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
