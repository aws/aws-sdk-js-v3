// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSubscriptionTargetsInput, ListSubscriptionTargetsOutput } from "../models/models_1";
import { ListSubscriptionTargets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSubscriptionTargetsCommand}.
 */
export interface ListSubscriptionTargetsCommandInput extends ListSubscriptionTargetsInput {}
/**
 * @public
 *
 * The output of {@link ListSubscriptionTargetsCommand}.
 */
export interface ListSubscriptionTargetsCommandOutput extends ListSubscriptionTargetsOutput, __MetadataBearer {}

/**
 * Lists subscription targets in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListSubscriptionTargetsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListSubscriptionTargetsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListSubscriptionTargetsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   sortBy: "CREATED_AT" || "UPDATED_AT",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSubscriptionTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscriptionTargetsOutput
 * //   items: [ // SubscriptionTargets // required
 * //     { // SubscriptionTargetSummary
 * //       id: "STRING_VALUE", // required
 * //       authorizedPrincipals: [ // AuthorizedPrincipalIdentifiers // required
 * //         "STRING_VALUE",
 * //       ],
 * //       domainId: "STRING_VALUE", // required
 * //       projectId: "STRING_VALUE", // required
 * //       environmentId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedBy: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       manageAccessRole: "STRING_VALUE",
 * //       applicableAssetTypes: [ // ApplicableAssetTypes // required
 * //         "STRING_VALUE",
 * //       ],
 * //       subscriptionTargetConfig: [ // SubscriptionTargetForms // required
 * //         { // SubscriptionTargetForm
 * //           formName: "STRING_VALUE", // required
 * //           content: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       provider: "STRING_VALUE", // required
 * //       subscriptionGrantCreationMode: "AUTOMATIC" || "MANUAL",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubscriptionTargetsCommandInput - {@link ListSubscriptionTargetsCommandInput}
 * @returns {@link ListSubscriptionTargetsCommandOutput}
 * @see {@link ListSubscriptionTargetsCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionTargetsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
export class ListSubscriptionTargetsCommand extends command<ListSubscriptionTargetsCommandInput, ListSubscriptionTargetsCommandOutput>(
  _ep0,
  _mw0,
  "ListSubscriptionTargets",
  ListSubscriptionTargets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubscriptionTargetsInput;
      output: ListSubscriptionTargetsOutput;
    };
    sdk: {
      input: ListSubscriptionTargetsCommandInput;
      output: ListSubscriptionTargetsCommandOutput;
    };
  };
}
