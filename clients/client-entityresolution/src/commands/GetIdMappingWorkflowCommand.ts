// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { GetIdMappingWorkflowInput, GetIdMappingWorkflowOutput } from "../models/models_0";
import { de_GetIdMappingWorkflowCommand, se_GetIdMappingWorkflowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdMappingWorkflowCommand}.
 */
export interface GetIdMappingWorkflowCommandInput extends GetIdMappingWorkflowInput {}
/**
 * @public
 *
 * The output of {@link GetIdMappingWorkflowCommand}.
 */
export interface GetIdMappingWorkflowCommandOutput extends GetIdMappingWorkflowOutput, __MetadataBearer {}

/**
 * <p>Returns the <code>IdMappingWorkflow</code> with a given name, if it exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetIdMappingWorkflowCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetIdMappingWorkflowCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // GetIdMappingWorkflowInput
 *   workflowName: "STRING_VALUE", // required
 * };
 * const command = new GetIdMappingWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // GetIdMappingWorkflowOutput
 * //   workflowName: "STRING_VALUE", // required
 * //   workflowArn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   inputSourceConfig: [ // IdMappingWorkflowInputSourceConfig // required
 * //     { // IdMappingWorkflowInputSource
 * //       inputSourceARN: "STRING_VALUE", // required
 * //       schemaName: "STRING_VALUE",
 * //       type: "SOURCE" || "TARGET",
 * //     },
 * //   ],
 * //   outputSourceConfig: [ // IdMappingWorkflowOutputSourceConfig
 * //     { // IdMappingWorkflowOutputSource
 * //       outputS3Path: "STRING_VALUE", // required
 * //       KMSArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   idMappingTechniques: { // IdMappingTechniques
 * //     idMappingType: "PROVIDER", // required
 * //     providerProperties: { // ProviderProperties
 * //       providerServiceArn: "STRING_VALUE", // required
 * //       providerConfiguration: "DOCUMENT_VALUE",
 * //       intermediateSourceConfiguration: { // IntermediateSourceConfiguration
 * //         intermediateS3Path: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   roleArn: "STRING_VALUE", // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdMappingWorkflowCommandInput - {@link GetIdMappingWorkflowCommandInput}
 * @returns {@link GetIdMappingWorkflowCommandOutput}
 * @see {@link GetIdMappingWorkflowCommandInput} for command's `input` shape.
 * @see {@link GetIdMappingWorkflowCommandOutput} for command's `response` shape.
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
export class GetIdMappingWorkflowCommand extends $Command
  .classBuilder<
    GetIdMappingWorkflowCommandInput,
    GetIdMappingWorkflowCommandOutput,
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
  .s("AWSVeniceService", "GetIdMappingWorkflow", {})
  .n("EntityResolutionClient", "GetIdMappingWorkflowCommand")
  .f(void 0, void 0)
  .ser(se_GetIdMappingWorkflowCommand)
  .de(de_GetIdMappingWorkflowCommand)
  .build() {}
