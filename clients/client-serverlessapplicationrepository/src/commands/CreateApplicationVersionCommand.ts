// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateApplicationVersionRequest, CreateApplicationVersionResponse } from "../models/models_0";
import { de_CreateApplicationVersionCommand, se_CreateApplicationVersionCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link CreateApplicationVersionCommand}.
 */
export interface CreateApplicationVersionCommandInput extends CreateApplicationVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationVersionCommand}.
 */
export interface CreateApplicationVersionCommandOutput extends CreateApplicationVersionResponse, __MetadataBearer {}

/**
 * <p>Creates an application version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, CreateApplicationVersionCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, CreateApplicationVersionCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * // import type { ServerlessApplicationRepositoryClientConfig } from "@aws-sdk/client-serverlessapplicationrepository";
 * const config = {}; // type is ServerlessApplicationRepositoryClientConfig
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // CreateApplicationVersionRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   SemanticVersion: "STRING_VALUE", // required
 *   SourceCodeArchiveUrl: "STRING_VALUE",
 *   SourceCodeUrl: "STRING_VALUE",
 *   TemplateBody: "STRING_VALUE",
 *   TemplateUrl: "STRING_VALUE",
 * };
 * const command = new CreateApplicationVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationVersionResponse
 * //   ApplicationId: "STRING_VALUE",
 * //   CreationTime: "STRING_VALUE",
 * //   ParameterDefinitions: [ // __listOfParameterDefinition
 * //     { // ParameterDefinition
 * //       AllowedPattern: "STRING_VALUE",
 * //       AllowedValues: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       ConstraintDescription: "STRING_VALUE",
 * //       DefaultValue: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       MaxLength: Number("int"),
 * //       MaxValue: Number("int"),
 * //       MinLength: Number("int"),
 * //       MinValue: Number("int"),
 * //       Name: "STRING_VALUE", // required
 * //       NoEcho: true || false,
 * //       ReferencedByResources: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   RequiredCapabilities: [ // __listOfCapability
 * //     "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND" || "CAPABILITY_RESOURCE_POLICY",
 * //   ],
 * //   ResourcesSupported: true || false,
 * //   SemanticVersion: "STRING_VALUE",
 * //   SourceCodeArchiveUrl: "STRING_VALUE",
 * //   SourceCodeUrl: "STRING_VALUE",
 * //   TemplateUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateApplicationVersionCommandInput - {@link CreateApplicationVersionCommandInput}
 * @returns {@link CreateApplicationVersionCommandOutput}
 * @see {@link CreateApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationVersionCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The client is sending more than the allowed number of requests per unit of time.</p>
 *
 * @throws {@link ServerlessApplicationRepositoryServiceException}
 * <p>Base exception class for all service exceptions from ServerlessApplicationRepository service.</p>
 *
 *
 * @public
 */
export class CreateApplicationVersionCommand extends $Command
  .classBuilder<
    CreateApplicationVersionCommandInput,
    CreateApplicationVersionCommandOutput,
    ServerlessApplicationRepositoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServerlessApplicationRepositoryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ServerlessApplicationRepository", "CreateApplicationVersion", {})
  .n("ServerlessApplicationRepositoryClient", "CreateApplicationVersionCommand")
  .f(void 0, void 0)
  .ser(se_CreateApplicationVersionCommand)
  .de(de_CreateApplicationVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationVersionRequest;
      output: CreateApplicationVersionResponse;
    };
    sdk: {
      input: CreateApplicationVersionCommandInput;
      output: CreateApplicationVersionCommandOutput;
    };
  };
}
