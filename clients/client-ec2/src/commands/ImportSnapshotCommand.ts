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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ImportSnapshotRequest,
  ImportSnapshotRequestFilterSensitiveLog,
  ImportSnapshotResult,
  ImportSnapshotResultFilterSensitiveLog,
} from "../models/models_5";
import { deserializeAws_ec2ImportSnapshotCommand, serializeAws_ec2ImportSnapshotCommand } from "../protocols/Aws_ec2";

export interface ImportSnapshotCommandInput extends ImportSnapshotRequest {}
export interface ImportSnapshotCommandOutput extends ImportSnapshotResult, __MetadataBearer {}

/**
 * <p>Imports a disk into an EBS snapshot.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-import-snapshot.html">Importing a disk as a snapshot using VM Import/Export</a> in the
 *    <i>VM Import/Export User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportSnapshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportSnapshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ImportSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportSnapshotCommandInput} for command's `input` shape.
 * @see {@link ImportSnapshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ImportSnapshotCommand extends $Command<
  ImportSnapshotCommandInput,
  ImportSnapshotCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: ImportSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportSnapshotCommandInput, ImportSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ImportSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ImportSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportSnapshotCommandOutput> {
    return deserializeAws_ec2ImportSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
