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

import { RejectAssignmentRequest, RejectAssignmentResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_RejectAssignmentCommand, se_RejectAssignmentCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RejectAssignmentCommand}.
 */
export interface RejectAssignmentCommandInput extends RejectAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link RejectAssignmentCommand}.
 */
export interface RejectAssignmentCommandOutput extends RejectAssignmentResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The <code>RejectAssignment</code> operation rejects the results of a completed assignment.
 *         </p>
 *         <p>
 *             You can include an optional feedback message with the rejection,
 *             which the Worker can see in the Status section of the web site.
 *             When you include a feedback message with the rejection,
 *             it helps the Worker understand why the assignment was rejected,
 *             and can improve the quality of the results the Worker submits in the future.
 *         </p>
 *         <p>
 *             Only the Requester who created the HIT can reject an assignment for the HIT.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, RejectAssignmentCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, RejectAssignmentCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // RejectAssignmentRequest
 *   AssignmentId: "STRING_VALUE", // required
 *   RequesterFeedback: "STRING_VALUE", // required
 * };
 * const command = new RejectAssignmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RejectAssignmentCommandInput - {@link RejectAssignmentCommandInput}
 * @returns {@link RejectAssignmentCommandOutput}
 * @see {@link RejectAssignmentCommandInput} for command's `input` shape.
 * @see {@link RejectAssignmentCommandOutput} for command's `response` shape.
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
export class RejectAssignmentCommand extends $Command<
  RejectAssignmentCommandInput,
  RejectAssignmentCommandOutput,
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
  constructor(readonly input: RejectAssignmentCommandInput) {
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
  ): Handler<RejectAssignmentCommandInput, RejectAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RejectAssignmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "RejectAssignmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MTurkRequesterServiceV20170117",
        operation: "RejectAssignment",
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
  private serialize(input: RejectAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RejectAssignmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RejectAssignmentCommandOutput> {
    return de_RejectAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
