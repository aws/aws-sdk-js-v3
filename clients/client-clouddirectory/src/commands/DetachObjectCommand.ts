// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetachObjectRequest, DetachObjectResponse } from "../models/models_0";
import { de_DetachObjectCommand, se_DetachObjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachObjectCommand}.
 */
export interface DetachObjectCommandInput extends DetachObjectRequest {}
/**
 * @public
 *
 * The output of {@link DetachObjectCommand}.
 */
export interface DetachObjectCommandOutput extends DetachObjectResponse, __MetadataBearer {}

/**
 * <p>Detaches a given object from the parent object. The object that is to be detached from the
 *       parent is specified by the link name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, DetachObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, DetachObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // DetachObjectRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   ParentReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   LinkName: "STRING_VALUE", // required
 * };
 * const command = new DetachObjectCommand(input);
 * const response = await client.send(command);
 * // { // DetachObjectResponse
 * //   DetachedObjectIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DetachObjectCommandInput - {@link DetachObjectCommandInput}
 * @returns {@link DetachObjectCommandOutput}
 * @see {@link DetachObjectCommandInput} for command's `input` shape.
 * @see {@link DetachObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link DirectoryNotEnabledException} (client fault)
 *  <p>Operations are only permitted on enabled directories.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>Indicates that the provided ARN value is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
 *
 * @throws {@link NotNodeException} (client fault)
 *  <p>Occurs when any invalid operations are performed on an object that is not a node, such
 *       as calling <code>ListObjectChildren</code> for a leaf node object.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link RetryableConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that your request is malformed in some manner. See the exception
 *       message.</p>
 *
 * @throws {@link CloudDirectoryServiceException}
 * <p>Base exception class for all service exceptions from CloudDirectory service.</p>
 *
 *
 * @example To detach an object from its parent object
 * ```javascript
 * //
 * const input = {
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY",
 *   LinkName: "link2",
 *   ParentReference: {
 *     Selector: "$AQGG_ADlfNZBzYHY_JgDt3TWcU7IARvOTeaR09zme1sVsw"
 *   }
 * };
 * const command = new DetachObjectCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DetachedObjectIdentifier: "AQGG_ADlfNZBzYHY_JgDt3TWSvfuEnDqTdmeCuTs6YBNUA"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DetachObjectCommand extends $Command
  .classBuilder<
    DetachObjectCommandInput,
    DetachObjectCommandOutput,
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
  .s("AmazonCloudDirectory_20170111", "DetachObject", {})
  .n("CloudDirectoryClient", "DetachObjectCommand")
  .f(void 0, void 0)
  .ser(se_DetachObjectCommand)
  .de(de_DetachObjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachObjectRequest;
      output: DetachObjectResponse;
    };
    sdk: {
      input: DetachObjectCommandInput;
      output: DetachObjectCommandOutput;
    };
  };
}
