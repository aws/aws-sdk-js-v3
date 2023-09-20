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
import { ListSignalingChannelsInput, ListSignalingChannelsOutput } from "../models/models_0";
import { de_ListSignalingChannelsCommand, se_ListSignalingChannelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSignalingChannelsCommand}.
 */
export interface ListSignalingChannelsCommandInput extends ListSignalingChannelsInput {}
/**
 * @public
 *
 * The output of {@link ListSignalingChannelsCommand}.
 */
export interface ListSignalingChannelsCommandOutput extends ListSignalingChannelsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns an array of <code>ChannelInfo</code> objects. Each object describes a
 *             signaling channel. To retrieve only those channels that satisfy a specific condition,
 *             you can specify a <code>ChannelNameCondition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, ListSignalingChannelsCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, ListSignalingChannelsCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const input = { // ListSignalingChannelsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ChannelNameCondition: { // ChannelNameCondition
 *     ComparisonOperator: "BEGINS_WITH",
 *     ComparisonValue: "STRING_VALUE",
 *   },
 * };
 * const command = new ListSignalingChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListSignalingChannelsOutput
 * //   ChannelInfoList: [ // ChannelInfoList
 * //     { // ChannelInfo
 * //       ChannelName: "STRING_VALUE",
 * //       ChannelARN: "STRING_VALUE",
 * //       ChannelType: "SINGLE_MASTER" || "FULL_MESH",
 * //       ChannelStatus: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       SingleMasterConfiguration: { // SingleMasterConfiguration
 * //         MessageTtlSeconds: Number("int"),
 * //       },
 * //       Version: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSignalingChannelsCommandInput - {@link ListSignalingChannelsCommandInput}
 * @returns {@link ListSignalingChannelsCommandOutput}
 * @see {@link ListSignalingChannelsCommandInput} for command's `input` shape.
 * @see {@link ListSignalingChannelsCommandOutput} for command's `response` shape.
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
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 */
export class ListSignalingChannelsCommand extends $Command<
  ListSignalingChannelsCommandInput,
  ListSignalingChannelsCommandOutput,
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
  constructor(readonly input: ListSignalingChannelsCommandInput) {
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
  ): Handler<ListSignalingChannelsCommandInput, ListSignalingChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSignalingChannelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "ListSignalingChannelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "KinesisVideo_20170930",
        operation: "ListSignalingChannels",
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
  private serialize(input: ListSignalingChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSignalingChannelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSignalingChannelsCommandOutput> {
    return de_ListSignalingChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
