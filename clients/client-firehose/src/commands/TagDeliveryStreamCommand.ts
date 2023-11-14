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
import { TagDeliveryStreamInput, TagDeliveryStreamOutput } from "../models/models_0";
import { de_TagDeliveryStreamCommand, se_TagDeliveryStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TagDeliveryStreamCommand}.
 */
export interface TagDeliveryStreamCommandInput extends TagDeliveryStreamInput {}
/**
 * @public
 *
 * The output of {@link TagDeliveryStreamCommand}.
 */
export interface TagDeliveryStreamCommandOutput extends TagDeliveryStreamOutput, __MetadataBearer {}

/**
 * @public
 * <p>Adds or updates tags for the specified delivery stream. A tag is a key-value pair
 *          that you can define and assign to Amazon Web Services resources. If you specify a tag that
 *          already exists, the tag value is replaced with the value that you specify in the request.
 *          Tags are metadata. For example, you can add friendly names and descriptions or other types
 *          of information that can help you distinguish the delivery stream. For more information
 *          about tags, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
 *             Tags</a> in the <i>Amazon Web Services Billing and Cost Management User
 *             Guide</i>. </p>
 *          <p>Each delivery stream can have up to 50 tags. </p>
 *          <p>This operation has a limit of five transactions per second per account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, TagDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, TagDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // TagDeliveryStreamInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   Tags: [ // TagDeliveryStreamInputTagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new TagDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagDeliveryStreamCommandInput - {@link TagDeliveryStreamCommandInput}
 * @returns {@link TagDeliveryStreamCommandOutput}
 * @see {@link TagDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link TagDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter has a value that is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have already reached the limit for a requested resource.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is already in use and not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link FirehoseServiceException}
 * <p>Base exception class for all service exceptions from Firehose service.</p>
 *
 */
export class TagDeliveryStreamCommand extends $Command<
  TagDeliveryStreamCommandInput,
  TagDeliveryStreamCommandOutput,
  FirehoseClientResolvedConfig
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
  constructor(readonly input: TagDeliveryStreamCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TagDeliveryStreamCommandInput, TagDeliveryStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TagDeliveryStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "TagDeliveryStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Firehose_20150804",
        operation: "TagDeliveryStream",
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
  private serialize(input: TagDeliveryStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TagDeliveryStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TagDeliveryStreamCommandOutput> {
    return de_TagDeliveryStreamCommand(output, context);
  }
}
