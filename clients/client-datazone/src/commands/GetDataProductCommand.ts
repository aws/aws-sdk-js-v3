// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataProductInput, GetDataProductOutput, GetDataProductOutputFilterSensitiveLog } from "../models/models_1";
import { de_GetDataProductCommand, se_GetDataProductCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataProductCommand}.
 */
export interface GetDataProductCommandInput extends GetDataProductInput {}
/**
 * @public
 *
 * The output of {@link GetDataProductCommand}.
 */
export interface GetDataProductCommandOutput extends GetDataProductOutput, __MetadataBearer {}

/**
 * <p>Gets the data product.</p> <p>Prerequisites:</p> <ul> <li> <p>The data product ID must exist. </p> </li> <li> <p>The domain must be valid and accessible.</p> </li> <li> <p>User must have read or discovery permissions for the data product.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetDataProductCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetDataProductCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetDataProductInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   revision: "STRING_VALUE",
 * };
 * const command = new GetDataProductCommand(input);
 * const response = await client.send(command);
 * // { // GetDataProductOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   revision: "STRING_VALUE", // required
 * //   owningProjectId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "CREATED" || "CREATING" || "CREATE_FAILED", // required
 * //   description: "STRING_VALUE",
 * //   glossaryTerms: [ // GlossaryTerms
 * //     "STRING_VALUE",
 * //   ],
 * //   items: [ // DataProductItems
 * //     { // DataProductItem
 * //       itemType: "ASSET", // required
 * //       identifier: "STRING_VALUE", // required
 * //       revision: "STRING_VALUE",
 * //       glossaryTerms: [ // ItemGlossaryTerms
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   formsOutput: [ // FormOutputList
 * //     { // FormOutput
 * //       formName: "STRING_VALUE", // required
 * //       typeName: "STRING_VALUE",
 * //       typeRevision: "STRING_VALUE",
 * //       content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   firstRevisionCreatedAt: new Date("TIMESTAMP"),
 * //   firstRevisionCreatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDataProductCommandInput - {@link GetDataProductCommandInput}
 * @returns {@link GetDataProductCommandOutput}
 * @see {@link GetDataProductCommandInput} for command's `input` shape.
 * @see {@link GetDataProductCommandOutput} for command's `response` shape.
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
export class GetDataProductCommand extends $Command
  .classBuilder<
    GetDataProductCommandInput,
    GetDataProductCommandOutput,
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
  .s("DataZone", "GetDataProduct", {})
  .n("DataZoneClient", "GetDataProductCommand")
  .f(void 0, GetDataProductOutputFilterSensitiveLog)
  .ser(se_GetDataProductCommand)
  .de(de_GetDataProductCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataProductInput;
      output: GetDataProductOutput;
    };
    sdk: {
      input: GetDataProductCommandInput;
      output: GetDataProductCommandOutput;
    };
  };
}
