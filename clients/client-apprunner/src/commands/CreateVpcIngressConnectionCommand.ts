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

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import {
  CreateVpcIngressConnectionRequest,
  CreateVpcIngressConnectionRequestFilterSensitiveLog,
  CreateVpcIngressConnectionResponse,
  CreateVpcIngressConnectionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0CreateVpcIngressConnectionCommand,
  serializeAws_json1_0CreateVpcIngressConnectionCommand,
} from "../protocols/Aws_json1_0";

export interface CreateVpcIngressConnectionCommandInput extends CreateVpcIngressConnectionRequest {}
export interface CreateVpcIngressConnectionCommandOutput extends CreateVpcIngressConnectionResponse, __MetadataBearer {}

/**
 * <p>Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, CreateVpcIngressConnectionCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, CreateVpcIngressConnectionCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new CreateVpcIngressConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcIngressConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpcIngressConnectionCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 */
export class CreateVpcIngressConnectionCommand extends $Command<
  CreateVpcIngressConnectionCommandInput,
  CreateVpcIngressConnectionCommandOutput,
  AppRunnerClientResolvedConfig
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

  constructor(readonly input: CreateVpcIngressConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateVpcIngressConnectionCommandInput, CreateVpcIngressConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVpcIngressConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "CreateVpcIngressConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVpcIngressConnectionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateVpcIngressConnectionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVpcIngressConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateVpcIngressConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVpcIngressConnectionCommandOutput> {
    return deserializeAws_json1_0CreateVpcIngressConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
