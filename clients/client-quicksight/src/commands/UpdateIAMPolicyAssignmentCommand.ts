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

import { UpdateIAMPolicyAssignmentRequest, UpdateIAMPolicyAssignmentResponse } from "../models/models_4";
import { de_UpdateIAMPolicyAssignmentCommand, se_UpdateIAMPolicyAssignmentCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateIAMPolicyAssignmentCommand}.
 */
export interface UpdateIAMPolicyAssignmentCommandInput extends UpdateIAMPolicyAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIAMPolicyAssignmentCommand}.
 */
export interface UpdateIAMPolicyAssignmentCommandOutput extends UpdateIAMPolicyAssignmentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing IAM policy assignment. This operation updates only
 * 			the optional parameter or parameters that are specified in the request. This overwrites
 * 			all of the users included in <code>Identities</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateIAMPolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateIAMPolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdateIAMPolicyAssignmentRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AssignmentName: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 *   AssignmentStatus: "ENABLED" || "DRAFT" || "DISABLED",
 *   PolicyArn: "STRING_VALUE",
 *   Identities: { // IdentityMap
 *     "<keys>": [ // IdentityNameList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateIAMPolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIAMPolicyAssignmentResponse
 * //   AssignmentName: "STRING_VALUE",
 * //   AssignmentId: "STRING_VALUE",
 * //   PolicyArn: "STRING_VALUE",
 * //   Identities: { // IdentityMap
 * //     "<keys>": [ // IdentityNameList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   AssignmentStatus: "ENABLED" || "DRAFT" || "DISABLED",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateIAMPolicyAssignmentCommandInput - {@link UpdateIAMPolicyAssignmentCommandInput}
 * @returns {@link UpdateIAMPolicyAssignmentCommandOutput}
 * @see {@link UpdateIAMPolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link UpdateIAMPolicyAssignmentCommandOutput} for command's `response` shape.
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
export class UpdateIAMPolicyAssignmentCommand extends $Command<
  UpdateIAMPolicyAssignmentCommandInput,
  UpdateIAMPolicyAssignmentCommandOutput,
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
  constructor(readonly input: UpdateIAMPolicyAssignmentCommandInput) {
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
  ): Handler<UpdateIAMPolicyAssignmentCommandInput, UpdateIAMPolicyAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateIAMPolicyAssignmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdateIAMPolicyAssignmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "QuickSight_20180401",
        operation: "UpdateIAMPolicyAssignment",
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
  private serialize(input: UpdateIAMPolicyAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateIAMPolicyAssignmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateIAMPolicyAssignmentCommandOutput> {
    return de_UpdateIAMPolicyAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
