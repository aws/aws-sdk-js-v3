// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { CreateIdNamespaceInput, CreateIdNamespaceOutput } from "../models/models_0";
import { de_CreateIdNamespaceCommand, se_CreateIdNamespaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIdNamespaceCommand}.
 */
export interface CreateIdNamespaceCommandInput extends CreateIdNamespaceInput {}
/**
 * @public
 *
 * The output of {@link CreateIdNamespaceCommand}.
 */
export interface CreateIdNamespaceCommandOutput extends CreateIdNamespaceOutput, __MetadataBearer {}

/**
 * <p>Creates an ID namespace object which will help customers provide metadata explaining
 *          their dataset and how to use it. Each ID namespace must have a unique name. To modify an
 *          existing ID namespace, use the <code>UpdateIdNamespace</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, CreateIdNamespaceCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, CreateIdNamespaceCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // CreateIdNamespaceInput
 *   idNamespaceName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   inputSourceConfig: [ // IdNamespaceInputSourceConfig
 *     { // IdNamespaceInputSource
 *       inputSourceARN: "STRING_VALUE", // required
 *       schemaName: "STRING_VALUE",
 *     },
 *   ],
 *   idMappingWorkflowProperties: [ // IdNamespaceIdMappingWorkflowPropertiesList
 *     { // IdNamespaceIdMappingWorkflowProperties
 *       idMappingType: "PROVIDER", // required
 *       providerProperties: { // NamespaceProviderProperties
 *         providerServiceArn: "STRING_VALUE", // required
 *         providerConfiguration: "DOCUMENT_VALUE",
 *       },
 *     },
 *   ],
 *   type: "SOURCE" || "TARGET", // required
 *   roleArn: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIdNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateIdNamespaceOutput
 * //   idNamespaceName: "STRING_VALUE", // required
 * //   idNamespaceArn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   inputSourceConfig: [ // IdNamespaceInputSourceConfig
 * //     { // IdNamespaceInputSource
 * //       inputSourceARN: "STRING_VALUE", // required
 * //       schemaName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   idMappingWorkflowProperties: [ // IdNamespaceIdMappingWorkflowPropertiesList
 * //     { // IdNamespaceIdMappingWorkflowProperties
 * //       idMappingType: "PROVIDER", // required
 * //       providerProperties: { // NamespaceProviderProperties
 * //         providerServiceArn: "STRING_VALUE", // required
 * //         providerConfiguration: "DOCUMENT_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   type: "SOURCE" || "TARGET", // required
 * //   roleArn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateIdNamespaceCommandInput - {@link CreateIdNamespaceCommandInput}
 * @returns {@link CreateIdNamespaceCommandOutput}
 * @see {@link CreateIdNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateIdNamespaceCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. <code>HTTP Status Code:
 *             403</code>
 *          </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource. Example: Workflow already exists, Schema already exists, Workflow is currently
 *          running, etc. <code>HTTP Status Code: 400</code>
 *          </p>
 *
 * @throws {@link ExceedsLimitException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *             Entity Resolution account limits. The error message describes the limit exceeded.
 *             <code>HTTP Status Code: 402</code>
 *          </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution
 *          service. <code>HTTP Status Code: 500</code>
 *          </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. <code>HTTP Status Code:
 *          429</code>
 *          </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. <code>HTTP
 *             Status Code: 400</code>
 *          </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 * @public
 */
export class CreateIdNamespaceCommand extends $Command
  .classBuilder<
    CreateIdNamespaceCommandInput,
    CreateIdNamespaceCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSVeniceService", "CreateIdNamespace", {})
  .n("EntityResolutionClient", "CreateIdNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_CreateIdNamespaceCommand)
  .de(de_CreateIdNamespaceCommand)
  .build() {}
