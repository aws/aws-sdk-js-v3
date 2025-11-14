// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RevokeSubscriptionInput, RevokeSubscriptionOutput } from "../models/models_2";
import { RevokeSubscription } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokeSubscriptionCommand}.
 */
export interface RevokeSubscriptionCommandInput extends RevokeSubscriptionInput {}
/**
 * @public
 *
 * The output of {@link RevokeSubscriptionCommand}.
 */
export interface RevokeSubscriptionCommandOutput extends RevokeSubscriptionOutput, __MetadataBearer {}

/**
 * <p>Revokes a specified subscription in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, RevokeSubscriptionCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, RevokeSubscriptionCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // RevokeSubscriptionInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   retainPermissions: true || false,
 * };
 * const command = new RevokeSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // RevokeSubscriptionOutput
 * //   id: "STRING_VALUE", // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedBy: "STRING_VALUE",
 * //   domainId: "STRING_VALUE", // required
 * //   status: "APPROVED" || "REVOKED" || "CANCELLED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   subscribedPrincipal: { // SubscribedPrincipal Union: only one key present
 * //     project: { // SubscribedProject
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //     user: { // SubscribedUser
 * //       id: "STRING_VALUE",
 * //       details: { // UserProfileDetails Union: only one key present
 * //         iam: { // IamUserProfileDetails
 * //           arn: "STRING_VALUE",
 * //           principalId: "STRING_VALUE",
 * //         },
 * //         sso: { // SsoUserProfileDetails
 * //           username: "STRING_VALUE",
 * //           firstName: "STRING_VALUE",
 * //           lastName: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     group: { // SubscribedGroup
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //     },
 * //   },
 * //   subscribedListing: { // SubscribedListing
 * //     id: "STRING_VALUE", // required
 * //     revision: "STRING_VALUE",
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     item: { // SubscribedListingItem Union: only one key present
 * //       assetListing: { // SubscribedAssetListing
 * //         entityId: "STRING_VALUE",
 * //         entityRevision: "STRING_VALUE",
 * //         entityType: "STRING_VALUE",
 * //         forms: "STRING_VALUE",
 * //         glossaryTerms: [ // DetailedGlossaryTerms
 * //           { // DetailedGlossaryTerm
 * //             name: "STRING_VALUE",
 * //             shortDescription: "STRING_VALUE",
 * //           },
 * //         ],
 * //         assetScope: { // AssetScope
 * //           assetId: "STRING_VALUE", // required
 * //           filterIds: [ // FilterIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //           status: "STRING_VALUE", // required
 * //           errorMessage: "STRING_VALUE",
 * //         },
 * //         permissions: { // Permissions Union: only one key present
 * //           s3: [ // S3Permissions
 * //             "READ" || "WRITE",
 * //           ],
 * //         },
 * //       },
 * //       productListing: { // SubscribedProductListing
 * //         entityId: "STRING_VALUE",
 * //         entityRevision: "STRING_VALUE",
 * //         glossaryTerms: [
 * //           {
 * //             name: "STRING_VALUE",
 * //             shortDescription: "STRING_VALUE",
 * //           },
 * //         ],
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         assetListings: [ // AssetInDataProductListingItems
 * //           { // AssetInDataProductListingItem
 * //             entityId: "STRING_VALUE",
 * //             entityRevision: "STRING_VALUE",
 * //             entityType: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     ownerProjectId: "STRING_VALUE", // required
 * //     ownerProjectName: "STRING_VALUE",
 * //   },
 * //   subscriptionRequestId: "STRING_VALUE",
 * //   retainPermissions: true || false,
 * // };
 *
 * ```
 *
 * @param RevokeSubscriptionCommandInput - {@link RevokeSubscriptionCommandInput}
 * @returns {@link RevokeSubscriptionCommandOutput}
 * @see {@link RevokeSubscriptionCommandInput} for command's `input` shape.
 * @see {@link RevokeSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
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
 *
 * @public
 */
export class RevokeSubscriptionCommand extends $Command
  .classBuilder<
    RevokeSubscriptionCommandInput,
    RevokeSubscriptionCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "RevokeSubscription", {})
  .n("DataZoneClient", "RevokeSubscriptionCommand")
  .sc(RevokeSubscription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeSubscriptionInput;
      output: RevokeSubscriptionOutput;
    };
    sdk: {
      input: RevokeSubscriptionCommandInput;
      output: RevokeSubscriptionCommandOutput;
    };
  };
}
