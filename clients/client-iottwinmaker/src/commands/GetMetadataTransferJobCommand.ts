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
import { GetMetadataTransferJobRequest, GetMetadataTransferJobResponse } from "../models/models_0";
import { de_GetMetadataTransferJobCommand, se_GetMetadataTransferJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMetadataTransferJobCommand}.
 */
export interface GetMetadataTransferJobCommandInput extends GetMetadataTransferJobRequest {}
/**
 * @public
 *
 * The output of {@link GetMetadataTransferJobCommand}.
 */
export interface GetMetadataTransferJobCommandOutput extends GetMetadataTransferJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a nmetadata transfer job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, GetMetadataTransferJobCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, GetMetadataTransferJobCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // GetMetadataTransferJobRequest
 *   metadataTransferJobId: "STRING_VALUE", // required
 * };
 * const command = new GetMetadataTransferJobCommand(input);
 * const response = await client.send(command);
 * // { // GetMetadataTransferJobResponse
 * //   metadataTransferJobId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   sources: [ // SourceConfigurations // required
 * //     { // SourceConfiguration
 * //       type: "STRING_VALUE", // required
 * //       s3Configuration: { // S3SourceConfiguration
 * //         location: "STRING_VALUE", // required
 * //       },
 * //       iotSiteWiseConfiguration: { // IotSiteWiseSourceConfiguration
 * //         filters: [ // IotSiteWiseSourceConfigurationFilters
 * //           { // IotSiteWiseSourceConfigurationFilter Union: only one key present
 * //             filterByAssetModel: { // FilterByAssetModel
 * //               assetModelId: "STRING_VALUE",
 * //               assetModelExternalId: "STRING_VALUE",
 * //               includeOffspring: true || false,
 * //               includeAssets: true || false,
 * //             },
 * //             filterByAsset: { // FilterByAsset
 * //               assetId: "STRING_VALUE",
 * //               assetExternalId: "STRING_VALUE",
 * //               includeOffspring: true || false,
 * //               includeAssetModel: true || false,
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       iotTwinMakerConfiguration: { // IotTwinMakerSourceConfiguration
 * //         workspace: "STRING_VALUE", // required
 * //         filters: [ // IotTwinMakerSourceConfigurationFilters
 * //           { // IotTwinMakerSourceConfigurationFilter Union: only one key present
 * //             filterByComponentType: { // FilterByComponentType
 * //               componentTypeId: "STRING_VALUE", // required
 * //             },
 * //             filterByEntity: { // FilterByEntity
 * //               entityId: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   destination: { // DestinationConfiguration
 * //     type: "STRING_VALUE", // required
 * //     s3Configuration: { // S3DestinationConfiguration
 * //       location: "STRING_VALUE", // required
 * //     },
 * //     iotTwinMakerConfiguration: { // IotTwinMakerDestinationConfiguration
 * //       workspace: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   metadataTransferJobRole: "STRING_VALUE", // required
 * //   reportUrl: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"), // required
 * //   updateDateTime: new Date("TIMESTAMP"), // required
 * //   status: { // MetadataTransferJobStatus
 * //     state: "STRING_VALUE",
 * //     error: { // ErrorDetails
 * //       code: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //     queuedPosition: Number("int"),
 * //   },
 * //   progress: { // MetadataTransferJobProgress
 * //     totalCount: Number("int"),
 * //     succeededCount: Number("int"),
 * //     skippedCount: Number("int"),
 * //     failedCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMetadataTransferJobCommandInput - {@link GetMetadataTransferJobCommandInput}
 * @returns {@link GetMetadataTransferJobCommandOutput}
 * @see {@link GetMetadataTransferJobCommandInput} for command's `input` shape.
 * @see {@link GetMetadataTransferJobCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
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
export class GetMetadataTransferJobCommand extends $Command<
  GetMetadataTransferJobCommandInput,
  GetMetadataTransferJobCommandOutput,
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
  constructor(readonly input: GetMetadataTransferJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTTwinMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMetadataTransferJobCommandInput, GetMetadataTransferJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMetadataTransferJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTTwinMakerClient";
    const commandName = "GetMetadataTransferJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTTwinMaker",
        operation: "GetMetadataTransferJob",
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
  private serialize(input: GetMetadataTransferJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMetadataTransferJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMetadataTransferJobCommandOutput> {
    return de_GetMetadataTransferJobCommand(output, context);
  }
}
