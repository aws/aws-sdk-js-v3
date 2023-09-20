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

import { UpdateLayerRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_UpdateLayerCommand, se_UpdateLayerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLayerCommand}.
 */
export interface UpdateLayerCommandInput extends UpdateLayerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLayerCommand}.
 */
export interface UpdateLayerCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates a specified layer.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, UpdateLayerCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, UpdateLayerCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // UpdateLayerRequest
 *   LayerId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Shortname: "STRING_VALUE",
 *   Attributes: { // LayerAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   CloudWatchLogsConfiguration: { // CloudWatchLogsConfiguration
 *     Enabled: true || false,
 *     LogStreams: [ // CloudWatchLogsLogStreams
 *       { // CloudWatchLogsLogStream
 *         LogGroupName: "STRING_VALUE",
 *         DatetimeFormat: "STRING_VALUE",
 *         TimeZone: "LOCAL" || "UTC",
 *         File: "STRING_VALUE",
 *         FileFingerprintLines: "STRING_VALUE",
 *         MultiLineStartPattern: "STRING_VALUE",
 *         InitialPosition: "start_of_file" || "end_of_file",
 *         Encoding: "ascii" || "big5" || "big5hkscs" || "cp037" || "cp424" || "cp437" || "cp500" || "cp720" || "cp737" || "cp775" || "cp850" || "cp852" || "cp855" || "cp856" || "cp857" || "cp858" || "cp860" || "cp861" || "cp862" || "cp863" || "cp864" || "cp865" || "cp866" || "cp869" || "cp874" || "cp875" || "cp932" || "cp949" || "cp950" || "cp1006" || "cp1026" || "cp1140" || "cp1250" || "cp1251" || "cp1252" || "cp1253" || "cp1254" || "cp1255" || "cp1256" || "cp1257" || "cp1258" || "euc_jp" || "euc_jis_2004" || "euc_jisx0213" || "euc_kr" || "gb2312" || "gbk" || "gb18030" || "hz" || "iso2022_jp" || "iso2022_jp_1" || "iso2022_jp_2" || "iso2022_jp_2004" || "iso2022_jp_3" || "iso2022_jp_ext" || "iso2022_kr" || "latin_1" || "iso8859_2" || "iso8859_3" || "iso8859_4" || "iso8859_5" || "iso8859_6" || "iso8859_7" || "iso8859_8" || "iso8859_9" || "iso8859_10" || "iso8859_13" || "iso8859_14" || "iso8859_15" || "iso8859_16" || "johab" || "koi8_r" || "koi8_u" || "mac_cyrillic" || "mac_greek" || "mac_iceland" || "mac_latin2" || "mac_roman" || "mac_turkish" || "ptcp154" || "shift_jis" || "shift_jis_2004" || "shift_jisx0213" || "utf_32" || "utf_32_be" || "utf_32_le" || "utf_16" || "utf_16_be" || "utf_16_le" || "utf_7" || "utf_8" || "utf_8_sig",
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
 * const command = new UpdateLayerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLayerCommandInput - {@link UpdateLayerCommandInput}
 * @returns {@link UpdateLayerCommandOutput}
 * @see {@link UpdateLayerCommandInput} for command's `input` shape.
 * @see {@link UpdateLayerCommandOutput} for command's `response` shape.
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
export class UpdateLayerCommand extends $Command<
  UpdateLayerCommandInput,
  UpdateLayerCommandOutput,
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
  constructor(readonly input: UpdateLayerCommandInput) {
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
  ): Handler<UpdateLayerCommandInput, UpdateLayerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateLayerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "UpdateLayerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorks_20130218",
        operation: "UpdateLayer",
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
  private serialize(input: UpdateLayerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateLayerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLayerCommandOutput> {
    return de_UpdateLayerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
