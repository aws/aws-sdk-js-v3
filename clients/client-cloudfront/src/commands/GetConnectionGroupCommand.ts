// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConnectionGroupRequest, GetConnectionGroupResult } from "../models/models_1";
import { de_GetConnectionGroupCommand, se_GetConnectionGroupCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectionGroupCommand}.
 */
export interface GetConnectionGroupCommandInput extends GetConnectionGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectionGroupCommand}.
 */
export interface GetConnectionGroupCommandOutput extends GetConnectionGroupResult, __MetadataBearer {}

/**
 * <p>Gets information about a connection group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetConnectionGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetConnectionGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetConnectionGroupRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetConnectionGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectionGroupResult
 * //   ConnectionGroup: { // ConnectionGroup
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     Tags: { // Tags
 * //       Items: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     Ipv6Enabled: true || false,
 * //     RoutingEndpoint: "STRING_VALUE",
 * //     AnycastIpListId: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     IsDefault: true || false,
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConnectionGroupCommandInput - {@link GetConnectionGroupCommandInput}
 * @returns {@link GetConnectionGroupCommandOutput}
 * @see {@link GetConnectionGroupCommandInput} for command's `input` shape.
 * @see {@link GetConnectionGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetConnectionGroupCommand extends $Command
  .classBuilder<
    GetConnectionGroupCommandInput,
    GetConnectionGroupCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "GetConnectionGroup", {})
  .n("CloudFrontClient", "GetConnectionGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetConnectionGroupCommand)
  .de(de_GetConnectionGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectionGroupRequest;
      output: GetConnectionGroupResult;
    };
    sdk: {
      input: GetConnectionGroupCommandInput;
      output: GetConnectionGroupCommandOutput;
    };
  };
}
