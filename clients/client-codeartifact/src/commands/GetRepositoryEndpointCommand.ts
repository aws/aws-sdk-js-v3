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
import { GetRepositoryEndpointRequest, GetRepositoryEndpointResult } from "../models/models_0";
import { de_GetRepositoryEndpointCommand, se_GetRepositoryEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRepositoryEndpointCommand}.
 */
export interface GetRepositoryEndpointCommandInput extends GetRepositoryEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetRepositoryEndpointCommand}.
 */
export interface GetRepositoryEndpointCommandOutput extends GetRepositoryEndpointResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each
 *       package format:
 *     </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>maven</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>npm</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>nuget</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>pypi</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, GetRepositoryEndpointCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, GetRepositoryEndpointCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const input = { // GetRepositoryEndpointRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   repository: "STRING_VALUE", // required
 *   format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "swift", // required
 * };
 * const command = new GetRepositoryEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetRepositoryEndpointResult
 * //   repositoryEndpoint: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRepositoryEndpointCommandInput - {@link GetRepositoryEndpointCommandInput}
 * @returns {@link GetRepositoryEndpointCommandOutput}
 * @see {@link GetRepositoryEndpointCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryEndpointCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         The operation did not succeed because of an unauthorized access attempt.
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
export class GetRepositoryEndpointCommand extends $Command<
  GetRepositoryEndpointCommandInput,
  GetRepositoryEndpointCommandOutput,
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
  constructor(readonly input: GetRepositoryEndpointCommandInput) {
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
  ): Handler<GetRepositoryEndpointCommandInput, GetRepositoryEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRepositoryEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "GetRepositoryEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeArtifactControlPlaneService",
        operation: "GetRepositoryEndpoint",
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
  private serialize(input: GetRepositoryEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRepositoryEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRepositoryEndpointCommandOutput> {
    return de_GetRepositoryEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
