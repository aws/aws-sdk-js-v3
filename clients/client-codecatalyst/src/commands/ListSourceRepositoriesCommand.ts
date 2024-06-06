// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSourceRepositoriesRequest, ListSourceRepositoriesResponse } from "../models/models_0";
import { de_ListSourceRepositoriesCommand, se_ListSourceRepositoriesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSourceRepositoriesCommand}.
 */
export interface ListSourceRepositoriesCommandInput extends ListSourceRepositoriesRequest {}
/**
 * @public
 *
 * The output of {@link ListSourceRepositoriesCommand}.
 */
export interface ListSourceRepositoriesCommandOutput extends ListSourceRepositoriesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of source repositories in a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, ListSourceRepositoriesCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, ListSourceRepositoriesCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const input = { // ListSourceRepositoriesRequest
 *   spaceName: "STRING_VALUE", // required
 *   projectName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSourceRepositoriesCommand(input);
 * const response = await client.send(command);
 * // { // ListSourceRepositoriesResponse
 * //   items: [ // ListSourceRepositoriesItems
 * //     { // ListSourceRepositoriesItem
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSourceRepositoriesCommandInput - {@link ListSourceRepositoriesCommandInput}
 * @returns {@link ListSourceRepositoriesCommandOutput}
 * @see {@link ListSourceRepositoriesCommandInput} for command's `input` shape.
 * @see {@link ListSourceRepositoriesCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 * @throws {@link CodeCatalystServiceException}
 * <p>Base exception class for all service exceptions from CodeCatalyst service.</p>
 *
 * @public
 */
export class ListSourceRepositoriesCommand extends $Command
  .classBuilder<
    ListSourceRepositoriesCommandInput,
    ListSourceRepositoriesCommandOutput,
    CodeCatalystClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeCatalystClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCatalyst", "ListSourceRepositories", {})
  .n("CodeCatalystClient", "ListSourceRepositoriesCommand")
  .f(void 0, void 0)
  .ser(se_ListSourceRepositoriesCommand)
  .de(de_ListSourceRepositoriesCommand)
  .build() {}
