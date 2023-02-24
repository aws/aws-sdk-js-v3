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

import {
  CreateEdgeDeploymentPlanRequest,
  CreateEdgeDeploymentPlanRequestFilterSensitiveLog,
  CreateEdgeDeploymentPlanResponse,
  CreateEdgeDeploymentPlanResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateEdgeDeploymentPlanCommand,
  serializeAws_json1_1CreateEdgeDeploymentPlanCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface CreateEdgeDeploymentPlanCommandInput extends CreateEdgeDeploymentPlanRequest {}
export interface CreateEdgeDeploymentPlanCommandOutput extends CreateEdgeDeploymentPlanResponse, __MetadataBearer {}

/**
 * <p>Creates an edge deployment plan, consisting of multiple stages. Each stage may have a different deployment configuration and devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateEdgeDeploymentPlanCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateEdgeDeploymentPlanCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateEdgeDeploymentPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEdgeDeploymentPlanCommandInput} for command's `input` shape.
 * @see {@link CreateEdgeDeploymentPlanCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class CreateEdgeDeploymentPlanCommand extends $Command<
  CreateEdgeDeploymentPlanCommandInput,
  CreateEdgeDeploymentPlanCommandOutput,
  SageMakerClientResolvedConfig
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

  constructor(readonly input: CreateEdgeDeploymentPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEdgeDeploymentPlanCommandInput, CreateEdgeDeploymentPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEdgeDeploymentPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateEdgeDeploymentPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEdgeDeploymentPlanRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEdgeDeploymentPlanResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEdgeDeploymentPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEdgeDeploymentPlanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEdgeDeploymentPlanCommandOutput> {
    return deserializeAws_json1_1CreateEdgeDeploymentPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
