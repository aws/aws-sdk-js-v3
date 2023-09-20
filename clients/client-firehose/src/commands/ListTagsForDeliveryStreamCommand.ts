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
import { ListTagsForDeliveryStreamInput, ListTagsForDeliveryStreamOutput } from "../models/models_0";
import { de_ListTagsForDeliveryStreamCommand, se_ListTagsForDeliveryStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForDeliveryStreamCommand}.
 */
export interface ListTagsForDeliveryStreamCommandInput extends ListTagsForDeliveryStreamInput {}
/**
 * @public
 *
 * The output of {@link ListTagsForDeliveryStreamCommand}.
 */
export interface ListTagsForDeliveryStreamCommandOutput extends ListTagsForDeliveryStreamOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the tags for the specified delivery stream. This operation has a limit of five
 *          transactions per second per account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, ListTagsForDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, ListTagsForDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // ListTagsForDeliveryStreamInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   ExclusiveStartTagKey: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListTagsForDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForDeliveryStreamOutput
 * //   Tags: [ // ListTagsForDeliveryStreamOutputTagList // required
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   HasMoreTags: true || false, // required
 * // };
 *
 * ```
 *
 * @param ListTagsForDeliveryStreamCommandInput - {@link ListTagsForDeliveryStreamCommandInput}
 * @returns {@link ListTagsForDeliveryStreamCommandOutput}
 * @see {@link ListTagsForDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link ListTagsForDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter has a value that is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have already reached the limit for a requested resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link FirehoseServiceException}
 * <p>Base exception class for all service exceptions from Firehose service.</p>
 *
 */
export class ListTagsForDeliveryStreamCommand extends $Command<
  ListTagsForDeliveryStreamCommandInput,
  ListTagsForDeliveryStreamCommandOutput,
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
  constructor(readonly input: ListTagsForDeliveryStreamCommandInput) {
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
  ): Handler<ListTagsForDeliveryStreamCommandInput, ListTagsForDeliveryStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTagsForDeliveryStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "ListTagsForDeliveryStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Firehose_20150804",
        operation: "ListTagsForDeliveryStream",
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
  private serialize(input: ListTagsForDeliveryStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTagsForDeliveryStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTagsForDeliveryStreamCommandOutput> {
    return de_ListTagsForDeliveryStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
