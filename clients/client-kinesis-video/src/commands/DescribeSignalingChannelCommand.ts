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

import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { DescribeSignalingChannelInput, DescribeSignalingChannelOutput } from "../models/models_0";
import { de_DescribeSignalingChannelCommand, se_DescribeSignalingChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSignalingChannelCommand}.
 */
export interface DescribeSignalingChannelCommandInput extends DescribeSignalingChannelInput {}
/**
 * @public
 *
 * The output of {@link DescribeSignalingChannelCommand}.
 */
export interface DescribeSignalingChannelCommandOutput extends DescribeSignalingChannelOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the most current information about the signaling channel. You must specify
 *             either the name or the Amazon Resource Name (ARN) of the channel that you want to
 *             describe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const input = { // DescribeSignalingChannelInput
 *   ChannelName: "STRING_VALUE",
 *   ChannelARN: "STRING_VALUE",
 * };
 * const command = new DescribeSignalingChannelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSignalingChannelOutput
 * //   ChannelInfo: { // ChannelInfo
 * //     ChannelName: "STRING_VALUE",
 * //     ChannelARN: "STRING_VALUE",
 * //     ChannelType: "SINGLE_MASTER" || "FULL_MESH",
 * //     ChannelStatus: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     SingleMasterConfiguration: { // SingleMasterConfiguration
 * //       MessageTtlSeconds: Number("int"),
 * //     },
 * //     Version: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSignalingChannelCommandInput - {@link DescribeSignalingChannelCommandInput}
 * @returns {@link DescribeSignalingChannelCommandOutput}
 * @see {@link DescribeSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link DescribeSignalingChannelCommandOutput} for command's `response` shape.
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
export class DescribeSignalingChannelCommand extends $Command<
  DescribeSignalingChannelCommandInput,
  DescribeSignalingChannelCommandOutput,
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
  constructor(readonly input: DescribeSignalingChannelCommandInput) {
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
  ): Handler<DescribeSignalingChannelCommandInput, DescribeSignalingChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSignalingChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "DescribeSignalingChannelCommand";
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
  private serialize(input: DescribeSignalingChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSignalingChannelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSignalingChannelCommandOutput> {
    return de_DescribeSignalingChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
