// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourceSharesRequest, GetResourceSharesResponse } from "../models/models_0";
import { de_GetResourceSharesCommand, se_GetResourceSharesCommand } from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceSharesCommand}.
 */
export interface GetResourceSharesCommandInput extends GetResourceSharesRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceSharesCommand}.
 */
export interface GetResourceSharesCommandOutput extends GetResourceSharesResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about the resource shares that you own or that are shared with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceSharesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceSharesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * // import type { RAMClientConfig } from "@aws-sdk/client-ram";
 * const config = {}; // type is RAMClientConfig
 * const client = new RAMClient(config);
 * const input = { // GetResourceSharesRequest
 *   resourceShareArns: [ // ResourceShareArnList
 *     "STRING_VALUE",
 *   ],
 *   resourceShareStatus: "PENDING" || "ACTIVE" || "FAILED" || "DELETING" || "DELETED",
 *   resourceOwner: "SELF" || "OTHER-ACCOUNTS", // required
 *   name: "STRING_VALUE",
 *   tagFilters: [ // TagFilters
 *     { // TagFilter
 *       tagKey: "STRING_VALUE",
 *       tagValues: [ // TagValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   permissionArn: "STRING_VALUE",
 *   permissionVersion: Number("int"),
 * };
 * const command = new GetResourceSharesCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceSharesResponse
 * //   resourceShares: [ // ResourceShareList
 * //     { // ResourceShare
 * //       resourceShareArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       owningAccountId: "STRING_VALUE",
 * //       allowExternalPrincipals: true || false,
 * //       status: "PENDING" || "ACTIVE" || "FAILED" || "DELETING" || "DELETED",
 * //       statusMessage: "STRING_VALUE",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       featureSet: "CREATED_FROM_POLICY" || "PROMOTING_TO_STANDARD" || "STANDARD",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourceSharesCommandInput - {@link GetResourceSharesCommandInput}
 * @returns {@link GetResourceSharesCommandOutput}
 * @see {@link GetResourceSharesCommandInput} for command's `input` shape.
 * @see {@link GetResourceSharesCommandOutput} for command's `response` shape.
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
export class GetResourceSharesCommand extends $Command
  .classBuilder<
    GetResourceSharesCommandInput,
    GetResourceSharesCommandOutput,
    RAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonResourceSharing", "GetResourceShares", {})
  .n("RAMClient", "GetResourceSharesCommand")
  .f(void 0, void 0)
  .ser(se_GetResourceSharesCommand)
  .de(de_GetResourceSharesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceSharesRequest;
      output: GetResourceSharesResponse;
    };
    sdk: {
      input: GetResourceSharesCommandInput;
      output: GetResourceSharesCommandOutput;
    };
  };
}
