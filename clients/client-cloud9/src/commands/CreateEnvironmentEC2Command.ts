// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateEnvironmentEC2Request, CreateEnvironmentEC2Result } from "../models/models_0";
import { CreateEnvironmentEC2 } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentEC2Command}.
 */
export interface CreateEnvironmentEC2CommandInput extends CreateEnvironmentEC2Request {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentEC2Command}.
 */
export interface CreateEnvironmentEC2CommandOutput extends CreateEnvironmentEC2Result, __MetadataBearer {}

/**
 * <p>Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and
 *       then connects from the instance to the environment.</p>
 *          <important>
 *             <p>Cloud9 is no longer available to new customers. Existing customers of
 *         Cloud9 can continue to use the service as normal.
 *         <a href="http://aws.amazon.com/blogs/devops/how-to-migrate-from-aws-cloud9-to-aws-ide-toolkits-or-aws-cloudshell/">Learn more"</a>
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, CreateEnvironmentEC2Command } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, CreateEnvironmentEC2Command } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * // import type { Cloud9ClientConfig } from "@aws-sdk/client-cloud9";
 * const config = {}; // type is Cloud9ClientConfig
 * const client = new Cloud9Client(config);
 * const input = { // CreateEnvironmentEC2Request
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientRequestToken: "STRING_VALUE",
 *   instanceType: "STRING_VALUE", // required
 *   subnetId: "STRING_VALUE",
 *   imageId: "STRING_VALUE", // required
 *   automaticStopTimeMinutes: Number("int"),
 *   ownerArn: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   connectionType: "CONNECT_SSH" || "CONNECT_SSM",
 *   dryRun: true || false,
 * };
 * const command = new CreateEnvironmentEC2Command(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentEC2Result
 * //   environmentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEnvironmentEC2CommandInput - {@link CreateEnvironmentEC2CommandInput}
 * @returns {@link CreateEnvironmentEC2CommandOutput}
 * @see {@link CreateEnvironmentEC2CommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentEC2CommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for Cloud9Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The target request is invalid.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>An access permissions issue occurred.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The target resource cannot be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many service requests were made over the given time period.</p>
 *
 * @throws {@link Cloud9ServiceException}
 * <p>Base exception class for all service exceptions from Cloud9 service.</p>
 *
 *
 * @example CreateEnvironmentEC2
 * ```javascript
 * //
 * const input = {
 *   automaticStopTimeMinutes: 60,
 *   description: "This is my demonstration environment.",
 *   imageId: "amazonlinux-2023-x86_64",
 *   instanceType: "t2.micro",
 *   name: "my-demo-environment",
 *   ownerArn: "arn:aws:iam::123456789012:user/MyDemoUser",
 *   subnetId: "subnet-6300cd1b"
 * };
 * const command = new CreateEnvironmentEC2Command(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   environmentId: "8d9967e2f0624182b74e7690ad69ebEX"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateEnvironmentEC2Command extends $Command
  .classBuilder<
    CreateEnvironmentEC2CommandInput,
    CreateEnvironmentEC2CommandOutput,
    Cloud9ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Cloud9ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCloud9WorkspaceManagementService", "CreateEnvironmentEC2", {})
  .n("Cloud9Client", "CreateEnvironmentEC2Command")
  .sc(CreateEnvironmentEC2)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentEC2Request;
      output: CreateEnvironmentEC2Result;
    };
    sdk: {
      input: CreateEnvironmentEC2CommandInput;
      output: CreateEnvironmentEC2CommandOutput;
    };
  };
}
