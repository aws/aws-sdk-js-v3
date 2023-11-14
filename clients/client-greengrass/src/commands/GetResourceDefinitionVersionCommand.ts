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
import { GetResourceDefinitionVersionRequest, GetResourceDefinitionVersionResponse } from "../models/models_0";
import {
  de_GetResourceDefinitionVersionCommand,
  se_GetResourceDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetResourceDefinitionVersionCommand}.
 */
export interface GetResourceDefinitionVersionCommandInput extends GetResourceDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceDefinitionVersionCommand}.
 */
export interface GetResourceDefinitionVersionCommandOutput
  extends GetResourceDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * @public
 * Retrieves information about a resource definition version, including which resources are included in the version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetResourceDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetResourceDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetResourceDefinitionVersionRequest
 *   ResourceDefinitionId: "STRING_VALUE", // required
 *   ResourceDefinitionVersionId: "STRING_VALUE", // required
 * };
 * const command = new GetResourceDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Definition: { // ResourceDefinitionVersion
 * //     Resources: [ // __listOfResource
 * //       { // Resource
 * //         Id: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         ResourceDataContainer: { // ResourceDataContainer
 * //           LocalDeviceResourceData: { // LocalDeviceResourceData
 * //             GroupOwnerSetting: { // GroupOwnerSetting
 * //               AutoAddGroupOwner: true || false,
 * //               GroupOwner: "STRING_VALUE",
 * //             },
 * //             SourcePath: "STRING_VALUE",
 * //           },
 * //           LocalVolumeResourceData: { // LocalVolumeResourceData
 * //             DestinationPath: "STRING_VALUE",
 * //             GroupOwnerSetting: {
 * //               AutoAddGroupOwner: true || false,
 * //               GroupOwner: "STRING_VALUE",
 * //             },
 * //             SourcePath: "STRING_VALUE",
 * //           },
 * //           S3MachineLearningModelResourceData: { // S3MachineLearningModelResourceData
 * //             DestinationPath: "STRING_VALUE",
 * //             OwnerSetting: { // ResourceDownloadOwnerSetting
 * //               GroupOwner: "STRING_VALUE", // required
 * //               GroupPermission: "ro" || "rw", // required
 * //             },
 * //             S3Uri: "STRING_VALUE",
 * //           },
 * //           SageMakerMachineLearningModelResourceData: { // SageMakerMachineLearningModelResourceData
 * //             DestinationPath: "STRING_VALUE",
 * //             OwnerSetting: {
 * //               GroupOwner: "STRING_VALUE", // required
 * //               GroupPermission: "ro" || "rw", // required
 * //             },
 * //             SageMakerJobArn: "STRING_VALUE",
 * //           },
 * //           SecretsManagerSecretResourceData: { // SecretsManagerSecretResourceData
 * //             ARN: "STRING_VALUE",
 * //             AdditionalStagingLabelsToDownload: [ // __listOf__string
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourceDefinitionVersionCommandInput - {@link GetResourceDefinitionVersionCommandInput}
 * @returns {@link GetResourceDefinitionVersionCommandOutput}
 * @see {@link GetResourceDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetResourceDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class GetResourceDefinitionVersionCommand extends $Command<
  GetResourceDefinitionVersionCommandInput,
  GetResourceDefinitionVersionCommandOutput,
  GreengrassClientResolvedConfig
> {
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
  constructor(readonly input: GetResourceDefinitionVersionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceDefinitionVersionCommandInput, GetResourceDefinitionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourceDefinitionVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetResourceDefinitionVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Greengrass",
        operation: "GetResourceDefinitionVersion",
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
  private serialize(input: GetResourceDefinitionVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetResourceDefinitionVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResourceDefinitionVersionCommandOutput> {
    return de_GetResourceDefinitionVersionCommand(output, context);
  }
}
