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

import { ListBrokersRequest, ListBrokersResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { de_ListBrokersCommand, se_ListBrokersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBrokersCommand}.
 */
export interface ListBrokersCommandInput extends ListBrokersRequest {}
/**
 * @public
 *
 * The output of {@link ListBrokersCommand}.
 */
export interface ListBrokersCommandOutput extends ListBrokersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all brokers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, ListBrokersCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, ListBrokersCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const input = { // ListBrokersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBrokersCommand(input);
 * const response = await client.send(command);
 * // { // ListBrokersResponse
 * //   BrokerSummaries: [ // __listOfBrokerSummary
 * //     { // BrokerSummary
 * //       BrokerArn: "STRING_VALUE",
 * //       BrokerId: "STRING_VALUE",
 * //       BrokerName: "STRING_VALUE",
 * //       BrokerState: "CREATION_IN_PROGRESS" || "CREATION_FAILED" || "DELETION_IN_PROGRESS" || "RUNNING" || "REBOOT_IN_PROGRESS" || "CRITICAL_ACTION_REQUIRED" || "REPLICA",
 * //       Created: new Date("TIMESTAMP"),
 * //       DeploymentMode: "SINGLE_INSTANCE" || "ACTIVE_STANDBY_MULTI_AZ" || "CLUSTER_MULTI_AZ", // required
 * //       EngineType: "ACTIVEMQ" || "RABBITMQ", // required
 * //       HostInstanceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBrokersCommandInput - {@link ListBrokersCommandInput}
 * @returns {@link ListBrokersCommandOutput}
 * @see {@link ListBrokersCommandInput} for command's `input` shape.
 * @see {@link ListBrokersCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 */
export class ListBrokersCommand extends $Command<
  ListBrokersCommandInput,
  ListBrokersCommandOutput,
  MqClientResolvedConfig
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
  constructor(readonly input: ListBrokersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBrokersCommandInput, ListBrokersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListBrokersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "ListBrokersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "mq",
        operation: "ListBrokers",
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
  private serialize(input: ListBrokersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBrokersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBrokersCommandOutput> {
    return de_ListBrokersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
