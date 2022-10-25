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
  PutRepositoryPermissionsPolicyRequest,
  PutRepositoryPermissionsPolicyRequestFilterSensitiveLog,
  PutRepositoryPermissionsPolicyResult,
  PutRepositoryPermissionsPolicyResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand,
  serializeAws_restJson1PutRepositoryPermissionsPolicyCommand,
} from "../protocols/Aws_restJson1";

export interface PutRepositoryPermissionsPolicyCommandInput extends PutRepositoryPermissionsPolicyRequest {}
export interface PutRepositoryPermissionsPolicyCommandOutput
  extends PutRepositoryPermissionsPolicyResult,
    __MetadataBearer {}

/**
 * <p>
 *         Sets the resource policy on a repository that specifies permissions to access it.
 *       </p>
 *          <p>
 *        When you call <code>PutRepositoryPermissionsPolicy</code>, the resource policy on the repository is ignored when evaluting permissions.
 *        This ensures that the owner of a repository cannot lock themselves out of the repository, which would prevent them from being
 *        able to update the resource policy.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, PutRepositoryPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, PutRepositoryPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new PutRepositoryPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRepositoryPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRepositoryPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 */
export class PutRepositoryPermissionsPolicyCommand extends $Command<
  PutRepositoryPermissionsPolicyCommandInput,
  PutRepositoryPermissionsPolicyCommandOutput,
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

  constructor(readonly input: PutRepositoryPermissionsPolicyCommandInput) {
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
  ): Handler<PutRepositoryPermissionsPolicyCommandInput, PutRepositoryPermissionsPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRepositoryPermissionsPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "PutRepositoryPermissionsPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRepositoryPermissionsPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutRepositoryPermissionsPolicyResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutRepositoryPermissionsPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutRepositoryPermissionsPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutRepositoryPermissionsPolicyCommandOutput> {
    return deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
