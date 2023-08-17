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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { SimulateCustomPolicyRequest, SimulatePolicyResponse } from "../models/models_0";
import { de_SimulateCustomPolicyCommand, se_SimulateCustomPolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SimulateCustomPolicyCommand}.
 */
export interface SimulateCustomPolicyCommandInput extends SimulateCustomPolicyRequest {}
/**
 * @public
 *
 * The output of {@link SimulateCustomPolicyCommand}.
 */
export interface SimulateCustomPolicyCommandOutput extends SimulatePolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Simulate how a set of IAM policies and optionally a resource-based policy works with
 *             a list of API operations and Amazon Web Services resources to determine the policies' effective
 *             permissions. The policies are provided as strings.</p>
 *          <p>The simulation does not perform the API operations; it only checks the authorization
 *             to determine if the simulated policies allow or deny the operations. You can simulate
 *             resources that don't exist in your account.</p>
 *          <p>If you want to simulate existing policies that are attached to an IAM user, group,
 *             or role, use <a>SimulatePrincipalPolicy</a> instead.</p>
 *          <p>Context keys are variables that are maintained by Amazon Web Services and its services and which
 *             provide details about the context of an API query request. You can use the
 *                 <code>Condition</code> element of an IAM policy to evaluate context keys. To get
 *             the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForCustomPolicy</a>.</p>
 *          <p>If the output is long, you can use <code>MaxItems</code> and <code>Marker</code>
 *             parameters to paginate the results.</p>
 *          <note>
 *             <p>The IAM policy simulator evaluates statements in the identity-based policy and
 *                 the inputs that you provide during simulation. The policy simulator results can
 *                 differ from your live Amazon Web Services environment. We recommend that you check your policies
 *                 against your live Amazon Web Services environment after testing using the policy simulator to
 *                 confirm that you have the desired results. For more information about using the
 *                 policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM
 *                     policies with the IAM policy simulator </a>in the
 *                     <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, SimulateCustomPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, SimulateCustomPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // SimulateCustomPolicyRequest
 *   PolicyInputList: [ // SimulationPolicyListType // required
 *     "STRING_VALUE",
 *   ],
 *   PermissionsBoundaryPolicyInputList: [
 *     "STRING_VALUE",
 *   ],
 *   ActionNames: [ // ActionNameListType // required
 *     "STRING_VALUE",
 *   ],
 *   ResourceArns: [ // ResourceNameListType
 *     "STRING_VALUE",
 *   ],
 *   ResourcePolicy: "STRING_VALUE",
 *   ResourceOwner: "STRING_VALUE",
 *   CallerArn: "STRING_VALUE",
 *   ContextEntries: [ // ContextEntryListType
 *     { // ContextEntry
 *       ContextKeyName: "STRING_VALUE",
 *       ContextKeyValues: [ // ContextKeyValueListType
 *         "STRING_VALUE",
 *       ],
 *       ContextKeyType: "string" || "stringList" || "numeric" || "numericList" || "boolean" || "booleanList" || "ip" || "ipList" || "binary" || "binaryList" || "date" || "dateList",
 *     },
 *   ],
 *   ResourceHandlingOption: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new SimulateCustomPolicyCommand(input);
 * const response = await client.send(command);
 * // { // SimulatePolicyResponse
 * //   EvaluationResults: [ // EvaluationResultsListType
 * //     { // EvaluationResult
 * //       EvalActionName: "STRING_VALUE", // required
 * //       EvalResourceName: "STRING_VALUE",
 * //       EvalDecision: "allowed" || "explicitDeny" || "implicitDeny", // required
 * //       MatchedStatements: [ // StatementListType
 * //         { // Statement
 * //           SourcePolicyId: "STRING_VALUE",
 * //           SourcePolicyType: "user" || "group" || "role" || "aws-managed" || "user-managed" || "resource" || "none",
 * //           StartPosition: { // Position
 * //             Line: Number("int"),
 * //             Column: Number("int"),
 * //           },
 * //           EndPosition: {
 * //             Line: Number("int"),
 * //             Column: Number("int"),
 * //           },
 * //         },
 * //       ],
 * //       MissingContextValues: [ // ContextKeyNamesResultListType
 * //         "STRING_VALUE",
 * //       ],
 * //       OrganizationsDecisionDetail: { // OrganizationsDecisionDetail
 * //         AllowedByOrganizations: true || false,
 * //       },
 * //       PermissionsBoundaryDecisionDetail: { // PermissionsBoundaryDecisionDetail
 * //         AllowedByPermissionsBoundary: true || false,
 * //       },
 * //       EvalDecisionDetails: { // EvalDecisionDetailsType
 * //         "<keys>": "allowed" || "explicitDeny" || "implicitDeny",
 * //       },
 * //       ResourceSpecificResults: [ // ResourceSpecificResultListType
 * //         { // ResourceSpecificResult
 * //           EvalResourceName: "STRING_VALUE", // required
 * //           EvalResourceDecision: "allowed" || "explicitDeny" || "implicitDeny", // required
 * //           MatchedStatements: [
 * //             {
 * //               SourcePolicyId: "STRING_VALUE",
 * //               SourcePolicyType: "user" || "group" || "role" || "aws-managed" || "user-managed" || "resource" || "none",
 * //               StartPosition: {
 * //                 Line: Number("int"),
 * //                 Column: Number("int"),
 * //               },
 * //               EndPosition: {
 * //                 Line: Number("int"),
 * //                 Column: Number("int"),
 * //               },
 * //             },
 * //           ],
 * //           MissingContextValues: [
 * //             "STRING_VALUE",
 * //           ],
 * //           EvalDecisionDetails: {
 * //             "<keys>": "allowed" || "explicitDeny" || "implicitDeny",
 * //           },
 * //           PermissionsBoundaryDecisionDetail: {
 * //             AllowedByPermissionsBoundary: true || false,
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SimulateCustomPolicyCommandInput - {@link SimulateCustomPolicyCommandInput}
 * @returns {@link SimulateCustomPolicyCommandOutput}
 * @see {@link SimulateCustomPolicyCommandInput} for command's `input` shape.
 * @see {@link SimulateCustomPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link PolicyEvaluationException} (server fault)
 *  <p>The request failed because a provided policy could not be successfully evaluated. An
 *       additional detailed message indicates the source of the failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 */
export class SimulateCustomPolicyCommand extends $Command<
  SimulateCustomPolicyCommandInput,
  SimulateCustomPolicyCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: SimulateCustomPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SimulateCustomPolicyCommandInput, SimulateCustomPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SimulateCustomPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "SimulateCustomPolicyCommand";
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
  private serialize(input: SimulateCustomPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SimulateCustomPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SimulateCustomPolicyCommandOutput> {
    return de_SimulateCustomPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
