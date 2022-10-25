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
  DeleteRepositoryPermissionsPolicyRequest,
  DeleteRepositoryPermissionsPolicyRequestFilterSensitiveLog,
  DeleteRepositoryPermissionsPolicyResult,
  DeleteRepositoryPermissionsPolicyResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand,
  serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteRepositoryPermissionsPolicyCommandInput extends DeleteRepositoryPermissionsPolicyRequest {}
export interface DeleteRepositoryPermissionsPolicyCommandOutput
  extends DeleteRepositoryPermissionsPolicyResult,
    __MetadataBearer {}

/**
 * <p>
 *         Deletes the resource policy that is set on a repository. After a resource policy is deleted, the
 *         permissions allowed and denied by the deleted policy are removed. The effect of deleting a resource policy might not be immediate.
 *       </p>
 *          <important>
 *             <p>
 *          Use <code>DeleteRepositoryPermissionsPolicy</code> with caution. After a policy is deleted, Amazon Web Services users, roles, and accounts lose permissions to perform
 *          the repository actions granted by the deleted policy.
 *        </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DeleteRepositoryPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DeleteRepositoryPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DeleteRepositoryPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRepositoryPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 */
export class DeleteRepositoryPermissionsPolicyCommand extends $Command<
  DeleteRepositoryPermissionsPolicyCommandInput,
  DeleteRepositoryPermissionsPolicyCommandOutput,
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

  constructor(readonly input: DeleteRepositoryPermissionsPolicyCommandInput) {
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
  ): Handler<DeleteRepositoryPermissionsPolicyCommandInput, DeleteRepositoryPermissionsPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteRepositoryPermissionsPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "DeleteRepositoryPermissionsPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRepositoryPermissionsPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteRepositoryPermissionsPolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteRepositoryPermissionsPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteRepositoryPermissionsPolicyCommandOutput> {
    return deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
