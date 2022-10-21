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
  CreateAdditionalAssignmentsForHITRequest,
  CreateAdditionalAssignmentsForHITRequestFilterSensitiveLog,
  CreateAdditionalAssignmentsForHITResponse,
  CreateAdditionalAssignmentsForHITResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand,
  serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand,
} from "../protocols/Aws_json1_1";

export interface CreateAdditionalAssignmentsForHITCommandInput extends CreateAdditionalAssignmentsForHITRequest {}
export interface CreateAdditionalAssignmentsForHITCommandOutput
  extends CreateAdditionalAssignmentsForHITResponse,
    __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>CreateAdditionalAssignmentsForHIT</code>
 *             operation increases the maximum number of assignments of an existing HIT.
 *         </p>
 *         <p>
 *             To extend the maximum number of assignments, specify the number of additional assignments.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more
 *                         assignments will result in an
 *                         <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code>
 *                         exception.</p>
 *                 </li>
 *                <li>
 *                     <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an
 *                         <code>AWS.MechanicalTurk.HITTooOldForExtension</code>
 *                         exception.
 *                     </p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateAdditionalAssignmentsForHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateAdditionalAssignmentsForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new CreateAdditionalAssignmentsForHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAdditionalAssignmentsForHITCommandInput} for command's `input` shape.
 * @see {@link CreateAdditionalAssignmentsForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class CreateAdditionalAssignmentsForHITCommand extends $Command<
  CreateAdditionalAssignmentsForHITCommandInput,
  CreateAdditionalAssignmentsForHITCommandOutput,
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

  constructor(readonly input: CreateAdditionalAssignmentsForHITCommandInput) {
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
  ): Handler<CreateAdditionalAssignmentsForHITCommandInput, CreateAdditionalAssignmentsForHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAdditionalAssignmentsForHITCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "CreateAdditionalAssignmentsForHITCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAdditionalAssignmentsForHITRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAdditionalAssignmentsForHITResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateAdditionalAssignmentsForHITCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAdditionalAssignmentsForHITCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAdditionalAssignmentsForHITCommandOutput> {
    return deserializeAws_json1_1CreateAdditionalAssignmentsForHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
