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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateResourceDefinitionRequest, CreateResourceDefinitionResponse } from "../models/models_0";
import { de_CreateResourceDefinitionCommand, se_CreateResourceDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateResourceDefinitionCommand}.
 */
export interface CreateResourceDefinitionCommandInput extends CreateResourceDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceDefinitionCommand}.
 */
export interface CreateResourceDefinitionCommandOutput extends CreateResourceDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateResourceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateResourceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // CreateResourceDefinitionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   InitialVersion: { // ResourceDefinitionVersion
 *     Resources: [ // __listOfResource
 *       { // Resource
 *         Id: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         ResourceDataContainer: { // ResourceDataContainer
 *           LocalDeviceResourceData: { // LocalDeviceResourceData
 *             GroupOwnerSetting: { // GroupOwnerSetting
 *               AutoAddGroupOwner: true || false,
 *               GroupOwner: "STRING_VALUE",
 *             },
 *             SourcePath: "STRING_VALUE",
 *           },
 *           LocalVolumeResourceData: { // LocalVolumeResourceData
 *             DestinationPath: "STRING_VALUE",
 *             GroupOwnerSetting: {
 *               AutoAddGroupOwner: true || false,
 *               GroupOwner: "STRING_VALUE",
 *             },
 *             SourcePath: "STRING_VALUE",
 *           },
 *           S3MachineLearningModelResourceData: { // S3MachineLearningModelResourceData
 *             DestinationPath: "STRING_VALUE",
 *             OwnerSetting: { // ResourceDownloadOwnerSetting
 *               GroupOwner: "STRING_VALUE", // required
 *               GroupPermission: "ro" || "rw", // required
 *             },
 *             S3Uri: "STRING_VALUE",
 *           },
 *           SageMakerMachineLearningModelResourceData: { // SageMakerMachineLearningModelResourceData
 *             DestinationPath: "STRING_VALUE",
 *             OwnerSetting: {
 *               GroupOwner: "STRING_VALUE", // required
 *               GroupPermission: "ro" || "rw", // required
 *             },
 *             SageMakerJobArn: "STRING_VALUE",
 *           },
 *           SecretsManagerSecretResourceData: { // SecretsManagerSecretResourceData
 *             ARN: "STRING_VALUE",
 *             AdditionalStagingLabelsToDownload: [ // __listOf__string
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   Name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateResourceDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceDefinitionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   LastUpdatedTimestamp: "STRING_VALUE",
 * //   LatestVersion: "STRING_VALUE",
 * //   LatestVersionArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateResourceDefinitionCommandInput - {@link CreateResourceDefinitionCommandInput}
 * @returns {@link CreateResourceDefinitionCommandOutput}
 * @see {@link CreateResourceDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateResourceDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class CreateResourceDefinitionCommand extends $Command<
  CreateResourceDefinitionCommandInput,
  CreateResourceDefinitionCommandOutput,
  GreengrassClientResolvedConfig
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
  constructor(readonly input: CreateResourceDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateResourceDefinitionCommandInput, CreateResourceDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateResourceDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateResourceDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Greengrass",
        operation: "CreateResourceDefinition",
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
  private serialize(input: CreateResourceDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateResourceDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateResourceDefinitionCommandOutput> {
    return de_CreateResourceDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
