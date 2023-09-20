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

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import {
  CreateManagedEndpointRequest,
  CreateManagedEndpointRequestFilterSensitiveLog,
  CreateManagedEndpointResponse,
} from "../models/models_0";
import { de_CreateManagedEndpointCommand, se_CreateManagedEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateManagedEndpointCommand}.
 */
export interface CreateManagedEndpointCommandInput extends CreateManagedEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateManagedEndpointCommand}.
 */
export interface CreateManagedEndpointCommandOutput extends CreateManagedEndpointResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a managed endpoint. A managed endpoint is a gateway that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can
 *          communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, CreateManagedEndpointCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, CreateManagedEndpointCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // CreateManagedEndpointRequest
 *   name: "STRING_VALUE", // required
 *   virtualClusterId: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   releaseLabel: "STRING_VALUE", // required
 *   executionRoleArn: "STRING_VALUE", // required
 *   certificateArn: "STRING_VALUE",
 *   configurationOverrides: { // ConfigurationOverrides
 *     applicationConfiguration: [ // ConfigurationList
 *       { // Configuration
 *         classification: "STRING_VALUE", // required
 *         properties: { // SensitivePropertiesMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         configurations: [
 *           {
 *             classification: "STRING_VALUE", // required
 *             properties: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *             configurations: "<ConfigurationList>",
 *           },
 *         ],
 *       },
 *     ],
 *     monitoringConfiguration: { // MonitoringConfiguration
 *       persistentAppUI: "ENABLED" || "DISABLED",
 *       cloudWatchMonitoringConfiguration: { // CloudWatchMonitoringConfiguration
 *         logGroupName: "STRING_VALUE", // required
 *         logStreamNamePrefix: "STRING_VALUE",
 *       },
 *       s3MonitoringConfiguration: { // S3MonitoringConfiguration
 *         logUri: "STRING_VALUE", // required
 *       },
 *       containerLogRotationConfiguration: { // ContainerLogRotationConfiguration
 *         rotationSize: "STRING_VALUE", // required
 *         maxFilesToKeep: Number("int"), // required
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateManagedEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateManagedEndpointResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   virtualClusterId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateManagedEndpointCommandInput - {@link CreateManagedEndpointCommandInput}
 * @returns {@link CreateManagedEndpointCommandOutput}
 * @see {@link CreateManagedEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateManagedEndpointCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 */
export class CreateManagedEndpointCommand extends $Command<
  CreateManagedEndpointCommandInput,
  CreateManagedEndpointCommandOutput,
  EMRContainersClientResolvedConfig
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
  constructor(readonly input: CreateManagedEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateManagedEndpointCommandInput, CreateManagedEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateManagedEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "CreateManagedEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateManagedEndpointRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsChicagoWebService",
        operation: "CreateManagedEndpoint",
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
  private serialize(input: CreateManagedEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateManagedEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateManagedEndpointCommandOutput> {
    return de_CreateManagedEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
