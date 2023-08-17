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

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { ExportMetadataModelAssessmentMessage, ExportMetadataModelAssessmentResponse } from "../models/models_0";
import {
  de_ExportMetadataModelAssessmentCommand,
  se_ExportMetadataModelAssessmentCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExportMetadataModelAssessmentCommand}.
 */
export interface ExportMetadataModelAssessmentCommandInput extends ExportMetadataModelAssessmentMessage {}
/**
 * @public
 *
 * The output of {@link ExportMetadataModelAssessmentCommand}.
 */
export interface ExportMetadataModelAssessmentCommandOutput
  extends ExportMetadataModelAssessmentResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Saves a copy of a database migration assessment report to your Amazon S3 bucket. DMS can save
 *          your assessment report as a comma-separated value (CSV) or a PDF file. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ExportMetadataModelAssessmentCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ExportMetadataModelAssessmentCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ExportMetadataModelAssessmentMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   SelectionRules: "STRING_VALUE", // required
 *   FileName: "STRING_VALUE",
 *   AssessmentReportTypes: [ // AssessmentReportTypesList
 *     "pdf" || "csv",
 *   ],
 * };
 * const command = new ExportMetadataModelAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // ExportMetadataModelAssessmentResponse
 * //   PdfReport: { // ExportMetadataModelAssessmentResultEntry
 * //     S3ObjectKey: "STRING_VALUE",
 * //     ObjectURL: "STRING_VALUE",
 * //   },
 * //   CsvReport: {
 * //     S3ObjectKey: "STRING_VALUE",
 * //     ObjectURL: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ExportMetadataModelAssessmentCommandInput - {@link ExportMetadataModelAssessmentCommandInput}
 * @returns {@link ExportMetadataModelAssessmentCommandOutput}
 * @see {@link ExportMetadataModelAssessmentCommandInput} for command's `input` shape.
 * @see {@link ExportMetadataModelAssessmentCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class ExportMetadataModelAssessmentCommand extends $Command<
  ExportMetadataModelAssessmentCommandInput,
  ExportMetadataModelAssessmentCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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
  constructor(readonly input: ExportMetadataModelAssessmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportMetadataModelAssessmentCommandInput, ExportMetadataModelAssessmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportMetadataModelAssessmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "ExportMetadataModelAssessmentCommand";
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
  private serialize(input: ExportMetadataModelAssessmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExportMetadataModelAssessmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportMetadataModelAssessmentCommandOutput> {
    return de_ExportMetadataModelAssessmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
