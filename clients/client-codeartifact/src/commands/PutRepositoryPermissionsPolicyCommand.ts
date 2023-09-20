// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { PutRepositoryPermissionsPolicyRequest, PutRepositoryPermissionsPolicyResult } from "../models/models_0";
import {
  de_PutRepositoryPermissionsPolicyCommand,
  se_PutRepositoryPermissionsPolicyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutRepositoryPermissionsPolicyCommand}.
 */
export interface PutRepositoryPermissionsPolicyCommandInput extends PutRepositoryPermissionsPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutRepositoryPermissionsPolicyCommand}.
 */
export interface PutRepositoryPermissionsPolicyCommandOutput
  extends PutRepositoryPermissionsPolicyResult,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // PutRepositoryPermissionsPolicyRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   policyRevision: "STRING_VALUE",
 *   policyDocument: "STRING_VALUE", // required
 * };
 * const command = new PutRepositoryPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutRepositoryPermissionsPolicyResult
 * //   policy: { // ResourcePolicy
 * //     resourceArn: "STRING_VALUE",
 * //     revision: "STRING_VALUE",
 * //     document: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutRepositoryPermissionsPolicyCommandInput - {@link PutRepositoryPermissionsPolicyCommandInput}
 * @returns {@link PutRepositoryPermissionsPolicyCommandOutput}
 * @see {@link PutRepositoryPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRepositoryPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         The operation did not succeed because of an unauthorized access attempt.
 *       </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>
 *         The operation did not succeed because prerequisites are not met.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation did not succeed because of an error that occurred inside CodeArtifact. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *       The operation did not succeed because the resource requested is not found in the service.
 *     </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *         The operation did not succeed because it would have exceeded a service limit for your account.
 *       </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *       The operation did not succeed because too many requests are sent to the service.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *       The operation did not succeed because a parameter in the request was sent with an invalid value.
 *     </p>
 *
 * @throws {@link CodeartifactServiceException}
 * <p>Base exception class for all service exceptions from Codeartifact service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeArtifactControlPlaneService",
        operation: "PutRepositoryPermissionsPolicy",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: PutRepositoryPermissionsPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutRepositoryPermissionsPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutRepositoryPermissionsPolicyCommandOutput> {
    return de_PutRepositoryPermissionsPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
