// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateProtectionGroupRequest, CreateProtectionGroupResponse } from "../models/models_0";
import { CreateProtectionGroup } from "../schemas/schemas_7_Protection";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProtectionGroupCommand}.
 */
export interface CreateProtectionGroupCommandInput extends CreateProtectionGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateProtectionGroupCommand}.
 */
export interface CreateProtectionGroupCommandOutput extends CreateProtectionGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, CreateProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, CreateProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = { // CreateProtectionGroupRequest
 *   ProtectionGroupId: "STRING_VALUE", // required
 *   Aggregation: "SUM" || "MEAN" || "MAX", // required
 *   Pattern: "ALL" || "ARBITRARY" || "BY_RESOURCE_TYPE", // required
 *   ResourceType: "CLOUDFRONT_DISTRIBUTION" || "ROUTE_53_HOSTED_ZONE" || "ELASTIC_IP_ALLOCATION" || "CLASSIC_LOAD_BALANCER" || "APPLICATION_LOAD_BALANCER" || "GLOBAL_ACCELERATOR",
 *   Members: [ // ProtectionGroupMembers
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateProtectionGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateProtectionGroupCommandInput - {@link CreateProtectionGroupCommandInput}
 * @returns {@link CreateProtectionGroupCommandOutput}
 * @see {@link CreateProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link CreateProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link LimitsExceededException} (client fault)
 *  <p>Exception that indicates that the operation would exceed a limit.</p>
 *
 * @throws {@link OptimisticLockException} (client fault)
 *  <p>Exception that indicates that the resource state has been modified by another
 *          client. Retrieve the resource and then retry your request.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>Exception indicating the specified resource already exists. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 *
 * @public
 */
export class CreateProtectionGroupCommand extends $Command
  .classBuilder<
    CreateProtectionGroupCommandInput,
    CreateProtectionGroupCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShield_20160616", "CreateProtectionGroup", {})
  .n("ShieldClient", "CreateProtectionGroupCommand")
  .sc(CreateProtectionGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProtectionGroupRequest;
      output: {};
    };
    sdk: {
      input: CreateProtectionGroupCommandInput;
      output: CreateProtectionGroupCommandOutput;
    };
  };
}
