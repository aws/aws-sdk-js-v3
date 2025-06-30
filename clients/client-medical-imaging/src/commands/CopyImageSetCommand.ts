// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import { CopyImageSetRequest, CopyImageSetRequestFilterSensitiveLog, CopyImageSetResponse } from "../models/models_0";
import { de_CopyImageSetCommand, se_CopyImageSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyImageSetCommand}.
 */
export interface CopyImageSetCommandInput extends CopyImageSetRequest {}
/**
 * @public
 *
 * The output of {@link CopyImageSetCommand}.
 */
export interface CopyImageSetCommandOutput extends CopyImageSetResponse, __MetadataBearer {}

/**
 * <p>Copy an image set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, CopyImageSetCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, CopyImageSetCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * const client = new MedicalImagingClient(config);
 * const input = { // CopyImageSetRequest
 *   datastoreId: "STRING_VALUE", // required
 *   sourceImageSetId: "STRING_VALUE", // required
 *   copyImageSetInformation: { // CopyImageSetInformation
 *     sourceImageSet: { // CopySourceImageSetInformation
 *       latestVersionId: "STRING_VALUE", // required
 *       DICOMCopies: { // MetadataCopies
 *         copiableAttributes: "STRING_VALUE", // required
 *       },
 *     },
 *     destinationImageSet: { // CopyDestinationImageSet
 *       imageSetId: "STRING_VALUE", // required
 *       latestVersionId: "STRING_VALUE", // required
 *     },
 *   },
 *   force: true || false,
 *   promoteToPrimary: true || false,
 * };
 * const command = new CopyImageSetCommand(input);
 * const response = await client.send(command);
 * // { // CopyImageSetResponse
 * //   datastoreId: "STRING_VALUE", // required
 * //   sourceImageSetProperties: { // CopySourceImageSetProperties
 * //     imageSetId: "STRING_VALUE", // required
 * //     latestVersionId: "STRING_VALUE", // required
 * //     imageSetState: "ACTIVE" || "LOCKED" || "DELETED",
 * //     imageSetWorkflowStatus: "CREATED" || "COPIED" || "COPYING" || "COPYING_WITH_READ_ONLY_ACCESS" || "COPY_FAILED" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     imageSetArn: "STRING_VALUE",
 * //   },
 * //   destinationImageSetProperties: { // CopyDestinationImageSetProperties
 * //     imageSetId: "STRING_VALUE", // required
 * //     latestVersionId: "STRING_VALUE", // required
 * //     imageSetState: "ACTIVE" || "LOCKED" || "DELETED",
 * //     imageSetWorkflowStatus: "CREATED" || "COPIED" || "COPYING" || "COPYING_WITH_READ_ONLY_ACCESS" || "COPY_FAILED" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     imageSetArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyImageSetCommandInput - {@link CopyImageSetCommandInput}
 * @returns {@link CopyImageSetCommandOutput}
 * @see {@link CopyImageSetCommandInput} for command's `input` shape.
 * @see {@link CopyImageSetCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request caused a service quota to be exceeded.</p>
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
export class CopyImageSetCommand extends $Command
  .classBuilder<
    CopyImageSetCommandInput,
    CopyImageSetCommandOutput,
    MedicalImagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MedicalImagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AHIGatewayService", "CopyImageSet", {})
  .n("MedicalImagingClient", "CopyImageSetCommand")
  .f(CopyImageSetRequestFilterSensitiveLog, void 0)
  .ser(se_CopyImageSetCommand)
  .de(de_CopyImageSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyImageSetRequest;
      output: CopyImageSetResponse;
    };
    sdk: {
      input: CopyImageSetCommandInput;
      output: CopyImageSetCommandOutput;
    };
  };
}
