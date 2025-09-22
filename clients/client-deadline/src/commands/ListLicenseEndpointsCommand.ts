// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLicenseEndpointsRequest, ListLicenseEndpointsResponse } from "../models/models_1";
import { ListLicenseEndpoints } from "../schemas/schemas_16_License";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLicenseEndpointsCommand}.
 */
export interface ListLicenseEndpointsCommandInput extends ListLicenseEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListLicenseEndpointsCommand}.
 */
export interface ListLicenseEndpointsCommandOutput extends ListLicenseEndpointsResponse, __MetadataBearer {}

/**
 * <p>Lists license endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListLicenseEndpointsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListLicenseEndpointsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListLicenseEndpointsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListLicenseEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListLicenseEndpointsResponse
 * //   licenseEndpoints: [ // LicenseEndpointSummaries // required
 * //     { // LicenseEndpointSummary
 * //       licenseEndpointId: "STRING_VALUE",
 * //       status: "CREATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "READY" || "NOT_READY",
 * //       statusMessage: "STRING_VALUE",
 * //       vpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLicenseEndpointsCommandInput - {@link ListLicenseEndpointsCommandInput}
 * @returns {@link ListLicenseEndpointsCommandOutput}
 * @see {@link ListLicenseEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListLicenseEndpointsCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class ListLicenseEndpointsCommand extends $Command
  .classBuilder<
    ListLicenseEndpointsCommandInput,
    ListLicenseEndpointsCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "ListLicenseEndpoints", {})
  .n("DeadlineClient", "ListLicenseEndpointsCommand")
  .sc(ListLicenseEndpoints)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLicenseEndpointsRequest;
      output: ListLicenseEndpointsResponse;
    };
    sdk: {
      input: ListLicenseEndpointsCommandInput;
      output: ListLicenseEndpointsCommandOutput;
    };
  };
}
