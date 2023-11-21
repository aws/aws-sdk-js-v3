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

import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { CreateMetadataTransferJobRequest, CreateMetadataTransferJobResponse } from "../models/models_0";
import { de_CreateMetadataTransferJobCommand, se_CreateMetadataTransferJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMetadataTransferJobCommand}.
 */
export interface CreateMetadataTransferJobCommandInput extends CreateMetadataTransferJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateMetadataTransferJobCommand}.
 */
export interface CreateMetadataTransferJobCommandOutput extends CreateMetadataTransferJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new metadata transfer job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, CreateMetadataTransferJobCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, CreateMetadataTransferJobCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // CreateMetadataTransferJobRequest
 *   metadataTransferJobId: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   sources: [ // SourceConfigurations // required
 *     { // SourceConfiguration
 *       type: "STRING_VALUE", // required
 *       s3Configuration: { // S3SourceConfiguration
 *         location: "STRING_VALUE", // required
 *       },
 *       iotSiteWiseConfiguration: { // IotSiteWiseSourceConfiguration
 *         filters: [ // IotSiteWiseSourceConfigurationFilters
 *           { // IotSiteWiseSourceConfigurationFilter Union: only one key present
 *             filterByAssetModel: { // FilterByAssetModel
 *               assetModelId: "STRING_VALUE",
 *               assetModelExternalId: "STRING_VALUE",
 *               includeOffspring: true || false,
 *               includeAssets: true || false,
 *             },
 *             filterByAsset: { // FilterByAsset
 *               assetId: "STRING_VALUE",
 *               assetExternalId: "STRING_VALUE",
 *               includeOffspring: true || false,
 *               includeAssetModel: true || false,
 *             },
 *           },
 *         ],
 *       },
 *       iotTwinMakerConfiguration: { // IotTwinMakerSourceConfiguration
 *         workspace: "STRING_VALUE", // required
 *         filters: [ // IotTwinMakerSourceConfigurationFilters
 *           { // IotTwinMakerSourceConfigurationFilter Union: only one key present
 *             filterByComponentType: { // FilterByComponentType
 *               componentTypeId: "STRING_VALUE", // required
 *             },
 *             filterByEntity: { // FilterByEntity
 *               entityId: "STRING_VALUE", // required
 *             },
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   destination: { // DestinationConfiguration
 *     type: "STRING_VALUE", // required
 *     s3Configuration: { // S3DestinationConfiguration
 *       location: "STRING_VALUE", // required
 *     },
 *     iotTwinMakerConfiguration: { // IotTwinMakerDestinationConfiguration
 *       workspace: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateMetadataTransferJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateMetadataTransferJobResponse
 * //   metadataTransferJobId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   status: { // MetadataTransferJobStatus
 * //     state: "STRING_VALUE",
 * //     error: { // ErrorDetails
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //     queuedPosition: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMetadataTransferJobCommandInput - {@link CreateMetadataTransferJobCommandInput}
 * @returns {@link CreateMetadataTransferJobCommandOutput}
 * @see {@link CreateMetadataTransferJobCommandInput} for command's `input` shape.
 * @see {@link CreateMetadataTransferJobCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 */
export class CreateMetadataTransferJobCommand extends $Command<
  CreateMetadataTransferJobCommandInput,
  CreateMetadataTransferJobCommandOutput,
  IoTTwinMakerClientResolvedConfig
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
  constructor(readonly input: CreateMetadataTransferJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTTwinMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMetadataTransferJobCommandInput, CreateMetadataTransferJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMetadataTransferJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "CreateMetadataTransferJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTTwinMaker",
        operation: "CreateMetadataTransferJob",
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
  private serialize(input: CreateMetadataTransferJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMetadataTransferJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMetadataTransferJobCommandOutput> {
    return de_CreateMetadataTransferJobCommand(output, context);
  }
}
