// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePartnerAppRequest, DeletePartnerAppResponse } from "../models/models_2";
import { DeletePartnerApp$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePartnerAppCommand}.
 */
export interface DeletePartnerAppCommandInput extends DeletePartnerAppRequest {}
/**
 * @public
 *
 * The output of {@link DeletePartnerAppCommand}.
 */
export interface DeletePartnerAppCommandOutput extends DeletePartnerAppResponse, __MetadataBearer {}

/**
 * Deletes a SageMaker Partner AI App.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeletePartnerAppCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeletePartnerAppCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeletePartnerAppRequest
 *   Arn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeletePartnerAppCommand(input);
 * const response = await client.send(command);
 * // { // DeletePartnerAppResponse
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePartnerAppCommandInput - {@link DeletePartnerAppCommandInput}
 * @returns {@link DeletePartnerAppCommandOutput}
 * @see {@link DeletePartnerAppCommandInput} for command's `input` shape.
 * @see {@link DeletePartnerAppCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict when you attempted to modify a SageMaker entity such as an `Experiment` or `Artifact`.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Resource being access is not found.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class DeletePartnerAppCommand extends command<DeletePartnerAppCommandInput, DeletePartnerAppCommandOutput>(
  _ep0,
  _mw0,
  "DeletePartnerApp",
  DeletePartnerApp$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePartnerAppRequest;
      output: DeletePartnerAppResponse;
    };
    sdk: {
      input: DeletePartnerAppCommandInput;
      output: DeletePartnerAppCommandOutput;
    };
  };
}
