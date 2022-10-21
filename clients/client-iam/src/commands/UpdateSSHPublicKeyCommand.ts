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
import { UpdateSSHPublicKeyRequest, UpdateSSHPublicKeyRequestFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_queryUpdateSSHPublicKeyCommand,
  serializeAws_queryUpdateSSHPublicKeyCommand,
} from "../protocols/Aws_query";

export interface UpdateSSHPublicKeyCommandInput extends UpdateSSHPublicKeyRequest {}
export interface UpdateSSHPublicKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public
 *             keys that are inactive cannot be used for authentication. This operation can be used to
 *             disable a user's SSH public key as part of a key rotation work flow.</p>
 *         <p>The SSH public key affected by this operation is used only for authenticating the
 *             associated IAM user to an CodeCommit repository. For more information about using SSH keys
 *             to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for
 *                 SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateSSHPublicKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateSSHPublicKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link UpdateSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class UpdateSSHPublicKeyCommand extends $Command<
  UpdateSSHPublicKeyCommandInput,
  UpdateSSHPublicKeyCommandOutput,
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

  constructor(readonly input: UpdateSSHPublicKeyCommandInput) {
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
  ): Handler<UpdateSSHPublicKeyCommandInput, UpdateSSHPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSSHPublicKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateSSHPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSSHPublicKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSSHPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateSSHPublicKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSSHPublicKeyCommandOutput> {
    return deserializeAws_queryUpdateSSHPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
