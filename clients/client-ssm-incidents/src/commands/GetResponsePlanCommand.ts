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

import { GetResponsePlanInput, GetResponsePlanOutput } from "../models/models_0";
import { de_GetResponsePlanCommand, se_GetResponsePlanCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetResponsePlanCommand}.
 */
export interface GetResponsePlanCommandInput extends GetResponsePlanInput {}
/**
 * @public
 *
 * The output of {@link GetResponsePlanCommand}.
 */
export interface GetResponsePlanCommandOutput extends GetResponsePlanOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the details of the specified response plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetResponsePlanCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetResponsePlanCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const input = { // GetResponsePlanInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetResponsePlanCommand(input);
 * const response = await client.send(command);
 * // { // GetResponsePlanOutput
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   incidentTemplate: { // IncidentTemplate
 * //     title: "STRING_VALUE", // required
 * //     impact: Number("int"), // required
 * //     summary: "STRING_VALUE",
 * //     dedupeString: "STRING_VALUE",
 * //     notificationTargets: [ // NotificationTargetSet
 * //       { // NotificationTargetItem Union: only one key present
 * //         snsTopicArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     incidentTags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   chatChannel: { // ChatChannel Union: only one key present
 * //     empty: {},
 * //     chatbotSns: [ // ChatbotSnsConfigurationSet
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   engagements: [ // EngagementSet
 * //     "STRING_VALUE",
 * //   ],
 * //   actions: [ // ActionsList
 * //     { // Action Union: only one key present
 * //       ssmAutomation: { // SsmAutomation
 * //         roleArn: "STRING_VALUE", // required
 * //         documentName: "STRING_VALUE", // required
 * //         documentVersion: "STRING_VALUE",
 * //         targetAccount: "STRING_VALUE",
 * //         parameters: { // SsmParameters
 * //           "<keys>": [ // SsmParameterValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         dynamicParameters: { // DynamicSsmParameters
 * //           "<keys>": { // DynamicSsmParameterValue Union: only one key present
 * //             variable: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   integrations: [ // Integrations
 * //     { // Integration Union: only one key present
 * //       pagerDutyConfiguration: { // PagerDutyConfiguration
 * //         name: "STRING_VALUE", // required
 * //         secretId: "STRING_VALUE", // required
 * //         pagerDutyIncidentConfiguration: { // PagerDutyIncidentConfiguration
 * //           serviceId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetResponsePlanCommandInput - {@link GetResponsePlanCommandInput}
 * @returns {@link GetResponsePlanCommandOutput}
 * @see {@link GetResponsePlanCommandInput} for command's `input` shape.
 * @see {@link GetResponsePlanCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
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
export class GetResponsePlanCommand extends $Command<
  GetResponsePlanCommandInput,
  GetResponsePlanCommandOutput,
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
  constructor(readonly input: GetResponsePlanCommandInput) {
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
  ): Handler<GetResponsePlanCommandInput, GetResponsePlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResponsePlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "GetResponsePlanCommand";
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
  private serialize(input: GetResponsePlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetResponsePlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResponsePlanCommandOutput> {
    return de_GetResponsePlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
