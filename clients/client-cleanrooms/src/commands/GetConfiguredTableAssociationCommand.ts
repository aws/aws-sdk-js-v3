// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConfiguredTableAssociationInput, GetConfiguredTableAssociationOutput } from "../models/models_0";
import {
  de_GetConfiguredTableAssociationCommand,
  se_GetConfiguredTableAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfiguredTableAssociationCommand}.
 */
export interface GetConfiguredTableAssociationCommandInput extends GetConfiguredTableAssociationInput {}
/**
 * @public
 *
 * The output of {@link GetConfiguredTableAssociationCommand}.
 */
export interface GetConfiguredTableAssociationCommandOutput
  extends GetConfiguredTableAssociationOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves a configured table association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetConfiguredTableAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetConfiguredTableAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsClient(config);
 * const input = { // GetConfiguredTableAssociationInput
 *   configuredTableAssociationIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetConfiguredTableAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetConfiguredTableAssociationOutput
 * //   configuredTableAssociation: { // ConfiguredTableAssociation
 * //     arn: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //     configuredTableId: "STRING_VALUE", // required
 * //     configuredTableArn: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE", // required
 * //     membershipArn: "STRING_VALUE", // required
 * //     roleArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     analysisRuleTypes: [ // ConfiguredTableAssociationAnalysisRuleTypeList
 * //       "AGGREGATION" || "LIST" || "CUSTOM",
 * //     ],
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConfiguredTableAssociationCommandInput - {@link GetConfiguredTableAssociationCommandInput}
 * @returns {@link GetConfiguredTableAssociationCommandOutput}
 * @see {@link GetConfiguredTableAssociationCommandInput} for command's `input` shape.
 * @see {@link GetConfiguredTableAssociationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 * @public
 */
export class GetConfiguredTableAssociationCommand extends $Command
  .classBuilder<
    GetConfiguredTableAssociationCommandInput,
    GetConfiguredTableAssociationCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "GetConfiguredTableAssociation", {})
  .n("CleanRoomsClient", "GetConfiguredTableAssociationCommand")
  .f(void 0, void 0)
  .ser(se_GetConfiguredTableAssociationCommand)
  .de(de_GetConfiguredTableAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfiguredTableAssociationInput;
      output: GetConfiguredTableAssociationOutput;
    };
    sdk: {
      input: GetConfiguredTableAssociationCommandInput;
      output: GetConfiguredTableAssociationCommandOutput;
    };
  };
}
