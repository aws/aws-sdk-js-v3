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

import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { ListDataSetImportHistoryRequest, ListDataSetImportHistoryResponse } from "../models/models_0";
import { de_ListDataSetImportHistoryCommand, se_ListDataSetImportHistoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDataSetImportHistoryCommand}.
 */
export interface ListDataSetImportHistoryCommandInput extends ListDataSetImportHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListDataSetImportHistoryCommand}.
 */
export interface ListDataSetImportHistoryCommandOutput extends ListDataSetImportHistoryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the data set imports for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, ListDataSetImportHistoryCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, ListDataSetImportHistoryCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // ListDataSetImportHistoryRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   applicationId: "STRING_VALUE", // required
 * };
 * const command = new ListDataSetImportHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSetImportHistoryResponse
 * //   dataSetImportTasks: [ // DataSetImportTaskList // required
 * //     { // DataSetImportTask
 * //       taskId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       summary: { // DataSetImportSummary
 * //         total: Number("int"), // required
 * //         succeeded: Number("int"), // required
 * //         failed: Number("int"), // required
 * //         pending: Number("int"), // required
 * //         inProgress: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataSetImportHistoryCommandInput - {@link ListDataSetImportHistoryCommandInput}
 * @returns {@link ListDataSetImportHistoryCommandOutput}
 * @see {@link ListDataSetImportHistoryCommandInput} for command's `input` shape.
 * @see {@link ListDataSetImportHistoryCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 */
export class ListDataSetImportHistoryCommand extends $Command<
  ListDataSetImportHistoryCommandInput,
  ListDataSetImportHistoryCommandOutput,
  M2ClientResolvedConfig
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
  constructor(readonly input: ListDataSetImportHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: M2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataSetImportHistoryCommandInput, ListDataSetImportHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDataSetImportHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "ListDataSetImportHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsSupernovaControlPlaneService",
        operation: "ListDataSetImportHistory",
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
  private serialize(input: ListDataSetImportHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDataSetImportHistoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataSetImportHistoryCommandOutput> {
    return de_ListDataSetImportHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
