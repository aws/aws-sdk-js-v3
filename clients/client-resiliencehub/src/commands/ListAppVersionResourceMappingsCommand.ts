// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAppVersionResourceMappingsRequest, ListAppVersionResourceMappingsResponse } from "../models/models_0";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { ListAppVersionResourceMappings } from "../schemas/schemas_13_App";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppVersionResourceMappingsCommand}.
 */
export interface ListAppVersionResourceMappingsCommandInput extends ListAppVersionResourceMappingsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppVersionResourceMappingsCommand}.
 */
export interface ListAppVersionResourceMappingsCommandOutput
  extends ListAppVersionResourceMappingsResponse,
    __MetadataBearer {}

/**
 * <p>Lists how the resources in an application version are mapped/sourced from. Mappings can be
 *       physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry
 *       app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppVersionResourceMappingsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppVersionResourceMappingsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppVersionResourceMappingsRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppVersionResourceMappingsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppVersionResourceMappingsResponse
 * //   resourceMappings: [ // ResourceMappingList // required
 * //     { // ResourceMapping
 * //       resourceName: "STRING_VALUE",
 * //       logicalStackName: "STRING_VALUE",
 * //       appRegistryAppName: "STRING_VALUE",
 * //       resourceGroupName: "STRING_VALUE",
 * //       mappingType: "CfnStack" || "Resource" || "AppRegistryApp" || "ResourceGroup" || "Terraform" || "EKS", // required
 * //       physicalResourceId: { // PhysicalResourceId
 * //         identifier: "STRING_VALUE", // required
 * //         type: "Arn" || "Native", // required
 * //         awsRegion: "STRING_VALUE",
 * //         awsAccountId: "STRING_VALUE",
 * //       },
 * //       terraformSourceName: "STRING_VALUE",
 * //       eksSourceName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppVersionResourceMappingsCommandInput - {@link ListAppVersionResourceMappingsCommandInput}
 * @returns {@link ListAppVersionResourceMappingsCommandOutput}
 * @see {@link ListAppVersionResourceMappingsCommandInput} for command's `input` shape.
 * @see {@link ListAppVersionResourceMappingsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
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
export class ListAppVersionResourceMappingsCommand extends $Command
  .classBuilder<
    ListAppVersionResourceMappingsCommandInput,
    ListAppVersionResourceMappingsCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "ListAppVersionResourceMappings", {})
  .n("ResiliencehubClient", "ListAppVersionResourceMappingsCommand")
  .sc(ListAppVersionResourceMappings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppVersionResourceMappingsRequest;
      output: ListAppVersionResourceMappingsResponse;
    };
    sdk: {
      input: ListAppVersionResourceMappingsCommandInput;
      output: ListAppVersionResourceMappingsCommandOutput;
    };
  };
}
