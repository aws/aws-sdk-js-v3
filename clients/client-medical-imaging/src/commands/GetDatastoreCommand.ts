// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import { GetDatastoreRequest, GetDatastoreResponse } from "../models/models_0";
import { GetDatastore } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDatastoreCommand}.
 */
export interface GetDatastoreCommandInput extends GetDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link GetDatastoreCommand}.
 */
export interface GetDatastoreCommandOutput extends GetDatastoreResponse, __MetadataBearer {}

/**
 * <p>Get data store properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, GetDatastoreCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, GetDatastoreCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // import type { MedicalImagingClientConfig } from "@aws-sdk/client-medical-imaging";
 * const config = {}; // type is MedicalImagingClientConfig
 * const client = new MedicalImagingClient(config);
 * const input = { // GetDatastoreRequest
 *   datastoreId: "STRING_VALUE", // required
 * };
 * const command = new GetDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // GetDatastoreResponse
 * //   datastoreProperties: { // DatastoreProperties
 * //     datastoreId: "STRING_VALUE", // required
 * //     datastoreName: "STRING_VALUE", // required
 * //     datastoreStatus: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "DELETED", // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //     lambdaAuthorizerArn: "STRING_VALUE",
 * //     datastoreArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDatastoreCommandInput - {@link GetDatastoreCommandInput}
 * @returns {@link GetDatastoreCommandOutput}
 * @see {@link GetDatastoreCommandInput} for command's `input` shape.
 * @see {@link GetDatastoreCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the service.</p>
 *
 * @throws {@link MedicalImagingServiceException}
 * <p>Base exception class for all service exceptions from MedicalImaging service.</p>
 *
 *
 * @public
 */
export class GetDatastoreCommand extends $Command
  .classBuilder<
    GetDatastoreCommandInput,
    GetDatastoreCommandOutput,
    MedicalImagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MedicalImagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AHIGatewayService", "GetDatastore", {})
  .n("MedicalImagingClient", "GetDatastoreCommand")
  .sc(GetDatastore)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDatastoreRequest;
      output: GetDatastoreResponse;
    };
    sdk: {
      input: GetDatastoreCommandInput;
      output: GetDatastoreCommandOutput;
    };
  };
}
