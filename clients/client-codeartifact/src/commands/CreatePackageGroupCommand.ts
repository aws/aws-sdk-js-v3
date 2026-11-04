// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePackageGroupRequest, CreatePackageGroupResult } from "../models/models_0";
import { CreatePackageGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePackageGroupCommand}.
 */
export interface CreatePackageGroupCommandInput extends CreatePackageGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreatePackageGroupCommand}.
 */
export interface CreatePackageGroupCommandOutput extends CreatePackageGroupResult, __MetadataBearer {}

/**
 * Creates a package group. For more information about creating package groups, including example CLI commands, see [Create a package group](https://docs.aws.amazon.com/codeartifact/latest/ug/create-package-group.html) in the *CodeArtifact User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, CreatePackageGroupCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, CreatePackageGroupCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // CreatePackageGroupRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   packageGroup: "STRING_VALUE", // required
 *   contactInfo: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreatePackageGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreatePackageGroupResult
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
 * @param CreatePackageGroupCommandInput - {@link CreatePackageGroupCommandInput}
 * @returns {@link CreatePackageGroupCommandOutput}
 * @see {@link CreatePackageGroupCommandInput} for command's `input` shape.
 * @see {@link CreatePackageGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The operation did not succeed because of an unauthorized access attempt.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The operation did not succeed because prerequisites are not met.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The operation did not succeed because of an error that occurred inside CodeArtifact.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation did not succeed because the resource requested is not found in the service.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The operation did not succeed because it would have exceeded a service limit for your account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The operation did not succeed because too many requests are sent to the service.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The operation did not succeed because a parameter in the request was sent with an invalid value.
 *
 * @throws {@link CodeartifactServiceException}
 *
 * Base exception class for all service exceptions from Codeartifact service.
 *
 * @public
 */
export class CreatePackageGroupCommand extends command<CreatePackageGroupCommandInput, CreatePackageGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreatePackageGroup",
  CreatePackageGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePackageGroupRequest;
      output: CreatePackageGroupResult;
    };
    sdk: {
      input: CreatePackageGroupCommandInput;
      output: CreatePackageGroupCommandOutput;
    };
  };
}
