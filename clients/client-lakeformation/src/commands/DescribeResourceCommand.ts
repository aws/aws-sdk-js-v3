// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { DescribeResourceRequest, DescribeResourceResponse } from "../models/models_0";
import { de_DescribeResourceCommand, se_DescribeResourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeResourceCommand}.
 */
export interface DescribeResourceCommandInput extends DescribeResourceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourceCommand}.
 */
export interface DescribeResourceCommandOutput extends DescribeResourceResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current data access role for the given resource registered in Lake Formation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DescribeResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DescribeResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // DescribeResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeResourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourceResponse
 * //   ResourceInfo: { // ResourceInfo
 * //     ResourceArn: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE",
 * //     LastModified: new Date("TIMESTAMP"),
 * //     WithFederation: true || false,
 * //     HybridAccessEnabled: true || false,
 * //     WithPrivilegedAccess: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeResourceCommandInput - {@link DescribeResourceCommandInput}
 * @returns {@link DescribeResourceCommandOutput}
 * @see {@link DescribeResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class DescribeResourceCommand extends $Command
  .classBuilder<
    DescribeResourceCommandInput,
    DescribeResourceCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "DescribeResource", {})
  .n("LakeFormationClient", "DescribeResourceCommand")
  .f(void 0, void 0)
  .ser(se_DescribeResourceCommand)
  .de(de_DescribeResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourceRequest;
      output: DescribeResourceResponse;
    };
    sdk: {
      input: DescribeResourceCommandInput;
      output: DescribeResourceCommandOutput;
    };
  };
}
