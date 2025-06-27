// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetObjectInformationRequest, GetObjectInformationResponse } from "../models/models_0";
import { de_GetObjectInformationCommand, se_GetObjectInformationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetObjectInformationCommand}.
 */
export interface GetObjectInformationCommandInput extends GetObjectInformationRequest {}
/**
 * @public
 *
 * The output of {@link GetObjectInformationCommand}.
 */
export interface GetObjectInformationCommandOutput extends GetObjectInformationResponse, __MetadataBearer {}

/**
 * <p>Retrieves metadata about an object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, GetObjectInformationCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, GetObjectInformationCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const input = { // GetObjectInformationRequest
 *   DirectoryArn: "STRING_VALUE", // required
 *   ObjectReference: { // ObjectReference
 *     Selector: "STRING_VALUE",
 *   },
 *   ConsistencyLevel: "SERIALIZABLE" || "EVENTUAL",
 * };
 * const command = new GetObjectInformationCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectInformationResponse
 * //   SchemaFacets: [ // SchemaFacetList
 * //     { // SchemaFacet
 * //       SchemaArn: "STRING_VALUE",
 * //       FacetName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ObjectIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetObjectInformationCommandInput - {@link GetObjectInformationCommandInput}
 * @returns {@link GetObjectInformationCommandOutput}
 * @see {@link GetObjectInformationCommandInput} for command's `input` shape.
 * @see {@link GetObjectInformationCommandOutput} for command's `response` shape.
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
 * @example To get information about an object
 * ```javascript
 * //
 * const input = {
 *   ConsistencyLevel: "SERIALIZABLE",
 *   DirectoryArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY",
 *   ObjectReference: {
 *     Selector: "$AQGG_ADlfNZBzYHY_JgDt3TWmspn1fxfQmSQaaVKSbvEiQ"
 *   }
 * };
 * const command = new GetObjectInformationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ObjectIdentifier: "AQGG_ADlfNZBzYHY_JgDt3TWmspn1fxfQmSQaaVKSbvEiQ",
 *   SchemaFacets: [
 *     {
 *       FacetName: "node2",
 *       SchemaArn: "arn:aws:clouddirectory:us-west-2:45132example:directory/AYb8AOV81kHNgdj8mAO3dNY/schema/org/1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetObjectInformationCommand extends $Command
  .classBuilder<
    GetObjectInformationCommandInput,
    GetObjectInformationCommandOutput,
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
  .s("AmazonCloudDirectory_20170111", "GetObjectInformation", {})
  .n("CloudDirectoryClient", "GetObjectInformationCommand")
  .f(void 0, void 0)
  .ser(se_GetObjectInformationCommand)
  .de(de_GetObjectInformationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetObjectInformationRequest;
      output: GetObjectInformationResponse;
    };
    sdk: {
      input: GetObjectInformationCommandInput;
      output: GetObjectInformationCommandOutput;
    };
  };
}
