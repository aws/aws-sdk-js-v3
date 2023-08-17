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

import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { DeleteDeliveryStreamInput, DeleteDeliveryStreamOutput } from "../models/models_0";
import { de_DeleteDeliveryStreamCommand, se_DeleteDeliveryStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeliveryStreamCommand}.
 */
export interface DeleteDeliveryStreamCommandInput extends DeleteDeliveryStreamInput {}
/**
 * @public
 *
 * The output of {@link DeleteDeliveryStreamCommand}.
 */
export interface DeleteDeliveryStreamCommandOutput extends DeleteDeliveryStreamOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a delivery stream and its data.</p>
 *          <p>To check the state of a delivery stream, use <a>DescribeDeliveryStream</a>. You can delete a delivery stream only if it is in one of the following states:
 *             <code>ACTIVE</code>, <code>DELETING</code>, <code>CREATING_FAILED</code>, or
 *             <code>DELETING_FAILED</code>. You can't delete a delivery stream that is in the
 *             <code>CREATING</code> state. While the deletion request is in process, the delivery
 *          stream is in the <code>DELETING</code> state.</p>
 *          <p>While the delivery stream is in the <code>DELETING</code> state, the service might
 *          continue to accept records, but it doesn't make any guarantees with respect to delivering
 *          the data. Therefore, as a best practice, first stop any applications that are sending
 *          records before you delete a delivery stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, DeleteDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, DeleteDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = { // DeleteDeliveryStreamInput
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   AllowForceDelete: true || false,
 * };
 * const command = new DeleteDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDeliveryStreamCommandInput - {@link DeleteDeliveryStreamCommandInput}
 * @returns {@link DeleteDeliveryStreamCommandOutput}
 * @see {@link DeleteDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
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
export class DeleteDeliveryStreamCommand extends $Command<
  DeleteDeliveryStreamCommandInput,
  DeleteDeliveryStreamCommandOutput,
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
  constructor(readonly input: DeleteDeliveryStreamCommandInput) {
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
  ): Handler<DeleteDeliveryStreamCommandInput, DeleteDeliveryStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDeliveryStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "DeleteDeliveryStreamCommand";
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
  private serialize(input: DeleteDeliveryStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteDeliveryStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDeliveryStreamCommandOutput> {
    return de_DeleteDeliveryStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
