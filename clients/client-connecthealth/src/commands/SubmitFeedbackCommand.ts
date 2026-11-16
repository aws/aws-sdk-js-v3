// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SubmitFeedbackRequest, SubmitFeedbackResponse } from "../models/models_0";
import { SubmitFeedback$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SubmitFeedbackCommand}.
 */
export interface SubmitFeedbackCommandInput extends SubmitFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link SubmitFeedbackCommand}.
 */
export interface SubmitFeedbackCommandOutput extends SubmitFeedbackResponse, __MetadataBearer {}

/**
 * <p>Submits feedback on a clinical document or a set of medical codes that Amazon Connect Health generated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectHealthClient, SubmitFeedbackCommand } from "@aws-sdk/client-connecthealth"; // ES Modules import
 * // const { ConnectHealthClient, SubmitFeedbackCommand } = require("@aws-sdk/client-connecthealth"); // CommonJS import
 * // import type { ConnectHealthClientConfig } from "@aws-sdk/client-connecthealth";
 * const config = {}; // type is ConnectHealthClientConfig
 * const client = new ConnectHealthClient(config);
 * const input = { // SubmitFeedbackRequest
 *   domainId: "STRING_VALUE", // required
 *   artifactSourceId: "STRING_VALUE", // required
 *   subscriptionId: "STRING_VALUE",
 *   artifactType: "CLINICAL_DOC" || "MEDICAL_CODES", // required
 *   signedArtifactS3Uri: "STRING_VALUE", // required
 *   generatedArtifactS3Uri: "STRING_VALUE",
 *   comments: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new SubmitFeedbackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SubmitFeedbackCommandInput - {@link SubmitFeedbackCommandInput}
 * @returns {@link SubmitFeedbackCommandOutput}
 * @see {@link SubmitFeedbackCommandInput} for command's `input` shape.
 * @see {@link SubmitFeedbackCommandOutput} for command's `response` shape.
 * @see {@link ConnectHealthClientResolvedConfig | config} for ConnectHealthClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error is thrown when the client does not supply proper credentials to the API.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error is thrown when a transient error causes our API to fail.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error is thrown when the requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error is thrown when the client exceeds the allowed request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This error is thrown when the client supplies invalid input to the API.</p>
 *
 * @throws {@link ConnectHealthServiceException}
 * <p>Base exception class for all service exceptions from ConnectHealth service.</p>
 *
 *
 * @public
 */
export class SubmitFeedbackCommand extends command<SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput>(
  _ep0,
  _mw0,
  "SubmitFeedback",
  SubmitFeedback$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubmitFeedbackRequest;
      output: {};
    };
    sdk: {
      input: SubmitFeedbackCommandInput;
      output: SubmitFeedbackCommandOutput;
    };
  };
}
