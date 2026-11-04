// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchPutFieldOptionsRequest, BatchPutFieldOptionsResponse } from "../models/models_0";
import { BatchPutFieldOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchPutFieldOptionsCommand}.
 */
export interface BatchPutFieldOptionsCommandInput extends BatchPutFieldOptionsRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutFieldOptionsCommand}.
 */
export interface BatchPutFieldOptionsCommandOutput extends BatchPutFieldOptionsResponse, __MetadataBearer {}

/**
 * Creates and updates a set of field options for a single select field in a Cases domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, BatchPutFieldOptionsCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, BatchPutFieldOptionsCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // BatchPutFieldOptionsRequest
 *   domainId: "STRING_VALUE", // required
 *   fieldId: "STRING_VALUE", // required
 *   options: [ // FieldOptionsList // required
 *     { // FieldOption
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *       active: true || false, // required
 *     },
 *   ],
 * };
 * const command = new BatchPutFieldOptionsCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutFieldOptionsResponse
 * //   errors: [ // FieldOptionErrorList
 * //     { // FieldOptionError
 * //       message: "STRING_VALUE", // required
 * //       errorCode: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutFieldOptionsCommandInput - {@link BatchPutFieldOptionsCommandInput}
 * @returns {@link BatchPutFieldOptionsCommandOutput}
 * @see {@link BatchPutFieldOptionsCommandInput} for command's `input` shape.
 * @see {@link BatchPutFieldOptionsCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * We couldn't process your request because of an issue with the server. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded. For a list of service quotas, see [Amazon Connect Service Quotas](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html) in the *Amazon Connect Administrator Guide*.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate has been exceeded for this API. Please try again after a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. Check the syntax and try again.
 *
 * @throws {@link ConnectCasesServiceException}
 *
 * Base exception class for all service exceptions from ConnectCases service.
 *
 * @public
 */
export class BatchPutFieldOptionsCommand extends command<BatchPutFieldOptionsCommandInput, BatchPutFieldOptionsCommandOutput>(
  _ep0,
  _mw0,
  "BatchPutFieldOptions",
  BatchPutFieldOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchPutFieldOptionsRequest;
      output: BatchPutFieldOptionsResponse;
    };
    sdk: {
      input: BatchPutFieldOptionsCommandInput;
      output: BatchPutFieldOptionsCommandOutput;
    };
  };
}
