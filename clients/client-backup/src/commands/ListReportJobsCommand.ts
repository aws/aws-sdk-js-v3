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
import { ListReportJobsInput, ListReportJobsOutput } from "../models/models_0";
import { de_ListReportJobsCommand, se_ListReportJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListReportJobsCommand}.
 */
export interface ListReportJobsCommandInput extends ListReportJobsInput {}
/**
 * @public
 *
 * The output of {@link ListReportJobsCommand}.
 */
export interface ListReportJobsCommandOutput extends ListReportJobsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns details about your report jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListReportJobsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListReportJobsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListReportJobsInput
 *   ByReportPlanName: "STRING_VALUE",
 *   ByCreationBefore: new Date("TIMESTAMP"),
 *   ByCreationAfter: new Date("TIMESTAMP"),
 *   ByStatus: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListReportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListReportJobsOutput
 * //   ReportJobs: [ // ReportJobList
 * //     { // ReportJob
 * //       ReportJobId: "STRING_VALUE",
 * //       ReportPlanArn: "STRING_VALUE",
 * //       ReportTemplate: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       CompletionTime: new Date("TIMESTAMP"),
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       ReportDestination: { // ReportDestination
 * //         S3BucketName: "STRING_VALUE",
 * //         S3Keys: [ // stringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReportJobsCommandInput - {@link ListReportJobsCommandInput}
 * @returns {@link ListReportJobsCommandOutput}
 * @see {@link ListReportJobsCommandInput} for command's `input` shape.
 * @see {@link ListReportJobsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class ListReportJobsCommand extends $Command<
  ListReportJobsCommandInput,
  ListReportJobsCommandOutput,
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
  constructor(readonly input: ListReportJobsCommandInput) {
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
  ): Handler<ListReportJobsCommandInput, ListReportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListReportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "ListReportJobs",
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
  private serialize(input: ListReportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListReportJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReportJobsCommandOutput> {
    return de_ListReportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
