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

import { ListIAMPolicyAssignmentsForUserRequest, ListIAMPolicyAssignmentsForUserResponse } from "../models/models_3";
import {
  de_ListIAMPolicyAssignmentsForUserCommand,
  se_ListIAMPolicyAssignmentsForUserCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 *
 * The input for {@link ListIAMPolicyAssignmentsForUserCommand}.
 */
export interface ListIAMPolicyAssignmentsForUserCommandInput extends ListIAMPolicyAssignmentsForUserRequest {}
/**
 * @public
 *
 * The output of {@link ListIAMPolicyAssignmentsForUserCommand}.
 */
export interface ListIAMPolicyAssignmentsForUserCommandOutput
  extends ListIAMPolicyAssignmentsForUserResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all of
 * 			the IAM policy assignments, including the Amazon
 * 			Resource Names
 * 			(ARNs),
 * 			for the IAM policies assigned to the specified user and
 * 			group,
 * 			or groups that the user belongs to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListIAMPolicyAssignmentsForUserCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListIAMPolicyAssignmentsForUserCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // ListIAMPolicyAssignmentsForUserRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new ListIAMPolicyAssignmentsForUserCommand(input);
 * const response = await client.send(command);
 * // { // ListIAMPolicyAssignmentsForUserResponse
 * //   ActiveAssignments: [ // ActiveIAMPolicyAssignmentList
 * //     { // ActiveIAMPolicyAssignment
 * //       AssignmentName: "STRING_VALUE",
 * //       PolicyArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListIAMPolicyAssignmentsForUserCommandInput - {@link ListIAMPolicyAssignmentsForUserCommandInput}
 * @returns {@link ListIAMPolicyAssignmentsForUserCommandOutput}
 * @see {@link ListIAMPolicyAssignmentsForUserCommandInput} for command's `input` shape.
 * @see {@link ListIAMPolicyAssignmentsForUserCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConcurrentUpdatingException} (server fault)
 *  <p>A resource is already in a state that indicates an operation is happening that must complete
 * 			before a new update can be applied.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class ListIAMPolicyAssignmentsForUserCommand extends $Command<
  ListIAMPolicyAssignmentsForUserCommandInput,
  ListIAMPolicyAssignmentsForUserCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: ListIAMPolicyAssignmentsForUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListIAMPolicyAssignmentsForUserCommandInput, ListIAMPolicyAssignmentsForUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListIAMPolicyAssignmentsForUserCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "ListIAMPolicyAssignmentsForUserCommand";
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
    input: ListIAMPolicyAssignmentsForUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListIAMPolicyAssignmentsForUserCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListIAMPolicyAssignmentsForUserCommandOutput> {
    return de_ListIAMPolicyAssignmentsForUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
