// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListBackupJobsInput, ListBackupJobsOutput } from "../models/models_0";
import { de_ListBackupJobsCommand, se_ListBackupJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBackupJobsCommand}.
 */
export interface ListBackupJobsCommandInput extends ListBackupJobsInput {}
/**
 * @public
 *
 * The output of {@link ListBackupJobsCommand}.
 */
export interface ListBackupJobsCommandOutput extends ListBackupJobsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of existing backup jobs for an authenticated account for the last 30
 *          days. For a longer period of time, consider using these <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">monitoring tools</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupJobsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupJobsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListBackupJobsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ByResourceArn: "STRING_VALUE",
 *   ByState: "CREATED" || "PENDING" || "RUNNING" || "ABORTING" || "ABORTED" || "COMPLETED" || "FAILED" || "EXPIRED" || "PARTIAL",
 *   ByBackupVaultName: "STRING_VALUE",
 *   ByCreatedBefore: new Date("TIMESTAMP"),
 *   ByCreatedAfter: new Date("TIMESTAMP"),
 *   ByResourceType: "STRING_VALUE",
 *   ByAccountId: "STRING_VALUE",
 *   ByCompleteAfter: new Date("TIMESTAMP"),
 *   ByCompleteBefore: new Date("TIMESTAMP"),
 *   ByParentJobId: "STRING_VALUE",
 * };
 * const command = new ListBackupJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListBackupJobsOutput
 * //   BackupJobs: [ // BackupJobsList
 * //     { // BackupJob
 * //       AccountId: "STRING_VALUE",
 * //       BackupJobId: "STRING_VALUE",
 * //       BackupVaultName: "STRING_VALUE",
 * //       BackupVaultArn: "STRING_VALUE",
 * //       RecoveryPointArn: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       CompletionDate: new Date("TIMESTAMP"),
 * //       State: "CREATED" || "PENDING" || "RUNNING" || "ABORTING" || "ABORTED" || "COMPLETED" || "FAILED" || "EXPIRED" || "PARTIAL",
 * //       StatusMessage: "STRING_VALUE",
 * //       PercentDone: "STRING_VALUE",
 * //       BackupSizeInBytes: Number("long"),
 * //       IamRoleArn: "STRING_VALUE",
 * //       CreatedBy: { // RecoveryPointCreator
 * //         BackupPlanId: "STRING_VALUE",
 * //         BackupPlanArn: "STRING_VALUE",
 * //         BackupPlanVersion: "STRING_VALUE",
 * //         BackupRuleId: "STRING_VALUE",
 * //       },
 * //       ExpectedCompletionDate: new Date("TIMESTAMP"),
 * //       StartBy: new Date("TIMESTAMP"),
 * //       ResourceType: "STRING_VALUE",
 * //       BytesTransferred: Number("long"),
 * //       BackupOptions: { // BackupOptions
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       BackupType: "STRING_VALUE",
 * //       ParentJobId: "STRING_VALUE",
 * //       IsParent: true || false,
 * //       ResourceName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBackupJobsCommandInput - {@link ListBackupJobsCommandInput}
 * @returns {@link ListBackupJobsCommandOutput}
 * @see {@link ListBackupJobsCommandInput} for command's `input` shape.
 * @see {@link ListBackupJobsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class ListBackupJobsCommand extends $Command<
  ListBackupJobsCommandInput,
  ListBackupJobsCommandOutput,
  BackupClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: ListBackupJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackupJobsCommandInput, ListBackupJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBackupJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListBackupJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListBackupJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBackupJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupJobsCommandOutput> {
    return de_ListBackupJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
