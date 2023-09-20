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

import { GetIncidentRecordInput, GetIncidentRecordOutput } from "../models/models_0";
import { de_GetIncidentRecordCommand, se_GetIncidentRecordCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIncidentRecordCommand}.
 */
export interface GetIncidentRecordCommandInput extends GetIncidentRecordInput {}
/**
 * @public
 *
 * The output of {@link GetIncidentRecordCommand}.
 */
export interface GetIncidentRecordCommandOutput extends GetIncidentRecordOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the details for the specified incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetIncidentRecordCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetIncidentRecordCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const input = { // GetIncidentRecordInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetIncidentRecordCommand(input);
 * const response = await client.send(command);
 * // { // GetIncidentRecordOutput
 * //   incidentRecord: { // IncidentRecord
 * //     arn: "STRING_VALUE", // required
 * //     title: "STRING_VALUE", // required
 * //     summary: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     impact: Number("int"), // required
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //     resolvedTime: new Date("TIMESTAMP"),
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedBy: "STRING_VALUE", // required
 * //     automationExecutions: [ // AutomationExecutionSet
 * //       { // AutomationExecution Union: only one key present
 * //         ssmExecutionArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     incidentRecordSource: { // IncidentRecordSource
 * //       createdBy: "STRING_VALUE", // required
 * //       invokedBy: "STRING_VALUE",
 * //       resourceArn: "STRING_VALUE",
 * //       source: "STRING_VALUE", // required
 * //     },
 * //     dedupeString: "STRING_VALUE", // required
 * //     chatChannel: { // ChatChannel Union: only one key present
 * //       empty: {},
 * //       chatbotSns: [ // ChatbotSnsConfigurationSet
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     notificationTargets: [ // NotificationTargetSet
 * //       { // NotificationTargetItem Union: only one key present
 * //         snsTopicArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIncidentRecordCommandInput - {@link GetIncidentRecordCommandInput}
 * @returns {@link GetIncidentRecordCommandOutput}
 * @see {@link GetIncidentRecordCommandInput} for command's `input` shape.
 * @see {@link GetIncidentRecordCommandOutput} for command's `response` shape.
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
export class GetIncidentRecordCommand extends $Command<
  GetIncidentRecordCommandInput,
  GetIncidentRecordCommandOutput,
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
  constructor(readonly input: GetIncidentRecordCommandInput) {
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
  ): Handler<GetIncidentRecordCommandInput, GetIncidentRecordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIncidentRecordCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "GetIncidentRecordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SSMIncidents",
        operation: "GetIncidentRecord",
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
  private serialize(input: GetIncidentRecordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIncidentRecordCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIncidentRecordCommandOutput> {
    return de_GetIncidentRecordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
