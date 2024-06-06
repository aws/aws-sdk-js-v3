// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePackageGroupRequest, DescribePackageGroupResult } from "../models/models_0";
import { de_DescribePackageGroupCommand, se_DescribePackageGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePackageGroupCommand}.
 */
export interface DescribePackageGroupCommandInput extends DescribePackageGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribePackageGroupCommand}.
 */
export interface DescribePackageGroupCommandOutput extends DescribePackageGroupResult, __MetadataBearer {}

/**
 * <p>Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageGroupDescription.html">PackageGroupDescription</a> object that
 *     contains information about the requested package group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DescribePackageGroupCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DescribePackageGroupCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const input = { // DescribePackageGroupRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   packageGroup: "STRING_VALUE", // required
 * };
 * const command = new DescribePackageGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribePackageGroupResult
 * //   packageGroup: { // PackageGroupDescription
 * //     arn: "STRING_VALUE",
 * //     pattern: "STRING_VALUE",
 * //     domainName: "STRING_VALUE",
 * //     domainOwner: "STRING_VALUE",
 * //     createdTime: new Date("TIMESTAMP"),
 * //     contactInfo: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     originConfiguration: { // PackageGroupOriginConfiguration
 * //       restrictions: { // PackageGroupOriginRestrictions
 * //         "<keys>": { // PackageGroupOriginRestriction
 * //           mode: "ALLOW" || "ALLOW_SPECIFIC_REPOSITORIES" || "BLOCK" || "INHERIT",
 * //           effectiveMode: "ALLOW" || "ALLOW_SPECIFIC_REPOSITORIES" || "BLOCK" || "INHERIT",
 * //           inheritedFrom: { // PackageGroupReference
 * //             arn: "STRING_VALUE",
 * //             pattern: "STRING_VALUE",
 * //           },
 * //           repositoriesCount: Number("long"),
 * //         },
 * //       },
 * //     },
 * //     parent: {
 * //       arn: "STRING_VALUE",
 * //       pattern: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePackageGroupCommandInput - {@link DescribePackageGroupCommandInput}
 * @returns {@link DescribePackageGroupCommandOutput}
 * @see {@link DescribePackageGroupCommandInput} for command's `input` shape.
 * @see {@link DescribePackageGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         The operation did not succeed because of an unauthorized access attempt.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation did not succeed because of an error that occurred inside CodeArtifact. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *       The operation did not succeed because the resource requested is not found in the service.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *       The operation did not succeed because too many requests are sent to the service.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *       The operation did not succeed because a parameter in the request was sent with an invalid value.
 *     </p>
 *
 * @throws {@link CodeartifactServiceException}
 * <p>Base exception class for all service exceptions from Codeartifact service.</p>
 *
 * @public
 */
export class DescribePackageGroupCommand extends $Command
  .classBuilder<
    DescribePackageGroupCommandInput,
    DescribePackageGroupCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeArtifactControlPlaneService", "DescribePackageGroup", {})
  .n("CodeartifactClient", "DescribePackageGroupCommand")
  .f(void 0, void 0)
  .ser(se_DescribePackageGroupCommand)
  .de(de_DescribePackageGroupCommand)
  .build() {}
