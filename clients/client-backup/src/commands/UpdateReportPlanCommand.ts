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
import { UpdateReportPlanInput, UpdateReportPlanOutput } from "../models/models_0";
import { de_UpdateReportPlanCommand, se_UpdateReportPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateReportPlanCommand}.
 */
export interface UpdateReportPlanCommandInput extends UpdateReportPlanInput {}
/**
 * @public
 *
 * The output of {@link UpdateReportPlanCommand}.
 */
export interface UpdateReportPlanCommandOutput extends UpdateReportPlanOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing report plan identified by its <code>ReportPlanName</code> with the
 *          input document in JSON format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateReportPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateReportPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // UpdateReportPlanInput
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
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new UpdateReportPlanCommand(input);
 * const response = await client.send(command);
 * // { // UpdateReportPlanOutput
 * //   ReportPlanName: "STRING_VALUE",
 * //   ReportPlanArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateReportPlanCommandInput - {@link UpdateReportPlanCommandInput}
 * @returns {@link UpdateReportPlanCommandOutput}
 * @see {@link UpdateReportPlanCommandInput} for command's `input` shape.
 * @see {@link UpdateReportPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
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
export class UpdateReportPlanCommand extends $Command<
  UpdateReportPlanCommandInput,
  UpdateReportPlanCommandOutput,
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
  constructor(readonly input: UpdateReportPlanCommandInput) {
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
  ): Handler<UpdateReportPlanCommandInput, UpdateReportPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateReportPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "UpdateReportPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "UpdateReportPlan",
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
  private serialize(input: UpdateReportPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateReportPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateReportPlanCommandOutput> {
    return de_UpdateReportPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
