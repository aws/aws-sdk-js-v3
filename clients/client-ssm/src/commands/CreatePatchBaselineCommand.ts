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
  CreatePatchBaselineRequest,
  CreatePatchBaselineRequestFilterSensitiveLog,
  CreatePatchBaselineResult,
} from "../models/models_0";
import { de_CreatePatchBaselineCommand, se_CreatePatchBaselineCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePatchBaselineCommand}.
 */
export interface CreatePatchBaselineCommandInput extends CreatePatchBaselineRequest {}
/**
 * @public
 *
 * The output of {@link CreatePatchBaselineCommand}.
 */
export interface CreatePatchBaselineCommandOutput extends CreatePatchBaselineResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a patch baseline.</p>
 *          <note>
 *             <p>For information about valid key-value pairs in <code>PatchFilters</code> for each supported
 *     operating system type, see <a>PatchFilter</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreatePatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreatePatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // CreatePatchBaselineRequest
 *   OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 *   Name: "STRING_VALUE", // required
 *   GlobalFilters: { // PatchFilterGroup
 *     PatchFilters: [ // PatchFilterList // required
 *       { // PatchFilter
 *         Key: "ARCH" || "ADVISORY_ID" || "BUGZILLA_ID" || "PATCH_SET" || "PRODUCT" || "PRODUCT_FAMILY" || "CLASSIFICATION" || "CVE_ID" || "EPOCH" || "MSRC_SEVERITY" || "NAME" || "PATCH_ID" || "SECTION" || "PRIORITY" || "REPOSITORY" || "RELEASE" || "SEVERITY" || "SECURITY" || "VERSION", // required
 *         Values: [ // PatchFilterValueList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   ApprovalRules: { // PatchRuleGroup
 *     PatchRules: [ // PatchRuleList // required
 *       { // PatchRule
 *         PatchFilterGroup: {
 *           PatchFilters: [ // required
 *             {
 *               Key: "ARCH" || "ADVISORY_ID" || "BUGZILLA_ID" || "PATCH_SET" || "PRODUCT" || "PRODUCT_FAMILY" || "CLASSIFICATION" || "CVE_ID" || "EPOCH" || "MSRC_SEVERITY" || "NAME" || "PATCH_ID" || "SECTION" || "PRIORITY" || "REPOSITORY" || "RELEASE" || "SEVERITY" || "SECURITY" || "VERSION", // required
 *               Values: [ // required
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           ],
 *         },
 *         ComplianceLevel: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 *         ApproveAfterDays: Number("int"),
 *         ApproveUntilDate: "STRING_VALUE",
 *         EnableNonSecurity: true || false,
 *       },
 *     ],
 *   },
 *   ApprovedPatches: [ // PatchIdList
 *     "STRING_VALUE",
 *   ],
 *   ApprovedPatchesComplianceLevel: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 *   ApprovedPatchesEnableNonSecurity: true || false,
 *   RejectedPatches: [
 *     "STRING_VALUE",
 *   ],
 *   RejectedPatchesAction: "ALLOW_AS_DEPENDENCY" || "BLOCK",
 *   Description: "STRING_VALUE",
 *   Sources: [ // PatchSourceList
 *     { // PatchSource
 *       Name: "STRING_VALUE", // required
 *       Products: [ // PatchSourceProductList // required
 *         "STRING_VALUE",
 *       ],
 *       Configuration: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreatePatchBaselineCommand(input);
 * const response = await client.send(command);
 * // { // CreatePatchBaselineResult
 * //   BaselineId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePatchBaselineCommandInput - {@link CreatePatchBaselineCommandInput}
 * @returns {@link CreatePatchBaselineCommandOutput}
 * @see {@link CreatePatchBaselineCommandInput} for command's `input` shape.
 * @see {@link CreatePatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link IdempotentParameterMismatch} (client fault)
 *  <p>Error returned when an idempotent operation is retried and the parameters don't match the
 *    original call to the API with the same idempotency token. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Error returned when the caller has exceeded the default resource quotas. For example, too
 *    many maintenance windows or patch baselines have been created.</p>
 *          <p>For information about resource quotas in Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class CreatePatchBaselineCommand extends $Command<
  CreatePatchBaselineCommandInput,
  CreatePatchBaselineCommandOutput,
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
  constructor(readonly input: CreatePatchBaselineCommandInput) {
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
  ): Handler<CreatePatchBaselineCommandInput, CreatePatchBaselineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePatchBaselineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreatePatchBaselineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePatchBaselineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "CreatePatchBaseline",
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
  private serialize(input: CreatePatchBaselineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePatchBaselineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePatchBaselineCommandOutput> {
    return de_CreatePatchBaselineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
