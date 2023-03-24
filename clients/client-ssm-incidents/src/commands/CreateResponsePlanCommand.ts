// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateResponsePlanInput, CreateResponsePlanOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateResponsePlanCommand,
  serializeAws_restJson1CreateResponsePlanCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 *
 * The input for {@link CreateResponsePlanCommand}.
 */
export interface CreateResponsePlanCommandInput extends CreateResponsePlanInput {}
/**
 * @public
 *
 * The output of {@link CreateResponsePlanCommand}.
 */
export interface CreateResponsePlanCommandOutput extends CreateResponsePlanOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a response plan that automates the initial response to incidents. A response
 *             plan engages contacts, starts chat channel collaboration, and initiates runbooks at the
 *             beginning of an incident.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, CreateResponsePlanCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, CreateResponsePlanCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const input = {
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   incidentTemplate: {
 *     title: "STRING_VALUE", // required
 *     impact: Number("int"), // required
 *     summary: "STRING_VALUE",
 *     dedupeString: "STRING_VALUE",
 *     notificationTargets: [
 *       { // Union: only one key present
 *         snsTopicArn: "STRING_VALUE",
 *       },
 *     ],
 *     incidentTags: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   chatChannel: { // Union: only one key present
 *     empty: {},
 *     chatbotSns: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   engagements: [
 *     "STRING_VALUE",
 *   ],
 *   actions: [
 *     { // Union: only one key present
 *       ssmAutomation: {
 *         roleArn: "STRING_VALUE", // required
 *         documentName: "STRING_VALUE", // required
 *         documentVersion: "STRING_VALUE",
 *         targetAccount: "STRING_VALUE",
 *         parameters: {
 *           "<keys>": [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         dynamicParameters: {
 *           "<keys>": { // Union: only one key present
 *             variable: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   integrations: [
 *     { // Union: only one key present
 *       pagerDutyConfiguration: {
 *         name: "STRING_VALUE", // required
 *         secretId: "STRING_VALUE", // required
 *         pagerDutyIncidentConfiguration: {
 *           serviceId: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateResponsePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateResponsePlanCommandInput - {@link CreateResponsePlanCommandInput}
 * @returns {@link CreateResponsePlanCommandOutput}
 * @see {@link CreateResponsePlanCommandInput} for command's `input` shape.
 * @see {@link CreateResponsePlanCommandOutput} for command's `response` shape.
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
 *
 */
export class CreateResponsePlanCommand extends $Command<
  CreateResponsePlanCommandInput,
  CreateResponsePlanCommandOutput,
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
  constructor(readonly input: CreateResponsePlanCommandInput) {
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
  ): Handler<CreateResponsePlanCommandInput, CreateResponsePlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateResponsePlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "CreateResponsePlanCommand";
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
  private serialize(input: CreateResponsePlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateResponsePlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateResponsePlanCommandOutput> {
    return deserializeAws_restJson1CreateResponsePlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
