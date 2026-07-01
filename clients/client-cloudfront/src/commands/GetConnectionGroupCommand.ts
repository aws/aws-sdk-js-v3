// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetConnectionGroupRequest, GetConnectionGroupResult } from "../models/models_0";
import { GetConnectionGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
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
export class GetConnectionGroupCommand extends command<GetConnectionGroupCommandInput, GetConnectionGroupCommandOutput>(
  _ep0,
  _mw0,
  "GetConnectionGroup",
  GetConnectionGroup$
) {
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
