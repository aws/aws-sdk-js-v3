// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEndpointRequest, CreateEndpointResult } from "../models/models_0";
import { de_CreateEndpointCommand, se_CreateEndpointCommand } from "../protocols/Aws_restJson1";
import { S3OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3OutpostsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEndpointCommand}.
 */
export interface CreateEndpointCommandInput extends CreateEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateEndpointCommand}.
 */
export interface CreateEndpointCommandOutput extends CreateEndpointResult, __MetadataBearer {}

/**
 * <p>Creates an endpoint and associates it with the specified Outpost.</p>
 *          <note>
 *             <p>It can take up to 5 minutes for this action to finish.</p>
 *          </note>
 *          <p></p>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_DeleteEndpoint.html">DeleteEndpoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_s3outposts_ListEndpoints.html">ListEndpoints</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3OutpostsClient, CreateEndpointCommand } from "@aws-sdk/client-s3outposts"; // ES Modules import
 * // const { S3OutpostsClient, CreateEndpointCommand } = require("@aws-sdk/client-s3outposts"); // CommonJS import
 * const client = new S3OutpostsClient(config);
 * const input = { // CreateEndpointRequest
 *   OutpostId: "STRING_VALUE", // required
 *   SubnetId: "STRING_VALUE", // required
 *   SecurityGroupId: "STRING_VALUE", // required
 *   AccessType: "Private" || "CustomerOwnedIp",
 *   CustomerOwnedIpv4Pool: "STRING_VALUE",
 * };
 * const command = new CreateEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateEndpointResult
 * //   EndpointArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEndpointCommandInput - {@link CreateEndpointCommandInput}
 * @returns {@link CreateEndpointCommandOutput}
 * @see {@link CreateEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointCommandOutput} for command's `response` shape.
 * @see {@link S3OutpostsClientResolvedConfig | config} for S3OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access was denied for this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an exception with the internal server.</p>
 *
 * @throws {@link OutpostOfflineException} (client fault)
 *  <p>The service link connection to your Outposts home Region is down. Check your connection and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this data.</p>
 *
 * @throws {@link S3OutpostsServiceException}
 * <p>Base exception class for all service exceptions from S3Outposts service.</p>
 *
 *
 * @public
 */
export class CreateEndpointCommand extends $Command
  .classBuilder<
    CreateEndpointCommandInput,
    CreateEndpointCommandOutput,
    S3OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3OutpostsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("S3Outposts", "CreateEndpoint", {})
  .n("S3OutpostsClient", "CreateEndpointCommand")
  .f(void 0, void 0)
  .ser(se_CreateEndpointCommand)
  .de(de_CreateEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEndpointRequest;
      output: CreateEndpointResult;
    };
    sdk: {
      input: CreateEndpointCommandInput;
      output: CreateEndpointCommandOutput;
    };
  };
}
