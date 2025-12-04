// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListQAppsInput, ListQAppsOutput } from "../models/models_0";
import type { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { ListQApps } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQAppsCommand}.
 */
export interface ListQAppsCommandInput extends ListQAppsInput {}
/**
 * @public
 *
 * The output of {@link ListQAppsCommand}.
 */
export interface ListQAppsCommandOutput extends ListQAppsOutput, __MetadataBearer {}

/**
 * <p>Lists the Amazon Q Apps owned by or associated with the user either because they created it or because they used it from the library in the past. The user identity is extracted from the credentials used to invoke this operation..</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, ListQAppsCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, ListQAppsCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // ListQAppsInput
 *   instanceId: "STRING_VALUE", // required
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListQAppsCommand(input);
 * const response = await client.send(command);
 * // { // ListQAppsOutput
 * //   apps: [ // UserAppsList // required
 * //     { // UserAppItem
 * //       appId: "STRING_VALUE", // required
 * //       appArn: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       canEdit: true || false,
 * //       status: "STRING_VALUE",
 * //       isVerified: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQAppsCommandInput - {@link ListQAppsCommandInput}
 * @returns {@link ListQAppsCommandOutput}
 * @see {@link ListQAppsCommandInput} for command's `input` shape.
 * @see {@link ListQAppsCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client is not authenticated or authorized to perform the requested operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QAppsServiceException}
 * <p>Base exception class for all service exceptions from QApps service.</p>
 *
 *
 * @example List at most 3 Amazon Q Apps in an Q Business application
 * ```javascript
 * //
 * const input = {
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   limit: 3
 * };
 * const command = new ListQAppsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   apps: [
 *     {
 *       appArn: "arn:aws:qapps:us-west-2:..../7b9fe303-18bb-4643-952c-bfcf9f4c427f",
 *       appId: "7b9fe303-18bb-4643-952c-bfcf9f4c427f",
 *       createdAt: "2024-05-21T04:09:10.401Z",
 *       description: "Description 1",
 *       isVerified: false,
 *       status: "DRAFT",
 *       title: "App 1"
 *     },
 *     {
 *       appArn: "arn:aws:qapps:us-west-2:..../dd178fd6-ad3d-49b3-a32d-e915cf423e37",
 *       appId: "dd178fd6-ad3d-49b3-a32d-e915cf423e37",
 *       createdAt: "2024-05-21T04:09:10.401Z",
 *       description: "Description 2",
 *       isVerified: true,
 *       status: "PUBLISHED",
 *       title: "App 2"
 *     },
 *     {
 *       appArn: "arn:aws:qapps:us-west-2:..../3274b744-1a13-4aad-953f-eda2e4149e6e",
 *       appId: "3274b744-1a13-4aad-953f-eda2e4149e6e",
 *       createdAt: "2024-05-21T04:09:10.401Z",
 *       description: "Description 3",
 *       isVerified: false,
 *       status: "DRAFT",
 *       title: "App 3"
 *     }
 *   ],
 *   nextToken: "bXlzdGVyaW91c1BhZ2luYXRpb25Ub2tlbg=="
 * }
 * *\/
 * ```
 *
 * @example Retrieve the next page of Amazon Q Apps
 * ```javascript
 * //
 * const input = {
 *   instanceId: "0b95c9c4-89cc-4aa8-9aae-aa91cbec699f",
 *   limit: 3,
 *   nextToken: "bXlzdGVyaW91c1BhZ2luYXRpb25Ub2tlbg=="
 * };
 * const command = new ListQAppsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   apps: [
 *     {
 *       appArn: "arn:aws:qapps:us-west-2:..../bec8ee64-2635-41e8-aace-e1e418f4f295",
 *       appId: "bec8ee64-2635-41e8-aace-e1e418f4f295",
 *       createdAt: "2024-05-21T04:09:10.401Z",
 *       description: "Description 4",
 *       isVerified: true,
 *       status: "PUBLISHED",
 *       title: "App 4"
 *     },
 *     {
 *       appArn: "arn:aws:qapps:us-west-2:..../c380a45d-bd77-45b0-a0e5-8a266c1d8bc4",
 *       appId: "c380a45d-bd77-45b0-a0e5-8a266c1d8bc4",
 *       createdAt: "2024-05-21T04:09:10.401Z",
 *       description: "Description 5",
 *       isVerified: false,
 *       status: "PUBLISHED",
 *       title: "App 5"
 *     },
 *     {
 *       appArn: "arn:aws:qapps:us-west-2:..../afc4ee80-9722-4396-85a6-7aeaff52c177",
 *       appId: "afc4ee80-9722-4396-85a6-7aeaff52c177",
 *       createdAt: "2024-05-21T04:09:10.401Z",
 *       description: "Description 6",
 *       isVerified: false,
 *       status: "PUBLISHED",
 *       title: "App 6"
 *     }
 *   ],
 *   nextToken: "YW5vdGhlclRva2VuIQ=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListQAppsCommand extends $Command
  .classBuilder<
    ListQAppsCommandInput,
    ListQAppsCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "ListQApps", {})
  .n("QAppsClient", "ListQAppsCommand")
  .sc(ListQApps)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQAppsInput;
      output: ListQAppsOutput;
    };
    sdk: {
      input: ListQAppsCommandInput;
      output: ListQAppsCommandOutput;
    };
  };
}
