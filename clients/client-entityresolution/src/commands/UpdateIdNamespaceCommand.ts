// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { UpdateIdNamespaceInput, UpdateIdNamespaceOutput } from "../models/models_0";
import { de_UpdateIdNamespaceCommand, se_UpdateIdNamespaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIdNamespaceCommand}.
 */
export interface UpdateIdNamespaceCommandInput extends UpdateIdNamespaceInput {}
/**
 * @public
 *
 * The output of {@link UpdateIdNamespaceCommand}.
 */
export interface UpdateIdNamespaceCommandOutput extends UpdateIdNamespaceOutput, __MetadataBearer {}

/**
 * <p>Updates an existing ID namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, UpdateIdNamespaceCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, UpdateIdNamespaceCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // UpdateIdNamespaceInput
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
 *   roleArn: "STRING_VALUE",
 * };
 * const command = new UpdateIdNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIdNamespaceOutput
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
 * // };
 *
 * ```
 *
 * @param UpdateIdNamespaceCommandInput - {@link UpdateIdNamespaceCommandInput}
 * @returns {@link UpdateIdNamespaceCommandOutput}
 * @see {@link UpdateIdNamespaceCommandInput} for command's `input` shape.
 * @see {@link UpdateIdNamespaceCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. <code>HTTP Status Code:
 *             403</code>
 *          </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution
 *          service. <code>HTTP Status Code: 500</code>
 *          </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. <code>HTTP Status Code: 404</code>
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
export class UpdateIdNamespaceCommand extends $Command
  .classBuilder<
    UpdateIdNamespaceCommandInput,
    UpdateIdNamespaceCommandOutput,
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
  .s("AWSVeniceService", "UpdateIdNamespace", {})
  .n("EntityResolutionClient", "UpdateIdNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateIdNamespaceCommand)
  .de(de_UpdateIdNamespaceCommand)
  .build() {}
