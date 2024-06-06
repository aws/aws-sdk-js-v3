// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEarthObservationJobInput, DeleteEarthObservationJobOutput } from "../models/models_0";
import { de_DeleteEarthObservationJobCommand, se_DeleteEarthObservationJobCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEarthObservationJobCommand}.
 */
export interface DeleteEarthObservationJobCommandInput extends DeleteEarthObservationJobInput {}
/**
 * @public
 *
 * The output of {@link DeleteEarthObservationJobCommand}.
 */
export interface DeleteEarthObservationJobCommandOutput extends DeleteEarthObservationJobOutput, __MetadataBearer {}

/**
 * <p>Use this operation to delete an Earth Observation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, DeleteEarthObservationJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, DeleteEarthObservationJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // DeleteEarthObservationJobInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteEarthObservationJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEarthObservationJobCommandInput - {@link DeleteEarthObservationJobCommandInput}
 * @returns {@link DeleteEarthObservationJobCommandOutput}
 * @see {@link DeleteEarthObservationJobCommandInput} for command's `input` shape.
 * @see {@link DeleteEarthObservationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SageMakerGeospatialServiceException}
 * <p>Base exception class for all service exceptions from SageMakerGeospatial service.</p>
 *
 * @public
 */
export class DeleteEarthObservationJobCommand extends $Command
  .classBuilder<
    DeleteEarthObservationJobCommandInput,
    DeleteEarthObservationJobCommandOutput,
    SageMakerGeospatialClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerGeospatialClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMakerGeospatial", "DeleteEarthObservationJob", {})
  .n("SageMakerGeospatialClient", "DeleteEarthObservationJobCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEarthObservationJobCommand)
  .de(de_DeleteEarthObservationJobCommand)
  .build() {}
