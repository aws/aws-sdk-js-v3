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

import {
  AuthorizeSnapshotAccessMessage,
  AuthorizeSnapshotAccessMessageFilterSensitiveLog,
  AuthorizeSnapshotAccessResult,
  AuthorizeSnapshotAccessResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryAuthorizeSnapshotAccessCommand,
  serializeAws_queryAuthorizeSnapshotAccessCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

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
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class AuthorizeSnapshotAccessCommand extends $Command<
  AuthorizeSnapshotAccessCommandInput,
  AuthorizeSnapshotAccessCommandOutput,
  RedshiftClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AuthorizeSnapshotAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "AuthorizeSnapshotAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeSnapshotAccessMessageFilterSensitiveLog,
      outputFilterSensitiveLog: AuthorizeSnapshotAccessResultFilterSensitiveLog,
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
