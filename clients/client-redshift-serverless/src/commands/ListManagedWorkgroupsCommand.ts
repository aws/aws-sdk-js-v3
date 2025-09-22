// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListManagedWorkgroupsRequest, ListManagedWorkgroupsResponse } from "../models/models_0";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { ListManagedWorkgroups } from "../schemas/schemas_1_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedWorkgroupsCommand}.
 */
export interface ListManagedWorkgroupsCommandInput extends ListManagedWorkgroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedWorkgroupsCommand}.
 */
export interface ListManagedWorkgroupsCommandOutput extends ListManagedWorkgroupsResponse, __MetadataBearer {}

/**
 * <p>Returns information about a list of specified managed workgroups in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListManagedWorkgroupsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListManagedWorkgroupsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListManagedWorkgroupsRequest
 *   sourceArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListManagedWorkgroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedWorkgroupsResponse
 * //   nextToken: "STRING_VALUE",
 * //   managedWorkgroups: [ // ManagedWorkgroups
 * //     { // ManagedWorkgroupListItem
 * //       managedWorkgroupName: "STRING_VALUE",
 * //       managedWorkgroupId: "STRING_VALUE",
 * //       sourceArn: "STRING_VALUE",
 * //       status: "CREATING" || "DELETING" || "MODIFYING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //       creationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListManagedWorkgroupsCommandInput - {@link ListManagedWorkgroupsCommandInput}
 * @returns {@link ListManagedWorkgroupsCommandOutput}
 * @see {@link ListManagedWorkgroupsCommandInput} for command's `input` shape.
 * @see {@link ListManagedWorkgroupsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class ListManagedWorkgroupsCommand extends $Command
  .classBuilder<
    ListManagedWorkgroupsCommandInput,
    ListManagedWorkgroupsCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "ListManagedWorkgroups", {})
  .n("RedshiftServerlessClient", "ListManagedWorkgroupsCommand")
  .sc(ListManagedWorkgroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedWorkgroupsRequest;
      output: ListManagedWorkgroupsResponse;
    };
    sdk: {
      input: ListManagedWorkgroupsCommandInput;
      output: ListManagedWorkgroupsCommandOutput;
    };
  };
}
