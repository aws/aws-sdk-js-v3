// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateConnectionGroupRequest, UpdateConnectionGroupResult } from "../models/models_1";
import { UpdateConnectionGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateConnectionGroupCommand}.
 */
export interface UpdateConnectionGroupCommandInput extends UpdateConnectionGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectionGroupCommand}.
 */
export interface UpdateConnectionGroupCommandOutput extends UpdateConnectionGroupResult, __MetadataBearer {}

/**
 * Updates a connection group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateConnectionGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateConnectionGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateConnectionGroupRequest
 *   Id: "STRING_VALUE", // required
 *   Ipv6Enabled: true || false,
 *   IfMatch: "STRING_VALUE", // required
 *   AnycastIpListId: "STRING_VALUE",
 *   Enabled: true || false,
 * };
 * const command = new UpdateConnectionGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectionGroupResult
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
 * @param UpdateConnectionGroupCommandInput - {@link UpdateConnectionGroupCommandInput}
 * @returns {@link UpdateConnectionGroupCommandOutput}
 * @see {@link UpdateConnectionGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link ResourceInUse} (client fault)
 *
 * Cannot delete this resource because it is in use.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class UpdateConnectionGroupCommand extends command<UpdateConnectionGroupCommandInput, UpdateConnectionGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateConnectionGroup",
  UpdateConnectionGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectionGroupRequest;
      output: UpdateConnectionGroupResult;
    };
    sdk: {
      input: UpdateConnectionGroupCommandInput;
      output: UpdateConnectionGroupCommandOutput;
    };
  };
}
