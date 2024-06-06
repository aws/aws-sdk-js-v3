// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetSubscriptionRequestDetailsInput,
  GetSubscriptionRequestDetailsOutput,
  GetSubscriptionRequestDetailsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetSubscriptionRequestDetailsCommand,
  se_GetSubscriptionRequestDetailsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSubscriptionRequestDetailsCommand}.
 */
export interface GetSubscriptionRequestDetailsCommandInput extends GetSubscriptionRequestDetailsInput {}
/**
 * @public
 *
 * The output of {@link GetSubscriptionRequestDetailsCommand}.
 */
export interface GetSubscriptionRequestDetailsCommandOutput
  extends GetSubscriptionRequestDetailsOutput,
    __MetadataBearer {}

/**
 * <p>Gets the details of the specified subscription request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetSubscriptionRequestDetailsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetSubscriptionRequestDetailsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetSubscriptionRequestDetailsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetSubscriptionRequestDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriptionRequestDetailsOutput
 * //   id: "STRING_VALUE", // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedBy: "STRING_VALUE",
 * //   domainId: "STRING_VALUE", // required
 * //   status: "PENDING" || "ACCEPTED" || "REJECTED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   requestReason: "STRING_VALUE", // required
 * //   subscribedPrincipals: [ // SubscribedPrincipals // required
 * //     { // SubscribedPrincipal Union: only one key present
 * //       project: { // SubscribedProject
 * //         id: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   subscribedListings: [ // SubscribedListings // required
 * //     { // SubscribedListing
 * //       id: "STRING_VALUE", // required
 * //       revision: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       item: { // SubscribedListingItem Union: only one key present
 * //         assetListing: { // SubscribedAssetListing
 * //           entityId: "STRING_VALUE",
 * //           entityRevision: "STRING_VALUE",
 * //           entityType: "STRING_VALUE",
 * //           forms: "STRING_VALUE",
 * //           glossaryTerms: [ // DetailedGlossaryTerms
 * //             { // DetailedGlossaryTerm
 * //               name: "STRING_VALUE",
 * //               shortDescription: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       ownerProjectId: "STRING_VALUE", // required
 * //       ownerProjectName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   reviewerId: "STRING_VALUE",
 * //   decisionComment: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSubscriptionRequestDetailsCommandInput - {@link GetSubscriptionRequestDetailsCommandInput}
 * @returns {@link GetSubscriptionRequestDetailsCommandOutput}
 * @see {@link GetSubscriptionRequestDetailsCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionRequestDetailsCommandOutput} for command's `response` shape.
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
export class GetSubscriptionRequestDetailsCommand extends $Command
  .classBuilder<
    GetSubscriptionRequestDetailsCommandInput,
    GetSubscriptionRequestDetailsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "GetSubscriptionRequestDetails", {})
  .n("DataZoneClient", "GetSubscriptionRequestDetailsCommand")
  .f(void 0, GetSubscriptionRequestDetailsOutputFilterSensitiveLog)
  .ser(se_GetSubscriptionRequestDetailsCommand)
  .de(de_GetSubscriptionRequestDetailsCommand)
  .build() {}
