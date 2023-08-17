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

import { CreateLayerRequest, CreateLayerResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_CreateLayerCommand, se_CreateLayerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLayerCommand}.
 */
export interface CreateLayerCommandInput extends CreateLayerRequest {}
/**
 * @public
 *
 * The output of {@link CreateLayerCommand}.
 */
export interface CreateLayerCommandOutput extends CreateLayerResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a layer. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers-basics-create.html">How to
 *         Create a Layer</a>.</p>
 *          <note>
 *             <p>You should use <b>CreateLayer</b> for noncustom layer types such as PHP App Server only if the stack
 *         does not have an existing layer of that type. A stack can have at most one instance of each
 *         noncustom layer; if you attempt to create a second instance, <b>CreateLayer</b> fails. A
 *         stack can have an arbitrary number of custom layers, so you can call <b>CreateLayer</b> as
 *         many times as you like for that layer type.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, CreateLayerCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, CreateLayerCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // CreateLayerRequest
 *   StackId: "STRING_VALUE", // required
 *   Type: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Shortname: "STRING_VALUE", // required
 *   Attributes: { // LayerAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   CloudWatchLogsConfiguration: { // CloudWatchLogsConfiguration
 *     Enabled: true || false,
 *     LogStreams: [ // CloudWatchLogsLogStreams
 *       { // CloudWatchLogsLogStream
 *         LogGroupName: "STRING_VALUE",
 *         DatetimeFormat: "STRING_VALUE",
 *         TimeZone: "STRING_VALUE",
 *         File: "STRING_VALUE",
 *         FileFingerprintLines: "STRING_VALUE",
 *         MultiLineStartPattern: "STRING_VALUE",
 *         InitialPosition: "STRING_VALUE",
 *         Encoding: "STRING_VALUE",
 *         BufferDuration: Number("int"),
 *         BatchCount: Number("int"),
 *         BatchSize: Number("int"),
 *       },
 *     ],
 *   },
 *   CustomInstanceProfileArn: "STRING_VALUE",
 *   CustomJson: "STRING_VALUE",
 *   CustomSecurityGroupIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 *   Packages: [
 *     "STRING_VALUE",
 *   ],
 *   VolumeConfigurations: [ // VolumeConfigurations
 *     { // VolumeConfiguration
 *       MountPoint: "STRING_VALUE", // required
 *       RaidLevel: Number("int"),
 *       NumberOfDisks: Number("int"), // required
 *       Size: Number("int"), // required
 *       VolumeType: "STRING_VALUE",
 *       Iops: Number("int"),
 *       Encrypted: true || false,
 *     },
 *   ],
 *   EnableAutoHealing: true || false,
 *   AutoAssignElasticIps: true || false,
 *   AutoAssignPublicIps: true || false,
 *   CustomRecipes: { // Recipes
 *     Setup: [
 *       "STRING_VALUE",
 *     ],
 *     Configure: [
 *       "STRING_VALUE",
 *     ],
 *     Deploy: [
 *       "STRING_VALUE",
 *     ],
 *     Undeploy: "<Strings>",
 *     Shutdown: "<Strings>",
 *   },
 *   InstallUpdatesOnBoot: true || false,
 *   UseEbsOptimizedInstances: true || false,
 *   LifecycleEventConfiguration: { // LifecycleEventConfiguration
 *     Shutdown: { // ShutdownEventConfiguration
 *       ExecutionTimeout: Number("int"),
 *       DelayUntilElbConnectionsDrained: true || false,
 *     },
 *   },
 * };
 * const command = new CreateLayerCommand(input);
 * const response = await client.send(command);
 * // { // CreateLayerResult
 * //   LayerId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLayerCommandInput - {@link CreateLayerCommandInput}
 * @returns {@link CreateLayerCommandOutput}
 * @see {@link CreateLayerCommandInput} for command's `input` shape.
 * @see {@link CreateLayerCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 */
export class CreateLayerCommand extends $Command<
  CreateLayerCommandInput,
  CreateLayerCommandOutput,
  OpsWorksClientResolvedConfig
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
  constructor(readonly input: CreateLayerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLayerCommandInput, CreateLayerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateLayerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "CreateLayerCommand";
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
  private serialize(input: CreateLayerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLayerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLayerCommandOutput> {
    return de_CreateLayerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
