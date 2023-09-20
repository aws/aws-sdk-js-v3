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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import {
  DescribeLaunchConfigurationTemplatesRequest,
  DescribeLaunchConfigurationTemplatesResponse,
  DescribeLaunchConfigurationTemplatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeLaunchConfigurationTemplatesCommand,
  se_DescribeLaunchConfigurationTemplatesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLaunchConfigurationTemplatesCommand}.
 */
export interface DescribeLaunchConfigurationTemplatesCommandInput extends DescribeLaunchConfigurationTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLaunchConfigurationTemplatesCommand}.
 */
export interface DescribeLaunchConfigurationTemplatesCommandOutput
  extends DescribeLaunchConfigurationTemplatesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all Launch Configuration Templates, filtered by Launch Configuration Template IDs</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeLaunchConfigurationTemplatesCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeLaunchConfigurationTemplatesCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // DescribeLaunchConfigurationTemplatesRequest
 *   launchConfigurationTemplateIDs: [ // LaunchConfigurationTemplateIDs
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeLaunchConfigurationTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLaunchConfigurationTemplatesResponse
 * //   items: [ // LaunchConfigurationTemplates
 * //     { // LaunchConfigurationTemplate
 * //       launchConfigurationTemplateID: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE",
 * //       postLaunchActions: { // PostLaunchActions
 * //         deployment: "STRING_VALUE",
 * //         s3LogBucket: "STRING_VALUE",
 * //         s3OutputKeyPrefix: "STRING_VALUE",
 * //         cloudWatchLogGroupName: "STRING_VALUE",
 * //         ssmDocuments: [ // SsmDocuments
 * //           { // SsmDocument
 * //             actionName: "STRING_VALUE", // required
 * //             ssmDocumentName: "STRING_VALUE", // required
 * //             timeoutSeconds: Number("int"),
 * //             mustSucceedForCutover: true || false,
 * //             parameters: { // SsmDocumentParameters
 * //               "<keys>": [ // SsmParameterStoreParameters
 * //                 { // SsmParameterStoreParameter
 * //                   parameterType: "STRING_VALUE", // required
 * //                   parameterName: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //             externalParameters: { // SsmDocumentExternalParameters
 * //               "<keys>": { // SsmExternalParameter Union: only one key present
 * //                 dynamicPath: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       enableMapAutoTagging: true || false,
 * //       mapAutoTaggingMpeID: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ec2LaunchTemplateID: "STRING_VALUE",
 * //       launchDisposition: "STRING_VALUE",
 * //       targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 * //       copyPrivateIp: true || false,
 * //       associatePublicIpAddress: true || false,
 * //       copyTags: true || false,
 * //       licensing: { // Licensing
 * //         osByol: true || false,
 * //       },
 * //       bootMode: "STRING_VALUE",
 * //       smallVolumeMaxSize: Number("long"),
 * //       smallVolumeConf: { // LaunchTemplateDiskConf
 * //         volumeType: "STRING_VALUE",
 * //         iops: Number("long"),
 * //         throughput: Number("long"),
 * //       },
 * //       largeVolumeConf: {
 * //         volumeType: "STRING_VALUE",
 * //         iops: Number("long"),
 * //         throughput: Number("long"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLaunchConfigurationTemplatesCommandInput - {@link DescribeLaunchConfigurationTemplatesCommandInput}
 * @returns {@link DescribeLaunchConfigurationTemplatesCommandOutput}
 * @see {@link DescribeLaunchConfigurationTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeLaunchConfigurationTemplatesCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
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
export class DescribeLaunchConfigurationTemplatesCommand extends $Command<
  DescribeLaunchConfigurationTemplatesCommandInput,
  DescribeLaunchConfigurationTemplatesCommandOutput,
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
  constructor(readonly input: DescribeLaunchConfigurationTemplatesCommandInput) {
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
  ): Handler<DescribeLaunchConfigurationTemplatesCommandInput, DescribeLaunchConfigurationTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLaunchConfigurationTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "DescribeLaunchConfigurationTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeLaunchConfigurationTemplatesResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ApplicationMigrationService",
        operation: "DescribeLaunchConfigurationTemplates",
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
    input: DescribeLaunchConfigurationTemplatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeLaunchConfigurationTemplatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLaunchConfigurationTemplatesCommandOutput> {
    return de_DescribeLaunchConfigurationTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
