// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateApplicationRequest, UpdateApplicationResponse } from "../models/models_0";
import { UpdateApplication } from "../schemas/schemas_0";
import {
  ServerlessApplicationRepositoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServerlessApplicationRepositoryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandInput extends UpdateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandOutput extends UpdateApplicationResponse, __MetadataBearer {}

/**
 * <p>Updates the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, UpdateApplicationCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, UpdateApplicationCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * // import type { ServerlessApplicationRepositoryClientConfig } from "@aws-sdk/client-serverlessapplicationrepository";
 * const config = {}; // type is ServerlessApplicationRepositoryClientConfig
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // UpdateApplicationRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   Author: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   HomePageUrl: "STRING_VALUE",
 *   Labels: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   ReadmeBody: "STRING_VALUE",
 *   ReadmeUrl: "STRING_VALUE",
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApplicationResponse
 * //   ApplicationId: "STRING_VALUE",
 * //   Author: "STRING_VALUE",
 * //   CreationTime: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   HomePageUrl: "STRING_VALUE",
 * //   IsVerifiedAuthor: true || false,
 * //   Labels: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   LicenseUrl: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   ReadmeUrl: "STRING_VALUE",
 * //   SpdxLicenseId: "STRING_VALUE",
 * //   VerifiedAuthorUrl: "STRING_VALUE",
 * //   Version: { // Version
 * //     ApplicationId: "STRING_VALUE", // required
 * //     CreationTime: "STRING_VALUE", // required
 * //     ParameterDefinitions: [ // __listOfParameterDefinition // required
 * //       { // ParameterDefinition
 * //         AllowedPattern: "STRING_VALUE",
 * //         AllowedValues: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ConstraintDescription: "STRING_VALUE",
 * //         DefaultValue: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         MaxLength: Number("int"),
 * //         MaxValue: Number("int"),
 * //         MinLength: Number("int"),
 * //         MinValue: Number("int"),
 * //         Name: "STRING_VALUE", // required
 * //         NoEcho: true || false,
 * //         ReferencedByResources: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Type: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RequiredCapabilities: [ // __listOfCapability // required
 * //       "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND" || "CAPABILITY_RESOURCE_POLICY",
 * //     ],
 * //     ResourcesSupported: true || false, // required
 * //     SemanticVersion: "STRING_VALUE", // required
 * //     SourceCodeArchiveUrl: "STRING_VALUE",
 * //     SourceCodeUrl: "STRING_VALUE",
 * //     TemplateUrl: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateApplicationCommandInput - {@link UpdateApplicationCommandInput}
 * @returns {@link UpdateApplicationCommandOutput}
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for ServerlessApplicationRepositoryClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is not authenticated.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The AWS Serverless Application Repository service encountered an internal error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource (for example, an access policy statement) specified in the request doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The client is sending more than the allowed number of requests per unit of time.</p>
 *
 * @throws {@link ServerlessApplicationRepositoryServiceException}
 * <p>Base exception class for all service exceptions from ServerlessApplicationRepository service.</p>
 *
 *
 * @public
 */
export class UpdateApplicationCommand extends $Command
  .classBuilder<
    UpdateApplicationCommandInput,
    UpdateApplicationCommandOutput,
    ServerlessApplicationRepositoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServerlessApplicationRepositoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServerlessApplicationRepository", "UpdateApplication", {})
  .n("ServerlessApplicationRepositoryClient", "UpdateApplicationCommand")
  .sc(UpdateApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationRequest;
      output: UpdateApplicationResponse;
    };
    sdk: {
      input: UpdateApplicationCommandInput;
      output: UpdateApplicationCommandOutput;
    };
  };
}
