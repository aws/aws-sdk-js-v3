// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDatastoresRequest, ListDatastoresResponse } from "../models/models_0";
import { ListDatastores$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDatastoresCommand}.
 */
export interface ListDatastoresCommandInput extends ListDatastoresRequest {}
/**
 * @public
 *
 * The output of {@link ListDatastoresCommand}.
 */
export interface ListDatastoresCommandOutput extends ListDatastoresResponse, __MetadataBearer {}

/**
 * List data stores.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, ListDatastoresCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, ListDatastoresCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // import type { MedicalImagingClientConfig } from "@aws-sdk/client-medical-imaging";
 * const config = {}; // type is MedicalImagingClientConfig
 * const client = new MedicalImagingClient(config);
 * const input = { // ListDatastoresRequest
 *   datastoreStatus: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "DELETED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDatastoresCommand(input);
 * const response = await client.send(command);
 * // { // ListDatastoresResponse
 * //   datastoreSummaries: [ // DatastoreSummaries
 * //     { // DatastoreSummary
 * //       datastoreId: "STRING_VALUE", // required
 * //       datastoreName: "STRING_VALUE", // required
 * //       datastoreStatus: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "DELETED", // required
 * //       datastoreArn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatastoresCommandInput - {@link ListDatastoresCommandInput}
 * @returns {@link ListDatastoresCommandOutput}
 * @see {@link ListDatastoresCommandInput} for command's `input` shape.
 * @see {@link ListDatastoresCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during processing of the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints set by the service.
 *
 * @throws {@link MedicalImagingServiceException}
 *
 * Base exception class for all service exceptions from MedicalImaging service.
 *
 * @public
 */
export class ListDatastoresCommand extends command<ListDatastoresCommandInput, ListDatastoresCommandOutput>(
  _ep0,
  _mw0,
  "ListDatastores",
  ListDatastores$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatastoresRequest;
      output: ListDatastoresResponse;
    };
    sdk: {
      input: ListDatastoresCommandInput;
      output: ListDatastoresCommandOutput;
    };
  };
}
