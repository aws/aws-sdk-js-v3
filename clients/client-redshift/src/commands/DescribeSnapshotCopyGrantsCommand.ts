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
  DescribeSnapshotCopyGrantsMessage,
  DescribeSnapshotCopyGrantsMessageFilterSensitiveLog,
  SnapshotCopyGrantMessage,
  SnapshotCopyGrantMessageFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryDescribeSnapshotCopyGrantsCommand,
  serializeAws_queryDescribeSnapshotCopyGrantsCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface DescribeSnapshotCopyGrantsCommandInput extends DescribeSnapshotCopyGrantsMessage {}
export interface DescribeSnapshotCopyGrantsCommandOutput extends SnapshotCopyGrantMessage, __MetadataBearer {}

/**
 * <p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination
 *             region.</p>
 *         <p>
 * For more information about managing snapshot copy grants, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeSnapshotCopyGrantsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeSnapshotCopyGrantsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeSnapshotCopyGrantsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSnapshotCopyGrantsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotCopyGrantsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DescribeSnapshotCopyGrantsCommand extends $Command<
  DescribeSnapshotCopyGrantsCommandInput,
  DescribeSnapshotCopyGrantsCommandOutput,
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

  constructor(readonly input: DescribeSnapshotCopyGrantsCommandInput) {
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
  ): Handler<DescribeSnapshotCopyGrantsCommandInput, DescribeSnapshotCopyGrantsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSnapshotCopyGrantsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeSnapshotCopyGrantsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSnapshotCopyGrantsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: SnapshotCopyGrantMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSnapshotCopyGrantsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeSnapshotCopyGrantsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSnapshotCopyGrantsCommandOutput> {
    return deserializeAws_queryDescribeSnapshotCopyGrantsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
