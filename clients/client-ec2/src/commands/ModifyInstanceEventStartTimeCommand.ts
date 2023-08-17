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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceEventStartTimeRequest, ModifyInstanceEventStartTimeResult } from "../models/models_6";
import { de_ModifyInstanceEventStartTimeCommand, se_ModifyInstanceEventStartTimeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceEventStartTimeCommand}.
 */
export interface ModifyInstanceEventStartTimeCommandInput extends ModifyInstanceEventStartTimeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceEventStartTimeCommand}.
 */
export interface ModifyInstanceEventStartTimeCommandOutput
  extends ModifyInstanceEventStartTimeResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the start time for a scheduled Amazon EC2 instance event.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceEventStartTimeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceEventStartTimeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceEventStartTimeRequest
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   InstanceEventId: "STRING_VALUE", // required
 *   NotBefore: new Date("TIMESTAMP"), // required
 * };
 * const command = new ModifyInstanceEventStartTimeCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceEventStartTimeResult
 * //   Event: { // InstanceStatusEvent
 * //     InstanceEventId: "STRING_VALUE",
 * //     Code: "instance-reboot" || "system-reboot" || "system-maintenance" || "instance-retirement" || "instance-stop",
 * //     Description: "STRING_VALUE",
 * //     NotAfter: new Date("TIMESTAMP"),
 * //     NotBefore: new Date("TIMESTAMP"),
 * //     NotBeforeDeadline: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyInstanceEventStartTimeCommandInput - {@link ModifyInstanceEventStartTimeCommandInput}
 * @returns {@link ModifyInstanceEventStartTimeCommandOutput}
 * @see {@link ModifyInstanceEventStartTimeCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceEventStartTimeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyInstanceEventStartTimeCommand extends $Command<
  ModifyInstanceEventStartTimeCommandInput,
  ModifyInstanceEventStartTimeCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: ModifyInstanceEventStartTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyInstanceEventStartTimeCommandInput, ModifyInstanceEventStartTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyInstanceEventStartTimeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyInstanceEventStartTimeCommand";
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
  private serialize(input: ModifyInstanceEventStartTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyInstanceEventStartTimeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyInstanceEventStartTimeCommandOutput> {
    return de_ModifyInstanceEventStartTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
