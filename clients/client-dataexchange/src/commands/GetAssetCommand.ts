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

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { GetAssetRequest, GetAssetResponse } from "../models/models_0";
import { de_GetAssetCommand, se_GetAssetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAssetCommand}.
 */
export interface GetAssetCommandInput extends GetAssetRequest {}
/**
 * @public
 *
 * The output of {@link GetAssetCommand}.
 */
export interface GetAssetCommandOutput extends GetAssetResponse, __MetadataBearer {}

/**
 * @public
 * <p>This operation returns information about an asset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, GetAssetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, GetAssetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // GetAssetRequest
 *   AssetId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   RevisionId: "STRING_VALUE", // required
 * };
 * const command = new GetAssetCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetResponse
 * //   Arn: "STRING_VALUE",
 * //   AssetDetails: { // AssetDetails
 * //     S3SnapshotAsset: { // S3SnapshotAsset
 * //       Size: Number("double"), // required
 * //     },
 * //     RedshiftDataShareAsset: { // RedshiftDataShareAsset
 * //       Arn: "STRING_VALUE", // required
 * //     },
 * //     ApiGatewayApiAsset: { // ApiGatewayApiAsset
 * //       ApiDescription: "STRING_VALUE",
 * //       ApiEndpoint: "STRING_VALUE",
 * //       ApiId: "STRING_VALUE",
 * //       ApiKey: "STRING_VALUE",
 * //       ApiName: "STRING_VALUE",
 * //       ApiSpecificationDownloadUrl: "STRING_VALUE",
 * //       ApiSpecificationDownloadUrlExpiresAt: new Date("TIMESTAMP"),
 * //       ProtocolType: "STRING_VALUE",
 * //       Stage: "STRING_VALUE",
 * //     },
 * //     S3DataAccessAsset: { // S3DataAccessAsset
 * //       Bucket: "STRING_VALUE", // required
 * //       KeyPrefixes: [ // ListOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       Keys: [
 * //         "STRING_VALUE",
 * //       ],
 * //       S3AccessPointAlias: "STRING_VALUE",
 * //       S3AccessPointArn: "STRING_VALUE",
 * //       KmsKeysToGrant: [ // ListOfKmsKeysToGrant
 * //         { // KmsKeyToGrant
 * //           KmsKeyArn: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     LakeFormationDataPermissionAsset: { // LakeFormationDataPermissionAsset
 * //       LakeFormationDataPermissionDetails: { // LakeFormationDataPermissionDetails
 * //         LFTagPolicy: { // LFTagPolicyDetails
 * //           CatalogId: "STRING_VALUE", // required
 * //           ResourceType: "STRING_VALUE", // required
 * //           ResourceDetails: { // LFResourceDetails
 * //             Database: { // DatabaseLFTagPolicy
 * //               Expression: [ // ListOfLFTags // required
 * //                 { // LFTag
 * //                   TagKey: "STRING_VALUE", // required
 * //                   TagValues: [ // ListOfLFTagValues // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               ],
 * //             },
 * //             Table: { // TableLFTagPolicy
 * //               Expression: [ // required
 * //                 {
 * //                   TagKey: "STRING_VALUE", // required
 * //                   TagValues: [ // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       },
 * //       LakeFormationDataPermissionType: "STRING_VALUE", // required
 * //       Permissions: [ // ListOfLFPermissions // required
 * //         "STRING_VALUE",
 * //       ],
 * //       RoleArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   AssetType: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   DataSetId: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   RevisionId: "STRING_VALUE",
 * //   SourceId: "STRING_VALUE",
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAssetCommandInput - {@link GetAssetCommandInput}
 * @returns {@link GetAssetCommandOutput}
 * @see {@link GetAssetCommandInput} for command's `input` shape.
 * @see {@link GetAssetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link DataExchangeServiceException}
 * <p>Base exception class for all service exceptions from DataExchange service.</p>
 *
 */
export class GetAssetCommand extends $Command<
  GetAssetCommandInput,
  GetAssetCommandOutput,
  DataExchangeClientResolvedConfig
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
  constructor(readonly input: GetAssetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataExchangeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAssetCommandInput, GetAssetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetAssetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataExchangeClient";
    const commandName = "GetAssetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataExchange",
        operation: "GetAsset",
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
  private serialize(input: GetAssetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAssetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAssetCommandOutput> {
    return de_GetAssetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
