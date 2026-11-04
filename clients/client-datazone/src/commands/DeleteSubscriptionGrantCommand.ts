// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSubscriptionGrantInput, DeleteSubscriptionGrantOutput } from "../models/models_1";
import { DeleteSubscriptionGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSubscriptionGrantCommand}.
 */
export interface DeleteSubscriptionGrantCommandInput extends DeleteSubscriptionGrantInput {}
/**
 * @public
 *
 * The output of {@link DeleteSubscriptionGrantCommand}.
 */
export interface DeleteSubscriptionGrantCommandOutput extends DeleteSubscriptionGrantOutput, __MetadataBearer {}

/**
 * Deletes and subscription grant in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteSubscriptionGrantCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteSubscriptionGrantCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteSubscriptionGrantInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteSubscriptionGrantCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSubscriptionGrantOutput
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
 * //         scopeName: "STRING_VALUE",
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
 * @param DeleteSubscriptionGrantCommandInput - {@link DeleteSubscriptionGrantCommandInput}
 * @returns {@link DeleteSubscriptionGrantCommandOutput}
 * @see {@link DeleteSubscriptionGrantCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriptionGrantCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class DeleteSubscriptionGrantCommand extends command<DeleteSubscriptionGrantCommandInput, DeleteSubscriptionGrantCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSubscriptionGrant",
  DeleteSubscriptionGrant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSubscriptionGrantInput;
      output: DeleteSubscriptionGrantOutput;
    };
    sdk: {
      input: DeleteSubscriptionGrantCommandInput;
      output: DeleteSubscriptionGrantCommandOutput;
    };
  };
}
