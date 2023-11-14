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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeDeliveryDestinationsRequest, DescribeDeliveryDestinationsResponse } from "../models/models_0";
import {
  de_DescribeDeliveryDestinationsCommand,
  se_DescribeDeliveryDestinationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeliveryDestinationsCommand}.
 */
export interface DescribeDeliveryDestinationsCommandInput extends DescribeDeliveryDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeliveryDestinationsCommand}.
 */
export interface DescribeDeliveryDestinationsCommandOutput
  extends DescribeDeliveryDestinationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of the delivery destinations that have been created in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeDeliveryDestinationsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeDeliveryDestinationsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeDeliveryDestinationsRequest
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new DescribeDeliveryDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeliveryDestinationsResponse
 * //   deliveryDestinations: [ // DeliveryDestinations
 * //     { // DeliveryDestination
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       deliveryDestinationType: "S3" || "CWL" || "FH",
 * //       outputFormat: "json" || "plain" || "w3c" || "raw" || "parquet",
 * //       deliveryDestinationConfiguration: { // DeliveryDestinationConfiguration
 * //         destinationResourceArn: "STRING_VALUE", // required
 * //       },
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDeliveryDestinationsCommandInput - {@link DescribeDeliveryDestinationsCommandInput}
 * @returns {@link DescribeDeliveryDestinationsCommandOutput}
 * @see {@link DescribeDeliveryDestinationsCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveryDestinationsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class DescribeDeliveryDestinationsCommand extends $Command<
  DescribeDeliveryDestinationsCommandInput,
  DescribeDeliveryDestinationsCommandOutput,
  CloudWatchLogsClientResolvedConfig
> {
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
  constructor(readonly input: DescribeDeliveryDestinationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDeliveryDestinationsCommandInput, DescribeDeliveryDestinationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDeliveryDestinationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DescribeDeliveryDestinationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "DescribeDeliveryDestinations",
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
  private serialize(input: DescribeDeliveryDestinationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDeliveryDestinationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDeliveryDestinationsCommandOutput> {
    return de_DescribeDeliveryDestinationsCommand(output, context);
  }
}
