// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { ListGatewayInstancesRequest, ListGatewayInstancesResponse } from "../models/models_0";
import { de_ListGatewayInstancesCommand, se_ListGatewayInstancesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGatewayInstancesCommand}.
 */
export interface ListGatewayInstancesCommandInput extends ListGatewayInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListGatewayInstancesCommand}.
 */
export interface ListGatewayInstancesCommandOutput extends ListGatewayInstancesResponse, __MetadataBearer {}

/**
 * Displays a list of instances associated with the AWS account. This request returns a paginated result. You can use the filterArn property to display only the instances associated with the selected Gateway Amazon Resource Name (ARN).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListGatewayInstancesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListGatewayInstancesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaConnectClient(config);
 * const input = { // ListGatewayInstancesRequest
 *   FilterArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListGatewayInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListGatewayInstancesResponse
 * //   Instances: [ // __listOfListedGatewayInstance
 * //     { // ListedGatewayInstance
 * //       GatewayArn: "STRING_VALUE", // required
 * //       GatewayInstanceArn: "STRING_VALUE", // required
 * //       InstanceId: "STRING_VALUE", // required
 * //       InstanceState: "REGISTERING" || "ACTIVE" || "DEREGISTERING" || "DEREGISTERED" || "REGISTRATION_ERROR" || "DEREGISTRATION_ERROR",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGatewayInstancesCommandInput - {@link ListGatewayInstancesCommandInput}
 * @returns {@link ListGatewayInstancesCommandOutput}
 * @see {@link ListGatewayInstancesCommandInput} for command's `input` shape.
 * @see {@link ListGatewayInstancesCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ConflictException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 * @public
 */
export class ListGatewayInstancesCommand extends $Command
  .classBuilder<
    ListGatewayInstancesCommandInput,
    ListGatewayInstancesCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConnect", "ListGatewayInstances", {})
  .n("MediaConnectClient", "ListGatewayInstancesCommand")
  .f(void 0, void 0)
  .ser(se_ListGatewayInstancesCommand)
  .de(de_ListGatewayInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGatewayInstancesRequest;
      output: ListGatewayInstancesResponse;
    };
    sdk: {
      input: ListGatewayInstancesCommandInput;
      output: ListGatewayInstancesCommandOutput;
    };
  };
}
