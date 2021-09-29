import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { AuthorizeSnapshotAccessMessage, AuthorizeSnapshotAccessResult } from "../models/models_0";
import {
  deserializeAws_queryAuthorizeSnapshotAccessCommand,
  serializeAws_queryAuthorizeSnapshotAccessCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface AuthorizeSnapshotAccessCommandInput extends AuthorizeSnapshotAccessMessage {}
export interface AuthorizeSnapshotAccessCommandOutput extends AuthorizeSnapshotAccessResult, __MetadataBearer {}

/**
 * <p>Authorizes the specified Amazon Web Services account to restore the specified
 *             snapshot.</p>
 *         <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AuthorizeSnapshotAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AuthorizeSnapshotAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new AuthorizeSnapshotAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeSnapshotAccessCommandInput} for command's `input` shape.
 * @see {@link AuthorizeSnapshotAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AuthorizeSnapshotAccessCommand extends $Command<
  AuthorizeSnapshotAccessCommandInput,
  AuthorizeSnapshotAccessCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AuthorizeSnapshotAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AuthorizeSnapshotAccessCommandInput, AuthorizeSnapshotAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "AuthorizeSnapshotAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeSnapshotAccessMessage.filterSensitiveLog,
      outputFilterSensitiveLog: AuthorizeSnapshotAccessResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AuthorizeSnapshotAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAuthorizeSnapshotAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AuthorizeSnapshotAccessCommandOutput> {
    return deserializeAws_queryAuthorizeSnapshotAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
