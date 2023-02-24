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
  CreateCapacityProviderRequest,
  CreateCapacityProviderRequestFilterSensitiveLog,
  CreateCapacityProviderResponse,
  CreateCapacityProviderResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateCapacityProviderCommand,
  serializeAws_json1_1CreateCapacityProviderCommand,
} from "../protocols/Aws_json1_1";

export interface CreateCapacityProviderCommandInput extends CreateCapacityProviderRequest {}
export interface CreateCapacityProviderCommandOutput extends CreateCapacityProviderResponse, __MetadataBearer {}

/**
 * <p>Creates a new capacity provider. Capacity providers are associated with an Amazon ECS
 * 			cluster and are used in capacity provider strategies to facilitate cluster auto
 * 			scaling.</p>
 *          <p>Only capacity providers that use an Auto Scaling group can be created. Amazon ECS tasks on
 * 			Fargate use the <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers.
 * 			These providers are available to all accounts in the Amazon Web Services Regions that Fargate
 * 			supports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, CreateCapacityProviderCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, CreateCapacityProviderCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new CreateCapacityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link CreateCapacityProviderCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class CreateCapacityProviderCommand extends $Command<
  CreateCapacityProviderCommandInput,
  CreateCapacityProviderCommandOutput,
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

  constructor(readonly input: CreateCapacityProviderCommandInput) {
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
  ): Handler<CreateCapacityProviderCommandInput, CreateCapacityProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCapacityProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "CreateCapacityProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCapacityProviderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCapacityProviderResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCapacityProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCapacityProviderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCapacityProviderCommandOutput> {
    return deserializeAws_json1_1CreateCapacityProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
