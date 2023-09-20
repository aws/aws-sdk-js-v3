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

import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { DescribePipelineRequest, DescribePipelineResponse } from "../models/models_0";
import { de_DescribePipelineCommand, se_DescribePipelineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePipelineCommand}.
 */
export interface DescribePipelineCommandInput extends DescribePipelineRequest {}
/**
 * @public
 *
 * The output of {@link DescribePipelineCommand}.
 */
export interface DescribePipelineCommandOutput extends DescribePipelineResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DescribePipelineCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DescribePipelineCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // DescribePipelineRequest
 *   pipelineName: "STRING_VALUE", // required
 * };
 * const command = new DescribePipelineCommand(input);
 * const response = await client.send(command);
 * // { // DescribePipelineResponse
 * //   pipeline: { // Pipeline
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     activities: [ // PipelineActivities
 * //       { // PipelineActivity
 * //         channel: { // ChannelActivity
 * //           name: "STRING_VALUE", // required
 * //           channelName: "STRING_VALUE", // required
 * //           next: "STRING_VALUE",
 * //         },
 * //         lambda: { // LambdaActivity
 * //           name: "STRING_VALUE", // required
 * //           lambdaName: "STRING_VALUE", // required
 * //           batchSize: Number("int"), // required
 * //           next: "STRING_VALUE",
 * //         },
 * //         datastore: { // DatastoreActivity
 * //           name: "STRING_VALUE", // required
 * //           datastoreName: "STRING_VALUE", // required
 * //         },
 * //         addAttributes: { // AddAttributesActivity
 * //           name: "STRING_VALUE", // required
 * //           attributes: { // AttributeNameMapping // required
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           next: "STRING_VALUE",
 * //         },
 * //         removeAttributes: { // RemoveAttributesActivity
 * //           name: "STRING_VALUE", // required
 * //           attributes: [ // AttributeNames // required
 * //             "STRING_VALUE",
 * //           ],
 * //           next: "STRING_VALUE",
 * //         },
 * //         selectAttributes: { // SelectAttributesActivity
 * //           name: "STRING_VALUE", // required
 * //           attributes: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           next: "STRING_VALUE",
 * //         },
 * //         filter: { // FilterActivity
 * //           name: "STRING_VALUE", // required
 * //           filter: "STRING_VALUE", // required
 * //           next: "STRING_VALUE",
 * //         },
 * //         math: { // MathActivity
 * //           name: "STRING_VALUE", // required
 * //           attribute: "STRING_VALUE", // required
 * //           math: "STRING_VALUE", // required
 * //           next: "STRING_VALUE",
 * //         },
 * //         deviceRegistryEnrich: { // DeviceRegistryEnrichActivity
 * //           name: "STRING_VALUE", // required
 * //           attribute: "STRING_VALUE", // required
 * //           thingName: "STRING_VALUE", // required
 * //           roleArn: "STRING_VALUE", // required
 * //           next: "STRING_VALUE",
 * //         },
 * //         deviceShadowEnrich: { // DeviceShadowEnrichActivity
 * //           name: "STRING_VALUE", // required
 * //           attribute: "STRING_VALUE", // required
 * //           thingName: "STRING_VALUE", // required
 * //           roleArn: "STRING_VALUE", // required
 * //           next: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     reprocessingSummaries: [ // ReprocessingSummaries
 * //       { // ReprocessingSummary
 * //         id: "STRING_VALUE",
 * //         status: "RUNNING" || "SUCCEEDED" || "CANCELLED" || "FAILED",
 * //         creationTime: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePipelineCommandInput - {@link DescribePipelineCommandInput}
 * @returns {@link DescribePipelineCommandOutput}
 * @see {@link DescribePipelineCommandInput} for command's `input` shape.
 * @see {@link DescribePipelineCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource with the specified name could not be found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link IoTAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from IoTAnalytics service.</p>
 *
 */
export class DescribePipelineCommand extends $Command<
  DescribePipelineCommandInput,
  DescribePipelineCommandOutput,
  IoTAnalyticsClientResolvedConfig
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
  constructor(readonly input: DescribePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePipelineCommandInput, DescribePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "DescribePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTAnalytics",
        operation: "DescribePipeline",
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
  private serialize(input: DescribePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePipelineCommandOutput> {
    return de_DescribePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
