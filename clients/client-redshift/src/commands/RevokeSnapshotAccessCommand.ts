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
  RevokeSnapshotAccessMessage,
  RevokeSnapshotAccessMessageFilterSensitiveLog,
  RevokeSnapshotAccessResult,
  RevokeSnapshotAccessResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryRevokeSnapshotAccessCommand,
  serializeAws_queryRevokeSnapshotAccessCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface RevokeSnapshotAccessCommandInput extends RevokeSnapshotAccessMessage {}
export interface RevokeSnapshotAccessCommandOutput extends RevokeSnapshotAccessResult, __MetadataBearer {}

/**
 * <p>Removes the ability of the specified  Amazon Web Services account to restore the specified
 *             snapshot. If the account is currently restoring the snapshot, the restore will run to
 *             completion.</p>
 *         <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RevokeSnapshotAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RevokeSnapshotAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RevokeSnapshotAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeSnapshotAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeSnapshotAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class RevokeSnapshotAccessCommand extends $Command<
  RevokeSnapshotAccessCommandInput,
  RevokeSnapshotAccessCommandOutput,
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

  constructor(readonly input: RevokeSnapshotAccessCommandInput) {
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
  ): Handler<RevokeSnapshotAccessCommandInput, RevokeSnapshotAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RevokeSnapshotAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RevokeSnapshotAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeSnapshotAccessMessageFilterSensitiveLog,
      outputFilterSensitiveLog: RevokeSnapshotAccessResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeSnapshotAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRevokeSnapshotAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeSnapshotAccessCommandOutput> {
    return deserializeAws_queryRevokeSnapshotAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
