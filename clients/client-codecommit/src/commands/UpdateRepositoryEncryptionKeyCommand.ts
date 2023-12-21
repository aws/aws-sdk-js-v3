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

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateRepositoryEncryptionKeyInput, UpdateRepositoryEncryptionKeyOutput } from "../models/models_1";
import {
  de_UpdateRepositoryEncryptionKeyCommand,
  se_UpdateRepositoryEncryptionKeyCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRepositoryEncryptionKeyCommand}.
 */
export interface UpdateRepositoryEncryptionKeyCommandInput extends UpdateRepositoryEncryptionKeyInput {}
/**
 * @public
 *
 * The output of {@link UpdateRepositoryEncryptionKeyCommand}.
 */
export interface UpdateRepositoryEncryptionKeyCommandOutput
  extends UpdateRepositoryEncryptionKeyOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates the Key Management Service encryption key used to encrypt and decrypt a CodeCommit repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateRepositoryEncryptionKeyCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateRepositoryEncryptionKeyCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const input = { // UpdateRepositoryEncryptionKeyInput
 *   repositoryName: "STRING_VALUE", // required
 *   kmsKeyId: "STRING_VALUE", // required
 * };
 * const command = new UpdateRepositoryEncryptionKeyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRepositoryEncryptionKeyOutput
 * //   repositoryId: "STRING_VALUE",
 * //   kmsKeyId: "STRING_VALUE",
 * //   originalKmsKeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRepositoryEncryptionKeyCommandInput - {@link UpdateRepositoryEncryptionKeyCommandInput}
 * @returns {@link UpdateRepositoryEncryptionKeyCommandOutput}
 * @see {@link UpdateRepositoryEncryptionKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateRepositoryEncryptionKeyCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 * @throws {@link EncryptionIntegrityChecksFailedException} (server fault)
 *  <p>An encryption integrity check failed.</p>
 *
 * @throws {@link EncryptionKeyAccessDeniedException} (client fault)
 *  <p>An encryption key could not be accessed.</p>
 *
 * @throws {@link EncryptionKeyDisabledException} (client fault)
 *  <p>The encryption key is disabled.</p>
 *
 * @throws {@link EncryptionKeyInvalidIdException} (client fault)
 *  <p>The Key Management Service encryption key is not valid.</p>
 *
 * @throws {@link EncryptionKeyInvalidUsageException} (client fault)
 *  <p>A KMS encryption key was used to try and encrypt or decrypt a repository, but either the repository or the key was not
 *         in a valid state to support the operation.</p>
 *
 * @throws {@link EncryptionKeyNotFoundException} (client fault)
 *  <p>No encryption key was found.</p>
 *
 * @throws {@link EncryptionKeyRequiredException} (client fault)
 *  <p>A KMS encryption key ID is required but was not specified.</p>
 *
 * @throws {@link EncryptionKeyUnavailableException} (client fault)
 *  <p>The encryption key is not available.</p>
 *
 * @throws {@link InvalidRepositoryNameException} (client fault)
 *  <p>A specified repository name is not valid.</p>
 *          <note>
 *             <p>This exception occurs only when a specified repository name is not valid. Other
 *                 exceptions occur when a required repository parameter is missing, or when a
 *                 specified repository does not exist.</p>
 *          </note>
 *
 * @throws {@link RepositoryDoesNotExistException} (client fault)
 *  <p>The specified repository does not exist.</p>
 *
 * @throws {@link RepositoryNameRequiredException} (client fault)
 *  <p>A repository name is required, but was not specified.</p>
 *
 * @throws {@link CodeCommitServiceException}
 * <p>Base exception class for all service exceptions from CodeCommit service.</p>
 *
 */
export class UpdateRepositoryEncryptionKeyCommand extends $Command<
  UpdateRepositoryEncryptionKeyCommandInput,
  UpdateRepositoryEncryptionKeyCommandOutput,
  CodeCommitClientResolvedConfig
> {
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
  constructor(readonly input: UpdateRepositoryEncryptionKeyCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRepositoryEncryptionKeyCommandInput, UpdateRepositoryEncryptionKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRepositoryEncryptionKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UpdateRepositoryEncryptionKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeCommit_20150413",
        operation: "UpdateRepositoryEncryptionKey",
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
  private serialize(input: UpdateRepositoryEncryptionKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRepositoryEncryptionKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRepositoryEncryptionKeyCommandOutput> {
    return de_UpdateRepositoryEncryptionKeyCommand(output, context);
  }
}
