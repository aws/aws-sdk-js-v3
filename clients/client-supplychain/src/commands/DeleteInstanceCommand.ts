// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteInstanceRequest, DeleteInstanceResponse } from "../models/models_0";
import { de_DeleteInstanceCommand, se_DeleteInstanceCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInstanceCommand}.
 */
export interface DeleteInstanceCommandInput extends DeleteInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInstanceCommand}.
 */
export interface DeleteInstanceCommandOutput extends DeleteInstanceResponse, __MetadataBearer {}

/**
 * <p>Enables you to programmatically delete an Amazon Web Services Supply Chain instance by deleting the KMS keys and relevant information associated with the API without using the Amazon Web Services console.</p>
 *          <p>This is an asynchronous operation. Upon receiving a DeleteInstance request, Amazon Web Services Supply Chain immediately returns a response with the instance resource, delete state while cleaning up all Amazon Web Services resources created during the instance creation process. You can use the GetInstance action to check the instance status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, DeleteInstanceCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, DeleteInstanceCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SupplyChainClient(config);
 * const input = { // DeleteInstanceRequest
 *   instanceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInstanceResponse
 * //   instance: { // Instance
 * //     instanceId: "STRING_VALUE", // required
 * //     awsAccountId: "STRING_VALUE", // required
 * //     state: "Initializing" || "Active" || "CreateFailed" || "DeleteFailed" || "Deleting" || "Deleted", // required
 * //     errorMessage: "STRING_VALUE",
 * //     webAppDnsDomain: "STRING_VALUE",
 * //     createdTime: new Date("TIMESTAMP"),
 * //     lastModifiedTime: new Date("TIMESTAMP"),
 * //     instanceName: "STRING_VALUE",
 * //     instanceDescription: "STRING_VALUE",
 * //     kmsKeyArn: "STRING_VALUE",
 * //     versionNumber: Number("double"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteInstanceCommandInput - {@link DeleteInstanceCommandInput}
 * @returns {@link DeleteInstanceCommandOutput}
 * @see {@link DeleteInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required privileges to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link SupplyChainServiceException}
 * <p>Base exception class for all service exceptions from SupplyChain service.</p>
 *
 * @public
 * @example Successful DeleteInstance request
 * ```javascript
 * //
 * const input = {
 *   "instanceId": "9e193580-7cc5-45f7-9609-c43ba0ada793"
 * };
 * const command = new DeleteInstanceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "instance": {
 *     "awsAccountId": "123456789012",
 *     "createdTime": 172615383136,
 *     "instanceDescription": "updated example instance description",
 *     "instanceId": "9e193580-7cc5-45f7-9609-c43ba0ada793",
 *     "instanceName": "updated example instance name",
 *     "kmsKeyArn": "arn:aws:kms:us-west-2:123456789012:key/b14ffc39-b7d4-45ab-991a-6257a7f0d24d",
 *     "lastModifiedTime": 172615383136,
 *     "state": "Deleting",
 *     "versionNumber": 2
 *   }
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class DeleteInstanceCommand extends $Command
  .classBuilder<
    DeleteInstanceCommandInput,
    DeleteInstanceCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GalaxyPublicAPIGateway", "DeleteInstance", {})
  .n("SupplyChainClient", "DeleteInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteInstanceCommand)
  .de(de_DeleteInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInstanceRequest;
      output: DeleteInstanceResponse;
    };
    sdk: {
      input: DeleteInstanceCommandInput;
      output: DeleteInstanceCommandOutput;
    };
  };
}
