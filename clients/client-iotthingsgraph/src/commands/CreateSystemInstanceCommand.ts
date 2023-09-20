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

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { CreateSystemInstanceRequest, CreateSystemInstanceResponse } from "../models/models_0";
import { de_CreateSystemInstanceCommand, se_CreateSystemInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSystemInstanceCommand}.
 */
export interface CreateSystemInstanceCommandInput extends CreateSystemInstanceRequest {}
/**
 * @public
 *
 * The output of {@link CreateSystemInstanceCommand}.
 */
export interface CreateSystemInstanceCommandOutput extends CreateSystemInstanceResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Creates a system instance. </p>
 *          <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is
 *             specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to
 *             call <code>DeploySystemInstance</code> after running this action.</p>
 *          <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions
 *          to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p>
 *          <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role
 *       that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p>
 *          <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, CreateSystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, CreateSystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const input = { // CreateSystemInstanceRequest
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   definition: { // DefinitionDocument
 *     language: "GRAPHQL", // required
 *     text: "STRING_VALUE", // required
 *   },
 *   target: "GREENGRASS" || "CLOUD", // required
 *   greengrassGroupName: "STRING_VALUE",
 *   s3BucketName: "STRING_VALUE",
 *   metricsConfiguration: { // MetricsConfiguration
 *     cloudMetricEnabled: true || false,
 *     metricRuleRoleArn: "STRING_VALUE",
 *   },
 *   flowActionsRoleArn: "STRING_VALUE",
 * };
 * const command = new CreateSystemInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateSystemInstanceResponse
 * //   summary: { // SystemInstanceSummary
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     status: "NOT_DEPLOYED" || "BOOTSTRAP" || "DEPLOY_IN_PROGRESS" || "DEPLOYED_IN_TARGET" || "UNDEPLOY_IN_PROGRESS" || "FAILED" || "PENDING_DELETE" || "DELETED_IN_TARGET",
 * //     target: "GREENGRASS" || "CLOUD",
 * //     greengrassGroupName: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     greengrassGroupId: "STRING_VALUE",
 * //     greengrassGroupVersionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSystemInstanceCommandInput - {@link CreateSystemInstanceCommandInput}
 * @returns {@link CreateSystemInstanceCommandOutput}
 * @see {@link CreateSystemInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateSystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 */
export class CreateSystemInstanceCommand extends $Command<
  CreateSystemInstanceCommandInput,
  CreateSystemInstanceCommandOutput,
  IoTThingsGraphClientResolvedConfig
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
  constructor(readonly input: CreateSystemInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSystemInstanceCommandInput, CreateSystemInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSystemInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "CreateSystemInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IotThingsGraphFrontEndService",
        operation: "CreateSystemInstance",
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
  private serialize(input: CreateSystemInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSystemInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSystemInstanceCommandOutput> {
    return de_CreateSystemInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
