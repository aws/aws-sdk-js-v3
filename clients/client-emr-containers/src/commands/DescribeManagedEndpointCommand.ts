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
  DescribeManagedEndpointRequest,
  DescribeManagedEndpointResponse,
  DescribeManagedEndpointResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeManagedEndpointCommand, se_DescribeManagedEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeManagedEndpointCommand}.
 */
export interface DescribeManagedEndpointCommandInput extends DescribeManagedEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DescribeManagedEndpointCommand}.
 */
export interface DescribeManagedEndpointCommandOutput extends DescribeManagedEndpointResponse, __MetadataBearer {}

/**
 * @public
 * <p>Displays detailed information about a managed endpoint. A managed endpoint is a gateway
 *          that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DescribeManagedEndpointCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DescribeManagedEndpointCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // DescribeManagedEndpointRequest
 *   id: "STRING_VALUE", // required
 *   virtualClusterId: "STRING_VALUE", // required
 * };
 * const command = new DescribeManagedEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DescribeManagedEndpointResponse
 * //   endpoint: { // Endpoint
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     virtualClusterId: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //     state: "CREATING" || "ACTIVE" || "TERMINATING" || "TERMINATED" || "TERMINATED_WITH_ERRORS",
 * //     releaseLabel: "STRING_VALUE",
 * //     executionRoleArn: "STRING_VALUE",
 * //     certificateArn: "STRING_VALUE",
 * //     certificateAuthority: { // Certificate
 * //       certificateArn: "STRING_VALUE",
 * //       certificateData: "STRING_VALUE",
 * //     },
 * //     configurationOverrides: { // ConfigurationOverrides
 * //       applicationConfiguration: [ // ConfigurationList
 * //         { // Configuration
 * //           classification: "STRING_VALUE", // required
 * //           properties: { // SensitivePropertiesMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           configurations: [
 * //             {
 * //               classification: "STRING_VALUE", // required
 * //               properties: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               configurations: "<ConfigurationList>",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       monitoringConfiguration: { // MonitoringConfiguration
 * //         persistentAppUI: "ENABLED" || "DISABLED",
 * //         cloudWatchMonitoringConfiguration: { // CloudWatchMonitoringConfiguration
 * //           logGroupName: "STRING_VALUE", // required
 * //           logStreamNamePrefix: "STRING_VALUE",
 * //         },
 * //         s3MonitoringConfiguration: { // S3MonitoringConfiguration
 * //           logUri: "STRING_VALUE", // required
 * //         },
 * //         containerLogRotationConfiguration: { // ContainerLogRotationConfiguration
 * //           rotationSize: "STRING_VALUE", // required
 * //           maxFilesToKeep: Number("int"), // required
 * //         },
 * //       },
 * //     },
 * //     serverUrl: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     securityGroup: "STRING_VALUE",
 * //     subnetIds: [ // SubnetIds
 * //       "STRING_VALUE",
 * //     ],
 * //     stateDetails: "STRING_VALUE",
 * //     failureReason: "INTERNAL_ERROR" || "USER_ERROR" || "VALIDATION_ERROR" || "CLUSTER_UNAVAILABLE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeManagedEndpointCommandInput - {@link DescribeManagedEndpointCommandInput}
 * @returns {@link DescribeManagedEndpointCommandOutput}
 * @see {@link DescribeManagedEndpointCommandInput} for command's `input` shape.
 * @see {@link DescribeManagedEndpointCommandOutput} for command's `response` shape.
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
export class DescribeManagedEndpointCommand extends $Command<
  DescribeManagedEndpointCommandInput,
  DescribeManagedEndpointCommandOutput,
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
  constructor(readonly input: DescribeManagedEndpointCommandInput) {
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
  ): Handler<DescribeManagedEndpointCommandInput, DescribeManagedEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeManagedEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "DescribeManagedEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeManagedEndpointResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsChicagoWebService",
        operation: "DescribeManagedEndpoint",
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
  private serialize(input: DescribeManagedEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeManagedEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeManagedEndpointCommandOutput> {
    return de_DescribeManagedEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
