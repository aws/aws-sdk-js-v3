// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCloudFormationChangeSetRequest, CreateCloudFormationChangeSetResponse } from "../models/models_0";
import {
  de_CreateCloudFormationChangeSetCommand,
  se_CreateCloudFormationChangeSetCommand,
} from "../protocols/Aws_restJson1";
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
 * The input for {@link CreateCloudFormationChangeSetCommand}.
 */
export interface CreateCloudFormationChangeSetCommandInput extends CreateCloudFormationChangeSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateCloudFormationChangeSetCommand}.
 */
export interface CreateCloudFormationChangeSetCommandOutput
  extends CreateCloudFormationChangeSetResponse,
    __MetadataBearer {}

/**
 * <p>Creates an AWS CloudFormation change set for the given application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, CreateCloudFormationChangeSetCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, CreateCloudFormationChangeSetCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const input = { // CreateCloudFormationChangeSetRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   Capabilities: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   ChangeSetName: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   NotificationArns: [
 *     "STRING_VALUE",
 *   ],
 *   ParameterOverrides: [ // __listOfParameterValue
 *     { // ParameterValue
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ResourceTypes: [
 *     "STRING_VALUE",
 *   ],
 *   RollbackConfiguration: { // RollbackConfiguration
 *     MonitoringTimeInMinutes: Number("int"),
 *     RollbackTriggers: [ // __listOfRollbackTrigger
 *       { // RollbackTrigger
 *         Arn: "STRING_VALUE", // required
 *         Type: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   SemanticVersion: "STRING_VALUE",
 *   StackName: "STRING_VALUE", // required
 *   Tags: [ // __listOfTag
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   TemplateId: "STRING_VALUE",
 * };
 * const command = new CreateCloudFormationChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateCloudFormationChangeSetResponse
 * //   ApplicationId: "STRING_VALUE",
 * //   ChangeSetId: "STRING_VALUE",
 * //   SemanticVersion: "STRING_VALUE",
 * //   StackId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCloudFormationChangeSetCommandInput - {@link CreateCloudFormationChangeSetCommandInput}
 * @returns {@link CreateCloudFormationChangeSetCommandOutput}
 * @see {@link CreateCloudFormationChangeSetCommandInput} for command's `input` shape.
 * @see {@link CreateCloudFormationChangeSetCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The client is sending more than the allowed number of requests per unit of time.</p>
 *
 * @throws {@link ServerlessApplicationRepositoryServiceException}
 * <p>Base exception class for all service exceptions from ServerlessApplicationRepository service.</p>
 *
 *
 * @public
 */
export class CreateCloudFormationChangeSetCommand extends $Command
  .classBuilder<
    CreateCloudFormationChangeSetCommandInput,
    CreateCloudFormationChangeSetCommandOutput,
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
  .s("ServerlessApplicationRepository", "CreateCloudFormationChangeSet", {})
  .n("ServerlessApplicationRepositoryClient", "CreateCloudFormationChangeSetCommand")
  .f(void 0, void 0)
  .ser(se_CreateCloudFormationChangeSetCommand)
  .de(de_CreateCloudFormationChangeSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCloudFormationChangeSetRequest;
      output: CreateCloudFormationChangeSetResponse;
    };
    sdk: {
      input: CreateCloudFormationChangeSetCommandInput;
      output: CreateCloudFormationChangeSetCommandOutput;
    };
  };
}
