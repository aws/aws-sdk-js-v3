// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListResourcesRequest,
  ListResourcesResponse,
  ListResourcesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListResourcesCommand, se_ListResourcesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListResourcesCommand}.
 */
export interface ListResourcesCommandInput extends ListResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListResourcesCommand}.
 */
export interface ListResourcesCommandOutput extends ListResourcesResponse, __MetadataBearer {}

/**
 * <p>Returns summaries of the organization's resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ListResourcesCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ListResourcesCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // ListResourcesRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: { // ListResourcesFilters
 *     NamePrefix: "STRING_VALUE",
 *     PrimaryEmailPrefix: "STRING_VALUE",
 *     State: "ENABLED" || "DISABLED" || "DELETED",
 *   },
 * };
 * const command = new ListResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListResourcesResponse
 * //   Resources: [ // Resources
 * //     { // Resource
 * //       Id: "STRING_VALUE",
 * //       Email: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "ROOM" || "EQUIPMENT",
 * //       State: "ENABLED" || "DISABLED" || "DELETED",
 * //       EnabledDate: new Date("TIMESTAMP"),
 * //       DisabledDate: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourcesCommandInput - {@link ListResourcesCommandInput}
 * @returns {@link ListResourcesCommandOutput}
 * @see {@link ListResourcesCommandInput} for command's `input` shape.
 * @see {@link ListResourcesCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>You can't perform a write operation against a read-only directory.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 * @public
 */
export class ListResourcesCommand extends $Command
  .classBuilder<
    ListResourcesCommandInput,
    ListResourcesCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "ListResources", {})
  .n("WorkMailClient", "ListResourcesCommand")
  .f(void 0, ListResourcesResponseFilterSensitiveLog)
  .ser(se_ListResourcesCommand)
  .de(de_ListResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourcesRequest;
      output: ListResourcesResponse;
    };
    sdk: {
      input: ListResourcesCommandInput;
      output: ListResourcesCommandOutput;
    };
  };
}
