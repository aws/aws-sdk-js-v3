// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSubscriptionTargetInput, CreateSubscriptionTargetOutput } from "../models/models_1";
import { CreateSubscriptionTarget } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSubscriptionTargetCommand}.
 */
export interface CreateSubscriptionTargetCommandInput extends CreateSubscriptionTargetInput {}
/**
 * @public
 *
 * The output of {@link CreateSubscriptionTargetCommand}.
 */
export interface CreateSubscriptionTargetCommandOutput extends CreateSubscriptionTargetOutput, __MetadataBearer {}

/**
 * <p>Creates a subscription target in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateSubscriptionTargetCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateSubscriptionTargetCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateSubscriptionTargetInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   subscriptionTargetConfig: [ // SubscriptionTargetForms // required
 *     { // SubscriptionTargetForm
 *       formName: "STRING_VALUE", // required
 *       content: "STRING_VALUE", // required
 *     },
 *   ],
 *   authorizedPrincipals: [ // AuthorizedPrincipalIdentifiers // required
 *     "STRING_VALUE",
 *   ],
 *   manageAccessRole: "STRING_VALUE", // required
 *   applicableAssetTypes: [ // ApplicableAssetTypes // required
 *     "STRING_VALUE",
 *   ],
 *   provider: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateSubscriptionTargetCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubscriptionTargetOutput
 * //   id: "STRING_VALUE", // required
 * //   authorizedPrincipals: [ // AuthorizedPrincipalIdentifiers // required
 * //     "STRING_VALUE",
 * //   ],
 * //   domainId: "STRING_VALUE", // required
 * //   projectId: "STRING_VALUE", // required
 * //   environmentId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   type: "STRING_VALUE", // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedBy: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   manageAccessRole: "STRING_VALUE",
 * //   applicableAssetTypes: [ // ApplicableAssetTypes // required
 * //     "STRING_VALUE",
 * //   ],
 * //   subscriptionTargetConfig: [ // SubscriptionTargetForms // required
 * //     { // SubscriptionTargetForm
 * //       formName: "STRING_VALUE", // required
 * //       content: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   provider: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateSubscriptionTargetCommandInput - {@link CreateSubscriptionTargetCommandInput}
 * @returns {@link CreateSubscriptionTargetCommandOutput}
 * @see {@link CreateSubscriptionTargetCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriptionTargetCommandOutput} for command's `response` shape.
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
export class CreateSubscriptionTargetCommand extends $Command
  .classBuilder<
    CreateSubscriptionTargetCommandInput,
    CreateSubscriptionTargetCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "CreateSubscriptionTarget", {})
  .n("DataZoneClient", "CreateSubscriptionTargetCommand")
  .sc(CreateSubscriptionTarget)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSubscriptionTargetInput;
      output: CreateSubscriptionTargetOutput;
    };
    sdk: {
      input: CreateSubscriptionTargetCommandInput;
      output: CreateSubscriptionTargetCommandOutput;
    };
  };
}
