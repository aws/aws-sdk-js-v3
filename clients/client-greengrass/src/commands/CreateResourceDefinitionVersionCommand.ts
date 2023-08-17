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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateResourceDefinitionVersionRequest, CreateResourceDefinitionVersionResponse } from "../models/models_0";
import {
  de_CreateResourceDefinitionVersionCommand,
  se_CreateResourceDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateResourceDefinitionVersionCommand}.
 */
export interface CreateResourceDefinitionVersionCommandInput extends CreateResourceDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceDefinitionVersionCommand}.
 */
export interface CreateResourceDefinitionVersionCommandOutput
  extends CreateResourceDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * @public
 * Creates a version of a resource definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateResourceDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateResourceDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // CreateResourceDefinitionVersionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   ResourceDefinitionId: "STRING_VALUE", // required
 *   Resources: [ // __listOfResource
 *     { // Resource
 *       Id: "STRING_VALUE", // required
 *       Name: "STRING_VALUE", // required
 *       ResourceDataContainer: { // ResourceDataContainer
 *         LocalDeviceResourceData: { // LocalDeviceResourceData
 *           GroupOwnerSetting: { // GroupOwnerSetting
 *             AutoAddGroupOwner: true || false,
 *             GroupOwner: "STRING_VALUE",
 *           },
 *           SourcePath: "STRING_VALUE",
 *         },
 *         LocalVolumeResourceData: { // LocalVolumeResourceData
 *           DestinationPath: "STRING_VALUE",
 *           GroupOwnerSetting: {
 *             AutoAddGroupOwner: true || false,
 *             GroupOwner: "STRING_VALUE",
 *           },
 *           SourcePath: "STRING_VALUE",
 *         },
 *         S3MachineLearningModelResourceData: { // S3MachineLearningModelResourceData
 *           DestinationPath: "STRING_VALUE",
 *           OwnerSetting: { // ResourceDownloadOwnerSetting
 *             GroupOwner: "STRING_VALUE", // required
 *             GroupPermission: "ro" || "rw", // required
 *           },
 *           S3Uri: "STRING_VALUE",
 *         },
 *         SageMakerMachineLearningModelResourceData: { // SageMakerMachineLearningModelResourceData
 *           DestinationPath: "STRING_VALUE",
 *           OwnerSetting: {
 *             GroupOwner: "STRING_VALUE", // required
 *             GroupPermission: "ro" || "rw", // required
 *           },
 *           SageMakerJobArn: "STRING_VALUE",
 *         },
 *         SecretsManagerSecretResourceData: { // SecretsManagerSecretResourceData
 *           ARN: "STRING_VALUE",
 *           AdditionalStagingLabelsToDownload: [ // __listOf__string
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateResourceDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateResourceDefinitionVersionCommandInput - {@link CreateResourceDefinitionVersionCommandInput}
 * @returns {@link CreateResourceDefinitionVersionCommandOutput}
 * @see {@link CreateResourceDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateResourceDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class CreateResourceDefinitionVersionCommand extends $Command<
  CreateResourceDefinitionVersionCommandInput,
  CreateResourceDefinitionVersionCommandOutput,
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
  constructor(readonly input: CreateResourceDefinitionVersionCommandInput) {
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
  ): Handler<CreateResourceDefinitionVersionCommandInput, CreateResourceDefinitionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateResourceDefinitionVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateResourceDefinitionVersionCommand";
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
  private serialize(
    input: CreateResourceDefinitionVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateResourceDefinitionVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateResourceDefinitionVersionCommandOutput> {
    return de_CreateResourceDefinitionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
