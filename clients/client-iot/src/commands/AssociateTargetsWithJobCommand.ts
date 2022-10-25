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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  AssociateTargetsWithJobRequest,
  AssociateTargetsWithJobRequestFilterSensitiveLog,
  AssociateTargetsWithJobResponse,
  AssociateTargetsWithJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateTargetsWithJobCommand,
  serializeAws_restJson1AssociateTargetsWithJobCommand,
} from "../protocols/Aws_restJson1";

export interface AssociateTargetsWithJobCommandInput extends AssociateTargetsWithJobRequest {}
export interface AssociateTargetsWithJobCommandOutput extends AssociateTargetsWithJobResponse, __MetadataBearer {}

/**
 * <p>Associates a group with a continuous job. The following criteria must be met: </p>
 *         <ul>
 *             <li>
 *                 <p>The job must have been created with the <code>targetSelection</code> field set to
 *                     "CONTINUOUS".</p>
 *             </li>
 *             <li>
 *                 <p>The job status must currently be "IN_PROGRESS".</p>
 *             </li>
 *             <li>
 *                 <p>The total number of targets associated with a job must not exceed 100.</p>
 *             </li>
 *          </ul>
 *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AssociateTargetsWithJob</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AssociateTargetsWithJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AssociateTargetsWithJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AssociateTargetsWithJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTargetsWithJobCommandInput} for command's `input` shape.
 * @see {@link AssociateTargetsWithJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class AssociateTargetsWithJobCommand extends $Command<
  AssociateTargetsWithJobCommandInput,
  AssociateTargetsWithJobCommandOutput,
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

  constructor(readonly input: AssociateTargetsWithJobCommandInput) {
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
  ): Handler<AssociateTargetsWithJobCommandInput, AssociateTargetsWithJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateTargetsWithJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "AssociateTargetsWithJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateTargetsWithJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateTargetsWithJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateTargetsWithJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateTargetsWithJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateTargetsWithJobCommandOutput> {
    return deserializeAws_restJson1AssociateTargetsWithJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
