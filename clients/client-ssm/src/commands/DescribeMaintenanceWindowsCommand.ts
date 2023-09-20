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
  DescribeMaintenanceWindowsRequest,
  DescribeMaintenanceWindowsResult,
  DescribeMaintenanceWindowsResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeMaintenanceWindowsCommand, se_DescribeMaintenanceWindowsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMaintenanceWindowsCommand}.
 */
export interface DescribeMaintenanceWindowsCommandInput extends DescribeMaintenanceWindowsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMaintenanceWindowsCommand}.
 */
export interface DescribeMaintenanceWindowsCommandOutput extends DescribeMaintenanceWindowsResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the maintenance windows in an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeMaintenanceWindowsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeMaintenanceWindowsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeMaintenanceWindowsRequest
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
 * const command = new DescribeMaintenanceWindowsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMaintenanceWindowsResult
 * //   WindowIdentities: [ // MaintenanceWindowIdentityList
 * //     { // MaintenanceWindowIdentity
 * //       WindowId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Enabled: true || false,
 * //       Duration: Number("int"),
 * //       Cutoff: Number("int"),
 * //       Schedule: "STRING_VALUE",
 * //       ScheduleTimezone: "STRING_VALUE",
 * //       ScheduleOffset: Number("int"),
 * //       EndDate: "STRING_VALUE",
 * //       StartDate: "STRING_VALUE",
 * //       NextExecutionTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMaintenanceWindowsCommandInput - {@link DescribeMaintenanceWindowsCommandInput}
 * @returns {@link DescribeMaintenanceWindowsCommandOutput}
 * @see {@link DescribeMaintenanceWindowsCommandInput} for command's `input` shape.
 * @see {@link DescribeMaintenanceWindowsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DescribeMaintenanceWindowsCommand extends $Command<
  DescribeMaintenanceWindowsCommandInput,
  DescribeMaintenanceWindowsCommandOutput,
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
  constructor(readonly input: DescribeMaintenanceWindowsCommandInput) {
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
  ): Handler<DescribeMaintenanceWindowsCommandInput, DescribeMaintenanceWindowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMaintenanceWindowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeMaintenanceWindowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeMaintenanceWindowsResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "DescribeMaintenanceWindows",
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
  private serialize(input: DescribeMaintenanceWindowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeMaintenanceWindowsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMaintenanceWindowsCommandOutput> {
    return de_DescribeMaintenanceWindowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
