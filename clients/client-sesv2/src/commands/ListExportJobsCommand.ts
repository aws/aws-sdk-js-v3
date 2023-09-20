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

import { ListExportJobsRequest, ListExportJobsResponse } from "../models/models_0";
import { de_ListExportJobsCommand, se_ListExportJobsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListExportJobsCommand}.
 */
export interface ListExportJobsCommandInput extends ListExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListExportJobsCommand}.
 */
export interface ListExportJobsCommandOutput extends ListExportJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all of the export jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListExportJobsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListExportJobsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // ListExportJobsRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   ExportSourceType: "METRICS_DATA" || "MESSAGE_INSIGHTS",
 *   JobStatus: "CREATED" || "PROCESSING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * };
 * const command = new ListExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListExportJobsResponse
 * //   ExportJobs: [ // ExportJobSummaryList
 * //     { // ExportJobSummary
 * //       JobId: "STRING_VALUE",
 * //       ExportSourceType: "METRICS_DATA" || "MESSAGE_INSIGHTS",
 * //       JobStatus: "CREATED" || "PROCESSING" || "COMPLETED" || "FAILED" || "CANCELLED",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       CompletedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExportJobsCommandInput - {@link ListExportJobsCommandInput}
 * @returns {@link ListExportJobsCommandOutput}
 * @see {@link ListExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListExportJobsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 * @example List export jobs
 * ```javascript
 * // Lists export jobs of type METRICS_DATA and status PROCESSING
 * const input = {
 *   "ExportSourceType": "METRICS_DATA",
 *   "JobStatus": "PROCESSING",
 *   "PageSize": 25
 * };
 * const command = new ListExportJobsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ExportJobs": [
 *     {
 *       "CreatedTimestamp": "167697473543",
 *       "ExportSourceType": "METRICS_DATA",
 *       "JobId": "72de83a0-6b49-47ca-9783-8b812576887a",
 *       "JobStatus": "PROCESSING"
 *     }
 *   ]
 * }
 * *\/
 * // example id: list-export-jobs-1685702074256
 * ```
 *
 */
export class ListExportJobsCommand extends $Command<
  ListExportJobsCommandInput,
  ListExportJobsCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: ListExportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListExportJobsCommandInput, ListExportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListExportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "ListExportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService_v2",
        operation: "ListExportJobs",
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
  private serialize(input: ListExportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListExportJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListExportJobsCommandOutput> {
    return de_ListExportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
