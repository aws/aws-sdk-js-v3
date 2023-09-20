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
  GetPatchBaselineRequest,
  GetPatchBaselineResult,
  GetPatchBaselineResultFilterSensitiveLog,
} from "../models/models_1";
import { de_GetPatchBaselineCommand, se_GetPatchBaselineCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPatchBaselineCommand}.
 */
export interface GetPatchBaselineCommandInput extends GetPatchBaselineRequest {}
/**
 * @public
 *
 * The output of {@link GetPatchBaselineCommand}.
 */
export interface GetPatchBaselineCommandOutput extends GetPatchBaselineResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about a patch baseline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetPatchBaselineRequest
 *   BaselineId: "STRING_VALUE", // required
 * };
 * const command = new GetPatchBaselineCommand(input);
 * const response = await client.send(command);
 * // { // GetPatchBaselineResult
 * //   BaselineId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   OperatingSystem: "WINDOWS" || "AMAZON_LINUX" || "AMAZON_LINUX_2" || "AMAZON_LINUX_2022" || "UBUNTU" || "REDHAT_ENTERPRISE_LINUX" || "SUSE" || "CENTOS" || "ORACLE_LINUX" || "DEBIAN" || "MACOS" || "RASPBIAN" || "ROCKY_LINUX" || "ALMA_LINUX" || "AMAZON_LINUX_2023",
 * //   GlobalFilters: { // PatchFilterGroup
 * //     PatchFilters: [ // PatchFilterList // required
 * //       { // PatchFilter
 * //         Key: "ARCH" || "ADVISORY_ID" || "BUGZILLA_ID" || "PATCH_SET" || "PRODUCT" || "PRODUCT_FAMILY" || "CLASSIFICATION" || "CVE_ID" || "EPOCH" || "MSRC_SEVERITY" || "NAME" || "PATCH_ID" || "SECTION" || "PRIORITY" || "REPOSITORY" || "RELEASE" || "SEVERITY" || "SECURITY" || "VERSION", // required
 * //         Values: [ // PatchFilterValueList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   ApprovalRules: { // PatchRuleGroup
 * //     PatchRules: [ // PatchRuleList // required
 * //       { // PatchRule
 * //         PatchFilterGroup: {
 * //           PatchFilters: [ // required
 * //             {
 * //               Key: "ARCH" || "ADVISORY_ID" || "BUGZILLA_ID" || "PATCH_SET" || "PRODUCT" || "PRODUCT_FAMILY" || "CLASSIFICATION" || "CVE_ID" || "EPOCH" || "MSRC_SEVERITY" || "NAME" || "PATCH_ID" || "SECTION" || "PRIORITY" || "REPOSITORY" || "RELEASE" || "SEVERITY" || "SECURITY" || "VERSION", // required
 * //               Values: [ // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //         ComplianceLevel: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 * //         ApproveAfterDays: Number("int"),
 * //         ApproveUntilDate: "STRING_VALUE",
 * //         EnableNonSecurity: true || false,
 * //       },
 * //     ],
 * //   },
 * //   ApprovedPatches: [ // PatchIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   ApprovedPatchesComplianceLevel: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 * //   ApprovedPatchesEnableNonSecurity: true || false,
 * //   RejectedPatches: [
 * //     "STRING_VALUE",
 * //   ],
 * //   RejectedPatchesAction: "ALLOW_AS_DEPENDENCY" || "BLOCK",
 * //   PatchGroups: [ // PatchGroupList
 * //     "STRING_VALUE",
 * //   ],
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   ModifiedDate: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   Sources: [ // PatchSourceList
 * //     { // PatchSource
 * //       Name: "STRING_VALUE", // required
 * //       Products: [ // PatchSourceProductList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Configuration: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPatchBaselineCommandInput - {@link GetPatchBaselineCommandInput}
 * @returns {@link GetPatchBaselineCommandOutput}
 * @see {@link GetPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link GetPatchBaselineCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidResourceId} (client fault)
 *  <p>The resource ID isn't valid. Verify that you entered the correct ID and try again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class GetPatchBaselineCommand extends $Command<
  GetPatchBaselineCommandInput,
  GetPatchBaselineCommandOutput,
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
  constructor(readonly input: GetPatchBaselineCommandInput) {
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
  ): Handler<GetPatchBaselineCommandInput, GetPatchBaselineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPatchBaselineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetPatchBaselineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetPatchBaselineResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "GetPatchBaseline",
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
  private serialize(input: GetPatchBaselineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPatchBaselineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPatchBaselineCommandOutput> {
    return de_GetPatchBaselineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
