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

import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import { RunPipelineActivityRequest, RunPipelineActivityResponse } from "../models/models_0";
import { de_RunPipelineActivityCommand, se_RunPipelineActivityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RunPipelineActivityCommand}.
 */
export interface RunPipelineActivityCommandInput extends RunPipelineActivityRequest {}
/**
 * @public
 *
 * The output of {@link RunPipelineActivityCommand}.
 */
export interface RunPipelineActivityCommandOutput extends RunPipelineActivityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Simulates the results of running a pipeline activity on a message payload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, RunPipelineActivityCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, RunPipelineActivityCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const input = { // RunPipelineActivityRequest
 *   pipelineActivity: { // PipelineActivity
 *     channel: { // ChannelActivity
 *       name: "STRING_VALUE", // required
 *       channelName: "STRING_VALUE", // required
 *       next: "STRING_VALUE",
 *     },
 *     lambda: { // LambdaActivity
 *       name: "STRING_VALUE", // required
 *       lambdaName: "STRING_VALUE", // required
 *       batchSize: Number("int"), // required
 *       next: "STRING_VALUE",
 *     },
 *     datastore: { // DatastoreActivity
 *       name: "STRING_VALUE", // required
 *       datastoreName: "STRING_VALUE", // required
 *     },
 *     addAttributes: { // AddAttributesActivity
 *       name: "STRING_VALUE", // required
 *       attributes: { // AttributeNameMapping // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *       next: "STRING_VALUE",
 *     },
 *     removeAttributes: { // RemoveAttributesActivity
 *       name: "STRING_VALUE", // required
 *       attributes: [ // AttributeNames // required
 *         "STRING_VALUE",
 *       ],
 *       next: "STRING_VALUE",
 *     },
 *     selectAttributes: { // SelectAttributesActivity
 *       name: "STRING_VALUE", // required
 *       attributes: [ // required
 *         "STRING_VALUE",
 *       ],
 *       next: "STRING_VALUE",
 *     },
 *     filter: { // FilterActivity
 *       name: "STRING_VALUE", // required
 *       filter: "STRING_VALUE", // required
 *       next: "STRING_VALUE",
 *     },
 *     math: { // MathActivity
 *       name: "STRING_VALUE", // required
 *       attribute: "STRING_VALUE", // required
 *       math: "STRING_VALUE", // required
 *       next: "STRING_VALUE",
 *     },
 *     deviceRegistryEnrich: { // DeviceRegistryEnrichActivity
 *       name: "STRING_VALUE", // required
 *       attribute: "STRING_VALUE", // required
 *       thingName: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *       next: "STRING_VALUE",
 *     },
 *     deviceShadowEnrich: { // DeviceShadowEnrichActivity
 *       name: "STRING_VALUE", // required
 *       attribute: "STRING_VALUE", // required
 *       thingName: "STRING_VALUE", // required
 *       roleArn: "STRING_VALUE", // required
 *       next: "STRING_VALUE",
 *     },
 *   },
 *   payloads: [ // MessagePayloads // required
 *     "BLOB_VALUE",
 *   ],
 * };
 * const command = new RunPipelineActivityCommand(input);
 * const response = await client.send(command);
 * // { // RunPipelineActivityResponse
 * //   payloads: [ // MessagePayloads
 * //     "BLOB_VALUE",
 * //   ],
 * //   logResult: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RunPipelineActivityCommandInput - {@link RunPipelineActivityCommandInput}
 * @returns {@link RunPipelineActivityCommandOutput}
 * @see {@link RunPipelineActivityCommandInput} for command's `input` shape.
 * @see {@link RunPipelineActivityCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
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
export class RunPipelineActivityCommand extends $Command<
  RunPipelineActivityCommandInput,
  RunPipelineActivityCommandOutput,
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
  constructor(readonly input: RunPipelineActivityCommandInput) {
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
  ): Handler<RunPipelineActivityCommandInput, RunPipelineActivityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RunPipelineActivityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "RunPipelineActivityCommand";
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
  private serialize(input: RunPipelineActivityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RunPipelineActivityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RunPipelineActivityCommandOutput> {
    return de_RunPipelineActivityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
