// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import type { CreateGUISessionAccessDetailsRequest, CreateGUISessionAccessDetailsResult } from "../models/models_0";
import { CreateGUISessionAccessDetails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGUISessionAccessDetailsCommand}.
 */
export interface CreateGUISessionAccessDetailsCommandInput extends CreateGUISessionAccessDetailsRequest {}
/**
 * @public
 *
 * The output of {@link CreateGUISessionAccessDetailsCommand}.
 */
export interface CreateGUISessionAccessDetailsCommandOutput
  extends CreateGUISessionAccessDetailsResult,
    __MetadataBearer {}

/**
 * <p>Creates two URLs that are used to access a virtual computer’s graphical user interface
 *       (GUI) session. The primary URL initiates a web-based Amazon DCV session to the virtual
 *       computer's application. The secondary URL initiates a web-based Amazon DCV session to the
 *       virtual computer's operating session. </p>
 *          <p>Use <code>StartGUISession</code> to open the session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateGUISessionAccessDetailsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateGUISessionAccessDetailsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // CreateGUISessionAccessDetailsRequest
 *   resourceName: "STRING_VALUE", // required
 * };
 * const command = new CreateGUISessionAccessDetailsCommand(input);
 * const response = await client.send(command);
 * // { // CreateGUISessionAccessDetailsResult
 * //   resourceName: "STRING_VALUE",
 * //   status: "startExpired" || "notStarted" || "started" || "starting" || "stopped" || "stopping" || "settingUpInstance" || "failedInstanceCreation" || "failedStartingGUISession" || "failedStoppingGUISession",
 * //   percentageComplete: Number("int"),
 * //   failureReason: "STRING_VALUE",
 * //   sessions: [ // Sessions
 * //     { // Session
 * //       name: "STRING_VALUE",
 * //       url: "STRING_VALUE",
 * //       isPrimary: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateGUISessionAccessDetailsCommandInput - {@link CreateGUISessionAccessDetailsCommandInput}
 * @returns {@link CreateGUISessionAccessDetailsCommandOutput}
 * @see {@link CreateGUISessionAccessDetailsCommandInput} for command's `input` shape.
 * @see {@link CreateGUISessionAccessDetailsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class CreateGUISessionAccessDetailsCommand extends $Command
  .classBuilder<
    CreateGUISessionAccessDetailsCommandInput,
    CreateGUISessionAccessDetailsCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "CreateGUISessionAccessDetails", {})
  .n("LightsailClient", "CreateGUISessionAccessDetailsCommand")
  .sc(CreateGUISessionAccessDetails$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGUISessionAccessDetailsRequest;
      output: CreateGUISessionAccessDetailsResult;
    };
    sdk: {
      input: CreateGUISessionAccessDetailsCommandInput;
      output: CreateGUISessionAccessDetailsCommandOutput;
    };
  };
}
