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

import { DeleteHITRequest, DeleteHITResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_DeleteHITCommand, se_DeleteHITCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteHITCommand}.
 */
export interface DeleteHITCommandInput extends DeleteHITRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHITCommand}.
 */
export interface DeleteHITCommandOutput extends DeleteHITResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed.
 *             Only the Requester who created the HIT can delete it.
 *         </p>
 *         <p>
 *             You can only dispose of HITs that are in the <code>Reviewable</code> state,
 *             with all of their submitted assignments already either approved or rejected.
 *             If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state
 *             (for example, that has not expired, or still has active assignments),
 *             or on a HIT that is Reviewable but without all of its submitted assignments
 *             already approved or rejected, the service will return an error.
 *         </p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>
 *                         HITs are automatically disposed of after 120 days.
 *                     </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         After you dispose of a HIT, you can no longer approve the HIT's rejected assignments.
 *                     </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         Disposed HITs are not returned in results for the ListHITs operation.
 *                     </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs.
 *                     </p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, DeleteHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, DeleteHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // DeleteHITRequest
 *   HITId: "STRING_VALUE", // required
 * };
 * const command = new DeleteHITCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHITCommandInput - {@link DeleteHITCommandInput}
 * @returns {@link DeleteHITCommandOutput}
 * @see {@link DeleteHITCommandInput} for command's `input` shape.
 * @see {@link DeleteHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 */
export class DeleteHITCommand extends $Command<
  DeleteHITCommandInput,
  DeleteHITCommandOutput,
  MTurkClientResolvedConfig
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
  constructor(readonly input: DeleteHITCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteHITCommandInput, DeleteHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteHITCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "DeleteHITCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MTurkRequesterServiceV20170117",
        operation: "DeleteHIT",
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
  private serialize(input: DeleteHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteHITCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteHITCommandOutput> {
    return de_DeleteHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
