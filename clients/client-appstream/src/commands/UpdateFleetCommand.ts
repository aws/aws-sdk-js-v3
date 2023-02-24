// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import {
  UpdateFleetRequest,
  UpdateFleetRequestFilterSensitiveLog,
  UpdateFleetResult,
  UpdateFleetResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateFleetCommand,
  serializeAws_json1_1UpdateFleetCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateFleetCommandInput extends UpdateFleetRequest {}
export interface UpdateFleetCommandOutput extends UpdateFleetResult, __MetadataBearer {}

/**
 * <p>Updates the specified fleet.</p>
 *          <p>If the fleet is in the <code>STOPPED</code> state, you can update any attribute except
 *             the fleet name.</p>
 *          <p>If the fleet is in the <code>RUNNING</code> state, you can update the following based
 *             on the fleet type:</p>
 *          <ul>
 *             <li>
 *                <p>Always-On and On-Demand fleet types</p>
 *                <p>You can update the  <code>DisplayName</code>, <code>ComputeCapacity</code>,
 *                         <code>ImageARN</code>, <code>ImageName</code>,
 *                         <code>IdleDisconnectTimeoutInSeconds</code>, and
 *                         <code>DisconnectTimeoutInSeconds</code> attributes.</p>
 *             </li>
 *             <li>
 *                <p>Elastic fleet type</p>
 *                <p>You can update the  <code>DisplayName</code>,
 *                         <code>IdleDisconnectTimeoutInSeconds</code>,
 *                     <code>DisconnectTimeoutInSeconds</code>, <code>MaxConcurrentSessions</code>, <code>SessionScriptS3Location</code>
 *                     and <code>UsbDeviceFilterStrings</code> attributes.</p>
 *             </li>
 *          </ul>
 *          <p>If the fleet is in the <code>STARTING</code> or <code>STOPPED</code> state, you can't update it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new UpdateFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFleetCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 */
export class UpdateFleetCommand extends $Command<
  UpdateFleetCommandInput,
  UpdateFleetCommandOutput,
  AppStreamClientResolvedConfig
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

  constructor(readonly input: UpdateFleetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFleetCommandInput, UpdateFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateFleetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "UpdateFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFleetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateFleetResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFleetCommandOutput> {
    return deserializeAws_json1_1UpdateFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
