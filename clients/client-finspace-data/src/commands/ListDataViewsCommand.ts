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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { ListDataViewsRequest, ListDataViewsResponse } from "../models/models_0";
import { de_ListDataViewsCommand, se_ListDataViewsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDataViewsCommand}.
 */
export interface ListDataViewsCommandInput extends ListDataViewsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataViewsCommand}.
 */
export interface ListDataViewsCommandOutput extends ListDataViewsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all available Dataviews for a Dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, ListDataViewsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, ListDataViewsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // ListDataViewsRequest
 *   datasetId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataViewsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataViewsResponse
 * //   nextToken: "STRING_VALUE",
 * //   dataViews: [ // DataViewList
 * //     { // DataViewSummary
 * //       dataViewId: "STRING_VALUE",
 * //       dataViewArn: "STRING_VALUE",
 * //       datasetId: "STRING_VALUE",
 * //       asOfTimestamp: Number("long"),
 * //       partitionColumns: [ // PartitionColumnList
 * //         "STRING_VALUE",
 * //       ],
 * //       sortColumns: [ // SortColumnList
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "RUNNING" || "STARTING" || "FAILED" || "CANCELLED" || "TIMEOUT" || "SUCCESS" || "PENDING" || "FAILED_CLEANUP_FAILED",
 * //       errorInfo: { // DataViewErrorInfo
 * //         errorMessage: "STRING_VALUE",
 * //         errorCategory: "VALIDATION" || "SERVICE_QUOTA_EXCEEDED" || "ACCESS_DENIED" || "RESOURCE_NOT_FOUND" || "THROTTLING" || "INTERNAL_SERVICE_EXCEPTION" || "CANCELLED" || "USER_RECOVERABLE",
 * //       },
 * //       destinationTypeProperties: { // DataViewDestinationTypeParams
 * //         destinationType: "STRING_VALUE", // required
 * //         s3DestinationExportFileFormat: "PARQUET" || "DELIMITED_TEXT",
 * //         s3DestinationExportFileFormatOptions: { // S3DestinationFormatOptions
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       autoUpdate: true || false,
 * //       createTime: Number("long"),
 * //       lastModifiedTime: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDataViewsCommandInput - {@link ListDataViewsCommandInput}
 * @returns {@link ListDataViewsCommandOutput}
 * @see {@link ListDataViewsCommandInput} for command's `input` shape.
 * @see {@link ListDataViewsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 */
export class ListDataViewsCommand extends $Command<
  ListDataViewsCommandInput,
  ListDataViewsCommandOutput,
  FinspaceDataClientResolvedConfig
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
  constructor(readonly input: ListDataViewsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataViewsCommandInput, ListDataViewsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListDataViewsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "ListDataViewsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHabaneroPublicAPI",
        operation: "ListDataViews",
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
  private serialize(input: ListDataViewsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDataViewsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataViewsCommandOutput> {
    return de_ListDataViewsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
