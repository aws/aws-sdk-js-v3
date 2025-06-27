// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeUpdateDirectoryRequest, DescribeUpdateDirectoryResult } from "../models/models_0";
import { de_DescribeUpdateDirectoryCommand, se_DescribeUpdateDirectoryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUpdateDirectoryCommand}.
 */
export interface DescribeUpdateDirectoryCommandInput extends DescribeUpdateDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUpdateDirectoryCommand}.
 */
export interface DescribeUpdateDirectoryCommandOutput extends DescribeUpdateDirectoryResult, __MetadataBearer {}

/**
 * <p> Describes the updates of a directory for a particular update type. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeUpdateDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeUpdateDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeUpdateDirectoryRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   UpdateType: "OS", // required
 *   RegionName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeUpdateDirectoryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUpdateDirectoryResult
 * //   UpdateActivities: [ // UpdateActivities
 * //     { // UpdateInfoEntry
 * //       Region: "STRING_VALUE",
 * //       Status: "Updated" || "Updating" || "UpdateFailed",
 * //       StatusReason: "STRING_VALUE",
 * //       InitiatedBy: "STRING_VALUE",
 * //       NewValue: { // UpdateValue
 * //         OSUpdateSettings: { // OSUpdateSettings
 * //           OSVersion: "SERVER_2012" || "SERVER_2019",
 * //         },
 * //       },
 * //       PreviousValue: {
 * //         OSUpdateSettings: {
 * //           OSVersion: "SERVER_2012" || "SERVER_2019",
 * //         },
 * //       },
 * //       StartTime: new Date("TIMESTAMP"),
 * //       LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeUpdateDirectoryCommandInput - {@link DescribeUpdateDirectoryCommandInput}
 * @returns {@link DescribeUpdateDirectoryCommandOutput}
 * @see {@link DescribeUpdateDirectoryCommandInput} for command's `input` shape.
 * @see {@link DescribeUpdateDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class DescribeUpdateDirectoryCommand extends $Command
  .classBuilder<
    DescribeUpdateDirectoryCommandInput,
    DescribeUpdateDirectoryCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "DescribeUpdateDirectory", {})
  .n("DirectoryServiceClient", "DescribeUpdateDirectoryCommand")
  .f(void 0, void 0)
  .ser(se_DescribeUpdateDirectoryCommand)
  .de(de_DescribeUpdateDirectoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeUpdateDirectoryRequest;
      output: DescribeUpdateDirectoryResult;
    };
    sdk: {
      input: DescribeUpdateDirectoryCommandInput;
      output: DescribeUpdateDirectoryCommandOutput;
    };
  };
}
