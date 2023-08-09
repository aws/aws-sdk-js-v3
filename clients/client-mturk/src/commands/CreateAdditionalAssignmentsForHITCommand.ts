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

import {
  CreateAdditionalAssignmentsForHITRequest,
  CreateAdditionalAssignmentsForHITResponse,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  de_CreateAdditionalAssignmentsForHITCommand,
  se_CreateAdditionalAssignmentsForHITCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAdditionalAssignmentsForHITCommand}.
 */
export interface CreateAdditionalAssignmentsForHITCommandInput extends CreateAdditionalAssignmentsForHITRequest {}
/**
 * @public
 *
 * The output of {@link CreateAdditionalAssignmentsForHITCommand}.
 */
export interface CreateAdditionalAssignmentsForHITCommandOutput
  extends CreateAdditionalAssignmentsForHITResponse,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // CreateAdditionalAssignmentsForHITRequest
 *   HITId: "STRING_VALUE", // required
 *   NumberOfAdditionalAssignments: Number("int"), // required
 *   UniqueRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateAdditionalAssignmentsForHITCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateAdditionalAssignmentsForHITCommandInput - {@link CreateAdditionalAssignmentsForHITCommandInput}
 * @returns {@link CreateAdditionalAssignmentsForHITCommandOutput}
 * @see {@link CreateAdditionalAssignmentsForHITCommandInput} for command's `input` shape.
 * @see {@link CreateAdditionalAssignmentsForHITCommandOutput} for command's `response` shape.
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

  /**
   * @public
   */
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
  private serialize(
    input: CreateAdditionalAssignmentsForHITCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateAdditionalAssignmentsForHITCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAdditionalAssignmentsForHITCommandOutput> {
    return de_CreateAdditionalAssignmentsForHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
