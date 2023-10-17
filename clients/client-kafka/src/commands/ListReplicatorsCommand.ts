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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListReplicatorsRequest, ListReplicatorsResponse } from "../models/models_0";
import { de_ListReplicatorsCommand, se_ListReplicatorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListReplicatorsCommand}.
 */
export interface ListReplicatorsCommandInput extends ListReplicatorsRequest {}
/**
 * @public
 *
 * The output of {@link ListReplicatorsCommand}.
 */
export interface ListReplicatorsCommandOutput extends ListReplicatorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the replicators.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListReplicatorsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListReplicatorsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // ListReplicatorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ReplicatorNameFilter: "STRING_VALUE",
 * };
 * const command = new ListReplicatorsCommand(input);
 * const response = await client.send(command);
 * // { // ListReplicatorsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Replicators: [ // __listOfReplicatorSummary
 * //     { // ReplicatorSummary
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       CurrentVersion: "STRING_VALUE",
 * //       IsReplicatorReference: true || false,
 * //       KafkaClustersSummary: [ // __listOfKafkaClusterSummary
 * //         { // KafkaClusterSummary
 * //           AmazonMskCluster: { // AmazonMskCluster
 * //             MskClusterArn: "STRING_VALUE", // required
 * //           },
 * //           KafkaClusterAlias: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReplicationInfoSummaryList: [ // __listOfReplicationInfoSummary
 * //         { // ReplicationInfoSummary
 * //           SourceKafkaClusterAlias: "STRING_VALUE",
 * //           TargetKafkaClusterAlias: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReplicatorArn: "STRING_VALUE",
 * //       ReplicatorName: "STRING_VALUE",
 * //       ReplicatorResourceArn: "STRING_VALUE",
 * //       ReplicatorState: "RUNNING" || "CREATING" || "UPDATING" || "DELETING" || "FAILED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReplicatorsCommandInput - {@link ListReplicatorsCommandInput}
 * @returns {@link ListReplicatorsCommandOutput}
 * @see {@link ListReplicatorsCommandInput} for command's `input` shape.
 * @see {@link ListReplicatorsCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class ListReplicatorsCommand extends $Command<
  ListReplicatorsCommandInput,
  ListReplicatorsCommandOutput,
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
  constructor(readonly input: ListReplicatorsCommandInput) {
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
  ): Handler<ListReplicatorsCommandInput, ListReplicatorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReplicatorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "ListReplicatorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kafka",
        operation: "ListReplicators",
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
  private serialize(input: ListReplicatorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListReplicatorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReplicatorsCommandOutput> {
    return de_ListReplicatorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
