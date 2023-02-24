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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  ExportSnapshotRequest,
  ExportSnapshotRequestFilterSensitiveLog,
  ExportSnapshotResult,
  ExportSnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ExportSnapshotCommand,
  serializeAws_json1_1ExportSnapshotCommand,
} from "../protocols/Aws_json1_1";

export interface ExportSnapshotCommandInput extends ExportSnapshotRequest {}
export interface ExportSnapshotCommandOutput extends ExportSnapshotResult, __MetadataBearer {}

/**
 * <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2).
 *       This operation results in an export snapshot record that can be used with the <code>create
 *         cloud formation stack</code> operation to create new Amazon EC2 instances.</p>
 *          <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the
 *       instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in
 *       Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in
 *       Amazon EC2 as the source Lightsail snapshot.</p>
 *          <p></p>
 *          <p>The <code>export snapshot</code> operation supports tag-based access control via resource
 *       tags applied to the resource identified by <code>source snapshot name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 *          <note>
 *             <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code>
 *         operations to get a list of snapshots that you can export to Amazon EC2.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, ExportSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, ExportSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new ExportSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportSnapshotCommandInput} for command's `input` shape.
 * @see {@link ExportSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class ExportSnapshotCommand extends $Command<
  ExportSnapshotCommandInput,
  ExportSnapshotCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: ExportSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportSnapshotCommandInput, ExportSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "ExportSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExportSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ExportSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportSnapshotCommandOutput> {
    return deserializeAws_json1_1ExportSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
