// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConfiguredTableAssociationInput, CreateConfiguredTableAssociationOutput } from "../models/models_0";
import { CreateConfiguredTableAssociation } from "../schemas/schemas_9_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfiguredTableAssociationCommand}.
 */
export interface CreateConfiguredTableAssociationCommandInput extends CreateConfiguredTableAssociationInput {}
/**
 * @public
 *
 * The output of {@link CreateConfiguredTableAssociationCommand}.
 */
export interface CreateConfiguredTableAssociationCommandOutput
  extends CreateConfiguredTableAssociationOutput,
    __MetadataBearer {}

/**
 * <p>Creates a configured table association. A configured table association links a configured table with a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateConfiguredTableAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateConfiguredTableAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateConfiguredTableAssociationInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   membershipIdentifier: "STRING_VALUE", // required
 *   configuredTableIdentifier: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConfiguredTableAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfiguredTableAssociationOutput
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
 * @param CreateConfiguredTableAssociationCommandInput - {@link CreateConfiguredTableAssociationCommandInput}
 * @returns {@link CreateConfiguredTableAssociationCommandOutput}
 * @see {@link CreateConfiguredTableAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateConfiguredTableAssociationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
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
 *
 * @public
 */
export class CreateConfiguredTableAssociationCommand extends $Command
  .classBuilder<
    CreateConfiguredTableAssociationCommandInput,
    CreateConfiguredTableAssociationCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "CreateConfiguredTableAssociation", {})
  .n("CleanRoomsClient", "CreateConfiguredTableAssociationCommand")
  .sc(CreateConfiguredTableAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfiguredTableAssociationInput;
      output: CreateConfiguredTableAssociationOutput;
    };
    sdk: {
      input: CreateConfiguredTableAssociationCommandInput;
      output: CreateConfiguredTableAssociationCommandOutput;
    };
  };
}
