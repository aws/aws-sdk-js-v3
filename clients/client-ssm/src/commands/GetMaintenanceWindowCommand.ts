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
  GetMaintenanceWindowRequest,
  GetMaintenanceWindowResult,
  GetMaintenanceWindowResultFilterSensitiveLog,
} from "../models/models_1";
import { de_GetMaintenanceWindowCommand, se_GetMaintenanceWindowCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMaintenanceWindowCommand}.
 */
export interface GetMaintenanceWindowCommandInput extends GetMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link GetMaintenanceWindowCommand}.
 */
export interface GetMaintenanceWindowCommandOutput extends GetMaintenanceWindowResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetMaintenanceWindowRequest
 *   WindowId: "STRING_VALUE", // required
 * };
 * const command = new GetMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // GetMaintenanceWindowResult
 * //   WindowId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   StartDate: "STRING_VALUE",
 * //   EndDate: "STRING_VALUE",
 * //   Schedule: "STRING_VALUE",
 * //   ScheduleTimezone: "STRING_VALUE",
 * //   ScheduleOffset: Number("int"),
 * //   NextExecutionTime: "STRING_VALUE",
 * //   Duration: Number("int"),
 * //   Cutoff: Number("int"),
 * //   AllowUnassociatedTargets: true || false,
 * //   Enabled: true || false,
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   ModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetMaintenanceWindowCommandInput - {@link GetMaintenanceWindowCommandInput}
 * @returns {@link GetMaintenanceWindowCommandOutput}
 * @see {@link GetMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link GetMaintenanceWindowCommandOutput} for command's `response` shape.
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
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class GetMaintenanceWindowCommand extends $Command<
  GetMaintenanceWindowCommandInput,
  GetMaintenanceWindowCommandOutput,
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
  constructor(readonly input: GetMaintenanceWindowCommandInput) {
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
  ): Handler<GetMaintenanceWindowCommandInput, GetMaintenanceWindowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMaintenanceWindowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetMaintenanceWindowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetMaintenanceWindowResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "GetMaintenanceWindow",
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
  private serialize(input: GetMaintenanceWindowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMaintenanceWindowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMaintenanceWindowCommandOutput> {
    return de_GetMaintenanceWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
