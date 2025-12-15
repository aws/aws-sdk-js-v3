// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateIdMappingTableInput, UpdateIdMappingTableOutput } from "../models/models_0";
import { UpdateIdMappingTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIdMappingTableCommand}.
 */
export interface UpdateIdMappingTableCommandInput extends UpdateIdMappingTableInput {}
/**
 * @public
 *
 * The output of {@link UpdateIdMappingTableCommand}.
 */
export interface UpdateIdMappingTableCommandOutput extends UpdateIdMappingTableOutput, __MetadataBearer {}

/**
 * <p>Provides the details that are necessary to update an ID mapping table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, UpdateIdMappingTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, UpdateIdMappingTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // UpdateIdMappingTableInput
 *   idMappingTableIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   kmsKeyArn: "STRING_VALUE",
 * };
 * const command = new UpdateIdMappingTableCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIdMappingTableOutput
 * //   idMappingTable: { // IdMappingTable
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     inputReferenceConfig: { // IdMappingTableInputReferenceConfig
 * //       inputReferenceArn: "STRING_VALUE", // required
 * //       manageResourcePolicies: true || false, // required
 * //     },
 * //     membershipId: "STRING_VALUE", // required
 * //     membershipArn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     name: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     inputReferenceProperties: { // IdMappingTableInputReferenceProperties
 * //       idMappingTableInputSource: [ // IdMappingTableInputSourceList // required
 * //         { // IdMappingTableInputSource
 * //           idNamespaceAssociationId: "STRING_VALUE", // required
 * //           type: "SOURCE" || "TARGET", // required
 * //         },
 * //       ],
 * //     },
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIdMappingTableCommandInput - {@link UpdateIdMappingTableCommandInput}
 * @returns {@link UpdateIdMappingTableCommandOutput}
 * @see {@link UpdateIdMappingTableCommandInput} for command's `input` shape.
 * @see {@link UpdateIdMappingTableCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateIdMappingTableCommand extends $Command
  .classBuilder<
    UpdateIdMappingTableCommandInput,
    UpdateIdMappingTableCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "UpdateIdMappingTable", {})
  .n("CleanRoomsClient", "UpdateIdMappingTableCommand")
  .sc(UpdateIdMappingTable$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIdMappingTableInput;
      output: UpdateIdMappingTableOutput;
    };
    sdk: {
      input: UpdateIdMappingTableCommandInput;
      output: UpdateIdMappingTableCommandOutput;
    };
  };
}
