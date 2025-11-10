// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSchemaCreationStatusRequest, GetSchemaCreationStatusResponse } from "../models/models_0";
import { GetSchemaCreationStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSchemaCreationStatusCommand}.
 */
export interface GetSchemaCreationStatusCommandInput extends GetSchemaCreationStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetSchemaCreationStatusCommand}.
 */
export interface GetSchemaCreationStatusCommandOutput extends GetSchemaCreationStatusResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current status of a schema creation operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetSchemaCreationStatusCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetSchemaCreationStatusCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // GetSchemaCreationStatusRequest
 *   apiId: "STRING_VALUE", // required
 * };
 * const command = new GetSchemaCreationStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetSchemaCreationStatusResponse
 * //   status: "PROCESSING" || "ACTIVE" || "DELETING" || "FAILED" || "SUCCESS" || "NOT_APPLICABLE",
 * //   details: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSchemaCreationStatusCommandInput - {@link GetSchemaCreationStatusCommandInput}
 * @returns {@link GetSchemaCreationStatusCommandOutput}
 * @see {@link GetSchemaCreationStatusCommandInput} for command's `input` shape.
 * @see {@link GetSchemaCreationStatusCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class GetSchemaCreationStatusCommand extends $Command
  .classBuilder<
    GetSchemaCreationStatusCommandInput,
    GetSchemaCreationStatusCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "GetSchemaCreationStatus", {})
  .n("AppSyncClient", "GetSchemaCreationStatusCommand")
  .sc(GetSchemaCreationStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSchemaCreationStatusRequest;
      output: GetSchemaCreationStatusResponse;
    };
    sdk: {
      input: GetSchemaCreationStatusCommandInput;
      output: GetSchemaCreationStatusCommandOutput;
    };
  };
}
