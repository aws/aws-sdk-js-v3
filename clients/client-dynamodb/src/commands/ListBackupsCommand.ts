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

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListBackupsInput, ListBackupsOutput } from "../models/models_0";
import { de_ListBackupsCommand, se_ListBackupsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBackupsCommand}.
 */
export interface ListBackupsCommandInput extends ListBackupsInput {}
/**
 * @public
 *
 * The output of {@link ListBackupsCommand}.
 */
export interface ListBackupsCommandOutput extends ListBackupsOutput, __MetadataBearer {}

/**
 * @public
 * <p>List backups associated with an Amazon Web Services account. To list backups for a
 *             given table, specify <code>TableName</code>. <code>ListBackups</code> returns a
 *             paginated list of results with at most 1 MB worth of items in a page. You can also
 *             specify a maximum number of entries to be returned in a page.</p>
 *          <p>In the request, start time is inclusive, but end time is exclusive. Note that these
 *             boundaries are for the time at which the original backup was requested.</p>
 *          <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListBackupsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListBackupsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // ListBackupsInput
 *   TableName: "STRING_VALUE",
 *   Limit: Number("int"),
 *   TimeRangeLowerBound: new Date("TIMESTAMP"),
 *   TimeRangeUpperBound: new Date("TIMESTAMP"),
 *   ExclusiveStartBackupArn: "STRING_VALUE",
 *   BackupType: "USER" || "SYSTEM" || "AWS_BACKUP" || "ALL",
 * };
 * const command = new ListBackupsCommand(input);
 * const response = await client.send(command);
 * // { // ListBackupsOutput
 * //   BackupSummaries: [ // BackupSummaries
 * //     { // BackupSummary
 * //       TableName: "STRING_VALUE",
 * //       TableId: "STRING_VALUE",
 * //       TableArn: "STRING_VALUE",
 * //       BackupArn: "STRING_VALUE",
 * //       BackupName: "STRING_VALUE",
 * //       BackupCreationDateTime: new Date("TIMESTAMP"),
 * //       BackupExpiryDateTime: new Date("TIMESTAMP"),
 * //       BackupStatus: "CREATING" || "DELETED" || "AVAILABLE",
 * //       BackupType: "USER" || "SYSTEM" || "AWS_BACKUP",
 * //       BackupSizeBytes: Number("long"),
 * //     },
 * //   ],
 * //   LastEvaluatedBackupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBackupsCommandInput - {@link ListBackupsCommandInput}
 * @returns {@link ListBackupsCommandOutput}
 * @see {@link ListBackupsCommandInput} for command's `input` shape.
 * @see {@link ListBackupsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 */
export class ListBackupsCommand extends $Command<
  ListBackupsCommandInput,
  ListBackupsCommandOutput,
  DynamoDBClientResolvedConfig
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
  constructor(readonly input: ListBackupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackupsCommandInput, ListBackupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListBackupsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "ListBackupsCommand";
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
  private serialize(input: ListBackupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBackupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupsCommandOutput> {
    return de_ListBackupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
