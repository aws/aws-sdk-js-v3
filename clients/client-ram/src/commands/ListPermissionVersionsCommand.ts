// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPermissionVersionsRequest, ListPermissionVersionsResponse } from "../models/models_0";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { ListPermissionVersions } from "../schemas/schemas_2_Permission";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPermissionVersionsCommand}.
 */
export interface ListPermissionVersionsCommandInput extends ListPermissionVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPermissionVersionsCommand}.
 */
export interface ListPermissionVersionsCommandOutput extends ListPermissionVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists the available versions of the specified RAM permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, ListPermissionVersionsCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, ListPermissionVersionsCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // ListPermissionVersionsRequest
 *   permissionArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPermissionVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPermissionVersionsResponse
 * //   permissions: [ // ResourceSharePermissionList
 * //     { // ResourceSharePermissionSummary
 * //       arn: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       defaultVersion: true || false,
 * //       name: "STRING_VALUE",
 * //       resourceType: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       isResourceTypeDefault: true || false,
 * //       permissionType: "CUSTOMER_MANAGED" || "AWS_MANAGED",
 * //       featureSet: "CREATED_FROM_POLICY" || "PROMOTING_TO_STANDARD" || "STANDARD",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPermissionVersionsCommandInput - {@link ListPermissionVersionsCommandInput}
 * @returns {@link ListPermissionVersionsCommandOutput}
 * @see {@link ListPermissionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListPermissionVersionsCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The operation failed because the specified value for <code>NextToken</code> isn't
 *             valid. You must specify a value you received in the <code>NextToken</code> response of a
 *             previous call to this operation.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The operation failed because a parameter you specified isn't valid.</p>
 *
 * @throws {@link MalformedArnException} (client fault)
 *  <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link UnknownResourceException} (client fault)
 *  <p>The operation failed because a specified resource couldn't be found.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
 *
 *
 * @public
 */
export class ListPermissionVersionsCommand extends $Command
  .classBuilder<
    ListPermissionVersionsCommandInput,
    ListPermissionVersionsCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonResourceSharing", "ListPermissionVersions", {})
  .n("RAMClient", "ListPermissionVersionsCommand")
  .sc(ListPermissionVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPermissionVersionsRequest;
      output: ListPermissionVersionsResponse;
    };
    sdk: {
      input: ListPermissionVersionsCommandInput;
      output: ListPermissionVersionsCommandOutput;
    };
  };
}
