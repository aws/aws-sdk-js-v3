// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAppAssessmentResourceDriftsRequest, ListAppAssessmentResourceDriftsResponse } from "../models/models_0";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { ListAppAssessmentResourceDrifts } from "../schemas/schemas_8_App";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppAssessmentResourceDriftsCommand}.
 */
export interface ListAppAssessmentResourceDriftsCommandInput extends ListAppAssessmentResourceDriftsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppAssessmentResourceDriftsCommand}.
 */
export interface ListAppAssessmentResourceDriftsCommandOutput
  extends ListAppAssessmentResourceDriftsResponse,
    __MetadataBearer {}

/**
 * <p>List of resource drifts that were detected while running an
 *       assessment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppAssessmentResourceDriftsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppAssessmentResourceDriftsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppAssessmentResourceDriftsRequest
 *   assessmentArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppAssessmentResourceDriftsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppAssessmentResourceDriftsResponse
 * //   resourceDrifts: [ // ResourceDriftList // required
 * //     { // ResourceDrift
 * //       appArn: "STRING_VALUE",
 * //       appVersion: "STRING_VALUE",
 * //       referenceId: "STRING_VALUE",
 * //       resourceIdentifier: { // ResourceIdentifier
 * //         logicalResourceId: { // LogicalResourceId
 * //           identifier: "STRING_VALUE", // required
 * //           logicalStackName: "STRING_VALUE",
 * //           resourceGroupName: "STRING_VALUE",
 * //           terraformSourceName: "STRING_VALUE",
 * //           eksSourceName: "STRING_VALUE",
 * //         },
 * //         resourceType: "STRING_VALUE",
 * //       },
 * //       diffType: "NotEqual" || "Added" || "Removed",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppAssessmentResourceDriftsCommandInput - {@link ListAppAssessmentResourceDriftsCommandInput}
 * @returns {@link ListAppAssessmentResourceDriftsCommandOutput}
 * @see {@link ListAppAssessmentResourceDriftsCommandInput} for command's `input` shape.
 * @see {@link ListAppAssessmentResourceDriftsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class ListAppAssessmentResourceDriftsCommand extends $Command
  .classBuilder<
    ListAppAssessmentResourceDriftsCommandInput,
    ListAppAssessmentResourceDriftsCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "ListAppAssessmentResourceDrifts", {})
  .n("ResiliencehubClient", "ListAppAssessmentResourceDriftsCommand")
  .sc(ListAppAssessmentResourceDrifts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppAssessmentResourceDriftsRequest;
      output: ListAppAssessmentResourceDriftsResponse;
    };
    sdk: {
      input: ListAppAssessmentResourceDriftsCommandInput;
      output: ListAppAssessmentResourceDriftsCommandOutput;
    };
  };
}
