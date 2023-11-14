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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import {
  StartBatchDeleteConfigurationTaskRequest,
  StartBatchDeleteConfigurationTaskResponse,
} from "../models/models_0";
import {
  de_StartBatchDeleteConfigurationTaskCommand,
  se_StartBatchDeleteConfigurationTaskCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartBatchDeleteConfigurationTaskCommand}.
 */
export interface StartBatchDeleteConfigurationTaskCommandInput extends StartBatchDeleteConfigurationTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartBatchDeleteConfigurationTaskCommand}.
 */
export interface StartBatchDeleteConfigurationTaskCommandOutput
  extends StartBatchDeleteConfigurationTaskResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *         Takes a list of configurationId as input and starts an asynchronous deletion
 *         task to remove the configurationItems. Returns a unique deletion task identifier.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StartBatchDeleteConfigurationTaskCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StartBatchDeleteConfigurationTaskCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // StartBatchDeleteConfigurationTaskRequest
 *   configurationType: "SERVER", // required
 *   configurationIds: [ // ConfigurationIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartBatchDeleteConfigurationTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartBatchDeleteConfigurationTaskResponse
 * //   taskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartBatchDeleteConfigurationTaskCommandInput - {@link StartBatchDeleteConfigurationTaskCommandInput}
 * @returns {@link StartBatchDeleteConfigurationTaskCommandOutput}
 * @see {@link StartBatchDeleteConfigurationTaskCommandInput} for command's `input` shape.
 * @see {@link StartBatchDeleteConfigurationTaskCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>
 *       The limit of 200 configuration IDs per request has been exceeded.
 *     </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not permitted.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 */
export class StartBatchDeleteConfigurationTaskCommand extends $Command<
  StartBatchDeleteConfigurationTaskCommandInput,
  StartBatchDeleteConfigurationTaskCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
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
  constructor(readonly input: StartBatchDeleteConfigurationTaskCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartBatchDeleteConfigurationTaskCommandInput, StartBatchDeleteConfigurationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartBatchDeleteConfigurationTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "StartBatchDeleteConfigurationTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSPoseidonService_V2015_11_01",
        operation: "StartBatchDeleteConfigurationTask",
      },
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
  private serialize(
    input: StartBatchDeleteConfigurationTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_StartBatchDeleteConfigurationTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartBatchDeleteConfigurationTaskCommandOutput> {
    return de_StartBatchDeleteConfigurationTaskCommand(output, context);
  }
}
