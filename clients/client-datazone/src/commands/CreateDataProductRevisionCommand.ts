// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDataProductRevisionInput, CreateDataProductRevisionOutput } from "../models/models_0";
import { CreateDataProductRevision$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a data product revision.
 *
 * Prerequisites:
 *
 * - The original data product must exist in the given domain.
 * - User must have permissions on the data product.
 * - The domain must be valid and accessible.
 * - The new revision name must comply with naming constraints (if required).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateDataProductRevisionCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateDataProductRevisionCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class CreateDataProductRevisionCommand extends command<CreateDataProductRevisionCommandInput, CreateDataProductRevisionCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataProductRevision",
  CreateDataProductRevision$
) {
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
