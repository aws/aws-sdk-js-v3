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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import {
  DeploymentStrategies,
  DeploymentStrategiesFilterSensitiveLog,
  ListDeploymentStrategiesRequest,
  ListDeploymentStrategiesRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListDeploymentStrategiesCommand,
  serializeAws_restJson1ListDeploymentStrategiesCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListDeploymentStrategiesCommand}.
 */
export interface ListDeploymentStrategiesCommandInput extends ListDeploymentStrategiesRequest {}
/**
 * The output of {@link ListDeploymentStrategiesCommand}.
 */
export interface ListDeploymentStrategiesCommandOutput extends DeploymentStrategies, __MetadataBearer {}

/**
 * <p>Lists deployment strategies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListDeploymentStrategiesCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListDeploymentStrategiesCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new ListDeploymentStrategiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentStrategiesCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentStrategiesCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @example To list the available deployment strategies
 * ```javascript
 * // The following list-deployment-strategies example lists the available deployment strategies in your AWS account.
 * const input = {};
 * const command = new ListDeploymentStrategiesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Items": [
 *     {
 *       "DeploymentDurationInMinutes": 15,
 *       "FinalBakeTimeInMinutes": 0,
 *       "GrowthFactor": 25,
 *       "GrowthType": "LINEAR",
 *       "Id": "1225qzk",
 *       "Name": "Example-Deployment",
 *       "ReplicateTo": "SSM_DOCUMENT"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-the-available-deployment-strategies-1632267364180
 * ```
 *
 */
export class ListDeploymentStrategiesCommand extends $Command<
  ListDeploymentStrategiesCommandInput,
  ListDeploymentStrategiesCommandOutput,
  AppConfigClientResolvedConfig
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

  constructor(readonly input: ListDeploymentStrategiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeploymentStrategiesCommandInput, ListDeploymentStrategiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeploymentStrategiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "ListDeploymentStrategiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeploymentStrategiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeploymentStrategiesFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeploymentStrategiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDeploymentStrategiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentStrategiesCommandOutput> {
    return deserializeAws_restJson1ListDeploymentStrategiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
