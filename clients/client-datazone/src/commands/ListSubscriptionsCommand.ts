// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListSubscriptionsInput,
  ListSubscriptionsOutput,
  ListSubscriptionsOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_ListSubscriptionsCommand, se_ListSubscriptionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSubscriptionsCommand}.
 */
export interface ListSubscriptionsCommandInput extends ListSubscriptionsInput {}
/**
 * @public
 *
 * The output of {@link ListSubscriptionsCommand}.
 */
export interface ListSubscriptionsCommandOutput extends ListSubscriptionsOutput, __MetadataBearer {}

/**
 * <p>Lists subscriptions in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListSubscriptionsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListSubscriptionsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataZoneClient(config);
 * const input = { // ListSubscriptionsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   subscriptionRequestIdentifier: "STRING_VALUE",
 *   status: "APPROVED" || "REVOKED" || "CANCELLED",
 *   subscribedListingId: "STRING_VALUE",
 *   owningProjectId: "STRING_VALUE",
 *   approverProjectId: "STRING_VALUE",
 *   sortBy: "CREATED_AT" || "UPDATED_AT",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscriptionsOutput
 * //   items: [ // Subscriptions // required
 * //     { // SubscriptionSummary
 * //       id: "STRING_VALUE", // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedBy: "STRING_VALUE",
 * //       domainId: "STRING_VALUE", // required
 * //       status: "APPROVED" || "REVOKED" || "CANCELLED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       subscribedPrincipal: { // SubscribedPrincipal Union: only one key present
 * //         project: { // SubscribedProject
 * //           id: "STRING_VALUE",
 * //           name: "STRING_VALUE",
 * //         },
 * //       },
 * //       subscribedListing: { // SubscribedListing
 * //         id: "STRING_VALUE", // required
 * //         revision: "STRING_VALUE",
 * //         name: "STRING_VALUE", // required
 * //         description: "STRING_VALUE", // required
 * //         item: { // SubscribedListingItem Union: only one key present
 * //           assetListing: { // SubscribedAssetListing
 * //             entityId: "STRING_VALUE",
 * //             entityRevision: "STRING_VALUE",
 * //             entityType: "STRING_VALUE",
 * //             forms: "STRING_VALUE",
 * //             glossaryTerms: [ // DetailedGlossaryTerms
 * //               { // DetailedGlossaryTerm
 * //                 name: "STRING_VALUE",
 * //                 shortDescription: "STRING_VALUE",
 * //               },
 * //             ],
 * //             assetScope: { // AssetScope
 * //               assetId: "STRING_VALUE", // required
 * //               filterIds: [ // FilterIds // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               status: "STRING_VALUE", // required
 * //               errorMessage: "STRING_VALUE",
 * //             },
 * //           },
 * //           productListing: { // SubscribedProductListing
 * //             entityId: "STRING_VALUE",
 * //             entityRevision: "STRING_VALUE",
 * //             glossaryTerms: [
 * //               {
 * //                 name: "STRING_VALUE",
 * //                 shortDescription: "STRING_VALUE",
 * //               },
 * //             ],
 * //             name: "STRING_VALUE",
 * //             description: "STRING_VALUE",
 * //             assetListings: [ // AssetInDataProductListingItems
 * //               { // AssetInDataProductListingItem
 * //                 entityId: "STRING_VALUE",
 * //                 entityRevision: "STRING_VALUE",
 * //                 entityType: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         ownerProjectId: "STRING_VALUE", // required
 * //         ownerProjectName: "STRING_VALUE",
 * //       },
 * //       subscriptionRequestId: "STRING_VALUE",
 * //       retainPermissions: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubscriptionsCommandInput - {@link ListSubscriptionsCommandInput}
 * @returns {@link ListSubscriptionsCommandOutput}
 * @see {@link ListSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 * @public
 */
export class ListSubscriptionsCommand extends $Command
  .classBuilder<
    ListSubscriptionsCommandInput,
    ListSubscriptionsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "ListSubscriptions", {})
  .n("DataZoneClient", "ListSubscriptionsCommand")
  .f(void 0, ListSubscriptionsOutputFilterSensitiveLog)
  .ser(se_ListSubscriptionsCommand)
  .de(de_ListSubscriptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubscriptionsInput;
      output: ListSubscriptionsOutput;
    };
    sdk: {
      input: ListSubscriptionsCommandInput;
      output: ListSubscriptionsCommandOutput;
    };
  };
}
