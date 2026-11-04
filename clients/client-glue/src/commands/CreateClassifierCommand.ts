// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateClassifierRequest, CreateClassifierResponse } from "../models/models_1";
import { CreateClassifier$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateClassifierCommand}.
 */
export interface CreateClassifierCommandInput extends CreateClassifierRequest {}
/**
 * @public
 *
 * The output of {@link CreateClassifierCommand}.
 */
export interface CreateClassifierCommandOutput extends CreateClassifierResponse, __MetadataBearer {}

/**
 * Creates a classifier in the user's account. This can be a `GrokClassifier`, an `XMLClassifier`, a `JsonClassifier`, or a `CsvClassifier`, depending on which field of the request is present.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateClassifierRequest
 *   GrokClassifier: { // CreateGrokClassifierRequest
 *     Classification: "STRING_VALUE", // required
 *     Name: "STRING_VALUE", // required
 *     GrokPattern: "STRING_VALUE", // required
 *     CustomPatterns: "STRING_VALUE",
 *   },
 *   XMLClassifier: { // CreateXMLClassifierRequest
 *     Classification: "STRING_VALUE", // required
 *     Name: "STRING_VALUE", // required
 *     RowTag: "STRING_VALUE",
 *   },
 *   JsonClassifier: { // CreateJsonClassifierRequest
 *     Name: "STRING_VALUE", // required
 *     JsonPath: "STRING_VALUE", // required
 *   },
 *   CsvClassifier: { // CreateCsvClassifierRequest
 *     Name: "STRING_VALUE", // required
 *     Delimiter: "STRING_VALUE",
 *     QuoteSymbol: "STRING_VALUE",
 *     ContainsHeader: "UNKNOWN" || "PRESENT" || "ABSENT",
 *     Header: [ // CsvHeader
 *       "STRING_VALUE",
 *     ],
 *     DisableValueTrimming: true || false,
 *     AllowSingleColumn: true || false,
 *     CustomDatatypeConfigured: true || false,
 *     CustomDatatypes: [ // CustomDatatypes
 *       "STRING_VALUE",
 *     ],
 *     Serde: "OpenCSVSerDe" || "LazySimpleSerDe" || "None",
 *   },
 * };
 * const command = new CreateClassifierCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateClassifierCommandInput - {@link CreateClassifierCommandInput}
 * @returns {@link CreateClassifierCommandOutput}
 * @see {@link CreateClassifierCommandInput} for command's `input` shape.
 * @see {@link CreateClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class CreateClassifierCommand extends command<CreateClassifierCommandInput, CreateClassifierCommandOutput>(
  _ep0,
  _mw0,
  "CreateClassifier",
  CreateClassifier$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClassifierRequest;
      output: {};
    };
    sdk: {
      input: CreateClassifierCommandInput;
      output: CreateClassifierCommandOutput;
    };
  };
}
