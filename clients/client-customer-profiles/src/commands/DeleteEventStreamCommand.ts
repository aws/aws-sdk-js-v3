// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventStreamRequest, DeleteEventStreamResponse } from "../models/models_0";
import { DeleteEventStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEventStreamCommand}.
 */
export interface DeleteEventStreamCommandInput extends DeleteEventStreamRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventStreamCommand}.
 */
export interface DeleteEventStreamCommandOutput extends DeleteEventStreamResponse, __MetadataBearer {}

/**
 * Disables and deletes the specified event stream.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteEventStreamCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteEventStreamCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // DeleteEventStreamRequest
 *   DomainName: "STRING_VALUE", // required
 *   EventStreamName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventStreamCommandInput - {@link DeleteEventStreamCommandInput}
 * @returns {@link DeleteEventStreamCommandOutput}
 * @see {@link DeleteEventStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteEventStreamCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class DeleteEventStreamCommand extends command<DeleteEventStreamCommandInput, DeleteEventStreamCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEventStream",
  DeleteEventStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventStreamRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventStreamCommandInput;
      output: DeleteEventStreamCommandOutput;
    };
  };
}
