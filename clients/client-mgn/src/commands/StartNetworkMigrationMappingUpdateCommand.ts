// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  StartNetworkMigrationMappingUpdateRequest,
  StartNetworkMigrationMappingUpdateResponse,
} from "../models/models_0";
import { StartNetworkMigrationMappingUpdate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartNetworkMigrationMappingUpdateCommand}.
 */
export interface StartNetworkMigrationMappingUpdateCommandInput extends StartNetworkMigrationMappingUpdateRequest {}
/**
 * @public
 *
 * The output of {@link StartNetworkMigrationMappingUpdateCommand}.
 */
export interface StartNetworkMigrationMappingUpdateCommandOutput extends StartNetworkMigrationMappingUpdateResponse, __MetadataBearer {}

/**
 * <p>Starts a job to apply customer modifications to network migration mappings, such as changing properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, StartNetworkMigrationMappingUpdateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, StartNetworkMigrationMappingUpdateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // StartNetworkMigrationMappingUpdateRequest
 *   networkMigrationExecutionID: "STRING_VALUE", // required
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   constructs: [ // StartNetworkMigrationMappingUpdateConstructs
 *     { // StartNetworkMigrationMappingUpdateConstruct
 *       segmentID: "STRING_VALUE", // required
 *       constructID: "STRING_VALUE", // required
 *       constructType: "STRING_VALUE", // required
 *       operation: { // OperationUnion Union: only one key present
 *         update: { // UpdateOperation
 *           properties: { // ConstructProperties
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   segments: [ // StartNetworkMigrationMappingUpdateSegments
 *     { // StartNetworkMigrationMappingUpdateSegment
 *       segmentID: "STRING_VALUE", // required
 *       targetAccount: "STRING_VALUE",
 *       scopeTags: { // ScopeTagsMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new StartNetworkMigrationMappingUpdateCommand(input);
 * const response = await client.send(command);
 * // { // StartNetworkMigrationMappingUpdateResponse
 * //   jobID: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartNetworkMigrationMappingUpdateCommandInput - {@link StartNetworkMigrationMappingUpdateCommandInput}
 * @returns {@link StartNetworkMigrationMappingUpdateCommandOutput}
 * @see {@link StartNetworkMigrationMappingUpdateCommandInput} for command's `input` shape.
 * @see {@link StartNetworkMigrationMappingUpdateCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Reached throttling quota exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample StartNetworkMigrationMappingUpdate call
 * ```javascript
 * //
 * const input = {
 *   constructs: [
 *     {
 *       constructID: "abc45678-abcd-abcd-efab-012345678abc",
 *       constructType: "AWS::EC2::VPC",
 *       operation: {
 *         update: {
 *           properties: {
 *             CidrBlock: "10.31.0.0/22"
 *           }
 *         }
 *       },
 *       segmentID: "12345678-abcd-abcd-efab-0123456789ab"
 *     }
 *   ],
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab",
 *   segments: [
 *     {
 *       scopeTags: {
 *         key1: "val1",
 *         key2: "val2"
 *       },
 *       segmentID: "12345678-abcd-abcd-efab-0123456789ab",
 *       targetAccount: "234567890123"
 *     }
 *   ]
 * };
 * const command = new StartNetworkMigrationMappingUpdateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobID: "01234567-abcd-abcd-efab-0123456789ab"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartNetworkMigrationMappingUpdateCommand extends $Command
  .classBuilder<
    StartNetworkMigrationMappingUpdateCommandInput,
    StartNetworkMigrationMappingUpdateCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "StartNetworkMigrationMappingUpdate", {})
  .n("MgnClient", "StartNetworkMigrationMappingUpdateCommand")
  .sc(StartNetworkMigrationMappingUpdate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartNetworkMigrationMappingUpdateRequest;
      output: StartNetworkMigrationMappingUpdateResponse;
    };
    sdk: {
      input: StartNetworkMigrationMappingUpdateCommandInput;
      output: StartNetworkMigrationMappingUpdateCommandOutput;
    };
  };
}
