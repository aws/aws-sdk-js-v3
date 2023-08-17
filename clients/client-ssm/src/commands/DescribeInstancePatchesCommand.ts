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

import { DescribeInstancePatchesRequest, DescribeInstancePatchesResult } from "../models/models_0";
import { de_DescribeInstancePatchesCommand, se_DescribeInstancePatchesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstancePatchesCommand}.
 */
export interface DescribeInstancePatchesCommandInput extends DescribeInstancePatchesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstancePatchesCommand}.
 */
export interface DescribeInstancePatchesCommandOutput extends DescribeInstancePatchesResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about the patches on the specified managed node and their state
 *    relative to the patch baseline being used for the node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstancePatchesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstancePatchesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeInstancePatchesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Filters: [ // PatchOrchestratorFilterList
 *     { // PatchOrchestratorFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // PatchOrchestratorFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeInstancePatchesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstancePatchesResult
 * //   Patches: [ // PatchComplianceDataList
 * //     { // PatchComplianceData
 * //       Title: "STRING_VALUE", // required
 * //       KBId: "STRING_VALUE", // required
 * //       Classification: "STRING_VALUE", // required
 * //       Severity: "STRING_VALUE", // required
 * //       State: "INSTALLED" || "INSTALLED_OTHER" || "INSTALLED_PENDING_REBOOT" || "INSTALLED_REJECTED" || "MISSING" || "NOT_APPLICABLE" || "FAILED", // required
 * //       InstalledTime: new Date("TIMESTAMP"), // required
 * //       CVEIds: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstancePatchesCommandInput - {@link DescribeInstancePatchesCommandInput}
 * @returns {@link DescribeInstancePatchesCommandOutput}
 * @see {@link DescribeInstancePatchesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancePatchesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilter} (client fault)
 *  <p>The filter name isn't valid. Verify the you entered the correct name and try again.</p>
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *  <p>The following problems can cause this exception:</p>
 *          <ul>
 *             <li>
 *                <p>You don't have permission to access the managed node.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Systems Manager Agent(SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The managed node isn't in valid state. Valid states are: <code>Running</code>,
 *       <code>Pending</code>, <code>Stopped</code>, and <code>Stopping</code>. Invalid states are:
 *       <code>Shutting-down</code> and <code>Terminated</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DescribeInstancePatchesCommand extends $Command<
  DescribeInstancePatchesCommandInput,
  DescribeInstancePatchesCommandOutput,
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
  constructor(readonly input: DescribeInstancePatchesCommandInput) {
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
  ): Handler<DescribeInstancePatchesCommandInput, DescribeInstancePatchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstancePatchesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeInstancePatchesCommand";
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
  private serialize(input: DescribeInstancePatchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInstancePatchesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInstancePatchesCommandOutput> {
    return de_DescribeInstancePatchesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
