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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  UpdateServicePrimaryTaskSetRequest,
  UpdateServicePrimaryTaskSetRequestFilterSensitiveLog,
  UpdateServicePrimaryTaskSetResponse,
  UpdateServicePrimaryTaskSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand,
  serializeAws_json1_1UpdateServicePrimaryTaskSetCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateServicePrimaryTaskSetCommandInput extends UpdateServicePrimaryTaskSetRequest {}
export interface UpdateServicePrimaryTaskSetCommandOutput
  extends UpdateServicePrimaryTaskSetResponse,
    __MetadataBearer {}

/**
 * <p>Modifies which task set in a service is the primary task set. Any parameters that are
 * 			updated on the primary task set in a service will transition to the service. This is
 * 			used when a service uses the <code>EXTERNAL</code> deployment controller type. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
 * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateServicePrimaryTaskSetCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateServicePrimaryTaskSetCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateServicePrimaryTaskSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServicePrimaryTaskSetCommandInput} for command's `input` shape.
 * @see {@link UpdateServicePrimaryTaskSetCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class UpdateServicePrimaryTaskSetCommand extends $Command<
  UpdateServicePrimaryTaskSetCommandInput,
  UpdateServicePrimaryTaskSetCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: UpdateServicePrimaryTaskSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServicePrimaryTaskSetCommandInput, UpdateServicePrimaryTaskSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateServicePrimaryTaskSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "UpdateServicePrimaryTaskSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServicePrimaryTaskSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateServicePrimaryTaskSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateServicePrimaryTaskSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateServicePrimaryTaskSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateServicePrimaryTaskSetCommandOutput> {
    return deserializeAws_json1_1UpdateServicePrimaryTaskSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
