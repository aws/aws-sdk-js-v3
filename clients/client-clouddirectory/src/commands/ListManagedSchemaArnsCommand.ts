// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListManagedSchemaArnsRequest, ListManagedSchemaArnsResponse } from "../models/models_0";
import { de_ListManagedSchemaArnsCommand, se_ListManagedSchemaArnsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedSchemaArnsCommand}.
 */
export interface ListManagedSchemaArnsCommandInput extends ListManagedSchemaArnsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedSchemaArnsCommand}.
 */
export interface ListManagedSchemaArnsCommandOutput extends ListManagedSchemaArnsResponse, __MetadataBearer {}

/**
 * <p>Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListManagedSchemaArnsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListManagedSchemaArnsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudDirectoryClient(config);
 * const input = { // ListManagedSchemaArnsRequest
 *   SchemaArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListManagedSchemaArnsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedSchemaArnsResponse
 * //   SchemaArns: [ // Arns
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedSchemaArnsCommandInput - {@link ListManagedSchemaArnsCommandInput}
 * @returns {@link ListManagedSchemaArnsCommandOutput}
 * @see {@link ListManagedSchemaArnsCommandInput} for command's `input` shape.
 * @see {@link ListManagedSchemaArnsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>Indicates that the provided ARN value is not valid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>Indicates that the <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that your request is malformed in some manner. See the exception
 *       message.</p>
 *
 * @throws {@link CloudDirectoryServiceException}
 * <p>Base exception class for all service exceptions from CloudDirectory service.</p>
 *
 * @public
 */
export class ListManagedSchemaArnsCommand extends $Command
  .classBuilder<
    ListManagedSchemaArnsCommandInput,
    ListManagedSchemaArnsCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonCloudDirectory_20170111", "ListManagedSchemaArns", {})
  .n("CloudDirectoryClient", "ListManagedSchemaArnsCommand")
  .f(void 0, void 0)
  .ser(se_ListManagedSchemaArnsCommand)
  .de(de_ListManagedSchemaArnsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedSchemaArnsRequest;
      output: ListManagedSchemaArnsResponse;
    };
    sdk: {
      input: ListManagedSchemaArnsCommandInput;
      output: ListManagedSchemaArnsCommandOutput;
    };
  };
}
