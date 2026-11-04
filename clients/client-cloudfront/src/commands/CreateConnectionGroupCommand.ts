// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateConnectionGroupRequest, CreateConnectionGroupResult } from "../models/models_0";
import { CreateConnectionGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a connection group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateConnectionGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateConnectionGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
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
 *
 * Access denied.
 *
 * @throws {@link EntityAlreadyExists} (client fault)
 *
 * The entity already exists. You must provide a unique entity.
 *
 * @throws {@link EntityLimitExceeded} (client fault)
 *
 * The entity limit has been exceeded.
 *
 * @throws {@link EntityNotFound} (client fault)
 *
 * The entity was not found.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidTagging} (client fault)
 *
 * The tagging specified is not valid.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class CreateConnectionGroupCommand extends command<CreateConnectionGroupCommandInput, CreateConnectionGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateConnectionGroup",
  CreateConnectionGroup$
) {
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
