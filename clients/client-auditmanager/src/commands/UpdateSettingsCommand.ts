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

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { UpdateSettingsRequest, UpdateSettingsResponse } from "../models/models_0";
import { de_UpdateSettingsCommand, se_UpdateSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSettingsCommand}.
 */
export interface UpdateSettingsCommandInput extends UpdateSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSettingsCommand}.
 */
export interface UpdateSettingsCommandOutput extends UpdateSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p> Updates Audit Manager settings for the current account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateSettingsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateSettingsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // UpdateSettingsRequest
 *   snsTopic: "STRING_VALUE",
 *   defaultAssessmentReportsDestination: { // AssessmentReportsDestination
 *     destinationType: "S3",
 *     destination: "STRING_VALUE",
 *   },
 *   defaultProcessOwners: [ // Roles
 *     { // Role
 *       roleType: "PROCESS_OWNER" || "RESOURCE_OWNER", // required
 *       roleArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   kmsKey: "STRING_VALUE",
 *   evidenceFinderEnabled: true || false,
 *   deregistrationPolicy: { // DeregistrationPolicy
 *     deleteResources: "ALL" || "DEFAULT",
 *   },
 *   defaultExportDestination: { // DefaultExportDestination
 *     destinationType: "S3",
 *     destination: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSettingsResponse
 * //   settings: { // Settings
 * //     isAwsOrgEnabled: true || false,
 * //     snsTopic: "STRING_VALUE",
 * //     defaultAssessmentReportsDestination: { // AssessmentReportsDestination
 * //       destinationType: "S3",
 * //       destination: "STRING_VALUE",
 * //     },
 * //     defaultProcessOwners: [ // Roles
 * //       { // Role
 * //         roleType: "PROCESS_OWNER" || "RESOURCE_OWNER", // required
 * //         roleArn: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     kmsKey: "STRING_VALUE",
 * //     evidenceFinderEnablement: { // EvidenceFinderEnablement
 * //       eventDataStoreArn: "STRING_VALUE",
 * //       enablementStatus: "ENABLED" || "DISABLED" || "ENABLE_IN_PROGRESS" || "DISABLE_IN_PROGRESS",
 * //       backfillStatus: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETED",
 * //       error: "STRING_VALUE",
 * //     },
 * //     deregistrationPolicy: { // DeregistrationPolicy
 * //       deleteResources: "ALL" || "DEFAULT",
 * //     },
 * //     defaultExportDestination: { // DefaultExportDestination
 * //       destinationType: "S3",
 * //       destination: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSettingsCommandInput - {@link UpdateSettingsCommandInput}
 * @returns {@link UpdateSettingsCommandOutput}
 * @see {@link UpdateSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateSettingsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 */
export class UpdateSettingsCommand extends $Command<
  UpdateSettingsCommandInput,
  UpdateSettingsCommandOutput,
  AuditManagerClientResolvedConfig
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
  constructor(readonly input: UpdateSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSettingsCommandInput, UpdateSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "UpdateSettingsCommand";
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
  private serialize(input: UpdateSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSettingsCommandOutput> {
    return de_UpdateSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
