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
import { ListCopyJobSummariesInput, ListCopyJobSummariesOutput } from "../models/models_0";
import { de_ListCopyJobSummariesCommand, se_ListCopyJobSummariesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCopyJobSummariesCommand}.
 */
export interface ListCopyJobSummariesCommandInput extends ListCopyJobSummariesInput {}
/**
 * @public
 *
 * The output of {@link ListCopyJobSummariesCommand}.
 */
export interface ListCopyJobSummariesCommandOutput extends ListCopyJobSummariesOutput, __MetadataBearer {}

/**
 * @public
 * <p>This request obtains a list of copy jobs created
 *          or running within the the most recent 30 days. You can
 *          include parameters AccountID, State, ResourceType, MessageCategory,
 *          AggregationPeriod, MaxResults, or NextToken to filter
 *          results.</p>
 *          <p>This request returns a summary that contains
 *          Region, Account, State, RestourceType, MessageCategory,
 *          StartTime, EndTime, and Count of included jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListCopyJobSummariesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListCopyJobSummariesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListCopyJobSummariesInput
 *   AccountId: "STRING_VALUE",
 *   State: "CREATED" || "RUNNING" || "ABORTING" || "ABORTED" || "COMPLETING" || "COMPLETED" || "FAILING" || "FAILED" || "PARTIAL" || "AGGREGATE_ALL" || "ANY",
 *   ResourceType: "STRING_VALUE",
 *   MessageCategory: "STRING_VALUE",
 *   AggregationPeriod: "ONE_DAY" || "SEVEN_DAYS" || "FOURTEEN_DAYS",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCopyJobSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListCopyJobSummariesOutput
 * //   CopyJobSummaries: [ // CopyJobSummaryList
 * //     { // CopyJobSummary
 * //       Region: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       State: "CREATED" || "RUNNING" || "ABORTING" || "ABORTED" || "COMPLETING" || "COMPLETED" || "FAILING" || "FAILED" || "PARTIAL" || "AGGREGATE_ALL" || "ANY",
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
 * @param ListCopyJobSummariesCommandInput - {@link ListCopyJobSummariesCommandInput}
 * @returns {@link ListCopyJobSummariesCommandOutput}
 * @see {@link ListCopyJobSummariesCommandInput} for command's `input` shape.
 * @see {@link ListCopyJobSummariesCommandOutput} for command's `response` shape.
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
export class ListCopyJobSummariesCommand extends $Command<
  ListCopyJobSummariesCommandInput,
  ListCopyJobSummariesCommandOutput,
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
  constructor(readonly input: ListCopyJobSummariesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCopyJobSummariesCommandInput, ListCopyJobSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCopyJobSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListCopyJobSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "ListCopyJobSummaries",
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
  private serialize(input: ListCopyJobSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCopyJobSummariesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCopyJobSummariesCommandOutput> {
    return de_ListCopyJobSummariesCommand(output, context);
  }
}
