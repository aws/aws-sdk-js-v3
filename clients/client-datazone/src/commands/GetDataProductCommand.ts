// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataProductInput, GetDataProductOutput } from "../models/models_1";
import { GetDataProduct$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the data product.
 *
 * Prerequisites:
 *
 * - The data product ID must exist.
 * - The domain must be valid and accessible.
 * - User must have read or discovery permissions for the data product.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetDataProductCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetDataProductCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
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
 *
 * You do not have sufficient access to perform this action.
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
export class GetDataProductCommand extends command<GetDataProductCommandInput, GetDataProductCommandOutput>(
  _ep0,
  _mw0,
  "GetDataProduct",
  GetDataProduct$
) {
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
