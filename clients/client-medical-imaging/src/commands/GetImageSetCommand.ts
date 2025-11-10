// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import { GetImageSetRequest, GetImageSetResponse } from "../models/models_0";
import { GetImageSet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetImageSetCommand}.
 */
export interface GetImageSetCommandInput extends GetImageSetRequest {}
/**
 * @public
 *
 * The output of {@link GetImageSetCommand}.
 */
export interface GetImageSetCommandOutput extends GetImageSetResponse, __MetadataBearer {}

/**
 * <p>Get image set properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, GetImageSetCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, GetImageSetCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // import type { MedicalImagingClientConfig } from "@aws-sdk/client-medical-imaging";
 * const config = {}; // type is MedicalImagingClientConfig
 * const client = new MedicalImagingClient(config);
 * const input = { // GetImageSetRequest
 *   datastoreId: "STRING_VALUE", // required
 *   imageSetId: "STRING_VALUE", // required
 *   versionId: "STRING_VALUE",
 * };
 * const command = new GetImageSetCommand(input);
 * const response = await client.send(command);
 * // { // GetImageSetResponse
 * //   datastoreId: "STRING_VALUE", // required
 * //   imageSetId: "STRING_VALUE", // required
 * //   versionId: "STRING_VALUE", // required
 * //   imageSetState: "ACTIVE" || "LOCKED" || "DELETED", // required
 * //   imageSetWorkflowStatus: "CREATED" || "COPIED" || "COPYING" || "COPYING_WITH_READ_ONLY_ACCESS" || "COPY_FAILED" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED" || "IMPORTING" || "IMPORTED" || "IMPORT_FAILED",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   deletedAt: new Date("TIMESTAMP"),
 * //   message: "STRING_VALUE",
 * //   imageSetArn: "STRING_VALUE",
 * //   overrides: { // Overrides
 * //     forced: true || false,
 * //   },
 * //   isPrimary: true || false,
 * // };
 *
 * ```
 *
 * @param GetImageSetCommandInput - {@link GetImageSetCommandInput}
 * @returns {@link GetImageSetCommandOutput}
 * @see {@link GetImageSetCommandInput} for command's `input` shape.
 * @see {@link GetImageSetCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
export class GetImageSetCommand extends $Command
  .classBuilder<
    GetImageSetCommandInput,
    GetImageSetCommandOutput,
    MedicalImagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MedicalImagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AHIGatewayService", "GetImageSet", {})
  .n("MedicalImagingClient", "GetImageSetCommand")
  .sc(GetImageSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImageSetRequest;
      output: GetImageSetResponse;
    };
    sdk: {
      input: GetImageSetCommandInput;
      output: GetImageSetCommandOutput;
    };
  };
}
