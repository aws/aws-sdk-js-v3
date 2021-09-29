import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CopyBackupRequest, CopyBackupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CopyBackupCommand,
  serializeAws_json1_1CopyBackupCommand,
} from "../protocols/Aws_json1_1";
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

export interface CopyBackupCommandInput extends CopyBackupRequest {}
export interface CopyBackupCommandOutput extends CopyBackupResponse, __MetadataBearer {}

/**
 * <p>Copies an existing backup within the same Amazon Web Services account to another Amazon Web Services Region
 *          (cross-Region copy) or within the same Amazon Web Services Region (in-Region copy). You can have up to five
 *          backup copy requests in progress to a single destination Region per account.</p>
 *          <p>You can use cross-Region backup copies for cross-region disaster recovery.
 *          You periodically take backups and copy them to another Region so that in the
 *          event of a disaster in the primary Region, you can restore from backup and recover
 *          availability quickly in the other Region. You can make cross-Region copies
 *          only within your Amazon Web Services partition.</p>
 *          <p> You can also use backup copies to clone your file data set to another Region
 *          or within the same Region.</p>
 *          <p>You can use the <code>SourceRegion</code> parameter to specify the Amazon Web Services Region
 *          from which the backup will be copied. For example, if you make the call from the
 *          <code>us-west-1</code> Region and want to copy a backup from the <code>us-east-2</code>
 *          Region, you specify <code>us-east-2</code> in the <code>SourceRegion</code> parameter
 *          to make a cross-Region copy. If you don't specify a Region, the backup copy is
 *          created in the same Region where the request is sent from (in-Region copy).</p>
 *          <p>For more information on creating backup copies, see
 *          <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/using-backups.html#copy-backups">
 *             Copying backups</a> in the <i>Amazon FSx for Windows User Guide</i> and
 *          <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/using-backups-fsx.html#copy-backups">Copying backups</a>
 *          in the <i>Amazon FSx for Lustre User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CopyBackupCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CopyBackupCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CopyBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyBackupCommandInput} for command's `input` shape.
 * @see {@link CopyBackupCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CopyBackupCommand extends $Command<
  CopyBackupCommandInput,
  CopyBackupCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CopyBackupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyBackupCommandInput, CopyBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CopyBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyBackupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CopyBackupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CopyBackupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyBackupCommandOutput> {
    return deserializeAws_json1_1CopyBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
