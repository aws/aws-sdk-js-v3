// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopUploadJobRequest, StopUploadJobResponse } from "../models/models_1";
import { StopUploadJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopUploadJobCommand}.
 */
export interface StopUploadJobCommandInput extends StopUploadJobRequest {}
/**
 * @public
 *
 * The output of {@link StopUploadJobCommand}.
 */
export interface StopUploadJobCommandOutput extends StopUploadJobResponse, __MetadataBearer {}

/**
 * This API stops the processing of an upload job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, StopUploadJobCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, StopUploadJobCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // StopUploadJobRequest
 *   DomainName: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StopUploadJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopUploadJobCommandInput - {@link StopUploadJobCommandInput}
 * @returns {@link StopUploadJobCommandOutput}
 * @see {@link StopUploadJobCommandInput} for command's `input` shape.
 * @see {@link StopUploadJobCommandOutput} for command's `response` shape.
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
export class StopUploadJobCommand extends command<StopUploadJobCommandInput, StopUploadJobCommandOutput>(
  _ep0,
  _mw0,
  "StopUploadJob",
  StopUploadJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopUploadJobRequest;
      output: {};
    };
    sdk: {
      input: StopUploadJobCommandInput;
      output: StopUploadJobCommandOutput;
    };
  };
}
