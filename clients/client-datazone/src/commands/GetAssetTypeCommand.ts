// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAssetTypeInput, GetAssetTypeOutput } from "../models/models_0";
import { GetAssetType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssetTypeCommand}.
 */
export interface GetAssetTypeCommandInput extends GetAssetTypeInput {}
/**
 * @public
 *
 * The output of {@link GetAssetTypeCommand}.
 */
export interface GetAssetTypeCommandOutput extends GetAssetTypeOutput, __MetadataBearer {}

/**
 * <p>Gets an Amazon DataZone asset type.</p> <p>Asset types define the categories and characteristics of different kinds of data assets within Amazon DataZone.. They determine what metadata fields are required, what operations are possible, and how the asset integrates with other Amazon Web Services services. Asset types can range from built-in types like Amazon S3 buckets and Amazon Web Services Glue tables to custom types defined for specific organizational needs. Understanding asset types is crucial for properly organizing and managing different kinds of data resources.</p> <p>Prerequisites:</p> <ul> <li> <p>The asset type with identifier must exist in the domain. ResourceNotFoundException.</p> </li> <li> <p>You must have the GetAssetType permission.</p> </li> <li> <p>Ensure the domain-identifier value is correct and accessible.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetAssetTypeCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetAssetTypeCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetAssetTypeInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   revision: "STRING_VALUE",
 * };
 * const command = new GetAssetTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetTypeOutput
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
 * //   owningProjectId: "STRING_VALUE", // required
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
 * @param GetAssetTypeCommandInput - {@link GetAssetTypeCommandInput}
 * @returns {@link GetAssetTypeCommandOutput}
 * @see {@link GetAssetTypeCommandInput} for command's `input` shape.
 * @see {@link GetAssetTypeCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
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
 *
 * @public
 */
export class GetAssetTypeCommand extends $Command
  .classBuilder<
    GetAssetTypeCommandInput,
    GetAssetTypeCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "GetAssetType", {})
  .n("DataZoneClient", "GetAssetTypeCommand")
  .sc(GetAssetType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssetTypeInput;
      output: GetAssetTypeOutput;
    };
    sdk: {
      input: GetAssetTypeCommandInput;
      output: GetAssetTypeCommandOutput;
    };
  };
}
