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
import { DeleteAccountAliasRequest, DeleteAccountAliasRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryDeleteAccountAliasCommand,
  serializeAws_queryDeleteAccountAliasCommand,
} from "../protocols/Aws_query";

export interface DeleteAccountAliasCommandInput extends DeleteAccountAliasRequest {}
export interface DeleteAccountAliasCommandOutput extends __MetadataBearer {}

/**
 * <p> Deletes the specified Amazon Web Services account alias. For information about using an Amazon Web Services
 *             account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an alias for your Amazon Web Services account ID</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteAccountAliasCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteAccountAliasCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteAccountAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class DeleteAccountAliasCommand extends $Command<
  DeleteAccountAliasCommandInput,
  DeleteAccountAliasCommandOutput,
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

  constructor(readonly input: DeleteAccountAliasCommandInput) {
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
  ): Handler<DeleteAccountAliasCommandInput, DeleteAccountAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAccountAliasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteAccountAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAccountAliasRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAccountAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteAccountAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAccountAliasCommandOutput> {
    return deserializeAws_queryDeleteAccountAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
