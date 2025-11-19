// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListPolicyVersionsRequest, ListPolicyVersionsResponse } from "../models/models_1";
import { ListPolicyVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPolicyVersionsCommand}.
 */
export interface ListPolicyVersionsCommandInput extends ListPolicyVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPolicyVersionsCommand}.
 */
export interface ListPolicyVersionsCommandOutput extends ListPolicyVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists the versions of the specified policy and identifies the default
 *          version.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyVersions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListPolicyVersionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListPolicyVersionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListPolicyVersionsRequest
 *   policyName: "STRING_VALUE", // required
 * };
 * const command = new ListPolicyVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyVersionsResponse
 * //   policyVersions: [ // PolicyVersions
 * //     { // PolicyVersion
 * //       versionId: "STRING_VALUE",
 * //       isDefaultVersion: true || false,
 * //       createDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPolicyVersionsCommandInput - {@link ListPolicyVersionsCommandInput}
 * @returns {@link ListPolicyVersionsCommandOutput}
 * @see {@link ListPolicyVersionsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyVersionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListPolicyVersionsCommand extends $Command
  .classBuilder<
    ListPolicyVersionsCommandInput,
    ListPolicyVersionsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListPolicyVersions", {})
  .n("IoTClient", "ListPolicyVersionsCommand")
  .sc(ListPolicyVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyVersionsRequest;
      output: ListPolicyVersionsResponse;
    };
    sdk: {
      input: ListPolicyVersionsCommandInput;
      output: ListPolicyVersionsCommandOutput;
    };
  };
}
