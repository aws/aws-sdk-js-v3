// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AddDraftAppVersionResourceMappingsRequest,
  AddDraftAppVersionResourceMappingsResponse,
} from "../models/models_0";
import {
  de_AddDraftAppVersionResourceMappingsCommand,
  se_AddDraftAppVersionResourceMappingsCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddDraftAppVersionResourceMappingsCommand}.
 */
export interface AddDraftAppVersionResourceMappingsCommandInput extends AddDraftAppVersionResourceMappingsRequest {}
/**
 * @public
 *
 * The output of {@link AddDraftAppVersionResourceMappingsCommand}.
 */
export interface AddDraftAppVersionResourceMappingsCommandOutput
  extends AddDraftAppVersionResourceMappingsResponse,
    __MetadataBearer {}

/**
 * <p>Adds the source of resource-maps to the draft version of an application. During assessment, Resilience Hub will use these resource-maps to resolve the latest physical ID for each resource in the application template. For more information about different types of resources suported by Resilience Hub and how to add them in your application, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/how-app-manage.html">Step 2: How is your application managed?</a> in the Resilience Hub User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, AddDraftAppVersionResourceMappingsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, AddDraftAppVersionResourceMappingsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // AddDraftAppVersionResourceMappingsRequest
 *   appArn: "STRING_VALUE", // required
 *   resourceMappings: [ // ResourceMappingList // required
 *     { // ResourceMapping
 *       resourceName: "STRING_VALUE",
 *       logicalStackName: "STRING_VALUE",
 *       appRegistryAppName: "STRING_VALUE",
 *       resourceGroupName: "STRING_VALUE",
 *       mappingType: "STRING_VALUE", // required
 *       physicalResourceId: { // PhysicalResourceId
 *         identifier: "STRING_VALUE", // required
 *         type: "STRING_VALUE", // required
 *         awsRegion: "STRING_VALUE",
 *         awsAccountId: "STRING_VALUE",
 *       },
 *       terraformSourceName: "STRING_VALUE",
 *       eksSourceName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AddDraftAppVersionResourceMappingsCommand(input);
 * const response = await client.send(command);
 * // { // AddDraftAppVersionResourceMappingsResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   resourceMappings: [ // ResourceMappingList // required
 * //     { // ResourceMapping
 * //       resourceName: "STRING_VALUE",
 * //       logicalStackName: "STRING_VALUE",
 * //       appRegistryAppName: "STRING_VALUE",
 * //       resourceGroupName: "STRING_VALUE",
 * //       mappingType: "STRING_VALUE", // required
 * //       physicalResourceId: { // PhysicalResourceId
 * //         identifier: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         awsRegion: "STRING_VALUE",
 * //         awsAccountId: "STRING_VALUE",
 * //       },
 * //       terraformSourceName: "STRING_VALUE",
 * //       eksSourceName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddDraftAppVersionResourceMappingsCommandInput - {@link AddDraftAppVersionResourceMappingsCommandInput}
 * @returns {@link AddDraftAppVersionResourceMappingsCommandOutput}
 * @see {@link AddDraftAppVersionResourceMappingsCommandInput} for command's `input` shape.
 * @see {@link AddDraftAppVersionResourceMappingsCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
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
 * @public
 */
export class AddDraftAppVersionResourceMappingsCommand extends $Command
  .classBuilder<
    AddDraftAppVersionResourceMappingsCommandInput,
    AddDraftAppVersionResourceMappingsCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "AddDraftAppVersionResourceMappings", {})
  .n("ResiliencehubClient", "AddDraftAppVersionResourceMappingsCommand")
  .f(void 0, void 0)
  .ser(se_AddDraftAppVersionResourceMappingsCommand)
  .de(de_AddDraftAppVersionResourceMappingsCommand)
  .build() {}
