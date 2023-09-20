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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetTopicRuleDestinationRequest, GetTopicRuleDestinationResponse } from "../models/models_1";
import { de_GetTopicRuleDestinationCommand, se_GetTopicRuleDestinationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTopicRuleDestinationCommand}.
 */
export interface GetTopicRuleDestinationCommandInput extends GetTopicRuleDestinationRequest {}
/**
 * @public
 *
 * The output of {@link GetTopicRuleDestinationCommand}.
 */
export interface GetTopicRuleDestinationCommandOutput extends GetTopicRuleDestinationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a topic rule destination.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRuleDestination</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // GetTopicRuleDestinationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * // { // GetTopicRuleDestinationResponse
 * //   topicRuleDestination: { // TopicRuleDestination
 * //     arn: "STRING_VALUE",
 * //     status: "ENABLED" || "IN_PROGRESS" || "DISABLED" || "ERROR" || "DELETING",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     lastUpdatedAt: new Date("TIMESTAMP"),
 * //     statusReason: "STRING_VALUE",
 * //     httpUrlProperties: { // HttpUrlDestinationProperties
 * //       confirmationUrl: "STRING_VALUE",
 * //     },
 * //     vpcProperties: { // VpcDestinationProperties
 * //       subnetIds: [ // SubnetIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       securityGroups: [ // SecurityGroupList
 * //         "STRING_VALUE",
 * //       ],
 * //       vpcId: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTopicRuleDestinationCommandInput - {@link GetTopicRuleDestinationCommandInput}
 * @returns {@link GetTopicRuleDestinationCommandOutput}
 * @see {@link GetTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link GetTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class GetTopicRuleDestinationCommand extends $Command<
  GetTopicRuleDestinationCommandInput,
  GetTopicRuleDestinationCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: GetTopicRuleDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTopicRuleDestinationCommandInput, GetTopicRuleDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTopicRuleDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetTopicRuleDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "GetTopicRuleDestination",
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
  private serialize(input: GetTopicRuleDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTopicRuleDestinationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTopicRuleDestinationCommandOutput> {
    return de_GetTopicRuleDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
