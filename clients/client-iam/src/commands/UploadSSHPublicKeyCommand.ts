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
  UploadSSHPublicKeyRequest,
  UploadSSHPublicKeyRequestFilterSensitiveLog,
  UploadSSHPublicKeyResponse,
  UploadSSHPublicKeyResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryUploadSSHPublicKeyCommand,
  serializeAws_queryUploadSSHPublicKeyCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link UploadSSHPublicKeyCommand}.
 */
export interface UploadSSHPublicKeyCommandInput extends UploadSSHPublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link UploadSSHPublicKeyCommand}.
 */
export interface UploadSSHPublicKeyCommandOutput extends UploadSSHPublicKeyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Uploads an SSH public key and associates it with the specified IAM user.</p>
 *          <p>The SSH public key uploaded by this operation can be used only for authenticating the
 *             associated IAM user to an CodeCommit repository. For more information about using SSH keys
 *             to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for
 *                 SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UploadSSHPublicKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UploadSSHPublicKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UploadSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UploadSSHPublicKeyCommandInput - {@link UploadSSHPublicKeyCommandInput}
 * @returns {@link UploadSSHPublicKeyCommandOutput}
 * @see {@link UploadSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link UploadSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link DuplicateSSHPublicKeyException} (client fault)
 *  <p>The request was rejected because the SSH public key is already associated with the
 *       specified IAM user.</p>
 *
 * @throws {@link InvalidPublicKeyException} (client fault)
 *  <p>The request was rejected because the public key is malformed or otherwise invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link UnrecognizedPublicKeyEncodingException} (client fault)
 *  <p>The request was rejected because the public key encoding format is unsupported or
 *       unrecognized.</p>
 *
 *
 */
export class UploadSSHPublicKeyCommand extends $Command<
  UploadSSHPublicKeyCommandInput,
  UploadSSHPublicKeyCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: UploadSSHPublicKeyCommandInput) {
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
  ): Handler<UploadSSHPublicKeyCommandInput, UploadSSHPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UploadSSHPublicKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UploadSSHPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UploadSSHPublicKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UploadSSHPublicKeyResponseFilterSensitiveLog,
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
  private serialize(input: UploadSSHPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUploadSSHPublicKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadSSHPublicKeyCommandOutput> {
    return deserializeAws_queryUploadSSHPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
