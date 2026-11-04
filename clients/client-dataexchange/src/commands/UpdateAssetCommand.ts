// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAssetRequest, UpdateAssetResponse } from "../models/models_0";
import { UpdateAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAssetCommand}.
 */
export interface UpdateAssetCommandInput extends UpdateAssetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssetCommand}.
 */
export interface UpdateAssetCommandOutput extends UpdateAssetResponse, __MetadataBearer {}

/**
 * This operation updates an asset.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, UpdateAssetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, UpdateAssetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // UpdateAssetRequest
 *   AssetId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   RevisionId: "STRING_VALUE", // required
 * };
 * const command = new UpdateAssetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssetResponse
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
 * @param UpdateAssetCommandInput - {@link UpdateAssetCommandInput}
 * @returns {@link UpdateAssetCommandOutput}
 * @see {@link UpdateAssetCommandInput} for command's `input` shape.
 * @see {@link UpdateAssetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the resource is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request couldn't be completed because it conflicted with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was invalid.
 *
 * @throws {@link DataExchangeServiceException}
 *
 * Base exception class for all service exceptions from DataExchange service.
 *
 * @public
 */
export class UpdateAssetCommand extends command<UpdateAssetCommandInput, UpdateAssetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAsset",
  UpdateAsset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAssetRequest;
      output: UpdateAssetResponse;
    };
    sdk: {
      input: UpdateAssetCommandInput;
      output: UpdateAssetCommandOutput;
    };
  };
}
