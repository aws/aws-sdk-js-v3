// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDashboardUrlRequest, GetDashboardUrlResponse } from "../models/models_1";
import { GetDashboardUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDashboardUrlCommand}.
 */
export interface GetDashboardUrlCommandInput extends GetDashboardUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetDashboardUrlCommand}.
 */
export interface GetDashboardUrlCommandOutput extends GetDashboardUrlResponse, __MetadataBearer {}

/**
 * Retrieves the URL for the Spark monitoring dashboard for a Glue resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDashboardUrlCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDashboardUrlCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetDashboardUrlRequest
 *   ResourceId: "STRING_VALUE", // required
 *   ResourceType: "JOB" || "SESSION", // required
 *   RequestOrigin: "STRING_VALUE",
 * };
 * const command = new GetDashboardUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetDashboardUrlResponse
 * //   Url: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetDashboardUrlCommandInput - {@link GetDashboardUrlCommandInput}
 * @returns {@link GetDashboardUrlCommandOutput}
 * @see {@link GetDashboardUrlCommandInput} for command's `input` shape.
 * @see {@link GetDashboardUrlCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * The operation is not available in the region.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class GetDashboardUrlCommand extends command<GetDashboardUrlCommandInput, GetDashboardUrlCommandOutput>(
  _ep0,
  _mw0,
  "GetDashboardUrl",
  GetDashboardUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDashboardUrlRequest;
      output: GetDashboardUrlResponse;
    };
    sdk: {
      input: GetDashboardUrlCommandInput;
      output: GetDashboardUrlCommandOutput;
    };
  };
}
