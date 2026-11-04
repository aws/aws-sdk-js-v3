// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResolveComponentCandidatesRequest, ResolveComponentCandidatesResponse } from "../models/models_0";
import { ResolveComponentCandidates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a list of components that meet the component, version, and platform requirements of a deployment. Greengrass core devices call this operation when they receive a deployment to identify the components to install.
 *
 * This operation identifies components that meet all dependency requirements for a deployment. If the requirements conflict, then this operation returns an error and the deployment fails. For example, this occurs if component `A` requires version `>2.0.0` and component `B` requires version `<2.0.0` of a component dependency.
 *
 * When you specify the component candidates to resolve, IoT Greengrass compares each component's digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests don't match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.
 *
 * > **Important:** To use this operation, you must use the data plane API endpoint and authenticate with an IoT device certificate. For more information, see [IoT Greengrass endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/greengrass.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ResolveComponentCandidatesCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ResolveComponentCandidatesCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
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
 *
 * You don't have permission to perform the action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * IoT Greengrass can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a request rate quota. For example, you might have exceeded the amount of times that you can retrieve device or deployment status per second.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link GreengrassV2ServiceException}
 *
 * Base exception class for all service exceptions from GreengrassV2 service.
 *
 * @public
 */
export class ResolveComponentCandidatesCommand extends command<ResolveComponentCandidatesCommandInput, ResolveComponentCandidatesCommandOutput>(
  _ep0,
  _mw0,
  "ResolveComponentCandidates",
  ResolveComponentCandidates$
) {
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
