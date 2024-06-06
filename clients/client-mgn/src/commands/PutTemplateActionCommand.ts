// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { PutTemplateActionRequest, TemplateActionDocument } from "../models/models_0";
import { de_PutTemplateActionCommand, se_PutTemplateActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutTemplateActionCommand}.
 */
export interface PutTemplateActionCommandInput extends PutTemplateActionRequest {}
/**
 * @public
 *
 * The output of {@link PutTemplateActionCommand}.
 */
export interface PutTemplateActionCommandOutput extends TemplateActionDocument, __MetadataBearer {}

/**
 * <p>Put template post migration custom action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, PutTemplateActionCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, PutTemplateActionCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // PutTemplateActionRequest
 *   launchConfigurationTemplateID: "STRING_VALUE", // required
 *   actionName: "STRING_VALUE", // required
 *   documentIdentifier: "STRING_VALUE", // required
 *   order: Number("int"), // required
 *   actionID: "STRING_VALUE", // required
 *   documentVersion: "STRING_VALUE",
 *   active: true || false,
 *   timeoutSeconds: Number("int"),
 *   mustSucceedForCutover: true || false,
 *   parameters: { // SsmDocumentParameters
 *     "<keys>": [ // SsmParameterStoreParameters
 *       { // SsmParameterStoreParameter
 *         parameterType: "STRING_VALUE", // required
 *         parameterName: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   operatingSystem: "STRING_VALUE",
 *   externalParameters: { // SsmDocumentExternalParameters
 *     "<keys>": { // SsmExternalParameter Union: only one key present
 *       dynamicPath: "STRING_VALUE",
 *     },
 *   },
 *   description: "STRING_VALUE",
 *   category: "STRING_VALUE",
 * };
 * const command = new PutTemplateActionCommand(input);
 * const response = await client.send(command);
 * // { // TemplateActionDocument
 * //   actionID: "STRING_VALUE",
 * //   actionName: "STRING_VALUE",
 * //   documentIdentifier: "STRING_VALUE",
 * //   order: Number("int"),
 * //   documentVersion: "STRING_VALUE",
 * //   active: true || false,
 * //   timeoutSeconds: Number("int"),
 * //   mustSucceedForCutover: true || false,
 * //   parameters: { // SsmDocumentParameters
 * //     "<keys>": [ // SsmParameterStoreParameters
 * //       { // SsmParameterStoreParameter
 * //         parameterType: "STRING_VALUE", // required
 * //         parameterName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   operatingSystem: "STRING_VALUE",
 * //   externalParameters: { // SsmDocumentExternalParameters
 * //     "<keys>": { // SsmExternalParameter Union: only one key present
 * //       dynamicPath: "STRING_VALUE",
 * //     },
 * //   },
 * //   description: "STRING_VALUE",
 * //   category: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutTemplateActionCommandInput - {@link PutTemplateActionCommandInput}
 * @returns {@link PutTemplateActionCommandOutput}
 * @see {@link PutTemplateActionCommandInput} for command's `input` shape.
 * @see {@link PutTemplateActionCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 * @public
 */
export class PutTemplateActionCommand extends $Command
  .classBuilder<
    PutTemplateActionCommandInput,
    PutTemplateActionCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "PutTemplateAction", {})
  .n("MgnClient", "PutTemplateActionCommand")
  .f(void 0, void 0)
  .ser(se_PutTemplateActionCommand)
  .de(de_PutTemplateActionCommand)
  .build() {}
