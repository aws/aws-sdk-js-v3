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
import { DeleteSSHPublicKeyRequest, DeleteSSHPublicKeyRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryDeleteSSHPublicKeyCommand,
  serializeAws_queryDeleteSSHPublicKeyCommand,
} from "../protocols/Aws_query";

export interface DeleteSSHPublicKeyCommandInput extends DeleteSSHPublicKeyRequest {}
export interface DeleteSSHPublicKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified SSH public key.</p>
 *         <p>The SSH public key deleted by this operation is used only for authenticating the
 *             associated IAM user to an CodeCommit repository. For more information about using SSH keys
 *             to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for
 *                 SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteSSHPublicKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteSSHPublicKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class DeleteSSHPublicKeyCommand extends $Command<
  DeleteSSHPublicKeyCommandInput,
  DeleteSSHPublicKeyCommandOutput,
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

  constructor(readonly input: DeleteSSHPublicKeyCommandInput) {
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
  ): Handler<DeleteSSHPublicKeyCommandInput, DeleteSSHPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSSHPublicKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteSSHPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSSHPublicKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSSHPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteSSHPublicKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSSHPublicKeyCommandOutput> {
    return deserializeAws_queryDeleteSSHPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
