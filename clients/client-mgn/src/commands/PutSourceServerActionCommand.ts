// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { PutSourceServerActionRequest, SourceServerActionDocument } from "../models/models_0";
import { de_PutSourceServerActionCommand, se_PutSourceServerActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutSourceServerActionCommand}.
 */
export interface PutSourceServerActionCommandInput extends PutSourceServerActionRequest {}
/**
 * @public
 *
 * The output of {@link PutSourceServerActionCommand}.
 */
export interface PutSourceServerActionCommandOutput extends SourceServerActionDocument, __MetadataBearer {}

/**
 * <p>Put source server post migration custom action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, PutSourceServerActionCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, PutSourceServerActionCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MgnClient(config);
 * const input = { // PutSourceServerActionRequest
 *   sourceServerID: "STRING_VALUE", // required
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
 *   externalParameters: { // SsmDocumentExternalParameters
 *     "<keys>": { // SsmExternalParameter Union: only one key present
 *       dynamicPath: "STRING_VALUE",
 *     },
 *   },
 *   description: "STRING_VALUE",
 *   category: "STRING_VALUE",
 *   accountID: "STRING_VALUE",
 * };
 * const command = new PutSourceServerActionCommand(input);
 * const response = await client.send(command);
 * // { // SourceServerActionDocument
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
 * @param PutSourceServerActionCommandInput - {@link PutSourceServerActionCommandInput}
 * @returns {@link PutSourceServerActionCommandOutput}
 * @see {@link PutSourceServerActionCommandInput} for command's `input` shape.
 * @see {@link PutSourceServerActionCommandOutput} for command's `response` shape.
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
export class PutSourceServerActionCommand extends $Command
  .classBuilder<
    PutSourceServerActionCommandInput,
    PutSourceServerActionCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "PutSourceServerAction", {})
  .n("MgnClient", "PutSourceServerActionCommand")
  .f(void 0, void 0)
  .ser(se_PutSourceServerActionCommand)
  .de(de_PutSourceServerActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSourceServerActionRequest;
      output: SourceServerActionDocument;
    };
    sdk: {
      input: PutSourceServerActionCommandInput;
      output: PutSourceServerActionCommandOutput;
    };
  };
}
