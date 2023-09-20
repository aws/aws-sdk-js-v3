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

import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import {
  DescribeImageGenerationConfigurationInput,
  DescribeImageGenerationConfigurationOutput,
} from "../models/models_0";
import {
  de_DescribeImageGenerationConfigurationCommand,
  se_DescribeImageGenerationConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageGenerationConfigurationCommand}.
 */
export interface DescribeImageGenerationConfigurationCommandInput extends DescribeImageGenerationConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeImageGenerationConfigurationCommand}.
 */
export interface DescribeImageGenerationConfigurationCommandOutput
  extends DescribeImageGenerationConfigurationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the <code>ImageGenerationConfiguration</code> for a given Kinesis video stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeImageGenerationConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeImageGenerationConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const input = { // DescribeImageGenerationConfigurationInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DescribeImageGenerationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageGenerationConfigurationOutput
 * //   ImageGenerationConfiguration: { // ImageGenerationConfiguration
 * //     Status: "ENABLED" || "DISABLED", // required
 * //     ImageSelectorType: "SERVER_TIMESTAMP" || "PRODUCER_TIMESTAMP", // required
 * //     DestinationConfig: { // ImageGenerationDestinationConfig
 * //       Uri: "STRING_VALUE", // required
 * //       DestinationRegion: "STRING_VALUE", // required
 * //     },
 * //     SamplingInterval: Number("int"), // required
 * //     Format: "JPEG" || "PNG", // required
 * //     FormatConfig: { // FormatConfig
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     WidthPixels: Number("int"),
 * //     HeightPixels: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeImageGenerationConfigurationCommandInput - {@link DescribeImageGenerationConfigurationCommandInput}
 * @returns {@link DescribeImageGenerationConfigurationCommandOutput}
 * @see {@link DescribeImageGenerationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeImageGenerationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to perform this operation.</p>
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 */
export class DescribeImageGenerationConfigurationCommand extends $Command<
  DescribeImageGenerationConfigurationCommandInput,
  DescribeImageGenerationConfigurationCommandOutput,
  KinesisVideoClientResolvedConfig
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
  constructor(readonly input: DescribeImageGenerationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImageGenerationConfigurationCommandInput, DescribeImageGenerationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeImageGenerationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "DescribeImageGenerationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "KinesisVideo_20170930",
        operation: "DescribeImageGenerationConfiguration",
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
  private serialize(
    input: DescribeImageGenerationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeImageGenerationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeImageGenerationConfigurationCommandOutput> {
    return de_DescribeImageGenerationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
