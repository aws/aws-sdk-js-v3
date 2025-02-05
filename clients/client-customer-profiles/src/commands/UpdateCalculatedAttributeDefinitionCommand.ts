// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateCalculatedAttributeDefinitionRequest,
  UpdateCalculatedAttributeDefinitionRequestFilterSensitiveLog,
  UpdateCalculatedAttributeDefinitionResponse,
  UpdateCalculatedAttributeDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_UpdateCalculatedAttributeDefinitionCommand,
  se_UpdateCalculatedAttributeDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCalculatedAttributeDefinitionCommand}.
 */
export interface UpdateCalculatedAttributeDefinitionCommandInput extends UpdateCalculatedAttributeDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCalculatedAttributeDefinitionCommand}.
 */
export interface UpdateCalculatedAttributeDefinitionCommandOutput
  extends UpdateCalculatedAttributeDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing calculated attribute definition. When updating the Conditions, note
 *          that increasing the date range of a calculated attribute will not trigger inclusion of
 *          historical data greater than the current date range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, UpdateCalculatedAttributeDefinitionCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, UpdateCalculatedAttributeDefinitionCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CustomerProfilesClient(config);
 * const input = { // UpdateCalculatedAttributeDefinitionRequest
 *   DomainName: "STRING_VALUE", // required
 *   CalculatedAttributeName: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Conditions: { // Conditions
 *     Range: { // Range
 *       Value: Number("int"), // required
 *       Unit: "DAYS", // required
 *     },
 *     ObjectCount: Number("int"),
 *     Threshold: { // Threshold
 *       Value: "STRING_VALUE", // required
 *       Operator: "EQUAL_TO" || "GREATER_THAN" || "LESS_THAN" || "NOT_EQUAL_TO", // required
 *     },
 *   },
 * };
 * const command = new UpdateCalculatedAttributeDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCalculatedAttributeDefinitionResponse
 * //   CalculatedAttributeName: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Statistic: "FIRST_OCCURRENCE" || "LAST_OCCURRENCE" || "COUNT" || "SUM" || "MINIMUM" || "MAXIMUM" || "AVERAGE" || "MAX_OCCURRENCE",
 * //   Conditions: { // Conditions
 * //     Range: { // Range
 * //       Value: Number("int"), // required
 * //       Unit: "DAYS", // required
 * //     },
 * //     ObjectCount: Number("int"),
 * //     Threshold: { // Threshold
 * //       Value: "STRING_VALUE", // required
 * //       Operator: "EQUAL_TO" || "GREATER_THAN" || "LESS_THAN" || "NOT_EQUAL_TO", // required
 * //     },
 * //   },
 * //   AttributeDetails: { // AttributeDetails
 * //     Attributes: [ // AttributeList // required
 * //       { // AttributeItem
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Expression: "STRING_VALUE", // required
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCalculatedAttributeDefinitionCommandInput - {@link UpdateCalculatedAttributeDefinitionCommandInput}
 * @returns {@link UpdateCalculatedAttributeDefinitionCommandOutput}
 * @see {@link UpdateCalculatedAttributeDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateCalculatedAttributeDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 * @public
 */
export class UpdateCalculatedAttributeDefinitionCommand extends $Command
  .classBuilder<
    UpdateCalculatedAttributeDefinitionCommandInput,
    UpdateCalculatedAttributeDefinitionCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "UpdateCalculatedAttributeDefinition", {})
  .n("CustomerProfilesClient", "UpdateCalculatedAttributeDefinitionCommand")
  .f(
    UpdateCalculatedAttributeDefinitionRequestFilterSensitiveLog,
    UpdateCalculatedAttributeDefinitionResponseFilterSensitiveLog
  )
  .ser(se_UpdateCalculatedAttributeDefinitionCommand)
  .de(de_UpdateCalculatedAttributeDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCalculatedAttributeDefinitionRequest;
      output: UpdateCalculatedAttributeDefinitionResponse;
    };
    sdk: {
      input: UpdateCalculatedAttributeDefinitionCommandInput;
      output: UpdateCalculatedAttributeDefinitionCommandOutput;
    };
  };
}
