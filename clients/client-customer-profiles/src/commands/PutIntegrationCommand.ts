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

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import {
  PutIntegrationRequest,
  PutIntegrationRequestFilterSensitiveLog,
  PutIntegrationResponse,
} from "../models/models_0";
import { de_PutIntegrationCommand, se_PutIntegrationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutIntegrationCommand}.
 */
export interface PutIntegrationCommandInput extends PutIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link PutIntegrationCommand}.
 */
export interface PutIntegrationCommandOutput extends PutIntegrationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds an integration between the service and a third-party service, which includes
 *          Amazon AppFlow and Amazon Connect.</p>
 *          <p>An integration can belong to only one domain.</p>
 *          <p>To add or remove tags on an existing Integration, see <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_TagResource.html"> TagResource
 *       </a>/<a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UntagResource.html">
 *          UntagResource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, PutIntegrationCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, PutIntegrationCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // PutIntegrationRequest
 *   DomainName: "STRING_VALUE", // required
 *   Uri: "STRING_VALUE",
 *   ObjectTypeName: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   FlowDefinition: { // FlowDefinition
 *     Description: "STRING_VALUE",
 *     FlowName: "STRING_VALUE", // required
 *     KmsArn: "STRING_VALUE", // required
 *     SourceFlowConfig: { // SourceFlowConfig
 *       ConnectorProfileName: "STRING_VALUE",
 *       ConnectorType: "Salesforce" || "Marketo" || "Zendesk" || "Servicenow" || "S3", // required
 *       IncrementalPullConfig: { // IncrementalPullConfig
 *         DatetimeTypeFieldName: "STRING_VALUE",
 *       },
 *       SourceConnectorProperties: { // SourceConnectorProperties
 *         Marketo: { // MarketoSourceProperties
 *           Object: "STRING_VALUE", // required
 *         },
 *         S3: { // S3SourceProperties
 *           BucketName: "STRING_VALUE", // required
 *           BucketPrefix: "STRING_VALUE",
 *         },
 *         Salesforce: { // SalesforceSourceProperties
 *           Object: "STRING_VALUE", // required
 *           EnableDynamicFieldUpdate: true || false,
 *           IncludeDeletedRecords: true || false,
 *         },
 *         ServiceNow: { // ServiceNowSourceProperties
 *           Object: "STRING_VALUE", // required
 *         },
 *         Zendesk: { // ZendeskSourceProperties
 *           Object: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *     Tasks: [ // Tasks // required
 *       { // Task
 *         ConnectorOperator: { // ConnectorOperator
 *           Marketo: "PROJECTION" || "LESS_THAN" || "GREATER_THAN" || "BETWEEN" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *           S3: "PROJECTION" || "LESS_THAN" || "GREATER_THAN" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *           Salesforce: "PROJECTION" || "LESS_THAN" || "CONTAINS" || "GREATER_THAN" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *           ServiceNow: "PROJECTION" || "CONTAINS" || "LESS_THAN" || "GREATER_THAN" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *           Zendesk: "PROJECTION" || "GREATER_THAN" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *         },
 *         DestinationField: "STRING_VALUE",
 *         SourceFields: [ // SourceFields // required
 *           "STRING_VALUE",
 *         ],
 *         TaskProperties: { // TaskPropertiesMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         TaskType: "Arithmetic" || "Filter" || "Map" || "Mask" || "Merge" || "Truncate" || "Validate", // required
 *       },
 *     ],
 *     TriggerConfig: { // TriggerConfig
 *       TriggerType: "Scheduled" || "Event" || "OnDemand", // required
 *       TriggerProperties: { // TriggerProperties
 *         Scheduled: { // ScheduledTriggerProperties
 *           ScheduleExpression: "STRING_VALUE", // required
 *           DataPullMode: "Incremental" || "Complete",
 *           ScheduleStartTime: new Date("TIMESTAMP"),
 *           ScheduleEndTime: new Date("TIMESTAMP"),
 *           Timezone: "STRING_VALUE",
 *           ScheduleOffset: Number("long"),
 *           FirstExecutionFrom: new Date("TIMESTAMP"),
 *         },
 *       },
 *     },
 *   },
 *   ObjectTypeNames: { // ObjectTypeNames
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // PutIntegrationResponse
 * //   DomainName: "STRING_VALUE", // required
 * //   Uri: "STRING_VALUE", // required
 * //   ObjectTypeName: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ObjectTypeNames: { // ObjectTypeNames
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   WorkflowId: "STRING_VALUE",
 * //   IsUnstructured: true || false,
 * // };
 *
 * ```
 *
 * @param PutIntegrationCommandInput - {@link PutIntegrationCommandInput}
 * @returns {@link PutIntegrationCommandOutput}
 * @see {@link PutIntegrationCommandInput} for command's `input` shape.
 * @see {@link PutIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 */
export class PutIntegrationCommand extends $Command<
  PutIntegrationCommandInput,
  PutIntegrationCommandOutput,
  CustomerProfilesClientResolvedConfig
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
  constructor(readonly input: PutIntegrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CustomerProfilesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutIntegrationCommandInput, PutIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutIntegrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CustomerProfilesClient";
    const commandName = "PutIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutIntegrationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CustomerProfiles_20200815",
        operation: "PutIntegration",
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
  private serialize(input: PutIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutIntegrationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutIntegrationCommandOutput> {
    return de_PutIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
