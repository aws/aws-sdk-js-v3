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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateScheduledAuditRequest, UpdateScheduledAuditResponse } from "../models/models_2";
import { de_UpdateScheduledAuditCommand, se_UpdateScheduledAuditCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateScheduledAuditCommand}.
 */
export interface UpdateScheduledAuditCommandInput extends UpdateScheduledAuditRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScheduledAuditCommand}.
 */
export interface UpdateScheduledAuditCommandOutput extends UpdateScheduledAuditResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a scheduled audit, including which checks are performed and
 *           how often the audit takes place.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateScheduledAudit</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdateScheduledAuditRequest
 *   frequency: "DAILY" || "WEEKLY" || "BIWEEKLY" || "MONTHLY",
 *   dayOfMonth: "STRING_VALUE",
 *   dayOfWeek: "SUN" || "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT",
 *   targetCheckNames: [ // TargetAuditCheckNames
 *     "STRING_VALUE",
 *   ],
 *   scheduledAuditName: "STRING_VALUE", // required
 * };
 * const command = new UpdateScheduledAuditCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScheduledAuditResponse
 * //   scheduledAuditArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateScheduledAuditCommandInput - {@link UpdateScheduledAuditCommandInput}
 * @returns {@link UpdateScheduledAuditCommandOutput}
 * @see {@link UpdateScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class UpdateScheduledAuditCommand extends $Command<
  UpdateScheduledAuditCommandInput,
  UpdateScheduledAuditCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: UpdateScheduledAuditCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateScheduledAuditCommandInput, UpdateScheduledAuditCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateScheduledAuditCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateScheduledAuditCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "UpdateScheduledAudit",
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
  private serialize(input: UpdateScheduledAuditCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateScheduledAuditCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateScheduledAuditCommandOutput> {
    return de_UpdateScheduledAuditCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
