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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import {
  DescribeBackupsRequest,
  DescribeBackupsRequestFilterSensitiveLog,
  DescribeBackupsResponse,
  DescribeBackupsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBackupsCommand,
  serializeAws_json1_1DescribeBackupsCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeBackupsCommand}.
 */
export interface DescribeBackupsCommandInput extends DescribeBackupsRequest {}
/**
 * The output of {@link DescribeBackupsCommand}.
 */
export interface DescribeBackupsCommandOutput extends DescribeBackupsResponse, __MetadataBearer {}

/**
 * <p>Returns the description of a specific Amazon FSx backup, if a
 *                 <code>BackupIds</code> value is provided for that backup. Otherwise, it returns all
 *             backups owned by your Amazon Web Services account in the Amazon Web Services Region of the
 *             endpoint that you're calling.</p>
 *          <p>When retrieving all backups, you can optionally specify the <code>MaxResults</code>
 *             parameter to limit the number of backups in a response. If more backups remain, Amazon FSx returns a <code>NextToken</code> value in the response. In this case,
 *             send a later request with the <code>NextToken</code> request parameter set to the value
 *             of the <code>NextToken</code> value from the last response.</p>
 *          <p>This operation is used in an iterative process to retrieve a list of your backups.
 *                 <code>DescribeBackups</code> is called first without a <code>NextToken</code> value.
 *             Then the operation continues to be called with the <code>NextToken</code> parameter set
 *             to the value of the last <code>NextToken</code> value until a response has no
 *                 <code>NextToken</code> value.</p>
 *          <p>When using this operation, keep the following in mind:</p>
 *          <ul>
 *             <li>
 *                <p>The operation might return fewer than the <code>MaxResults</code> value of
 *                     backup descriptions while still including a <code>NextToken</code>
 *                     value.</p>
 *             </li>
 *             <li>
 *                <p>The order of the backups returned in the response of one
 *                         <code>DescribeBackups</code> call and the order of the backups returned
 *                     across the responses of a multi-call iteration is unspecified.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeBackupsCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeBackupsCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DescribeBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupsCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 *
 * @example To describe Amazon FSx backups
 * ```javascript
 * // This operation describes all of the Amazon FSx backups in an account.
 * const input = {};
 * const command = new DescribeBackupsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Backups": [
 *     {
 *       "BackupId": "backup-03e3c82e0183b7b6b",
 *       "CreationTime": "1481841524.0",
 *       "FileSystem": {
 *         "FileSystemId": "fs-0498eed5fe91001ec",
 *         "OwnerId": "012345678912",
 *         "StorageCapacity": 300,
 *         "WindowsConfiguration": {
 *           "ActiveDirectoryId": "d-1234abcd12",
 *           "AutomaticBackupRetentionDays": 30,
 *           "DailyAutomaticBackupStartTime": "05:00",
 *           "WeeklyMaintenanceStartTime": "1:05:00"
 *         }
 *       },
 *       "Lifecycle": "AVAILABLE",
 *       "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:backup/backup-03e3c82e0183b7b6b",
 *       "Tags": [
 *         {
 *           "Key": "Name",
 *           "Value": "MyBackup"
 *         }
 *       ],
 *       "Type": "USER_INITIATED"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class DescribeBackupsCommand extends $Command<
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
  FSxClientResolvedConfig
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

  constructor(readonly input: DescribeBackupsCommandInput) {
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
  ): Handler<DescribeBackupsCommandInput, DescribeBackupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBackupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DescribeBackupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBackupsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeBackupsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBackupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeBackupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBackupsCommandOutput> {
    return deserializeAws_json1_1DescribeBackupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
