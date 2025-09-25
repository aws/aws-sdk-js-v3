// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCloudFormationTemplateRequest, GetCloudFormationTemplateResponse } from "../models/models_0";
import { GetCloudFormationTemplate } from "../schemas/schemas_1_Application";
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
 * The input for {@link GetCloudFormationTemplateCommand}.
 */
export interface GetCloudFormationTemplateCommandInput extends GetCloudFormationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetCloudFormationTemplateCommand}.
 */
export interface GetCloudFormationTemplateCommandOutput extends GetCloudFormationTemplateResponse, __MetadataBearer {}

/**
 * <p>Gets the specified AWS CloudFormation template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, GetCloudFormationTemplateCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, GetCloudFormationTemplateCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * // import type { ServerlessApplicationRepositoryClientConfig } from "@aws-sdk/client-serverlessapplicationrepository";
 * const config = {}; // type is ServerlessApplicationRepositoryClientConfig
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // GetCloudFormationTemplateRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   TemplateId: "STRING_VALUE", // required
 * };
 * const command = new GetCloudFormationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetCloudFormationTemplateResponse
 * //   ApplicationId: "STRING_VALUE",
 * //   CreationTime: "STRING_VALUE",
 * //   ExpirationTime: "STRING_VALUE",
 * //   SemanticVersion: "STRING_VALUE",
 * //   Status: "PREPARING" || "ACTIVE" || "EXPIRED",
 * //   TemplateId: "STRING_VALUE",
 * //   TemplateUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCloudFormationTemplateCommandInput - {@link GetCloudFormationTemplateCommandInput}
 * @returns {@link GetCloudFormationTemplateCommandOutput}
 * @see {@link GetCloudFormationTemplateCommandInput} for command's `input` shape.
 * @see {@link GetCloudFormationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for ServerlessApplicationRepositoryClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
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
export class GetCloudFormationTemplateCommand extends $Command
  .classBuilder<
    GetCloudFormationTemplateCommandInput,
    GetCloudFormationTemplateCommandOutput,
    ServerlessApplicationRepositoryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServerlessApplicationRepositoryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServerlessApplicationRepository", "GetCloudFormationTemplate", {})
  .n("ServerlessApplicationRepositoryClient", "GetCloudFormationTemplateCommand")
  .sc(GetCloudFormationTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCloudFormationTemplateRequest;
      output: GetCloudFormationTemplateResponse;
    };
    sdk: {
      input: GetCloudFormationTemplateCommandInput;
      output: GetCloudFormationTemplateCommandOutput;
    };
  };
}
