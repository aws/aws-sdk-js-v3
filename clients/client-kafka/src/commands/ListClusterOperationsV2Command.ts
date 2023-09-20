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
import { ListClusterOperationsV2Request, ListClusterOperationsV2Response } from "../models/models_0";
import { de_ListClusterOperationsV2Command, se_ListClusterOperationsV2Command } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListClusterOperationsV2Command}.
 */
export interface ListClusterOperationsV2CommandInput extends ListClusterOperationsV2Request {}
/**
 * @public
 *
 * The output of {@link ListClusterOperationsV2Command}.
 */
export interface ListClusterOperationsV2CommandOutput extends ListClusterOperationsV2Response, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListClusterOperationsV2Command } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListClusterOperationsV2Command } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // ListClusterOperationsV2Request
 *   ClusterArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListClusterOperationsV2Command(input);
 * const response = await client.send(command);
 * // { // ListClusterOperationsV2Response
 * //   ClusterOperationInfoList: [ // __listOfClusterOperationV2Summary
 * //     { // ClusterOperationV2Summary
 * //       ClusterArn: "STRING_VALUE",
 * //       ClusterType: "PROVISIONED" || "SERVERLESS",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       OperationArn: "STRING_VALUE",
 * //       OperationState: "STRING_VALUE",
 * //       OperationType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClusterOperationsV2CommandInput - {@link ListClusterOperationsV2CommandInput}
 * @returns {@link ListClusterOperationsV2CommandOutput}
 * @see {@link ListClusterOperationsV2CommandInput} for command's `input` shape.
 * @see {@link ListClusterOperationsV2CommandOutput} for command's `response` shape.
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
export class ListClusterOperationsV2Command extends $Command<
  ListClusterOperationsV2CommandInput,
  ListClusterOperationsV2CommandOutput,
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
  constructor(readonly input: ListClusterOperationsV2CommandInput) {
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
  ): Handler<ListClusterOperationsV2CommandInput, ListClusterOperationsV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListClusterOperationsV2Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "ListClusterOperationsV2Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kafka",
        operation: "ListClusterOperationsV2",
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
  private serialize(input: ListClusterOperationsV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListClusterOperationsV2Command(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClusterOperationsV2CommandOutput> {
    return de_ListClusterOperationsV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
