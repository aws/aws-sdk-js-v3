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
  GetSSHPublicKeyRequest,
  GetSSHPublicKeyRequestFilterSensitiveLog,
  GetSSHPublicKeyResponse,
  GetSSHPublicKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetSSHPublicKeyCommand,
  serializeAws_queryGetSSHPublicKeyCommand,
} from "../protocols/Aws_query";

export interface GetSSHPublicKeyCommandInput extends GetSSHPublicKeyRequest {}
export interface GetSSHPublicKeyCommandOutput extends GetSSHPublicKeyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified SSH public key, including metadata about the key.</p>
 *         <p>The SSH public key retrieved by this operation is used only for authenticating the
 *             associated IAM user to an CodeCommit repository. For more information about using SSH keys
 *             to authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for SSH
 *                 connections</a> in the <i>CodeCommit User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetSSHPublicKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetSSHPublicKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetSSHPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSSHPublicKeyCommandInput} for command's `input` shape.
 * @see {@link GetSSHPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class GetSSHPublicKeyCommand extends $Command<
  GetSSHPublicKeyCommandInput,
  GetSSHPublicKeyCommandOutput,
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

  constructor(readonly input: GetSSHPublicKeyCommandInput) {
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
  ): Handler<GetSSHPublicKeyCommandInput, GetSSHPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSSHPublicKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetSSHPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSSHPublicKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSSHPublicKeyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSSHPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetSSHPublicKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSSHPublicKeyCommandOutput> {
    return deserializeAws_queryGetSSHPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
