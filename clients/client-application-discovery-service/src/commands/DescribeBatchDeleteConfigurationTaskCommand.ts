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
  DescribeBatchDeleteConfigurationTaskRequest,
  DescribeBatchDeleteConfigurationTaskResponse,
} from "../models/models_0";
import {
  de_DescribeBatchDeleteConfigurationTaskCommand,
  se_DescribeBatchDeleteConfigurationTaskCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBatchDeleteConfigurationTaskCommand}.
 */
export interface DescribeBatchDeleteConfigurationTaskCommandInput extends DescribeBatchDeleteConfigurationTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBatchDeleteConfigurationTaskCommand}.
 */
export interface DescribeBatchDeleteConfigurationTaskCommandOutput
  extends DescribeBatchDeleteConfigurationTaskResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>
 *         Takes a unique deletion task identifier as input and returns metadata about a configuration deletion task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeBatchDeleteConfigurationTaskCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeBatchDeleteConfigurationTaskCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // DescribeBatchDeleteConfigurationTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBatchDeleteConfigurationTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBatchDeleteConfigurationTaskResponse
 * //   task: { // BatchDeleteConfigurationTask
 * //     taskId: "STRING_VALUE",
 * //     status: "INITIALIZING" || "VALIDATING" || "DELETING" || "COMPLETED" || "FAILED",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     configurationType: "SERVER",
 * //     requestedConfigurations: [ // ConfigurationIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     deletedConfigurations: [
 * //       "STRING_VALUE",
 * //     ],
 * //     failedConfigurations: [ // FailedConfigurationList
 * //       { // FailedConfiguration
 * //         configurationId: "STRING_VALUE",
 * //         errorStatusCode: Number("int"),
 * //         errorMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //     deletionWarnings: [ // DeletionWarningsList
 * //       { // DeletionWarning
 * //         configurationId: "STRING_VALUE",
 * //         warningCode: Number("int"),
 * //         warningText: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBatchDeleteConfigurationTaskCommandInput - {@link DescribeBatchDeleteConfigurationTaskCommandInput}
 * @returns {@link DescribeBatchDeleteConfigurationTaskCommandOutput}
 * @see {@link DescribeBatchDeleteConfigurationTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeBatchDeleteConfigurationTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 */
export class DescribeBatchDeleteConfigurationTaskCommand extends $Command<
  DescribeBatchDeleteConfigurationTaskCommandInput,
  DescribeBatchDeleteConfigurationTaskCommandOutput,
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
  constructor(readonly input: DescribeBatchDeleteConfigurationTaskCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBatchDeleteConfigurationTaskCommandInput, DescribeBatchDeleteConfigurationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBatchDeleteConfigurationTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "DescribeBatchDeleteConfigurationTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSPoseidonService_V2015_11_01",
        operation: "DescribeBatchDeleteConfigurationTask",
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
    input: DescribeBatchDeleteConfigurationTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeBatchDeleteConfigurationTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBatchDeleteConfigurationTaskCommandOutput> {
    return de_DescribeBatchDeleteConfigurationTaskCommand(output, context);
  }
}
