// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListProjectPoliciesRequest, ListProjectPoliciesResponse } from "../models/models_0";
import type { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { ListProjectPolicies } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProjectPoliciesCommand}.
 */
export interface ListProjectPoliciesCommandInput extends ListProjectPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListProjectPoliciesCommand}.
 */
export interface ListProjectPoliciesCommandOutput extends ListProjectPoliciesResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation applies only to Amazon Rekognition Custom Labels.</p>
 *          </note>
 *          <p>Gets a list of the project policies attached to a project.</p>
 *          <p>To attach a project policy to a project, call <a>PutProjectPolicy</a>. To remove a project policy from a project, call <a>DeleteProjectPolicy</a>.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:ListProjectPolicies</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListProjectPoliciesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, ListProjectPoliciesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // ListProjectPoliciesRequest
 *   ProjectArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProjectPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListProjectPoliciesResponse
 * //   ProjectPolicies: [ // ProjectPolicies
 * //     { // ProjectPolicy
 * //       ProjectArn: "STRING_VALUE",
 * //       PolicyName: "STRING_VALUE",
 * //       PolicyRevisionId: "STRING_VALUE",
 * //       PolicyDocument: "STRING_VALUE",
 * //       CreationTimestamp: new Date("TIMESTAMP"),
 * //       LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProjectPoliciesCommandInput - {@link ListProjectPoliciesCommandInput}
 * @returns {@link ListProjectPoliciesCommandOutput}
 * @see {@link ListProjectPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListProjectPoliciesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Pagination token in the request is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 *
 * @public
 */
export class ListProjectPoliciesCommand extends $Command
  .classBuilder<
    ListProjectPoliciesCommandInput,
    ListProjectPoliciesCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "ListProjectPolicies", {})
  .n("RekognitionClient", "ListProjectPoliciesCommand")
  .sc(ListProjectPolicies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProjectPoliciesRequest;
      output: ListProjectPoliciesResponse;
    };
    sdk: {
      input: ListProjectPoliciesCommandInput;
      output: ListProjectPoliciesCommandOutput;
    };
  };
}
