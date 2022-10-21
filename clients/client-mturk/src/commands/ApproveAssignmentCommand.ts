// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ApproveAssignmentRequest,
  ApproveAssignmentRequestFilterSensitiveLog,
  ApproveAssignmentResponse,
  ApproveAssignmentResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1ApproveAssignmentCommand,
  serializeAws_json1_1ApproveAssignmentCommand,
} from "../protocols/Aws_json1_1";

export interface ApproveAssignmentCommandInput extends ApproveAssignmentRequest {}
export interface ApproveAssignmentCommandOutput extends ApproveAssignmentResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>ApproveAssignment</code> operation approves the results of a completed assignment.
 *         </p>
 *         <p>
 *             Approving an assignment initiates two payments from the Requester's Amazon.com account
 *         </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     The Worker who submitted the results is paid the reward specified in the HIT.
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     Amazon Mechanical Turk fees are debited.
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>
 *             If the Requester's account does not have adequate funds for these payments,
 *             the call to ApproveAssignment returns an exception, and the approval is not processed.
 *             You can include an optional feedback message with the approval,
 *             which the Worker can see in the Status section of the web site.
 *         </p>
 *         <p>
 *             You can also call this operation for assignments that were previous rejected
 *             and approve them by explicitly overriding the previous rejection.
 *             This only works on rejected assignments that were submitted within the previous 30 days
 *             and only if the assignment's related HIT has not been deleted.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ApproveAssignmentCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ApproveAssignmentCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ApproveAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApproveAssignmentCommandInput} for command's `input` shape.
 * @see {@link ApproveAssignmentCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class ApproveAssignmentCommand extends $Command<
  ApproveAssignmentCommandInput,
  ApproveAssignmentCommandOutput,
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

  constructor(readonly input: ApproveAssignmentCommandInput) {
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
  ): Handler<ApproveAssignmentCommandInput, ApproveAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ApproveAssignmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ApproveAssignmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ApproveAssignmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ApproveAssignmentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ApproveAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ApproveAssignmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ApproveAssignmentCommandOutput> {
    return deserializeAws_json1_1ApproveAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
