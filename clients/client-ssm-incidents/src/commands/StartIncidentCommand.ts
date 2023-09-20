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

import { StartIncidentInput, StartIncidentOutput } from "../models/models_0";
import { de_StartIncidentCommand, se_StartIncidentCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartIncidentCommand}.
 */
export interface StartIncidentCommandInput extends StartIncidentInput {}
/**
 * @public
 *
 * The output of {@link StartIncidentCommand}.
 */
export interface StartIncidentCommandOutput extends StartIncidentOutput, __MetadataBearer {}

/**
 * @public
 * <p>Used to start an incident from CloudWatch alarms, EventBridge events, or
 *       manually. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, StartIncidentCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, StartIncidentCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const input = { // StartIncidentInput
 *   clientToken: "STRING_VALUE",
 *   responsePlanArn: "STRING_VALUE", // required
 *   title: "STRING_VALUE",
 *   impact: Number("int"),
 *   triggerDetails: { // TriggerDetails
 *     source: "STRING_VALUE", // required
 *     triggerArn: "STRING_VALUE",
 *     timestamp: new Date("TIMESTAMP"), // required
 *     rawData: "STRING_VALUE",
 *   },
 *   relatedItems: [ // RelatedItemList
 *     { // RelatedItem
 *       identifier: { // ItemIdentifier
 *         value: { // ItemValue Union: only one key present
 *           arn: "STRING_VALUE",
 *           url: "STRING_VALUE",
 *           metricDefinition: "STRING_VALUE",
 *           pagerDutyIncidentDetail: { // PagerDutyIncidentDetail
 *             id: "STRING_VALUE", // required
 *             autoResolve: true || false,
 *             secretId: "STRING_VALUE",
 *           },
 *         },
 *         type: "STRING_VALUE", // required
 *       },
 *       title: "STRING_VALUE",
 *       generatedId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartIncidentCommand(input);
 * const response = await client.send(command);
 * // { // StartIncidentOutput
 * //   incidentRecordArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartIncidentCommandInput - {@link StartIncidentCommandInput}
 * @returns {@link StartIncidentCommandOutput}
 * @see {@link StartIncidentCommandInput} for command's `input` shape.
 * @see {@link StartIncidentCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource causes an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 */
export class StartIncidentCommand extends $Command<
  StartIncidentCommandInput,
  StartIncidentCommandOutput,
  SSMIncidentsClientResolvedConfig
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
  constructor(readonly input: StartIncidentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMIncidentsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartIncidentCommandInput, StartIncidentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartIncidentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "StartIncidentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SSMIncidents",
        operation: "StartIncident",
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
  private serialize(input: StartIncidentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartIncidentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartIncidentCommandOutput> {
    return de_StartIncidentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
