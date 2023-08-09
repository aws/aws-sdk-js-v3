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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { DeploymentStrategies, ListDeploymentStrategiesRequest } from "../models/models_0";
import { de_ListDeploymentStrategiesCommand, se_ListDeploymentStrategiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDeploymentStrategiesCommand}.
 */
export interface ListDeploymentStrategiesCommandInput extends ListDeploymentStrategiesRequest {}
/**
 * @public
 *
 * The output of {@link ListDeploymentStrategiesCommand}.
 */
export interface ListDeploymentStrategiesCommandOutput extends DeploymentStrategies, __MetadataBearer {}

/**
 * @public
 * <p>Lists deployment strategies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, ListDeploymentStrategiesCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, ListDeploymentStrategiesCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // ListDeploymentStrategiesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDeploymentStrategiesCommand(input);
 * const response = await client.send(command);
 * // { // DeploymentStrategies
 * //   Items: [ // DeploymentStrategyList
 * //     { // DeploymentStrategy
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DeploymentDurationInMinutes: Number("int"),
 * //       GrowthType: "LINEAR" || "EXPONENTIAL",
 * //       GrowthFactor: Number("float"),
 * //       FinalBakeTimeInMinutes: Number("int"),
 * //       ReplicateTo: "NONE" || "SSM_DOCUMENT",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentStrategiesCommandInput - {@link ListDeploymentStrategiesCommandInput}
 * @returns {@link ListDeploymentStrategiesCommandOutput}
 * @see {@link ListDeploymentStrategiesCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentStrategiesCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
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

  /**
   * @public
   */
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
  private serialize(input: ListDeploymentStrategiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDeploymentStrategiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentStrategiesCommandOutput> {
    return de_ListDeploymentStrategiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
