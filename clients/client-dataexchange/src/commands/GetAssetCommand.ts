// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAssetRequest, GetAssetResponse } from "../models/models_0";
import { de_GetAssetCommand, se_GetAssetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *
 * @public
 */
export class GetAssetCommand extends $Command
  .classBuilder<
    GetAssetCommandInput,
    GetAssetCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataExchange", "GetAsset", {})
  .n("DataExchangeClient", "GetAssetCommand")
  .f(void 0, void 0)
  .ser(se_GetAssetCommand)
  .de(de_GetAssetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssetRequest;
      output: GetAssetResponse;
    };
    sdk: {
      input: GetAssetCommandInput;
      output: GetAssetCommandOutput;
    };
  };
}
