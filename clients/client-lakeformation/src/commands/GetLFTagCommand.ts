// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLFTagRequest, GetLFTagResponse } from "../models/models_0";
import { GetLFTag$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLFTagCommand}.
 */
export interface GetLFTagCommandInput extends GetLFTagRequest {}
/**
 * @public
 *
 * The output of {@link GetLFTagCommand}.
 */
export interface GetLFTagCommandOutput extends GetLFTagResponse, __MetadataBearer {}

/**
 * Returns an LF-tag definition.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // GetLFTagRequest
 *   CatalogId: "STRING_VALUE",
 *   TagKey: "STRING_VALUE", // required
 * };
 * const command = new GetLFTagCommand(input);
 * const response = await client.send(command);
 * // { // GetLFTagResponse
 * //   CatalogId: "STRING_VALUE",
 * //   TagKey: "STRING_VALUE",
 * //   TagValues: [ // TagValueList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLFTagCommandInput - {@link GetLFTagCommandInput}
 * @returns {@link GetLFTagCommandOutput}
 * @see {@link GetLFTagCommandInput} for command's `input` shape.
 * @see {@link GetLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link LakeFormationServiceException}
 *
 * Base exception class for all service exceptions from LakeFormation service.
 *
 * @public
 */
export class GetLFTagCommand extends command<GetLFTagCommandInput, GetLFTagCommandOutput>(
  _ep0,
  _mw0,
  "GetLFTag",
  GetLFTag$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLFTagRequest;
      output: GetLFTagResponse;
    };
    sdk: {
      input: GetLFTagCommandInput;
      output: GetLFTagCommandOutput;
    };
  };
}
