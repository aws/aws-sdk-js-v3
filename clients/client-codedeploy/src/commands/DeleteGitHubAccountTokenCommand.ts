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

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { DeleteGitHubAccountTokenInput, DeleteGitHubAccountTokenOutput } from "../models/models_0";
import { de_DeleteGitHubAccountTokenCommand, se_DeleteGitHubAccountTokenCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteGitHubAccountTokenCommand}.
 */
export interface DeleteGitHubAccountTokenCommandInput extends DeleteGitHubAccountTokenInput {}
/**
 * @public
 *
 * The output of {@link DeleteGitHubAccountTokenCommand}.
 */
export interface DeleteGitHubAccountTokenCommandOutput extends DeleteGitHubAccountTokenOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a GitHub account connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteGitHubAccountTokenCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteGitHubAccountTokenCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // DeleteGitHubAccountTokenInput
 *   tokenName: "STRING_VALUE",
 * };
 * const command = new DeleteGitHubAccountTokenCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGitHubAccountTokenOutput
 * //   tokenName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteGitHubAccountTokenCommandInput - {@link DeleteGitHubAccountTokenCommandInput}
 * @returns {@link DeleteGitHubAccountTokenCommandOutput}
 * @see {@link DeleteGitHubAccountTokenCommandInput} for command's `input` shape.
 * @see {@link DeleteGitHubAccountTokenCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link GitHubAccountTokenDoesNotExistException} (client fault)
 *  <p>No GitHub account connection exists with the named specified in the call.</p>
 *
 * @throws {@link GitHubAccountTokenNameRequiredException} (client fault)
 *  <p>The call is missing a required GitHub account connection name.</p>
 *
 * @throws {@link InvalidGitHubAccountTokenNameException} (client fault)
 *  <p>The format of the specified GitHub account connection name is invalid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The API used does not support the deployment.</p>
 *
 * @throws {@link ResourceValidationException} (client fault)
 *  <p>The specified resource could not be validated.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 */
export class DeleteGitHubAccountTokenCommand extends $Command<
  DeleteGitHubAccountTokenCommandInput,
  DeleteGitHubAccountTokenCommandOutput,
  CodeDeployClientResolvedConfig
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
  constructor(readonly input: DeleteGitHubAccountTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGitHubAccountTokenCommandInput, DeleteGitHubAccountTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteGitHubAccountTokenCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "DeleteGitHubAccountTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeDeploy_20141006",
        operation: "DeleteGitHubAccountToken",
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
  private serialize(input: DeleteGitHubAccountTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteGitHubAccountTokenCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGitHubAccountTokenCommandOutput> {
    return de_DeleteGitHubAccountTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
