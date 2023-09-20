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
  DescribeEffectivePatchesForPatchBaselineRequest,
  DescribeEffectivePatchesForPatchBaselineResult,
} from "../models/models_0";
import {
  de_DescribeEffectivePatchesForPatchBaselineCommand,
  se_DescribeEffectivePatchesForPatchBaselineCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEffectivePatchesForPatchBaselineCommand}.
 */
export interface DescribeEffectivePatchesForPatchBaselineCommandInput
  extends DescribeEffectivePatchesForPatchBaselineRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEffectivePatchesForPatchBaselineCommand}.
 */
export interface DescribeEffectivePatchesForPatchBaselineCommandOutput
  extends DescribeEffectivePatchesForPatchBaselineResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the current effective patches (the patch and the approval state) for the specified
 *    patch baseline. Applies to patch baselines for Windows only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeEffectivePatchesForPatchBaselineCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeEffectivePatchesForPatchBaselineCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeEffectivePatchesForPatchBaselineRequest
 *   BaselineId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeEffectivePatchesForPatchBaselineCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEffectivePatchesForPatchBaselineResult
 * //   EffectivePatches: [ // EffectivePatchList
 * //     { // EffectivePatch
 * //       Patch: { // Patch
 * //         Id: "STRING_VALUE",
 * //         ReleaseDate: new Date("TIMESTAMP"),
 * //         Title: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         ContentUrl: "STRING_VALUE",
 * //         Vendor: "STRING_VALUE",
 * //         ProductFamily: "STRING_VALUE",
 * //         Product: "STRING_VALUE",
 * //         Classification: "STRING_VALUE",
 * //         MsrcSeverity: "STRING_VALUE",
 * //         KbNumber: "STRING_VALUE",
 * //         MsrcNumber: "STRING_VALUE",
 * //         Language: "STRING_VALUE",
 * //         AdvisoryIds: [ // PatchAdvisoryIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         BugzillaIds: [ // PatchBugzillaIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         CVEIds: [ // PatchCVEIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         Name: "STRING_VALUE",
 * //         Epoch: Number("int"),
 * //         Version: "STRING_VALUE",
 * //         Release: "STRING_VALUE",
 * //         Arch: "STRING_VALUE",
 * //         Severity: "STRING_VALUE",
 * //         Repository: "STRING_VALUE",
 * //       },
 * //       PatchStatus: { // PatchStatus
 * //         DeploymentStatus: "APPROVED" || "PENDING_APPROVAL" || "EXPLICIT_APPROVED" || "EXPLICIT_REJECTED",
 * //         ComplianceLevel: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED",
 * //         ApprovalDate: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEffectivePatchesForPatchBaselineCommandInput - {@link DescribeEffectivePatchesForPatchBaselineCommandInput}
 * @returns {@link DescribeEffectivePatchesForPatchBaselineCommandOutput}
 * @see {@link DescribeEffectivePatchesForPatchBaselineCommandInput} for command's `input` shape.
 * @see {@link DescribeEffectivePatchesForPatchBaselineCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedOperatingSystem} (client fault)
 *  <p>The operating systems you specified isn't supported, or the operation isn't supported for
 *    the operating system.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DescribeEffectivePatchesForPatchBaselineCommand extends $Command<
  DescribeEffectivePatchesForPatchBaselineCommandInput,
  DescribeEffectivePatchesForPatchBaselineCommandOutput,
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
  constructor(readonly input: DescribeEffectivePatchesForPatchBaselineCommandInput) {
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
  ): Handler<
    DescribeEffectivePatchesForPatchBaselineCommandInput,
    DescribeEffectivePatchesForPatchBaselineCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeEffectivePatchesForPatchBaselineCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeEffectivePatchesForPatchBaselineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "DescribeEffectivePatchesForPatchBaseline",
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
    input: DescribeEffectivePatchesForPatchBaselineCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeEffectivePatchesForPatchBaselineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput> {
    return de_DescribeEffectivePatchesForPatchBaselineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
