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

import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { ListDeliveryStreamsInput, ListDeliveryStreamsOutput } from "../models/models_0";
import { de_ListDeliveryStreamsCommand, se_ListDeliveryStreamsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDeliveryStreamsCommand}.
 */
export interface ListDeliveryStreamsCommandInput extends ListDeliveryStreamsInput {}
/**
 * @public
 *
 * The output of {@link ListDeliveryStreamsCommand}.
 */
export interface ListDeliveryStreamsCommandOutput extends ListDeliveryStreamsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists your delivery streams in alphabetical order of their names.</p>
 *          <p>The number of delivery streams might be too large to return using a single call to
 *             <code>ListDeliveryStreams</code>. You can limit the number of delivery streams returned,
 *          using the <code>Limit</code> parameter. To determine whether there are more delivery
 *          streams to list, check the value of <code>HasMoreDeliveryStreams</code> in the output. If
 *          there are more delivery streams to list, you can request them by calling this operation
 *          again and setting the <code>ExclusiveStartDeliveryStreamName</code> parameter to the name
 *          of the last delivery stream returned in the last call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, ListDeliveryStreamsCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, ListDeliveryStreamsCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // ListDeliveryStreamsInput
 *   Limit: Number("int"),
 *   DeliveryStreamType: "DirectPut" || "KinesisStreamAsSource" || "MSKAsSource",
 *   ExclusiveStartDeliveryStreamName: "STRING_VALUE",
 * };
 * const command = new ListDeliveryStreamsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeliveryStreamsOutput
 * //   DeliveryStreamNames: [ // DeliveryStreamNameList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   HasMoreDeliveryStreams: true || false, // required
 * // };
 *
 * ```
 *
 * @param ListDeliveryStreamsCommandInput - {@link ListDeliveryStreamsCommandInput}
 * @returns {@link ListDeliveryStreamsCommandOutput}
 * @see {@link ListDeliveryStreamsCommandInput} for command's `input` shape.
 * @see {@link ListDeliveryStreamsCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link FirehoseServiceException}
 * <p>Base exception class for all service exceptions from Firehose service.</p>
 *
 */
export class ListDeliveryStreamsCommand extends $Command<
  ListDeliveryStreamsCommandInput,
  ListDeliveryStreamsCommandOutput,
  FirehoseClientResolvedConfig
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
  constructor(readonly input: ListDeliveryStreamsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeliveryStreamsCommandInput, ListDeliveryStreamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeliveryStreamsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "ListDeliveryStreamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Firehose_20150804",
        operation: "ListDeliveryStreams",
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
  private serialize(input: ListDeliveryStreamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDeliveryStreamsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeliveryStreamsCommandOutput> {
    return de_ListDeliveryStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
