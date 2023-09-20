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
  DescribeMaintenanceWindowExecutionsRequest,
  DescribeMaintenanceWindowExecutionsResult,
} from "../models/models_0";
import {
  de_DescribeMaintenanceWindowExecutionsCommand,
  se_DescribeMaintenanceWindowExecutionsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMaintenanceWindowExecutionsCommand}.
 */
export interface DescribeMaintenanceWindowExecutionsCommandInput extends DescribeMaintenanceWindowExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMaintenanceWindowExecutionsCommand}.
 */
export interface DescribeMaintenanceWindowExecutionsCommandOutput
  extends DescribeMaintenanceWindowExecutionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the executions of a maintenance window. This includes information about when the
 *    maintenance window was scheduled to be active, and information about tasks registered and run
 *    with the maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowExecutionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowExecutionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeMaintenanceWindowExecutionsRequest
 *   WindowId: "STRING_VALUE", // required
 *   Filters: [ // MaintenanceWindowFilterList
 *     { // MaintenanceWindowFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // MaintenanceWindowFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMaintenanceWindowExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMaintenanceWindowExecutionsResult
 * //   WindowExecutions: [ // MaintenanceWindowExecutionList
 * //     { // MaintenanceWindowExecution
 * //       WindowId: "STRING_VALUE",
 * //       WindowExecutionId: "STRING_VALUE",
 * //       Status: "PENDING" || "IN_PROGRESS" || "SUCCESS" || "FAILED" || "TIMED_OUT" || "CANCELLING" || "CANCELLED" || "SKIPPED_OVERLAPPING",
 * //       StatusDetails: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMaintenanceWindowExecutionsCommandInput - {@link DescribeMaintenanceWindowExecutionsCommandInput}
 * @returns {@link DescribeMaintenanceWindowExecutionsCommandOutput}
 * @see {@link DescribeMaintenanceWindowExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowExecutionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DescribeMaintenanceWindowExecutionsCommand extends $Command<
  DescribeMaintenanceWindowExecutionsCommandInput,
  DescribeMaintenanceWindowExecutionsCommandOutput,
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
  constructor(readonly input: DescribeMaintenanceWindowExecutionsCommandInput) {
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
  ): Handler<DescribeMaintenanceWindowExecutionsCommandInput, DescribeMaintenanceWindowExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMaintenanceWindowExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeMaintenanceWindowExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "DescribeMaintenanceWindowExecutions",
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
    input: DescribeMaintenanceWindowExecutionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeMaintenanceWindowExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMaintenanceWindowExecutionsCommandOutput> {
    return de_DescribeMaintenanceWindowExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
