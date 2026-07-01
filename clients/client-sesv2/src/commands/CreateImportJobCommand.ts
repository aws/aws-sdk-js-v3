// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateImportJobRequest, CreateImportJobResponse } from "../models/models_0";
import { CreateImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateImportJobCommand}.
 */
export interface CreateImportJobCommandInput extends CreateImportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateImportJobCommand}.
 */
export interface CreateImportJobCommandOutput extends CreateImportJobResponse, __MetadataBearer {}

/**
 * <p>Creates an import job for a data destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateImportJobCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateImportJobCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // CreateImportJobRequest
 *   ImportDestination: { // ImportDestination
 *     SuppressionListDestination: { // SuppressionListDestination
 *       SuppressionListImportAction: "DELETE" || "PUT", // required
 *     },
 *     ContactListDestination: { // ContactListDestination
 *       ContactListName: "STRING_VALUE", // required
 *       ContactListImportAction: "DELETE" || "PUT", // required
 *     },
 *   },
 *   ImportDataSource: { // ImportDataSource
 *     S3Url: "STRING_VALUE", // required
 *     DataFormat: "CSV" || "JSON", // required
 *   },
 * };
 * const command = new CreateImportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateImportJobResponse
 * //   JobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateImportJobCommandInput - {@link CreateImportJobCommandInput}
 * @returns {@link CreateImportJobCommandOutput}
 * @see {@link CreateImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateImportJobCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class CreateImportJobCommand extends command<CreateImportJobCommandInput, CreateImportJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateImportJob",
  CreateImportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateImportJobRequest;
      output: CreateImportJobResponse;
    };
    sdk: {
      input: CreateImportJobCommandInput;
      output: CreateImportJobCommandOutput;
    };
  };
}
