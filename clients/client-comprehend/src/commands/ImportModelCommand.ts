// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ImportModelRequest, ImportModelResponse } from "../models/models_0";
import { ImportModel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportModelCommand}.
 */
export interface ImportModelCommandInput extends ImportModelRequest {}
/**
 * @public
 *
 * The output of {@link ImportModelCommand}.
 */
export interface ImportModelCommandOutput extends ImportModelResponse, __MetadataBearer {}

/**
 * <p>Creates a new custom model that replicates a source custom model that you import. The
 *       source model can be in your Amazon Web Services account or another one.</p>
 *          <p>If the source model is in another Amazon Web Services account, then it must have a resource-based policy
 *       that authorizes you to import it.</p>
 *          <p>The source model must be in the same Amazon Web Services Region that you're using when you import. You
 *       can't import a model that's in a different Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ImportModelCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ImportModelCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ImportModelRequest
 *   SourceModelArn: "STRING_VALUE", // required
 *   ModelName: "STRING_VALUE",
 *   VersionName: "STRING_VALUE",
 *   ModelKmsKeyId: "STRING_VALUE",
 *   DataAccessRoleArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ImportModelCommand(input);
 * const response = await client.send(command);
 * // { // ImportModelResponse
 * //   ModelArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportModelCommandInput - {@link ImportModelCommandInput}
 * @returns {@link ImportModelCommandOutput}
 * @see {@link ImportModelCommandInput} for command's `input` shape.
 * @see {@link ImportModelCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link KmsKeyValidationException} (client fault)
 *  <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and
 *       re-enter it.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource name is already in use. Use a different name and try your request
 *       again.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The maximum number of resources per account has been exceeded. Review the resources, and
 *       then try your request again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource is not available. Check the resource and try your request
 *       again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains more tags than can be associated with a resource (50 tags per
 *       resource). The maximum number of tags includes both existing tags and those included in your
 *       current request. </p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class ImportModelCommand extends $Command
  .classBuilder<
    ImportModelCommandInput,
    ImportModelCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "ImportModel", {})
  .n("ComprehendClient", "ImportModelCommand")
  .sc(ImportModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportModelRequest;
      output: ImportModelResponse;
    };
    sdk: {
      input: ImportModelCommandInput;
      output: ImportModelCommandOutput;
    };
  };
}
