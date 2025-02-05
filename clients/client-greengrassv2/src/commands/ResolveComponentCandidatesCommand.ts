// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { ResolveComponentCandidatesRequest, ResolveComponentCandidatesResponse } from "../models/models_0";
import { de_ResolveComponentCandidatesCommand, se_ResolveComponentCandidatesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResolveComponentCandidatesCommand}.
 */
export interface ResolveComponentCandidatesCommandInput extends ResolveComponentCandidatesRequest {}
/**
 * @public
 *
 * The output of {@link ResolveComponentCandidatesCommand}.
 */
export interface ResolveComponentCandidatesCommandOutput extends ResolveComponentCandidatesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of components that meet the component, version, and platform requirements
 *       of a deployment. Greengrass core devices call this operation when they receive a deployment to
 *       identify the components to install.</p>
 *          <p>This operation identifies components that meet all dependency requirements for a
 *       deployment. If the requirements conflict, then this operation returns an error and the
 *       deployment fails. For example, this occurs if component <code>A</code> requires version
 *         <code>>2.0.0</code> and component <code>B</code> requires version <code><2.0.0</code>
 *       of a component dependency.</p>
 *          <p>When you specify the component candidates to resolve, IoT Greengrass compares each component's
 *       digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests
 *       don't match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.</p>
 *          <important>
 *             <p>To use this operation, you must use the data plane API endpoint and authenticate with an
 *         IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">IoT Greengrass endpoints and quotas</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ResolveComponentCandidatesCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ResolveComponentCandidatesCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GreengrassV2Client(config);
 * const input = { // ResolveComponentCandidatesRequest
 *   platform: { // ComponentPlatform
 *     name: "STRING_VALUE",
 *     attributes: { // PlatformAttributesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   componentCandidates: [ // ComponentCandidateList
 *     { // ComponentCandidate
 *       componentName: "STRING_VALUE",
 *       componentVersion: "STRING_VALUE",
 *       versionRequirements: { // ComponentVersionRequirementMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new ResolveComponentCandidatesCommand(input);
 * const response = await client.send(command);
 * // { // ResolveComponentCandidatesResponse
 * //   resolvedComponentVersions: [ // ResolvedComponentVersionsList
 * //     { // ResolvedComponentVersion
 * //       arn: "STRING_VALUE",
 * //       componentName: "STRING_VALUE",
 * //       componentVersion: "STRING_VALUE",
 * //       recipe: new Uint8Array(),
 * //       vendorGuidance: "ACTIVE" || "DISCONTINUED" || "DELETED",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ResolveComponentCandidatesCommandInput - {@link ResolveComponentCandidatesCommandInput}
 * @returns {@link ResolveComponentCandidatesCommandOutput}
 * @see {@link ResolveComponentCandidatesCommandInput} for command's `input` shape.
 * @see {@link ResolveComponentCandidatesCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 * @public
 */
export class ResolveComponentCandidatesCommand extends $Command
  .classBuilder<
    ResolveComponentCandidatesCommandInput,
    ResolveComponentCandidatesCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GreengrassV2", "ResolveComponentCandidates", {})
  .n("GreengrassV2Client", "ResolveComponentCandidatesCommand")
  .f(void 0, void 0)
  .ser(se_ResolveComponentCandidatesCommand)
  .de(de_ResolveComponentCandidatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResolveComponentCandidatesRequest;
      output: ResolveComponentCandidatesResponse;
    };
    sdk: {
      input: ResolveComponentCandidatesCommandInput;
      output: ResolveComponentCandidatesCommandOutput;
    };
  };
}
