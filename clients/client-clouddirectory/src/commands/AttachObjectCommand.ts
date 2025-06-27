// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AttachObjectRequest, AttachObjectResponse } from "../models/models_0";
import { de_AttachObjectCommand, se_AttachObjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachObjectCommand}.
 */
export interface AttachObjectCommandInput extends AttachObjectRequest {}
/**
 * @public
 *
 * The output of {@link AttachObjectCommand}.
 */
export interface AttachObjectCommandOutput extends AttachObjectResponse, __MetadataBearer {}

/**
 * <p>Attaches an existing object to another object. An object can be accessed in two
 *       ways:</p>
 *          <ol>
 *             <li>
 *                <p>Using the path</p>
 *             </li>
 *             <li>
 *                <p>Using <code>ObjectIdentifier</code>
 *                </p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, AttachObjectCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, AttachObjectCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const input = { // AttachObjectRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   ParentReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   ChildReference: {
 *     Selector: "STRING_VALUE",
 *   },
 *   LinkName: "STRING_VALUE", // required
 * };
 * const command = new AttachObjectCommand(input);
 * const response = await client.send(command);
 * // { // AttachObjectResponse
 * //   AttachedObjectIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AttachObjectCommandInput - {@link AttachObjectCommandInput}
 * @returns {@link AttachObjectCommandOutput}
 * @see {@link AttachObjectCommandInput} for command's `input` shape.
 * @see {@link AttachObjectCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for CloudDirectoryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied or directory not found. Either you don't have permissions for this directory or the directory does not exist. Try calling <a>ListDirectories</a> and check your permissions.</p>
 *
 * @throws {@link DirectoryNotEnabledException} (client fault)
 *  <p>Operations are only permitted on enabled directories.</p>
 *
 * @throws {@link FacetValidationException} (client fault)
 *  <p>The <a>Facet</a> that you provided was not well formed or could not be
 *       validated with the schema.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Indicates a problem that must be resolved by Amazon Web Services. This might be a transient error in which case you can retry your request until it succeeds. Otherwise, go to the <a href="http://status.aws.amazon.com/">AWS Service Health Dashboard</a> site to see if there are any operational issues with the service.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>Indicates that the provided ARN value is not valid.</p>
 *
 * @throws {@link InvalidAttachmentException} (client fault)
 *  <p>Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes
 *       with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
 *
 * @throws {@link LinkNameAlreadyInUseException} (client fault)
 *  <p>Indicates that a link could not be created due to a naming conflict. Choose a different
 *       name and then try again.</p>
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
 * @example To attach an object
 * ```javascript
 * //
 * const input = {
 *   ChildReference: {
 *     Selector: "$AQGG_ADlfNZBzYHY_JgDt3TWSvfuEnDqTdmeCuTs6YBNUA"
 *   },
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY",
 *   LinkName: "link2",
 *   ParentReference: {
 *     Selector: "$AQGG_ADlfNZBzYHY_JgDt3TWcU7IARvOTeaR09zme1sVsw"
 *   }
 * };
 * const command = new AttachObjectCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AttachedObjectIdentifier: "AQGG_ADlfNZBzYHY_JgDt3TWSvfuEnDqTdmeCuTs6YBNUA"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AttachObjectCommand extends $Command
  .classBuilder<
    AttachObjectCommandInput,
    AttachObjectCommandOutput,
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
  .s("AmazonCloudDirectory_20170111", "AttachObject", {})
  .n("CloudDirectoryClient", "AttachObjectCommand")
  .f(void 0, void 0)
  .ser(se_AttachObjectCommand)
  .de(de_AttachObjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachObjectRequest;
      output: AttachObjectResponse;
    };
    sdk: {
      input: AttachObjectCommandInput;
      output: AttachObjectCommandOutput;
    };
  };
}
