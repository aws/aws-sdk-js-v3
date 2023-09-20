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

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetDistributionConfigurationRequest, GetDistributionConfigurationResponse } from "../models/models_0";
import {
  de_GetDistributionConfigurationCommand,
  se_GetDistributionConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDistributionConfigurationCommand}.
 */
export interface GetDistributionConfigurationCommandInput extends GetDistributionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetDistributionConfigurationCommand}.
 */
export interface GetDistributionConfigurationCommandOutput
  extends GetDistributionConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a distribution configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetDistributionConfigurationCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetDistributionConfigurationCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // GetDistributionConfigurationRequest
 *   distributionConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new GetDistributionConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetDistributionConfigurationResponse
 * //   requestId: "STRING_VALUE",
 * //   distributionConfiguration: { // DistributionConfiguration
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     distributions: [ // DistributionList
 * //       { // Distribution
 * //         region: "STRING_VALUE", // required
 * //         amiDistributionConfiguration: { // AmiDistributionConfiguration
 * //           name: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           targetAccountIds: [ // AccountList
 * //             "STRING_VALUE",
 * //           ],
 * //           amiTags: { // TagMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           kmsKeyId: "STRING_VALUE",
 * //           launchPermission: { // LaunchPermissionConfiguration
 * //             userIds: [
 * //               "STRING_VALUE",
 * //             ],
 * //             userGroups: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //             organizationArns: [ // OrganizationArnList
 * //               "STRING_VALUE",
 * //             ],
 * //             organizationalUnitArns: [ // OrganizationalUnitArnList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         containerDistributionConfiguration: { // ContainerDistributionConfiguration
 * //           description: "STRING_VALUE",
 * //           containerTags: [
 * //             "STRING_VALUE",
 * //           ],
 * //           targetRepository: { // TargetContainerRepository
 * //             service: "ECR", // required
 * //             repositoryName: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         licenseConfigurationArns: [ // LicenseConfigurationArnList
 * //           "STRING_VALUE",
 * //         ],
 * //         launchTemplateConfigurations: [ // LaunchTemplateConfigurationList
 * //           { // LaunchTemplateConfiguration
 * //             launchTemplateId: "STRING_VALUE", // required
 * //             accountId: "STRING_VALUE",
 * //             setDefaultVersion: true || false,
 * //           },
 * //         ],
 * //         s3ExportConfiguration: { // S3ExportConfiguration
 * //           roleName: "STRING_VALUE", // required
 * //           diskImageFormat: "VMDK" || "RAW" || "VHD", // required
 * //           s3Bucket: "STRING_VALUE", // required
 * //           s3Prefix: "STRING_VALUE",
 * //         },
 * //         fastLaunchConfigurations: [ // FastLaunchConfigurationList
 * //           { // FastLaunchConfiguration
 * //             enabled: true || false, // required
 * //             snapshotConfiguration: { // FastLaunchSnapshotConfiguration
 * //               targetResourceCount: Number("int"),
 * //             },
 * //             maxParallelLaunches: Number("int"),
 * //             launchTemplate: { // FastLaunchLaunchTemplateSpecification
 * //               launchTemplateId: "STRING_VALUE",
 * //               launchTemplateName: "STRING_VALUE",
 * //               launchTemplateVersion: "STRING_VALUE",
 * //             },
 * //             accountId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     timeoutMinutes: Number("int"), // required
 * //     dateCreated: "STRING_VALUE",
 * //     dateUpdated: "STRING_VALUE",
 * //     tags: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDistributionConfigurationCommandInput - {@link GetDistributionConfigurationCommandInput}
 * @returns {@link GetDistributionConfigurationCommandOutput}
 * @see {@link GetDistributionConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetDistributionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 */
export class GetDistributionConfigurationCommand extends $Command<
  GetDistributionConfigurationCommandInput,
  GetDistributionConfigurationCommandOutput,
  ImagebuilderClientResolvedConfig
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
  constructor(readonly input: GetDistributionConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDistributionConfigurationCommandInput, GetDistributionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDistributionConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "GetDistributionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "imagebuilder",
        operation: "GetDistributionConfiguration",
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
  private serialize(input: GetDistributionConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDistributionConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDistributionConfigurationCommandOutput> {
    return de_GetDistributionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
