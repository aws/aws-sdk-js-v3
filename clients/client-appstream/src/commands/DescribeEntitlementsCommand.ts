// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeEntitlementsRequest, DescribeEntitlementsResult } from "../models/models_0";
import { DescribeEntitlements } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEntitlementsCommand}.
 */
export interface DescribeEntitlementsCommandInput extends DescribeEntitlementsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEntitlementsCommand}.
 */
export interface DescribeEntitlementsCommandOutput extends DescribeEntitlementsResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes one of more entitlements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeEntitlementsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeEntitlementsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DescribeEntitlementsRequest
 *   Name: "STRING_VALUE",
 *   StackName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeEntitlementsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEntitlementsResult
 * //   Entitlements: [ // EntitlementList
 * //     { // Entitlement
 * //       Name: "STRING_VALUE", // required
 * //       StackName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       AppVisibility: "ALL" || "ASSOCIATED", // required
 * //       Attributes: [ // EntitlementAttributeList // required
 * //         { // EntitlementAttribute
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEntitlementsCommandInput - {@link DescribeEntitlementsCommandInput}
 * @returns {@link DescribeEntitlementsCommandOutput}
 * @see {@link DescribeEntitlementsCommandInput} for command's `input` shape.
 * @see {@link DescribeEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link EntitlementNotFoundException} (client fault)
 *  <p>The entitlement can't be found.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class DescribeEntitlementsCommand extends $Command
  .classBuilder<
    DescribeEntitlementsCommandInput,
    DescribeEntitlementsCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DescribeEntitlements", {})
  .n("AppStreamClient", "DescribeEntitlementsCommand")
  .sc(DescribeEntitlements)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEntitlementsRequest;
      output: DescribeEntitlementsResult;
    };
    sdk: {
      input: DescribeEntitlementsCommandInput;
      output: DescribeEntitlementsCommandOutput;
    };
  };
}
