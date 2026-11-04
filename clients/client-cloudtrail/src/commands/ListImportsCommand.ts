// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListImportsRequest, ListImportsResponse } from "../models/models_0";
import { ListImports$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListImportsCommand}.
 */
export interface ListImportsCommandInput extends ListImportsRequest {}
/**
 * @public
 *
 * The output of {@link ListImportsCommand}.
 */
export interface ListImportsCommandOutput extends ListImportsResponse, __MetadataBearer {}

/**
 * > **Important:** CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see [CloudTrail Lake availability change](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-service-availability-change.html).
 *
 * Returns information on all imports, or a select set of imports by `ImportStatus` or `Destination`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListImportsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListImportsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // ListImportsRequest
 *   MaxResults: Number("int"),
 *   Destination: "STRING_VALUE",
 *   ImportStatus: "INITIALIZING" || "IN_PROGRESS" || "FAILED" || "STOPPED" || "COMPLETED",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListImportsCommand(input);
 * const response = await client.send(command);
 * // { // ListImportsResponse
 * //   Imports: [ // ImportsList
 * //     { // ImportsListItem
 * //       ImportId: "STRING_VALUE",
 * //       ImportStatus: "INITIALIZING" || "IN_PROGRESS" || "FAILED" || "STOPPED" || "COMPLETED",
 * //       Destinations: [ // ImportDestinations
 * //         "STRING_VALUE",
 * //       ],
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportsCommandInput - {@link ListImportsCommandInput}
 * @returns {@link ListImportsCommandOutput}
 * @see {@link ListImportsCommandInput} for command's `input` shape.
 * @see {@link ListImportsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *
 * The specified event data store ARN is not valid or does not map to an event data store in your account.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * A token that is not valid, or a token that was previously used in a request with different parameters. This exception is thrown if the token is not valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request includes a parameter that is not valid.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * This exception is thrown when the requested operation is not supported.
 *
 * @throws {@link CloudTrailServiceException}
 *
 * Base exception class for all service exceptions from CloudTrail service.
 *
 * @public
 */
export class ListImportsCommand extends command<ListImportsCommandInput, ListImportsCommandOutput>(
  _ep0,
  _mw0,
  "ListImports",
  ListImports$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImportsRequest;
      output: ListImportsResponse;
    };
    sdk: {
      input: ListImportsCommandInput;
      output: ListImportsCommandOutput;
    };
  };
}
