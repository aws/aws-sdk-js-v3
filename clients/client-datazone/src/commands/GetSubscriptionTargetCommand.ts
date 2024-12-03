// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetSubscriptionTargetInput,
  GetSubscriptionTargetOutput,
  GetSubscriptionTargetOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_GetSubscriptionTargetCommand, se_GetSubscriptionTargetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSubscriptionTargetCommand}.
 */
export interface GetSubscriptionTargetCommandInput extends GetSubscriptionTargetInput {}
/**
 * @public
 *
 * The output of {@link GetSubscriptionTargetCommand}.
 */
export interface GetSubscriptionTargetCommandOutput extends GetSubscriptionTargetOutput, __MetadataBearer {}

/**
 * <p>Gets the subscription target in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetSubscriptionTargetCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetSubscriptionTargetCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetSubscriptionTargetInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetSubscriptionTargetCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriptionTargetOutput
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
 * @param GetSubscriptionTargetCommandInput - {@link GetSubscriptionTargetCommandInput}
 * @returns {@link GetSubscriptionTargetCommandOutput}
 * @see {@link GetSubscriptionTargetCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionTargetCommandOutput} for command's `response` shape.
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
export class GetSubscriptionTargetCommand extends $Command
  .classBuilder<
    GetSubscriptionTargetCommandInput,
    GetSubscriptionTargetCommandOutput,
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
  .s("DataZone", "GetSubscriptionTarget", {})
  .n("DataZoneClient", "GetSubscriptionTargetCommand")
  .f(void 0, GetSubscriptionTargetOutputFilterSensitiveLog)
  .ser(se_GetSubscriptionTargetCommand)
  .de(de_GetSubscriptionTargetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSubscriptionTargetInput;
      output: GetSubscriptionTargetOutput;
    };
    sdk: {
      input: GetSubscriptionTargetCommandInput;
      output: GetSubscriptionTargetCommandOutput;
    };
  };
}
