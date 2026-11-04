// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLFTagRequest, CreateLFTagResponse } from "../models/models_0";
import { CreateLFTag$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateLFTagCommand}.
 */
export interface CreateLFTagCommandInput extends CreateLFTagRequest {}
/**
 * @public
 *
 * The output of {@link CreateLFTagCommand}.
 */
export interface CreateLFTagCommandOutput extends CreateLFTagResponse, __MetadataBearer {}

/**
 * Creates an LF-tag with the specified name and values.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, CreateLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, CreateLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // CreateLFTagRequest
 *   CatalogId: "STRING_VALUE",
 *   TagKey: "STRING_VALUE", // required
 *   TagValues: [ // TagValueList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateLFTagCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateLFTagCommandInput - {@link CreateLFTagCommandInput}
 * @returns {@link CreateLFTagCommandOutput}
 * @see {@link CreateLFTagCommandInput} for command's `input` shape.
 * @see {@link CreateLFTagCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link LakeFormationServiceException}
 *
 * Base exception class for all service exceptions from LakeFormation service.
 *
 * @public
 */
export class CreateLFTagCommand extends command<CreateLFTagCommandInput, CreateLFTagCommandOutput>(
  _ep0,
  _mw0,
  "CreateLFTag",
  CreateLFTag$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLFTagRequest;
      output: {};
    };
    sdk: {
      input: CreateLFTagCommandInput;
      output: CreateLFTagCommandOutput;
    };
  };
}
