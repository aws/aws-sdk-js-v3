// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetInstanceRequest, GetInstanceResponse } from "../models/models_0";
import { de_GetInstanceCommand, se_GetInstanceCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceCommand}.
 */
export interface GetInstanceCommandInput extends GetInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetInstanceCommand}.
 */
export interface GetInstanceCommandOutput extends GetInstanceResponse, __MetadataBearer {}

/**
 * <p>Enables you to programmatically retrieve the information related to an Amazon Web Services Supply Chain instance ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, GetInstanceCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, GetInstanceCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // GetInstanceRequest
 *   instanceId: "STRING_VALUE", // required
 * };
 * const command = new GetInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceResponse
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
 * @param GetInstanceCommandInput - {@link GetInstanceCommandInput}
 * @returns {@link GetInstanceCommandOutput}
 * @see {@link GetInstanceCommandInput} for command's `input` shape.
 * @see {@link GetInstanceCommandOutput} for command's `response` shape.
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
 * @example Successful GetInstance request
 * ```javascript
 * //
 * const input = {
 *   instanceId: "9e193580-7cc5-45f7-9609-c43ba0ada793"
 * };
 * const command = new GetInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   instance: {
 *     awsAccountId: "123456789012",
 *     createdTime: 172615383136,
 *     instanceDescription: "example instance description",
 *     instanceId: "9e193580-7cc5-45f7-9609-c43ba0ada793",
 *     instanceName: "example instance name",
 *     kmsKeyArn: "arn:aws:kms:us-west-2:123456789012:key/b14ffc39-b7d4-45ab-991a-6257a7f0d24d",
 *     lastModifiedTime: 172615383136,
 *     state: "Active",
 *     versionNumber: 2.0
 *   }
 * }
 * *\/
 * ```
 *
 * @example Successful GetInstance request with error message
 * ```javascript
 * //
 * const input = {
 *   instanceId: "9e193580-7cc5-45f7-9609-c43ba0ada793"
 * };
 * const command = new GetInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   instance: {
 *     awsAccountId: "123456789012",
 *     createdTime: 172615383136,
 *     errorMessage: "Access denied when attempting to create an S3 bucket. Please correct your IAM policy and try again.",
 *     instanceDescription: "example instance description",
 *     instanceId: "9e193580-7cc5-45f7-9609-c43ba0ada793",
 *     instanceName: "example instance name",
 *     kmsKeyArn: "arn:aws:kms:us-west-2:123456789012:key/b14ffc39-b7d4-45ab-991a-6257a7f0d24d",
 *     lastModifiedTime: 172615383136,
 *     state: "CreateFailed",
 *     versionNumber: 2.0
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetInstanceCommand extends $Command
  .classBuilder<
    GetInstanceCommandInput,
    GetInstanceCommandOutput,
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
  .s("GalaxyPublicAPIGateway", "GetInstance", {})
  .n("SupplyChainClient", "GetInstanceCommand")
  .f(void 0, void 0)
  .ser(se_GetInstanceCommand)
  .de(de_GetInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInstanceRequest;
      output: GetInstanceResponse;
    };
    sdk: {
      input: GetInstanceCommandInput;
      output: GetInstanceCommandOutput;
    };
  };
}
