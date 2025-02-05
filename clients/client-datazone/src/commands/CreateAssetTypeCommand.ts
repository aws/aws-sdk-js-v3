// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAssetTypeInput,
  CreateAssetTypeInputFilterSensitiveLog,
  CreateAssetTypeOutput,
  CreateAssetTypeOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAssetTypeCommand, se_CreateAssetTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAssetTypeCommand}.
 */
export interface CreateAssetTypeCommandInput extends CreateAssetTypeInput {}
/**
 * @public
 *
 * The output of {@link CreateAssetTypeCommand}.
 */
export interface CreateAssetTypeCommandOutput extends CreateAssetTypeOutput, __MetadataBearer {}

/**
 * <p>Creates a custom asset type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateAssetTypeCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateAssetTypeCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataZoneClient(config);
 * const input = { // CreateAssetTypeInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   formsInput: { // FormsInputMap // required
 *     "<keys>": { // FormEntryInput
 *       typeIdentifier: "STRING_VALUE", // required
 *       typeRevision: "STRING_VALUE", // required
 *       required: true || false,
 *     },
 *   },
 *   owningProjectIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CreateAssetTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssetTypeOutput
 * //   domainId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   revision: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   formsOutput: { // FormsOutputMap // required
 * //     "<keys>": { // FormEntryOutput
 * //       typeName: "STRING_VALUE", // required
 * //       typeRevision: "STRING_VALUE", // required
 * //       required: true || false,
 * //     },
 * //   },
 * //   owningProjectId: "STRING_VALUE",
 * //   originDomainId: "STRING_VALUE",
 * //   originProjectId: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAssetTypeCommandInput - {@link CreateAssetTypeCommandInput}
 * @returns {@link CreateAssetTypeCommandOutput}
 * @see {@link CreateAssetTypeCommandInput} for command's `input` shape.
 * @see {@link CreateAssetTypeCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 * @public
 */
export class CreateAssetTypeCommand extends $Command
  .classBuilder<
    CreateAssetTypeCommandInput,
    CreateAssetTypeCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "CreateAssetType", {})
  .n("DataZoneClient", "CreateAssetTypeCommand")
  .f(CreateAssetTypeInputFilterSensitiveLog, CreateAssetTypeOutputFilterSensitiveLog)
  .ser(se_CreateAssetTypeCommand)
  .de(de_CreateAssetTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAssetTypeInput;
      output: CreateAssetTypeOutput;
    };
    sdk: {
      input: CreateAssetTypeCommandInput;
      output: CreateAssetTypeCommandOutput;
    };
  };
}
