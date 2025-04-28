// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConnectionGroupRequest, CreateConnectionGroupResult } from "../models/models_0";
import { de_CreateConnectionGroupCommand, se_CreateConnectionGroupCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectionGroupCommand}.
 */
export interface CreateConnectionGroupCommandInput extends CreateConnectionGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectionGroupCommand}.
 */
export interface CreateConnectionGroupCommandOutput extends CreateConnectionGroupResult, __MetadataBearer {}

/**
 * <p>Creates a connection group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateConnectionGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateConnectionGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreateConnectionGroupRequest
 *   Name: "STRING_VALUE", // required
 *   Ipv6Enabled: true || false,
 *   Tags: { // Tags
 *     Items: [ // TagList
 *       { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   AnycastIpListId: "STRING_VALUE",
 *   Enabled: true || false,
 * };
 * const command = new CreateConnectionGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectionGroupResult
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
 * @param CreateConnectionGroupCommandInput - {@link CreateConnectionGroupCommandInput}
 * @returns {@link CreateConnectionGroupCommandOutput}
 * @see {@link CreateConnectionGroupCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityAlreadyExists} (client fault)
 *  <p>The entity already exists. You must provide a unique
 * 			entity.</p>
 *
 * @throws {@link EntityLimitExceeded} (client fault)
 *  <p>The entity limit has been exceeded.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidTagging} (client fault)
 *  <p>The tagging specified is not valid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class CreateConnectionGroupCommand extends $Command
  .classBuilder<
    CreateConnectionGroupCommandInput,
    CreateConnectionGroupCommandOutput,
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
  .s("Cloudfront2020_05_31", "CreateConnectionGroup", {})
  .n("CloudFrontClient", "CreateConnectionGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateConnectionGroupCommand)
  .de(de_CreateConnectionGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectionGroupRequest;
      output: CreateConnectionGroupResult;
    };
    sdk: {
      input: CreateConnectionGroupCommandInput;
      output: CreateConnectionGroupCommandOutput;
    };
  };
}
