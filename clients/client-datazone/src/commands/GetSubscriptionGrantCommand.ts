// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSubscriptionGrantInput, GetSubscriptionGrantOutput } from "../models/models_1";
import { GetSubscriptionGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSubscriptionGrantCommand}.
 */
export interface GetSubscriptionGrantCommandInput extends GetSubscriptionGrantInput {}
/**
 * @public
 *
 * The output of {@link GetSubscriptionGrantCommand}.
 */
export interface GetSubscriptionGrantCommandOutput extends GetSubscriptionGrantOutput, __MetadataBearer {}

/**
 * <p>Gets the subscription grant in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetSubscriptionGrantCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetSubscriptionGrantCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetSubscriptionGrantInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetSubscriptionGrantCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriptionGrantOutput
 * //   id: "STRING_VALUE", // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedBy: "STRING_VALUE",
 * //   domainId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   environmentId: "STRING_VALUE",
 * //   subscriptionTargetId: "STRING_VALUE", // required
 * //   grantedEntity: { // GrantedEntity Union: only one key present
 * //     listing: { // ListingRevision
 * //       id: "STRING_VALUE", // required
 * //       revision: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   status: "PENDING" || "IN_PROGRESS" || "GRANT_FAILED" || "REVOKE_FAILED" || "GRANT_AND_REVOKE_FAILED" || "COMPLETED" || "INACCESSIBLE", // required
 * //   assets: [ // SubscribedAssets
 * //     { // SubscribedAsset
 * //       assetId: "STRING_VALUE", // required
 * //       assetRevision: "STRING_VALUE", // required
 * //       status: "GRANT_PENDING" || "REVOKE_PENDING" || "GRANT_IN_PROGRESS" || "REVOKE_IN_PROGRESS" || "GRANTED" || "REVOKED" || "GRANT_FAILED" || "REVOKE_FAILED", // required
 * //       targetName: "STRING_VALUE",
 * //       failureCause: { // FailureCause
 * //         message: "STRING_VALUE",
 * //       },
 * //       grantedTimestamp: new Date("TIMESTAMP"),
 * //       failureTimestamp: new Date("TIMESTAMP"),
 * //       assetScope: { // AssetScope
 * //         assetId: "STRING_VALUE", // required
 * //         filterIds: [ // FilterIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         status: "STRING_VALUE", // required
 * //         errorMessage: "STRING_VALUE",
 * //       },
 * //       permissions: { // Permissions Union: only one key present
 * //         s3: [ // S3Permissions
 * //           "READ" || "WRITE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   subscriptionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSubscriptionGrantCommandInput - {@link GetSubscriptionGrantCommandInput}
 * @returns {@link GetSubscriptionGrantCommandOutput}
 * @see {@link GetSubscriptionGrantCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionGrantCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetSubscriptionGrantCommand extends $Command
  .classBuilder<
    GetSubscriptionGrantCommandInput,
    GetSubscriptionGrantCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "GetSubscriptionGrant", {})
  .n("DataZoneClient", "GetSubscriptionGrantCommand")
  .sc(GetSubscriptionGrant$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSubscriptionGrantInput;
      output: GetSubscriptionGrantOutput;
    };
    sdk: {
      input: GetSubscriptionGrantCommandInput;
      output: GetSubscriptionGrantCommandOutput;
    };
  };
}
