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

import { ListConfigurationsRequest, ListConfigurationsResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { de_ListConfigurationsCommand, se_ListConfigurationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationsCommand}.
 */
export interface ListConfigurationsCommandInput extends ListConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationsCommand}.
 */
export interface ListConfigurationsCommandOutput extends ListConfigurationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, ListConfigurationsCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, ListConfigurationsCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const input = { // ListConfigurationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationsResponse
 * //   Configurations: [ // __listOfConfiguration
 * //     { // Configuration
 * //       Arn: "STRING_VALUE", // required
 * //       AuthenticationStrategy: "SIMPLE" || "LDAP", // required
 * //       Created: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE", // required
 * //       EngineType: "ACTIVEMQ" || "RABBITMQ", // required
 * //       EngineVersion: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       LatestRevision: { // ConfigurationRevision
 * //         Created: new Date("TIMESTAMP"), // required
 * //         Description: "STRING_VALUE",
 * //         Revision: Number("int"), // required
 * //       },
 * //       Name: "STRING_VALUE", // required
 * //       Tags: { // __mapOf__string
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   MaxResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationsCommandInput - {@link ListConfigurationsCommandInput}
 * @returns {@link ListConfigurationsCommandOutput}
 * @see {@link ListConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationsCommandOutput} for command's `response` shape.
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
export class ListConfigurationsCommand extends $Command<
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
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
  constructor(readonly input: ListConfigurationsCommandInput) {
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
  ): Handler<ListConfigurationsCommandInput, ListConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "ListConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "mq",
        operation: "ListConfigurations",
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
  private serialize(input: ListConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListConfigurationsCommandOutput> {
    return de_ListConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
