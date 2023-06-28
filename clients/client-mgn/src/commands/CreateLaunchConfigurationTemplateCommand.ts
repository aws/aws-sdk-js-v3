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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  CreateLaunchConfigurationTemplateRequest,
  CreateLaunchConfigurationTemplateRequestFilterSensitiveLog,
  LaunchConfigurationTemplate,
  LaunchConfigurationTemplateFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateLaunchConfigurationTemplateCommand,
  se_CreateLaunchConfigurationTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLaunchConfigurationTemplateCommand}.
 */
export interface CreateLaunchConfigurationTemplateCommandInput extends CreateLaunchConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateLaunchConfigurationTemplateCommand}.
 */
export interface CreateLaunchConfigurationTemplateCommandOutput extends LaunchConfigurationTemplate, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new Launch Configuration Template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, CreateLaunchConfigurationTemplateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, CreateLaunchConfigurationTemplateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // CreateLaunchConfigurationTemplateRequest
 *   postLaunchActions: { // PostLaunchActions
 *     deployment: "STRING_VALUE",
 *     s3LogBucket: "STRING_VALUE",
 *     s3OutputKeyPrefix: "STRING_VALUE",
 *     cloudWatchLogGroupName: "STRING_VALUE",
 *     ssmDocuments: [ // SsmDocuments
 *       { // SsmDocument
 *         actionName: "STRING_VALUE", // required
 *         ssmDocumentName: "STRING_VALUE", // required
 *         timeoutSeconds: Number("int"),
 *         mustSucceedForCutover: true || false,
 *         parameters: { // SsmDocumentParameters
 *           "<keys>": [ // SsmParameterStoreParameters
 *             { // SsmParameterStoreParameter
 *               parameterType: "STRING_VALUE", // required
 *               parameterName: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *         externalParameters: { // SsmDocumentExternalParameters
 *           "<keys>": { // SsmExternalParameter Union: only one key present
 *             dynamicPath: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   enableMapAutoTagging: true || false,
 *   mapAutoTaggingMpeID: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   launchDisposition: "STRING_VALUE",
 *   targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 *   copyPrivateIp: true || false,
 *   associatePublicIpAddress: true || false,
 *   copyTags: true || false,
 *   licensing: { // Licensing
 *     osByol: true || false,
 *   },
 *   bootMode: "STRING_VALUE",
 *   smallVolumeMaxSize: Number("long"),
 *   smallVolumeConf: { // LaunchTemplateDiskConf
 *     volumeType: "STRING_VALUE",
 *     iops: Number("long"),
 *     throughput: Number("long"),
 *   },
 *   largeVolumeConf: {
 *     volumeType: "STRING_VALUE",
 *     iops: Number("long"),
 *     throughput: Number("long"),
 *   },
 * };
 * const command = new CreateLaunchConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // LaunchConfigurationTemplate
 * //   launchConfigurationTemplateID: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE",
 * //   postLaunchActions: { // PostLaunchActions
 * //     deployment: "STRING_VALUE",
 * //     s3LogBucket: "STRING_VALUE",
 * //     s3OutputKeyPrefix: "STRING_VALUE",
 * //     cloudWatchLogGroupName: "STRING_VALUE",
 * //     ssmDocuments: [ // SsmDocuments
 * //       { // SsmDocument
 * //         actionName: "STRING_VALUE", // required
 * //         ssmDocumentName: "STRING_VALUE", // required
 * //         timeoutSeconds: Number("int"),
 * //         mustSucceedForCutover: true || false,
 * //         parameters: { // SsmDocumentParameters
 * //           "<keys>": [ // SsmParameterStoreParameters
 * //             { // SsmParameterStoreParameter
 * //               parameterType: "STRING_VALUE", // required
 * //               parameterName: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         externalParameters: { // SsmDocumentExternalParameters
 * //           "<keys>": { // SsmExternalParameter Union: only one key present
 * //             dynamicPath: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   enableMapAutoTagging: true || false,
 * //   mapAutoTaggingMpeID: "STRING_VALUE",
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ec2LaunchTemplateID: "STRING_VALUE",
 * //   launchDisposition: "STRING_VALUE",
 * //   targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 * //   copyPrivateIp: true || false,
 * //   associatePublicIpAddress: true || false,
 * //   copyTags: true || false,
 * //   licensing: { // Licensing
 * //     osByol: true || false,
 * //   },
 * //   bootMode: "STRING_VALUE",
 * //   smallVolumeMaxSize: Number("long"),
 * //   smallVolumeConf: { // LaunchTemplateDiskConf
 * //     volumeType: "STRING_VALUE",
 * //     iops: Number("long"),
 * //     throughput: Number("long"),
 * //   },
 * //   largeVolumeConf: {
 * //     volumeType: "STRING_VALUE",
 * //     iops: Number("long"),
 * //     throughput: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateLaunchConfigurationTemplateCommandInput - {@link CreateLaunchConfigurationTemplateCommandInput}
 * @returns {@link CreateLaunchConfigurationTemplateCommandOutput}
 * @see {@link CreateLaunchConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class CreateLaunchConfigurationTemplateCommand extends $Command<
  CreateLaunchConfigurationTemplateCommandInput,
  CreateLaunchConfigurationTemplateCommandOutput,
  MgnClientResolvedConfig
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
  constructor(readonly input: CreateLaunchConfigurationTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLaunchConfigurationTemplateCommandInput, CreateLaunchConfigurationTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLaunchConfigurationTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "CreateLaunchConfigurationTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLaunchConfigurationTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: LaunchConfigurationTemplateFilterSensitiveLog,
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
    input: CreateLaunchConfigurationTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateLaunchConfigurationTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLaunchConfigurationTemplateCommandOutput> {
    return de_CreateLaunchConfigurationTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
