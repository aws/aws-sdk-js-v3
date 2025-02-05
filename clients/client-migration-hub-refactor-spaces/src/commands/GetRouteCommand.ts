// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubRefactorSpacesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubRefactorSpacesClient";
import { GetRouteRequest, GetRouteResponse, GetRouteResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetRouteCommand, se_GetRouteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRouteCommand}.
 */
export interface GetRouteCommandInput extends GetRouteRequest {}
/**
 * @public
 *
 * The output of {@link GetRouteCommand}.
 */
export interface GetRouteCommandOutput extends GetRouteResponse, __MetadataBearer {}

/**
 * <p>Gets an Amazon Web Services Migration Hub Refactor Spaces route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubRefactorSpacesClient, GetRouteCommand } from "@aws-sdk/client-migration-hub-refactor-spaces"; // ES Modules import
 * // const { MigrationHubRefactorSpacesClient, GetRouteCommand } = require("@aws-sdk/client-migration-hub-refactor-spaces"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MigrationHubRefactorSpacesClient(config);
 * const input = { // GetRouteRequest
 *   EnvironmentIdentifier: "STRING_VALUE", // required
 *   ApplicationIdentifier: "STRING_VALUE", // required
 *   RouteIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetRouteCommand(input);
 * const response = await client.send(command);
 * // { // GetRouteResponse
 * //   RouteId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   OwnerAccountId: "STRING_VALUE",
 * //   CreatedByAccountId: "STRING_VALUE",
 * //   RouteType: "STRING_VALUE",
 * //   ServiceId: "STRING_VALUE",
 * //   ApplicationId: "STRING_VALUE",
 * //   EnvironmentId: "STRING_VALUE",
 * //   SourcePath: "STRING_VALUE",
 * //   Methods: [ // HttpMethods
 * //     "STRING_VALUE",
 * //   ],
 * //   IncludeChildPaths: true || false,
 * //   PathResourceToId: { // PathResourceToId
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   State: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Error: { // ErrorResponse
 * //     Code: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //     AccountId: "STRING_VALUE",
 * //     ResourceIdentifier: "STRING_VALUE",
 * //     ResourceType: "STRING_VALUE",
 * //     AdditionalDetails: { // AdditionalDetails
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   AppendSourcePath: true || false,
 * // };
 *
 * ```
 *
 * @param GetRouteCommandInput - {@link GetRouteCommandInput}
 * @returns {@link GetRouteCommandOutput}
 * @see {@link GetRouteCommandInput} for command's `input` shape.
 * @see {@link GetRouteCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubRefactorSpacesClientResolvedConfig | config} for MigrationHubRefactorSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied because the request was throttled. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Service.
 *     </p>
 *
 * @throws {@link MigrationHubRefactorSpacesServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubRefactorSpaces service.</p>
 *
 * @public
 */
export class GetRouteCommand extends $Command
  .classBuilder<
    GetRouteCommandInput,
    GetRouteCommandOutput,
    MigrationHubRefactorSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubRefactorSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RefactorSpaces", "GetRoute", {})
  .n("MigrationHubRefactorSpacesClient", "GetRouteCommand")
  .f(void 0, GetRouteResponseFilterSensitiveLog)
  .ser(se_GetRouteCommand)
  .de(de_GetRouteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRouteRequest;
      output: GetRouteResponse;
    };
    sdk: {
      input: GetRouteCommandInput;
      output: GetRouteCommandOutput;
    };
  };
}
