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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListConfigurationsRequest, ListConfigurationsResponse } from "../models/models_0";
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
 * <p>Returns a list of all the MSK configurations in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListConfigurationsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListConfigurationsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
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
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE", // required
 * //       KafkaVersions: [ // __listOf__string // required
 * //         "STRING_VALUE",
 * //       ],
 * //       LatestRevision: { // ConfigurationRevision
 * //         CreationTime: new Date("TIMESTAMP"), // required
 * //         Description: "STRING_VALUE",
 * //         Revision: Number("long"), // required
 * //       },
 * //       Name: "STRING_VALUE", // required
 * //       State: "ACTIVE" || "DELETING" || "DELETE_FAILED", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationsCommandInput - {@link ListConfigurationsCommandInput}
 * @returns {@link ListConfigurationsCommandOutput}
 * @see {@link ListConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class ListConfigurationsCommand extends $Command<
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
  KafkaClientResolvedConfig
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
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConfigurationsCommandInput, ListConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "ListConfigurationsCommand";
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
