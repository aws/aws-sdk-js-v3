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

import {
  GetDeployablePatchSnapshotForInstanceRequest,
  GetDeployablePatchSnapshotForInstanceRequestFilterSensitiveLog,
  GetDeployablePatchSnapshotForInstanceResult,
} from "../models/models_1";
import {
  de_GetDeployablePatchSnapshotForInstanceCommand,
  se_GetDeployablePatchSnapshotForInstanceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeployablePatchSnapshotForInstanceCommand}.
 */
export interface GetDeployablePatchSnapshotForInstanceCommandInput
  extends GetDeployablePatchSnapshotForInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetDeployablePatchSnapshotForInstanceCommand}.
 */
export interface GetDeployablePatchSnapshotForInstanceCommandOutput
  extends GetDeployablePatchSnapshotForInstanceResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the current snapshot for the patch baseline the managed node uses. This API is
 *    primarily used by the <code>AWS-RunPatchBaseline</code> Systems Manager document (SSM document).</p>
 *          <note>
 *             <p>If you run the command locally, such as with the Command Line Interface (CLI), the system attempts to use your local Amazon Web Services credentials and the operation fails. To avoid
 *     this, you can run the command in the Amazon Web Services Systems Manager console. Use Run Command, a capability of
 *     Amazon Web Services Systems Manager, with an SSM document that enables you to target a managed node with a script or
 *     command. For example, run the command using the <code>AWS-RunShellScript</code> document or the
 *      <code>AWS-RunPowerShellScript</code> document.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetDeployablePatchSnapshotForInstanceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetDeployablePatchSnapshotForInstanceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetDeployablePatchSnapshotForInstanceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   SnapshotId: "STRING_VALUE", // required
 *   BaselineOverride: { // BaselineOverride
 *     OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 *     GlobalFilters: { // PatchFilterGroup
 *       PatchFilters: [ // PatchFilterList // required
 *         { // PatchFilter
 *           Key: "ARCH" || "ADVISORY_ID" || "BUGZILLA_ID" || "PATCH_SET" || "PRODUCT" || "PRODUCT_FAMILY" || "CLASSIFICATION" || "CVE_ID" || "EPOCH" || "MSRC_SEVERITY" || "NAME" || "PATCH_ID" || "SECTION" || "PRIORITY" || "REPOSITORY" || "RELEASE" || "SEVERITY" || "SECURITY" || "VERSION", // required
 *           Values: [ // PatchFilterValueList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *     ApprovalRules: { // PatchRuleGroup
 *       PatchRules: [ // PatchRuleList // required
 *         { // PatchRule
 *           PatchFilterGroup: {
 *             PatchFilters: [ // required
 *               {
 *                 Key: "ARCH" || "ADVISORY_ID" || "BUGZILLA_ID" || "PATCH_SET" || "PRODUCT" || "PRODUCT_FAMILY" || "CLASSIFICATION" || "CVE_ID" || "EPOCH" || "MSRC_SEVERITY" || "NAME" || "PATCH_ID" || "SECTION" || "PRIORITY" || "REPOSITORY" || "RELEASE" || "SEVERITY" || "SECURITY" || "VERSION", // required
 *                 Values: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             ],
 *           },
 *           ComplianceLevel: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 *           ApproveAfterDays: Number("int"),
 *           ApproveUntilDate: "STRING_VALUE",
 *           EnableNonSecurity: true || false,
 *         },
 *       ],
 *     },
 *     ApprovedPatches: [ // PatchIdList
 *       "STRING_VALUE",
 *     ],
 *     ApprovedPatchesComplianceLevel: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 *     RejectedPatches: [
 *       "STRING_VALUE",
 *     ],
 *     RejectedPatchesAction: "ALLOW_AS_DEPENDENCY" || "BLOCK",
 *     ApprovedPatchesEnableNonSecurity: true || false,
 *     Sources: [ // PatchSourceList
 *       { // PatchSource
 *         Name: "STRING_VALUE", // required
 *         Products: [ // PatchSourceProductList // required
 *           "STRING_VALUE",
 *         ],
 *         Configuration: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new GetDeployablePatchSnapshotForInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetDeployablePatchSnapshotForInstanceResult
 * //   InstanceId: "STRING_VALUE",
 * //   SnapshotId: "STRING_VALUE",
 * //   SnapshotDownloadUrl: "STRING_VALUE",
 * //   Product: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDeployablePatchSnapshotForInstanceCommandInput - {@link GetDeployablePatchSnapshotForInstanceCommandInput}
 * @returns {@link GetDeployablePatchSnapshotForInstanceCommandOutput}
 * @see {@link GetDeployablePatchSnapshotForInstanceCommandInput} for command's `input` shape.
 * @see {@link GetDeployablePatchSnapshotForInstanceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link UnsupportedFeatureRequiredException} (client fault)
 *  <p>Patching for applications released by Microsoft is only available on EC2 instances and
 *    advanced instances. To patch applications released by Microsoft on on-premises servers and VMs,
 *    you must enable advanced instances. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances-advanced.html">Enabling
 *     the advanced-instances tier</a> in the <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *
 * @throws {@link UnsupportedOperatingSystem} (client fault)
 *  <p>The operating systems you specified isn't supported, or the operation isn't supported for
 *    the operating system.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class GetDeployablePatchSnapshotForInstanceCommand extends $Command<
  GetDeployablePatchSnapshotForInstanceCommandInput,
  GetDeployablePatchSnapshotForInstanceCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: GetDeployablePatchSnapshotForInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDeployablePatchSnapshotForInstanceCommandInput, GetDeployablePatchSnapshotForInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeployablePatchSnapshotForInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetDeployablePatchSnapshotForInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDeployablePatchSnapshotForInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "GetDeployablePatchSnapshotForInstance",
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
  private serialize(
    input: GetDeployablePatchSnapshotForInstanceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetDeployablePatchSnapshotForInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDeployablePatchSnapshotForInstanceCommandOutput> {
    return de_GetDeployablePatchSnapshotForInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
