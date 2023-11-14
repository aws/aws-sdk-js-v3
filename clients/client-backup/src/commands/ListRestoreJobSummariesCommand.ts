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
import { ListRestoreJobSummariesInput, ListRestoreJobSummariesOutput } from "../models/models_0";
import { de_ListRestoreJobSummariesCommand, se_ListRestoreJobSummariesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRestoreJobSummariesCommand}.
 */
export interface ListRestoreJobSummariesCommandInput extends ListRestoreJobSummariesInput {}
/**
 * @public
 *
 * The output of {@link ListRestoreJobSummariesCommand}.
 */
export interface ListRestoreJobSummariesCommandOutput extends ListRestoreJobSummariesOutput, __MetadataBearer {}

/**
 * @public
 * <p>This request obtains a summary of restore jobs created
 *          or running within the the most recent 30 days. You can
 *          include parameters AccountID, State, ResourceType,
 *          AggregationPeriod, MaxResults, or NextToken to filter
 *          results.</p>
 *          <p>This request returns a summary that contains
 *          Region, Account, State, RestourceType, MessageCategory,
 *          StartTime, EndTime, and Count of included jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRestoreJobSummariesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRestoreJobSummariesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListRestoreJobSummariesInput
 *   AccountId: "STRING_VALUE",
 *   State: "CREATED" || "PENDING" || "RUNNING" || "ABORTED" || "COMPLETED" || "FAILED" || "AGGREGATE_ALL" || "ANY",
 *   ResourceType: "STRING_VALUE",
 *   AggregationPeriod: "ONE_DAY" || "SEVEN_DAYS" || "FOURTEEN_DAYS",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRestoreJobSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListRestoreJobSummariesOutput
 * //   RestoreJobSummaries: [ // RestoreJobSummaryList
 * //     { // RestoreJobSummary
 * //       Region: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       State: "CREATED" || "PENDING" || "RUNNING" || "ABORTED" || "COMPLETED" || "FAILED" || "AGGREGATE_ALL" || "ANY",
 * //       ResourceType: "STRING_VALUE",
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
 * @param ListRestoreJobSummariesCommandInput - {@link ListRestoreJobSummariesCommandInput}
 * @returns {@link ListRestoreJobSummariesCommandOutput}
 * @see {@link ListRestoreJobSummariesCommandInput} for command's `input` shape.
 * @see {@link ListRestoreJobSummariesCommandOutput} for command's `response` shape.
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
export class ListRestoreJobSummariesCommand extends $Command<
  ListRestoreJobSummariesCommandInput,
  ListRestoreJobSummariesCommandOutput,
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
  constructor(readonly input: ListRestoreJobSummariesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRestoreJobSummariesCommandInput, ListRestoreJobSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRestoreJobSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListRestoreJobSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "ListRestoreJobSummaries",
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
  private serialize(input: ListRestoreJobSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRestoreJobSummariesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRestoreJobSummariesCommandOutput> {
    return de_ListRestoreJobSummariesCommand(output, context);
  }
}
