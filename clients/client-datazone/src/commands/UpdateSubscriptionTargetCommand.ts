// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateSubscriptionTargetInput,
  UpdateSubscriptionTargetInputFilterSensitiveLog,
  UpdateSubscriptionTargetOutput,
  UpdateSubscriptionTargetOutputFilterSensitiveLog,
} from "../models/models_2";
import { de_UpdateSubscriptionTargetCommand, se_UpdateSubscriptionTargetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSubscriptionTargetCommand}.
 */
export interface UpdateSubscriptionTargetCommandInput extends UpdateSubscriptionTargetInput {}
/**
 * @public
 *
 * The output of {@link UpdateSubscriptionTargetCommand}.
 */
export interface UpdateSubscriptionTargetCommandOutput extends UpdateSubscriptionTargetOutput, __MetadataBearer {}

/**
 * <p>Updates the specified subscription target in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateSubscriptionTargetCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateSubscriptionTargetCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // UpdateSubscriptionTargetInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   authorizedPrincipals: [ // AuthorizedPrincipalIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   applicableAssetTypes: [ // ApplicableAssetTypes
 *     "STRING_VALUE",
 *   ],
 *   subscriptionTargetConfig: [ // SubscriptionTargetForms
 *     { // SubscriptionTargetForm
 *       formName: "STRING_VALUE", // required
 *       content: "STRING_VALUE", // required
 *     },
 *   ],
 *   manageAccessRole: "STRING_VALUE",
 *   provider: "STRING_VALUE",
 * };
 * const command = new UpdateSubscriptionTargetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSubscriptionTargetOutput
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
 * @param UpdateSubscriptionTargetCommandInput - {@link UpdateSubscriptionTargetCommandInput}
 * @returns {@link UpdateSubscriptionTargetCommandOutput}
 * @see {@link UpdateSubscriptionTargetCommandInput} for command's `input` shape.
 * @see {@link UpdateSubscriptionTargetCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateSubscriptionTargetCommand extends $Command
  .classBuilder<
    UpdateSubscriptionTargetCommandInput,
    UpdateSubscriptionTargetCommandOutput,
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
  .s("DataZone", "UpdateSubscriptionTarget", {})
  .n("DataZoneClient", "UpdateSubscriptionTargetCommand")
  .f(UpdateSubscriptionTargetInputFilterSensitiveLog, UpdateSubscriptionTargetOutputFilterSensitiveLog)
  .ser(se_UpdateSubscriptionTargetCommand)
  .de(de_UpdateSubscriptionTargetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSubscriptionTargetInput;
      output: UpdateSubscriptionTargetOutput;
    };
    sdk: {
      input: UpdateSubscriptionTargetCommandInput;
      output: UpdateSubscriptionTargetCommandOutput;
    };
  };
}
