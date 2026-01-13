// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudDirectoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DetachFromIndexRequest, DetachFromIndexResponse } from "../models/models_0";
import { DetachFromIndex$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachFromIndexCommand}.
 */
export interface DetachFromIndexCommandInput extends DetachFromIndexRequest {}
/**
 * @public
 *
 * The output of {@link DetachFromIndexCommand}.
 */
export interface DetachFromIndexCommandOutput extends DetachFromIndexResponse, __MetadataBearer {}

/**
 * <p>Detaches the specified object from the specified index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, DetachFromIndexCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, DetachFromIndexCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * // import type { CloudDirectoryClientConfig } from "@aws-sdk/client-clouddirectory";
 * const config = {}; // type is CloudDirectoryClientConfig
 * const client = new CloudDirectoryClient(config);
 * const input = { // DetachFromIndexRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   IndexReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   TargetReference: {
 *     Selector: "STRING_VALUE",
 *   },
 * };
 * const command = new DetachFromIndexCommand(input);
 * const response = await client.send(command);
 * // { // DetachFromIndexResponse
 * //   DetachedObjectIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DetachFromIndexCommandInput - {@link DetachFromIndexCommandInput}
 * @returns {@link DetachFromIndexCommandOutput}
 * @see {@link DetachFromIndexCommandInput} for command's `input` shape.
 * @see {@link DetachFromIndexCommandOutput} for command's `response` shape.
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
 * @throws {@link NotIndexException} (client fault)
 *  <p>Indicates that the requested operation can only operate on index objects.</p>
 *
 * @throws {@link ObjectAlreadyDetachedException} (client fault)
 *  <p>Indicates that the object is not attached to the index.</p>
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
 * @example To detach an object from an index
 * ```javascript
 * //
 * const input = {
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY",
 *   IndexReference: {
 *     Selector: "$AQGG_ADlfNZBzYHY_JgDt3TW45F26R1HTY2z-stwKBte_Q"
 *   },
 *   TargetReference: {
 *     Selector: "$AQGG_ADlfNZBzYHY_JgDt3TWcU7IARvOTeaR09zme1sVsw"
 *   }
 * };
 * const command = new DetachFromIndexCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DetachedObjectIdentifier: "AQGG_ADlfNZBzYHY_JgDt3TWcU7IARvOTeaR09zme1sVsw"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DetachFromIndexCommand extends $Command
  .classBuilder<
    DetachFromIndexCommandInput,
    DetachFromIndexCommandOutput,
    CloudDirectoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudDirectoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonCloudDirectory_20170111", "DetachFromIndex", {})
  .n("CloudDirectoryClient", "DetachFromIndexCommand")
  .sc(DetachFromIndex$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachFromIndexRequest;
      output: DetachFromIndexResponse;
    };
    sdk: {
      input: DetachFromIndexCommandInput;
      output: DetachFromIndexCommandOutput;
    };
  };
}
