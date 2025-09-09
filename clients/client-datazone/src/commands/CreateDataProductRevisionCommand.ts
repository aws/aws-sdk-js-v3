// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateDataProductRevisionInput,
  CreateDataProductRevisionInputFilterSensitiveLog,
  CreateDataProductRevisionOutput,
  CreateDataProductRevisionOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateDataProductRevisionCommand, se_CreateDataProductRevisionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataProductRevisionCommand}.
 */
export interface CreateDataProductRevisionCommandInput extends CreateDataProductRevisionInput {}
/**
 * @public
 *
 * The output of {@link CreateDataProductRevisionCommand}.
 */
export interface CreateDataProductRevisionCommandOutput extends CreateDataProductRevisionOutput, __MetadataBearer {}

/**
 * <p>Creates a data product revision.</p> <p>Prerequisites:</p> <ul> <li> <p>The original data product must exist in the given domain. </p> </li> <li> <p>User must have permissions on the data product.</p> </li> <li> <p>The domain must be valid and accessible.</p> </li> <li> <p>The new revision name must comply with naming constraints (if required).</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateDataProductRevisionCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateDataProductRevisionCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateDataProductRevisionInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   glossaryTerms: [ // GlossaryTerms
 *     "STRING_VALUE",
 *   ],
 *   items: [ // DataProductItems
 *     { // DataProductItem
 *       itemType: "ASSET", // required
 *       identifier: "STRING_VALUE", // required
 *       revision: "STRING_VALUE",
 *       glossaryTerms: [ // ItemGlossaryTerms
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   formsInput: [ // FormInputList
 *     { // FormInput
 *       formName: "STRING_VALUE", // required
 *       typeIdentifier: "STRING_VALUE",
 *       typeRevision: "STRING_VALUE",
 *       content: "STRING_VALUE",
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateDataProductRevisionCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataProductRevisionOutput
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
 * @param CreateDataProductRevisionCommandInput - {@link CreateDataProductRevisionCommandInput}
 * @returns {@link CreateDataProductRevisionCommandOutput}
 * @see {@link CreateDataProductRevisionCommandInput} for command's `input` shape.
 * @see {@link CreateDataProductRevisionCommandOutput} for command's `response` shape.
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
export class CreateDataProductRevisionCommand extends $Command
  .classBuilder<
    CreateDataProductRevisionCommandInput,
    CreateDataProductRevisionCommandOutput,
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
  .s("DataZone", "CreateDataProductRevision", {})
  .n("DataZoneClient", "CreateDataProductRevisionCommand")
  .f(CreateDataProductRevisionInputFilterSensitiveLog, CreateDataProductRevisionOutputFilterSensitiveLog)
  .ser(se_CreateDataProductRevisionCommand)
  .de(de_CreateDataProductRevisionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataProductRevisionInput;
      output: CreateDataProductRevisionOutput;
    };
    sdk: {
      input: CreateDataProductRevisionCommandInput;
      output: CreateDataProductRevisionCommandOutput;
    };
  };
}
