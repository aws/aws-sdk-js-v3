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

import { ListIngestionsRequest, ListIngestionsResponse } from "../models/models_3";
import { de_ListIngestionsCommand, se_ListIngestionsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListIngestionsCommand}.
 */
export interface ListIngestionsCommandInput extends ListIngestionsRequest {}
/**
 * @public
 *
 * The output of {@link ListIngestionsCommand}.
 */
export interface ListIngestionsCommandOutput extends ListIngestionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the history of SPICE ingestions for a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListIngestionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListIngestionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // ListIngestionsRequest
 *   DataSetId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   AwsAccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 * };
 * const command = new ListIngestionsCommand(input);
 * const response = await client.send(command);
 * // { // ListIngestionsResponse
 * //   Ingestions: [ // Ingestions
 * //     { // Ingestion
 * //       Arn: "STRING_VALUE", // required
 * //       IngestionId: "STRING_VALUE",
 * //       IngestionStatus: "INITIALIZED" || "QUEUED" || "RUNNING" || "FAILED" || "COMPLETED" || "CANCELLED", // required
 * //       ErrorInfo: { // ErrorInfo
 * //         Type: "FAILURE_TO_ASSUME_ROLE" || "INGESTION_SUPERSEDED" || "INGESTION_CANCELED" || "DATA_SET_DELETED" || "DATA_SET_NOT_SPICE" || "S3_UPLOADED_FILE_DELETED" || "S3_MANIFEST_ERROR" || "DATA_TOLERANCE_EXCEPTION" || "SPICE_TABLE_NOT_FOUND" || "DATA_SET_SIZE_LIMIT_EXCEEDED" || "ROW_SIZE_LIMIT_EXCEEDED" || "ACCOUNT_CAPACITY_LIMIT_EXCEEDED" || "CUSTOMER_ERROR" || "DATA_SOURCE_NOT_FOUND" || "IAM_ROLE_NOT_AVAILABLE" || "CONNECTION_FAILURE" || "SQL_TABLE_NOT_FOUND" || "PERMISSION_DENIED" || "SSL_CERTIFICATE_VALIDATION_FAILURE" || "OAUTH_TOKEN_FAILURE" || "SOURCE_API_LIMIT_EXCEEDED_FAILURE" || "PASSWORD_AUTHENTICATION_FAILURE" || "SQL_SCHEMA_MISMATCH_ERROR" || "INVALID_DATE_FORMAT" || "INVALID_DATAPREP_SYNTAX" || "SOURCE_RESOURCE_LIMIT_EXCEEDED" || "SQL_INVALID_PARAMETER_VALUE" || "QUERY_TIMEOUT" || "SQL_NUMERIC_OVERFLOW" || "UNRESOLVABLE_HOST" || "UNROUTABLE_HOST" || "SQL_EXCEPTION" || "S3_FILE_INACCESSIBLE" || "IOT_FILE_NOT_FOUND" || "IOT_DATA_SET_FILE_EMPTY" || "INVALID_DATA_SOURCE_CONFIG" || "DATA_SOURCE_AUTH_FAILED" || "DATA_SOURCE_CONNECTION_FAILED" || "FAILURE_TO_PROCESS_JSON_FILE" || "INTERNAL_SERVICE_ERROR" || "REFRESH_SUPPRESSED_BY_EDIT" || "PERMISSION_NOT_FOUND" || "ELASTICSEARCH_CURSOR_NOT_ENABLED" || "CURSOR_NOT_ENABLED" || "DUPLICATE_COLUMN_NAMES_FOUND",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       RowInfo: { // RowInfo
 * //         RowsIngested: Number("long"),
 * //         RowsDropped: Number("long"),
 * //         TotalRowsInDataset: Number("long"),
 * //       },
 * //       QueueInfo: { // QueueInfo
 * //         WaitingOnIngestion: "STRING_VALUE", // required
 * //         QueuedIngestion: "STRING_VALUE", // required
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       IngestionTimeInSeconds: Number("long"),
 * //       IngestionSizeInBytes: Number("long"),
 * //       RequestSource: "MANUAL" || "SCHEDULED",
 * //       RequestType: "INITIAL_INGESTION" || "EDIT" || "INCREMENTAL_REFRESH" || "FULL_REFRESH",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListIngestionsCommandInput - {@link ListIngestionsCommandInput}
 * @returns {@link ListIngestionsCommandOutput}
 * @see {@link ListIngestionsCommandInput} for command's `input` shape.
 * @see {@link ListIngestionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class ListIngestionsCommand extends $Command<
  ListIngestionsCommandInput,
  ListIngestionsCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: ListIngestionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIngestionsCommandInput, ListIngestionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListIngestionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "ListIngestionsCommand";
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
  private serialize(input: ListIngestionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListIngestionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListIngestionsCommandOutput> {
    return de_ListIngestionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
