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
  DescribeInstancePatchStatesForPatchGroupRequest,
  DescribeInstancePatchStatesForPatchGroupResult,
  DescribeInstancePatchStatesForPatchGroupResultFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeInstancePatchStatesForPatchGroupCommand,
  se_DescribeInstancePatchStatesForPatchGroupCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstancePatchStatesForPatchGroupCommand}.
 */
export interface DescribeInstancePatchStatesForPatchGroupCommandInput
  extends DescribeInstancePatchStatesForPatchGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstancePatchStatesForPatchGroupCommand}.
 */
export interface DescribeInstancePatchStatesForPatchGroupCommandOutput
  extends DescribeInstancePatchStatesForPatchGroupResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the high-level patch state for the managed nodes in the specified patch
 *    group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstancePatchStatesForPatchGroupCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstancePatchStatesForPatchGroupCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeInstancePatchStatesForPatchGroupRequest
 *   PatchGroup: "STRING_VALUE", // required
 *   Filters: [ // InstancePatchStateFilterList
 *     { // InstancePatchStateFilter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // InstancePatchStateFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Type: "Equal" || "NotEqual" || "LessThan" || "GreaterThan", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeInstancePatchStatesForPatchGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstancePatchStatesForPatchGroupResult
 * //   InstancePatchStates: [ // InstancePatchStatesList
 * //     { // InstancePatchState
 * //       InstanceId: "STRING_VALUE", // required
 * //       PatchGroup: "STRING_VALUE", // required
 * //       BaselineId: "STRING_VALUE", // required
 * //       SnapshotId: "STRING_VALUE",
 * //       InstallOverrideList: "STRING_VALUE",
 * //       OwnerInformation: "STRING_VALUE",
 * //       InstalledCount: Number("int"),
 * //       InstalledOtherCount: Number("int"),
 * //       InstalledPendingRebootCount: Number("int"),
 * //       InstalledRejectedCount: Number("int"),
 * //       MissingCount: Number("int"),
 * //       FailedCount: Number("int"),
 * //       UnreportedNotApplicableCount: Number("int"),
 * //       NotApplicableCount: Number("int"),
 * //       OperationStartTime: new Date("TIMESTAMP"), // required
 * //       OperationEndTime: new Date("TIMESTAMP"), // required
 * //       Operation: "Scan" || "Install", // required
 * //       LastNoRebootInstallOperationTime: new Date("TIMESTAMP"),
 * //       RebootOption: "RebootIfNeeded" || "NoReboot",
 * //       CriticalNonCompliantCount: Number("int"),
 * //       SecurityNonCompliantCount: Number("int"),
 * //       OtherNonCompliantCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstancePatchStatesForPatchGroupCommandInput - {@link DescribeInstancePatchStatesForPatchGroupCommandInput}
 * @returns {@link DescribeInstancePatchStatesForPatchGroupCommandOutput}
 * @see {@link DescribeInstancePatchStatesForPatchGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancePatchStatesForPatchGroupCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilter} (client fault)
 *  <p>The filter name isn't valid. Verify the you entered the correct name and try again.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DescribeInstancePatchStatesForPatchGroupCommand extends $Command<
  DescribeInstancePatchStatesForPatchGroupCommandInput,
  DescribeInstancePatchStatesForPatchGroupCommandOutput,
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
  constructor(readonly input: DescribeInstancePatchStatesForPatchGroupCommandInput) {
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
    DescribeInstancePatchStatesForPatchGroupCommandInput,
    DescribeInstancePatchStatesForPatchGroupCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeInstancePatchStatesForPatchGroupCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeInstancePatchStatesForPatchGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeInstancePatchStatesForPatchGroupResultFilterSensitiveLog,
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
    input: DescribeInstancePatchStatesForPatchGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeInstancePatchStatesForPatchGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstancePatchStatesForPatchGroupCommandOutput> {
    return de_DescribeInstancePatchStatesForPatchGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
