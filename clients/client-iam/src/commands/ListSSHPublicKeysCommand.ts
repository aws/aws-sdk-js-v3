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
  ListSSHPublicKeysRequest,
  ListSSHPublicKeysRequestFilterSensitiveLog,
  ListSSHPublicKeysResponse,
  ListSSHPublicKeysResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListSSHPublicKeysCommand,
  serializeAws_queryListSSHPublicKeysCommand,
} from "../protocols/Aws_query";

export interface ListSSHPublicKeysCommandInput extends ListSSHPublicKeysRequest {}
export interface ListSSHPublicKeysCommandOutput extends ListSSHPublicKeysResponse, __MetadataBearer {}

/**
 * <p>Returns information about the SSH public keys associated with the specified IAM
 *             user. If none exists, the operation returns an empty list.</p>
 *         <p>The SSH public keys returned by this operation are used only for authenticating the
 *             IAM user to an CodeCommit repository. For more information about using SSH keys to
 *             authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for
 *                 SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
 *         <p>Although each user is limited to a small number of keys, you can still paginate the
 *             results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListSSHPublicKeysCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListSSHPublicKeysCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListSSHPublicKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSSHPublicKeysCommandInput} for command's `input` shape.
 * @see {@link ListSSHPublicKeysCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class ListSSHPublicKeysCommand extends $Command<
  ListSSHPublicKeysCommandInput,
  ListSSHPublicKeysCommandOutput,
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

  constructor(readonly input: ListSSHPublicKeysCommandInput) {
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
  ): Handler<ListSSHPublicKeysCommandInput, ListSSHPublicKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSSHPublicKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListSSHPublicKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSSHPublicKeysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSSHPublicKeysResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSSHPublicKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListSSHPublicKeysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSSHPublicKeysCommandOutput> {
    return deserializeAws_queryListSSHPublicKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
