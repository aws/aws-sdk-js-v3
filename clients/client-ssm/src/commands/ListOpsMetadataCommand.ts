// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOpsMetadataRequest, ListOpsMetadataResult } from "../models/models_1";
import { de_ListOpsMetadataCommand, se_ListOpsMetadataCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOpsMetadataCommand}.
 */
export interface ListOpsMetadataCommandInput extends ListOpsMetadataRequest {}
/**
 * @public
 *
 * The output of {@link ListOpsMetadataCommand}.
 */
export interface ListOpsMetadataCommandOutput extends ListOpsMetadataResult, __MetadataBearer {}

/**
 * <p>Amazon Web Services Systems Manager calls this API operation when displaying all Application Manager OpsMetadata objects or
 *    blobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListOpsMetadataRequest
 *   Filters: [ // OpsMetadataFilterList
 *     { // OpsMetadataFilter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // OpsMetadataFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListOpsMetadataCommand(input);
 * const response = await client.send(command);
 * // { // ListOpsMetadataResult
 * //   OpsMetadataList: [ // OpsMetadataList
 * //     { // OpsMetadata
 * //       ResourceId: "STRING_VALUE",
 * //       OpsMetadataArn: "STRING_VALUE",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       LastModifiedUser: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOpsMetadataCommandInput - {@link ListOpsMetadataCommandInput}
 * @returns {@link ListOpsMetadataCommandOutput}
 * @see {@link ListOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link ListOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsMetadataInvalidArgumentException} (client fault)
 *  <p>One of the arguments passed is invalid. </p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class ListOpsMetadataCommand extends $Command
  .classBuilder<
    ListOpsMetadataCommandInput,
    ListOpsMetadataCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "ListOpsMetadata", {})
  .n("SSMClient", "ListOpsMetadataCommand")
  .f(void 0, void 0)
  .ser(se_ListOpsMetadataCommand)
  .de(de_ListOpsMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOpsMetadataRequest;
      output: ListOpsMetadataResult;
    };
    sdk: {
      input: ListOpsMetadataCommandInput;
      output: ListOpsMetadataCommandOutput;
    };
  };
}
