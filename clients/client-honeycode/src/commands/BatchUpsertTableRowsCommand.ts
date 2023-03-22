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

import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import {
  BatchUpsertTableRowsRequest,
  BatchUpsertTableRowsRequestFilterSensitiveLog,
  BatchUpsertTableRowsResult,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchUpsertTableRowsCommand,
  serializeAws_restJson1BatchUpsertTableRowsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link BatchUpsertTableRowsCommand}.
 */
export interface BatchUpsertTableRowsCommandInput extends BatchUpsertTableRowsRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpsertTableRowsCommand}.
 */
export interface BatchUpsertTableRowsCommandOutput extends BatchUpsertTableRowsResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert
 *             operation takes a filter expression as input and evaluates it to find matching rows on the destination
 *             table. If matching rows are found, it will update the cells in the matching rows to new values specified
 *             in the request. If no matching rows are found, a new row is added at the end of the table and the cells in
 *             that row are set to the new values specified in the request.
 *         </p>
 *         <p>
 *             You can specify the values to set in some or all of the columns in the table for the
 *             matching or newly appended rows. If a column is not explicitly specified for a particular row, then that
 *             column will not be updated for that row. To clear out the data in a specific cell, you need to set the value
 *             as an empty string ("").
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, BatchUpsertTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, BatchUpsertTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const command = new BatchUpsertTableRowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param BatchUpsertTableRowsCommandInput - {@link BatchUpsertTableRowsCommandInput}
 * @returns {@link BatchUpsertTableRowsCommandOutput}
 * @see {@link BatchUpsertTableRowsCommandInput} for command's `input` shape.
 * @see {@link BatchUpsertTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for HoneycodeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *             You do not have sufficient access to perform this action. Check that the workbook is owned by you and your
 *             IAM policy allows access to the resource in the request.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There were unexpected errors from the server.</p>
 *
 * @throws {@link RequestTimeoutException} (server fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A Workbook, Table, App, Screen or Screen Automation was not found with the given ID.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *             The request caused service quota to be breached.
 *         </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Remote service is unreachable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Tps(transactions per second) rate reached.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *             Request is invalid. The message in the response contains details on why the request is invalid.
 *         </p>
 *
 *
 */
export class BatchUpsertTableRowsCommand extends $Command<
  BatchUpsertTableRowsCommandInput,
  BatchUpsertTableRowsCommandOutput,
  HoneycodeClientResolvedConfig
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
  constructor(readonly input: BatchUpsertTableRowsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HoneycodeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpsertTableRowsCommandInput, BatchUpsertTableRowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchUpsertTableRowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "BatchUpsertTableRowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpsertTableRowsRequestFilterSensitiveLog,
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
  private serialize(input: BatchUpsertTableRowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUpsertTableRowsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpsertTableRowsCommandOutput> {
    return deserializeAws_restJson1BatchUpsertTableRowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
