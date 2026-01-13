// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateDedicatedIpPoolRequest, CreateDedicatedIpPoolResponse } from "../models/models_0";
import { CreateDedicatedIpPool$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDedicatedIpPoolCommand}.
 */
export interface CreateDedicatedIpPoolCommandInput extends CreateDedicatedIpPoolRequest {}
/**
 * @public
 *
 * The output of {@link CreateDedicatedIpPoolCommand}.
 */
export interface CreateDedicatedIpPoolCommandOutput extends CreateDedicatedIpPoolResponse, __MetadataBearer {}

/**
 * <p>Create a new pool of dedicated IP addresses. A pool can include one or more dedicated
 *             IP addresses that are associated with your Amazon Web Services account. You can associate a pool with
 *             a configuration set. When you send an email that uses that configuration set, the
 *             message is sent from one of the addresses in the associated pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateDedicatedIpPoolCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateDedicatedIpPoolCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // CreateDedicatedIpPoolRequest
 *   PoolName: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ScalingMode: "STANDARD" || "MANAGED",
 * };
 * const command = new CreateDedicatedIpPoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateDedicatedIpPoolCommandInput - {@link CreateDedicatedIpPoolCommandInput}
 * @returns {@link CreateDedicatedIpPoolCommandOutput}
 * @see {@link CreateDedicatedIpPoolCommandInput} for command's `input` shape.
 * @see {@link CreateDedicatedIpPoolCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource specified in your request already exists.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>The resource is being modified by another operation or thread.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class CreateDedicatedIpPoolCommand extends $Command
  .classBuilder<
    CreateDedicatedIpPoolCommandInput,
    CreateDedicatedIpPoolCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService_v2", "CreateDedicatedIpPool", {})
  .n("SESv2Client", "CreateDedicatedIpPoolCommand")
  .sc(CreateDedicatedIpPool$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDedicatedIpPoolRequest;
      output: {};
    };
    sdk: {
      input: CreateDedicatedIpPoolCommandInput;
      output: CreateDedicatedIpPoolCommandOutput;
    };
  };
}
