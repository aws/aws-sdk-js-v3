// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InvokeEndpointInput, InvokeEndpointOutput } from "../models/models_0";
import { InvokeEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 */
export type InvokeEndpointCommandInputType = Omit<InvokeEndpointInput, "Body"> & {
  Body: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link InvokeEndpointCommand}.
 */
export interface InvokeEndpointCommandInput extends InvokeEndpointCommandInputType {}
/**
 * @public
 */
export type InvokeEndpointCommandOutputType = Omit<InvokeEndpointOutput, "Body"> & {
  Body: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link InvokeEndpointCommand}.
 */
export interface InvokeEndpointCommandOutput extends InvokeEndpointCommandOutputType, __MetadataBearer {}

/**
 * After you deploy a model into production using Amazon SageMaker AI hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint.
 *
 * For an overview of Amazon SageMaker AI, see [How It Works](https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html).
 *
 * Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax.
 *
 * Calls to `InvokeEndpoint` are authenticated by using Amazon Web Services Signature Version 4. For information, see [Authenticating Requests (Amazon Web Services Signature Version 4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html) in the *Amazon S3 API Reference*.
 *
 * A customer's model containers must respond to requests within 60 seconds. The model itself can have a maximum processing time of 60 seconds before responding to invocations. If your model is going to take 50-60 seconds of processing time, the SDK socket timeout should be set to be 70 seconds.
 *
 * > **Note:** Endpoints are scoped to an individual account, and are not public. The URL does not contain the account ID, but Amazon SageMaker AI determines the account ID from the authentication token that is supplied by the caller.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerRuntimeClient, InvokeEndpointCommand } from "@aws-sdk/client-sagemaker-runtime"; // ES Modules import
 * // const { SageMakerRuntimeClient, InvokeEndpointCommand } = require("@aws-sdk/client-sagemaker-runtime"); // CommonJS import
 * // import type { SageMakerRuntimeClientConfig } from "@aws-sdk/client-sagemaker-runtime";
 * const config = {}; // type is SageMakerRuntimeClientConfig
 * const client = new SageMakerRuntimeClient(config);
 * const input = { // InvokeEndpointInput
 *   EndpointName: "STRING_VALUE", // required
 *   Body: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   ContentType: "STRING_VALUE",
 *   Accept: "STRING_VALUE",
 *   CustomAttributes: "STRING_VALUE",
 *   TargetModel: "STRING_VALUE",
 *   TargetVariant: "STRING_VALUE",
 *   TargetContainerHostname: "STRING_VALUE",
 *   InferenceId: "STRING_VALUE",
 *   EnableExplanations: "STRING_VALUE",
 *   InferenceComponentName: "STRING_VALUE",
 *   SessionId: "STRING_VALUE",
 *   PrefixAwareId: "STRING_VALUE",
 * };
 * const command = new InvokeEndpointCommand(input);
 * const response = await client.send(command);
 * // { // InvokeEndpointOutput
 * //   Body: new Uint8Array(), // required
 * //   ContentType: "STRING_VALUE",
 * //   InvokedProductionVariant: "STRING_VALUE",
 * //   CustomAttributes: "STRING_VALUE",
 * //   NewSessionId: "STRING_VALUE",
 * //   ClosedSessionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeEndpointCommandInput - {@link InvokeEndpointCommandInput}
 * @returns {@link InvokeEndpointCommandOutput}
 * @see {@link InvokeEndpointCommandInput} for command's `input` shape.
 * @see {@link InvokeEndpointCommandOutput} for command's `response` shape.
 * @see {@link SageMakerRuntimeClientResolvedConfig | config} for SageMakerRuntimeClient's `config` shape.
 *
 * @throws {@link InternalDependencyException} (server fault)
 *
 * Your request caused an exception with an internal dependency. Contact customer support.
 *
 * @throws {@link InternalFailure} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link ModelError} (client fault)
 *
 * Model (owned by the customer in the container) returned 4xx or 5xx error code.
 *
 * @throws {@link ModelNotReadyException} (client fault)
 *
 * Either a serverless endpoint variant's resources are still being provisioned, or a multi-model endpoint is still downloading or loading the target model. Wait and try your request again.
 *
 * @throws {@link ServiceUnavailable} (server fault)
 *
 * The service is unavailable. Try your call again.
 *
 * @throws {@link ValidationError} (client fault)
 *
 * Inspect your request and try again.
 *
 * @throws {@link SageMakerRuntimeServiceException}
 *
 * Base exception class for all service exceptions from SageMakerRuntime service.
 *
 * @public
 */
export class InvokeEndpointCommand extends command<InvokeEndpointCommandInput, InvokeEndpointCommandOutput>(
  _ep0,
  _mw0,
  "InvokeEndpoint",
  InvokeEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeEndpointInput;
      output: InvokeEndpointOutput;
    };
    sdk: {
      input: InvokeEndpointCommandInput;
      output: InvokeEndpointCommandOutput;
    };
  };
}
