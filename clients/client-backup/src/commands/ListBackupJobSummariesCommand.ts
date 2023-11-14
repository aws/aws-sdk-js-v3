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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListBackupJobSummariesInput, ListBackupJobSummariesOutput } from "../models/models_0";
import { de_ListBackupJobSummariesCommand, se_ListBackupJobSummariesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBackupJobSummariesCommand}.
 */
export interface ListBackupJobSummariesCommandInput extends ListBackupJobSummariesInput {}
/**
 * @public
 *
 * The output of {@link ListBackupJobSummariesCommand}.
 */
export interface ListBackupJobSummariesCommandOutput extends ListBackupJobSummariesOutput, __MetadataBearer {}

/**
 * @public
 * <p>This is a request for a summary of backup jobs created
 *          or running within the most recent 30 days. You can
 *          include parameters AccountID, State, ResourceType, MessageCategory,
 *          AggregationPeriod, MaxResults, or NextToken to filter
 *          results.</p>
 *          <p>This request returns a summary that contains
 *          Region, Account, State, ResourceType, MessageCategory,
 *          StartTime, EndTime, and Count of included jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupJobSummariesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupJobSummariesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListBackupJobSummariesInput
 *   AccountId: "STRING_VALUE",
 *   State: "CREATED" || "PENDING" || "RUNNING" || "ABORTING" || "ABORTED" || "COMPLETED" || "FAILED" || "EXPIRED" || "PARTIAL" || "AGGREGATE_ALL" || "ANY",
 *   ResourceType: "STRING_VALUE",
 *   MessageCategory: "STRING_VALUE",
 *   AggregationPeriod: "ONE_DAY" || "SEVEN_DAYS" || "FOURTEEN_DAYS",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBackupJobSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListBackupJobSummariesOutput
 * //   BackupJobSummaries: [ // BackupJobSummaryList
 * //     { // BackupJobSummary
 * //       Region: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       State: "CREATED" || "PENDING" || "RUNNING" || "ABORTING" || "ABORTED" || "COMPLETED" || "FAILED" || "EXPIRED" || "PARTIAL" || "AGGREGATE_ALL" || "ANY",
 * //       ResourceType: "STRING_VALUE",
 * //       MessageCategory: "STRING_VALUE",
 * //       Count: Number("int"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   AggregationPeriod: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBackupJobSummariesCommandInput - {@link ListBackupJobSummariesCommandInput}
 * @returns {@link ListBackupJobSummariesCommandOutput}
 * @see {@link ListBackupJobSummariesCommandInput} for command's `input` shape.
 * @see {@link ListBackupJobSummariesCommandOutput} for command's `response` shape.
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
export class ListBackupJobSummariesCommand extends $Command<
  ListBackupJobSummariesCommandInput,
  ListBackupJobSummariesCommandOutput,
  BackupClientResolvedConfig
> {
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
  constructor(readonly input: ListBackupJobSummariesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackupJobSummariesCommandInput, ListBackupJobSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBackupJobSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListBackupJobSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "ListBackupJobSummaries",
      },
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
  private serialize(input: ListBackupJobSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBackupJobSummariesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupJobSummariesCommandOutput> {
    return de_ListBackupJobSummariesCommand(output, context);
  }
}
