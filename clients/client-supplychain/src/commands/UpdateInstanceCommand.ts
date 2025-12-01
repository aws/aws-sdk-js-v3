// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateInstanceRequest, UpdateInstanceResponse } from "../models/models_0";
import { UpdateInstance } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInstanceCommand}.
 */
export interface UpdateInstanceCommandInput extends UpdateInstanceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInstanceCommand}.
 */
export interface UpdateInstanceCommandOutput extends UpdateInstanceResponse, __MetadataBearer {}

/**
 * <p>Enables you to programmatically update an Amazon Web Services Supply Chain instance description by providing all the relevant information such as account ID, instance ID and so on without using the AWS console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, UpdateInstanceCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, UpdateInstanceCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // UpdateInstanceRequest
 *   instanceId: "STRING_VALUE", // required
 *   instanceName: "STRING_VALUE",
 *   instanceDescription: "STRING_VALUE",
 * };
 * const command = new UpdateInstanceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInstanceResponse
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
 * @param UpdateInstanceCommandInput - {@link UpdateInstanceCommandInput}
 * @returns {@link UpdateInstanceCommandOutput}
 * @see {@link UpdateInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceCommandOutput} for command's `response` shape.
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
 *
 * @example Successful UpdateInstance request
 * ```javascript
 * //
 * const input = {
 *   instanceDescription: "updated example instance description",
 *   instanceId: "9e193580-7cc5-45f7-9609-c43ba0ada793",
 *   instanceName: "updated example instance name"
 * };
 * const command = new UpdateInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   instance: {
 *     awsAccountId: "123456789012",
 *     createdTime: 172615383136,
 *     instanceDescription: "updated example instance description",
 *     instanceId: "9e193580-7cc5-45f7-9609-c43ba0ada793",
 *     instanceName: "updated example instance name",
 *     kmsKeyArn: "arn:aws:kms:us-west-2:123456789012:key/b14ffc39-b7d4-45ab-991a-6257a7f0d24d",
 *     lastModifiedTime: 172615383136,
 *     state: "Active",
 *     versionNumber: 2.0
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateInstanceCommand extends $Command
  .classBuilder<
    UpdateInstanceCommandInput,
    UpdateInstanceCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GalaxyPublicAPIGateway", "UpdateInstance", {})
  .n("SupplyChainClient", "UpdateInstanceCommand")
  .sc(UpdateInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInstanceRequest;
      output: UpdateInstanceResponse;
    };
    sdk: {
      input: UpdateInstanceCommandInput;
      output: UpdateInstanceCommandOutput;
    };
  };
}
