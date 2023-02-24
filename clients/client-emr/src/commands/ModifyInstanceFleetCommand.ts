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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ModifyInstanceFleetInput, ModifyInstanceFleetInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1ModifyInstanceFleetCommand,
  serializeAws_json1_1ModifyInstanceFleetCommand,
} from "../protocols/Aws_json1_1";

export interface ModifyInstanceFleetCommandInput extends ModifyInstanceFleetInput {}
export interface ModifyInstanceFleetCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies the target On-Demand and target Spot capacities for the instance fleet with the
 *          specified InstanceFleetID within the cluster specified using ClusterID. The call either
 *          succeeds or fails atomically.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions
 *             4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ModifyInstanceFleetCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ModifyInstanceFleetCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ModifyInstanceFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceFleetCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceFleetCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class ModifyInstanceFleetCommand extends $Command<
  ModifyInstanceFleetCommandInput,
  ModifyInstanceFleetCommandOutput,
  EMRClientResolvedConfig
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

  constructor(readonly input: ModifyInstanceFleetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyInstanceFleetCommandInput, ModifyInstanceFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyInstanceFleetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ModifyInstanceFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyInstanceFleetInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyInstanceFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifyInstanceFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyInstanceFleetCommandOutput> {
    return deserializeAws_json1_1ModifyInstanceFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
