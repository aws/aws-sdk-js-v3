// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRevisionAssetsRequest, ListRevisionAssetsResponse } from "../models/models_0";
import { ListRevisionAssets } from "../schemas/schemas_1_Asset";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRevisionAssetsCommand}.
 */
export interface ListRevisionAssetsCommandInput extends ListRevisionAssetsRequest {}
/**
 * @public
 *
 * The output of {@link ListRevisionAssetsCommand}.
 */
export interface ListRevisionAssetsCommandOutput extends ListRevisionAssetsResponse, __MetadataBearer {}

/**
 * <p>This operation lists a revision's assets sorted alphabetically in descending
 *          order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListRevisionAssetsCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, ListRevisionAssetsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // ListRevisionAssetsRequest
 *   DataSetId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RevisionId: "STRING_VALUE", // required
 * };
 * const command = new ListRevisionAssetsCommand(input);
 * const response = await client.send(command);
 * // { // ListRevisionAssetsResponse
 * //   Assets: [ // ListOfAssetEntry
 * //     { // AssetEntry
 * //       Arn: "STRING_VALUE", // required
 * //       AssetDetails: { // AssetDetails
 * //         S3SnapshotAsset: { // S3SnapshotAsset
 * //           Size: Number("double"), // required
 * //         },
 * //         RedshiftDataShareAsset: { // RedshiftDataShareAsset
 * //           Arn: "STRING_VALUE", // required
 * //         },
 * //         ApiGatewayApiAsset: { // ApiGatewayApiAsset
 * //           ApiDescription: "STRING_VALUE",
 * //           ApiEndpoint: "STRING_VALUE",
 * //           ApiId: "STRING_VALUE",
 * //           ApiKey: "STRING_VALUE",
 * //           ApiName: "STRING_VALUE",
 * //           ApiSpecificationDownloadUrl: "STRING_VALUE",
 * //           ApiSpecificationDownloadUrlExpiresAt: new Date("TIMESTAMP"),
 * //           ProtocolType: "STRING_VALUE",
 * //           Stage: "STRING_VALUE",
 * //         },
 * //         S3DataAccessAsset: { // S3DataAccessAsset
 * //           Bucket: "STRING_VALUE", // required
 * //           KeyPrefixes: [ // ListOf__string
 * //             "STRING_VALUE",
 * //           ],
 * //           Keys: [
 * //             "STRING_VALUE",
 * //           ],
 * //           S3AccessPointAlias: "STRING_VALUE",
 * //           S3AccessPointArn: "STRING_VALUE",
 * //           KmsKeysToGrant: [ // ListOfKmsKeysToGrant
 * //             { // KmsKeyToGrant
 * //               KmsKeyArn: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         LakeFormationDataPermissionAsset: { // LakeFormationDataPermissionAsset
 * //           LakeFormationDataPermissionDetails: { // LakeFormationDataPermissionDetails
 * //             LFTagPolicy: { // LFTagPolicyDetails
 * //               CatalogId: "STRING_VALUE", // required
 * //               ResourceType: "STRING_VALUE", // required
 * //               ResourceDetails: { // LFResourceDetails
 * //                 Database: { // DatabaseLFTagPolicy
 * //                   Expression: [ // ListOfLFTags // required
 * //                     { // LFTag
 * //                       TagKey: "STRING_VALUE", // required
 * //                       TagValues: [ // ListOfLFTagValues // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   ],
 * //                 },
 * //                 Table: { // TableLFTagPolicy
 * //                   Expression: [ // required
 * //                     {
 * //                       TagKey: "STRING_VALUE", // required
 * //                       TagValues: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //             },
 * //           },
 * //           LakeFormationDataPermissionType: "STRING_VALUE", // required
 * //           Permissions: [ // ListOfLFPermissions // required
 * //             "STRING_VALUE",
 * //           ],
 * //           RoleArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       AssetType: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       DataSetId: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       RevisionId: "STRING_VALUE", // required
 * //       SourceId: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRevisionAssetsCommandInput - {@link ListRevisionAssetsCommandInput}
 * @returns {@link ListRevisionAssetsCommandOutput}
 * @see {@link ListRevisionAssetsCommandInput} for command's `input` shape.
 * @see {@link ListRevisionAssetsCommandOutput} for command's `response` shape.
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
export class ListRevisionAssetsCommand extends $Command
  .classBuilder<
    ListRevisionAssetsCommandInput,
    ListRevisionAssetsCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataExchange", "ListRevisionAssets", {})
  .n("DataExchangeClient", "ListRevisionAssetsCommand")
  .sc(ListRevisionAssets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRevisionAssetsRequest;
      output: ListRevisionAssetsResponse;
    };
    sdk: {
      input: ListRevisionAssetsCommandInput;
      output: ListRevisionAssetsCommandOutput;
    };
  };
}
