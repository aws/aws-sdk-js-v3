// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLensVersionInput, CreateLensVersionOutput } from "../models/models_0";
import { CreateLensVersion } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLensVersionCommand}.
 */
export interface CreateLensVersionCommandInput extends CreateLensVersionInput {}
/**
 * @public
 *
 * The output of {@link CreateLensVersionCommand}.
 */
export interface CreateLensVersionCommandOutput extends CreateLensVersionOutput, __MetadataBearer {}

/**
 * <p>Create a new lens version.</p>
 *          <p>A lens can have up to 100 versions.</p>
 *          <p>Use this operation to publish a new lens version after you have imported a lens. The <code>LensAlias</code>
 *             is used to identify the lens to be published.
 *             The owner of a lens can share the lens with other
 *             Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateLensVersionCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateLensVersionCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateLensVersionInput
 *   LensAlias: "STRING_VALUE", // required
 *   LensVersion: "STRING_VALUE", // required
 *   IsMajorVersion: true || false,
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateLensVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateLensVersionOutput
 * //   LensArn: "STRING_VALUE",
 * //   LensVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLensVersionCommandInput - {@link CreateLensVersionCommandInput}
 * @returns {@link CreateLensVersionCommandOutput}
 * @see {@link CreateLensVersionCommandInput} for command's `input` shape.
 * @see {@link CreateLensVersionCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class CreateLensVersionCommand extends $Command
  .classBuilder<
    CreateLensVersionCommandInput,
    CreateLensVersionCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "CreateLensVersion", {})
  .n("WellArchitectedClient", "CreateLensVersionCommand")
  .sc(CreateLensVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLensVersionInput;
      output: CreateLensVersionOutput;
    };
    sdk: {
      input: CreateLensVersionCommandInput;
      output: CreateLensVersionCommandOutput;
    };
  };
}
