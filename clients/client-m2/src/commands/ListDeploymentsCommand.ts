// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { ListDeploymentsRequest, ListDeploymentsResponse } from "../models/models_0";
import { ListDeployments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeploymentsCommand}.
 */
export interface ListDeploymentsCommandInput extends ListDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link ListDeploymentsCommand}.
 */
export interface ListDeploymentsCommandOutput extends ListDeploymentsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all deployments of a specific application. A deployment is a
 *          combination of a specific application and a specific version of that application. Each
 *          deployment is mapped to a particular application version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, ListDeploymentsCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, ListDeploymentsCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // ListDeploymentsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   applicationId: "STRING_VALUE", // required
 * };
 * const command = new ListDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentsResponse
 * //   deployments: [ // DeploymentList // required
 * //     { // DeploymentSummary
 * //       deploymentId: "STRING_VALUE", // required
 * //       applicationId: "STRING_VALUE", // required
 * //       environmentId: "STRING_VALUE", // required
 * //       applicationVersion: Number("int"), // required
 * //       status: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentsCommandInput - {@link ListDeploymentsCommandInput}
 * @returns {@link ListDeploymentsCommandOutput}
 * @see {@link ListDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class ListDeploymentsCommand extends $Command
  .classBuilder<
    ListDeploymentsCommandInput,
    ListDeploymentsCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "ListDeployments", {})
  .n("M2Client", "ListDeploymentsCommand")
  .sc(ListDeployments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentsRequest;
      output: ListDeploymentsResponse;
    };
    sdk: {
      input: ListDeploymentsCommandInput;
      output: ListDeploymentsCommandOutput;
    };
  };
}
