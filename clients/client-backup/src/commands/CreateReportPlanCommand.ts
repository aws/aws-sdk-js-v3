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
import { CreateReportPlanInput, CreateReportPlanOutput } from "../models/models_0";
import { de_CreateReportPlanCommand, se_CreateReportPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateReportPlanCommand}.
 */
export interface CreateReportPlanCommandInput extends CreateReportPlanInput {}
/**
 * @public
 *
 * The output of {@link CreateReportPlanCommand}.
 */
export interface CreateReportPlanCommandOutput extends CreateReportPlanOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a report plan. A report plan is a document that contains information about the
 *          contents of the report and where Backup will deliver it.</p>
 *          <p>If you call <code>CreateReportPlan</code> with a plan that already exists, you receive
 *          an <code>AlreadyExistsException</code> exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateReportPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateReportPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // CreateReportPlanInput
 *   ReportPlanName: "STRING_VALUE", // required
 *   ReportPlanDescription: "STRING_VALUE",
 *   ReportDeliveryChannel: { // ReportDeliveryChannel
 *     S3BucketName: "STRING_VALUE", // required
 *     S3KeyPrefix: "STRING_VALUE",
 *     Formats: [ // FormatList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ReportSetting: { // ReportSetting
 *     ReportTemplate: "STRING_VALUE", // required
 *     FrameworkArns: [ // stringList
 *       "STRING_VALUE",
 *     ],
 *     NumberOfFrameworks: Number("int"),
 *     Accounts: [
 *       "STRING_VALUE",
 *     ],
 *     OrganizationUnits: [
 *       "STRING_VALUE",
 *     ],
 *     Regions: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ReportPlanTags: { // stringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new CreateReportPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateReportPlanOutput
 * //   ReportPlanName: "STRING_VALUE",
 * //   ReportPlanArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateReportPlanCommandInput - {@link CreateReportPlanCommandInput}
 * @returns {@link CreateReportPlanCommandOutput}
 * @see {@link CreateReportPlanCommandInput} for command's `input` shape.
 * @see {@link CreateReportPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class CreateReportPlanCommand extends $Command<
  CreateReportPlanCommandInput,
  CreateReportPlanCommandOutput,
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
  constructor(readonly input: CreateReportPlanCommandInput) {
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
  ): Handler<CreateReportPlanCommandInput, CreateReportPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReportPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "CreateReportPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "CreateReportPlan",
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
  private serialize(input: CreateReportPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateReportPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReportPlanCommandOutput> {
    return de_CreateReportPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
