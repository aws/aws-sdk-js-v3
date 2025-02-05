// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListIdMappingTablesInput, ListIdMappingTablesOutput } from "../models/models_0";
import { de_ListIdMappingTablesCommand, se_ListIdMappingTablesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIdMappingTablesCommand}.
 */
export interface ListIdMappingTablesCommandInput extends ListIdMappingTablesInput {}
/**
 * @public
 *
 * The output of {@link ListIdMappingTablesCommand}.
 */
export interface ListIdMappingTablesCommandOutput extends ListIdMappingTablesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of ID mapping tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListIdMappingTablesCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListIdMappingTablesCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsClient(config);
 * const input = { // ListIdMappingTablesInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIdMappingTablesCommand(input);
 * const response = await client.send(command);
 * // { // ListIdMappingTablesOutput
 * //   idMappingTableSummaries: [ // IdMappingTableSummaryList // required
 * //     { // IdMappingTableSummary
 * //       collaborationArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       membershipId: "STRING_VALUE", // required
 * //       membershipArn: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       inputReferenceConfig: { // IdMappingTableInputReferenceConfig
 * //         inputReferenceArn: "STRING_VALUE", // required
 * //         manageResourcePolicies: true || false, // required
 * //       },
 * //       name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdMappingTablesCommandInput - {@link ListIdMappingTablesCommandInput}
 * @returns {@link ListIdMappingTablesCommandOutput}
 * @see {@link ListIdMappingTablesCommandInput} for command's `input` shape.
 * @see {@link ListIdMappingTablesCommandOutput} for command's `response` shape.
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
export class ListIdMappingTablesCommand extends $Command
  .classBuilder<
    ListIdMappingTablesCommandInput,
    ListIdMappingTablesCommandOutput,
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
  .s("AWSBastionControlPlaneServiceLambda", "ListIdMappingTables", {})
  .n("CleanRoomsClient", "ListIdMappingTablesCommand")
  .f(void 0, void 0)
  .ser(se_ListIdMappingTablesCommand)
  .de(de_ListIdMappingTablesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIdMappingTablesInput;
      output: ListIdMappingTablesOutput;
    };
    sdk: {
      input: ListIdMappingTablesCommandInput;
      output: ListIdMappingTablesCommandOutput;
    };
  };
}
