// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { GetComponentVersionArtifactRequest, GetComponentVersionArtifactResponse } from "../models/models_0";
import {
  de_GetComponentVersionArtifactCommand,
  se_GetComponentVersionArtifactCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetComponentVersionArtifactCommand}.
 */
export interface GetComponentVersionArtifactCommandInput extends GetComponentVersionArtifactRequest {}
/**
 * @public
 *
 * The output of {@link GetComponentVersionArtifactCommand}.
 */
export interface GetComponentVersionArtifactCommandOutput
  extends GetComponentVersionArtifactResponse,
    __MetadataBearer {}

/**
 * <p>Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices
 *       call this operation to identify the URL that they can use to download an artifact to
 *       install.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, GetComponentVersionArtifactCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, GetComponentVersionArtifactCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const input = { // GetComponentVersionArtifactRequest
 *   arn: "STRING_VALUE", // required
 *   artifactName: "STRING_VALUE", // required
 *   s3EndpointType: "REGIONAL" || "GLOBAL",
 *   iotEndpointType: "fips" || "standard",
 * };
 * const command = new GetComponentVersionArtifactCommand(input);
 * const response = await client.send(command);
 * // { // GetComponentVersionArtifactResponse
 * //   preSignedUrl: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetComponentVersionArtifactCommandInput - {@link GetComponentVersionArtifactCommandInput}
 * @returns {@link GetComponentVersionArtifactCommandOutput}
 * @see {@link GetComponentVersionArtifactCommandInput} for command's `input` shape.
 * @see {@link GetComponentVersionArtifactCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 *
 * @public
 */
export class GetComponentVersionArtifactCommand extends $Command
  .classBuilder<
    GetComponentVersionArtifactCommandInput,
    GetComponentVersionArtifactCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GreengrassV2", "GetComponentVersionArtifact", {})
  .n("GreengrassV2Client", "GetComponentVersionArtifactCommand")
  .f(void 0, void 0)
  .ser(se_GetComponentVersionArtifactCommand)
  .de(de_GetComponentVersionArtifactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComponentVersionArtifactRequest;
      output: GetComponentVersionArtifactResponse;
    };
    sdk: {
      input: GetComponentVersionArtifactCommandInput;
      output: GetComponentVersionArtifactCommandOutput;
    };
  };
}
