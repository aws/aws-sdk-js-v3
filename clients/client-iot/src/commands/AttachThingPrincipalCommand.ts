// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AttachThingPrincipalRequest, AttachThingPrincipalResponse } from "../models/models_0";
import { AttachThingPrincipal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AttachThingPrincipalCommand}.
 */
export interface AttachThingPrincipalCommandInput extends AttachThingPrincipalRequest {}
/**
 * @public
 *
 * The output of {@link AttachThingPrincipalCommand}.
 */
export interface AttachThingPrincipalCommandOutput extends AttachThingPrincipalResponse, __MetadataBearer {}

/**
 * Attaches the specified principal to the specified thing. A principal can be X.509 certificates, Amazon Cognito identities or federated identities.
 *
 * Requires permission to access the [AttachThingPrincipal](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AttachThingPrincipalCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AttachThingPrincipalCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // AttachThingPrincipalRequest
 *   thingName: "STRING_VALUE", // required
 *   principal: "STRING_VALUE", // required
 *   thingPrincipalType: "EXCLUSIVE_THING" || "NON_EXCLUSIVE_THING",
 * };
 * const command = new AttachThingPrincipalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachThingPrincipalCommandInput - {@link AttachThingPrincipalCommandInput}
 * @returns {@link AttachThingPrincipalCommandOutput}
 * @see {@link AttachThingPrincipalCommandInput} for command's `input` shape.
 * @see {@link AttachThingPrincipalCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class AttachThingPrincipalCommand extends command<AttachThingPrincipalCommandInput, AttachThingPrincipalCommandOutput>(
  _ep0,
  _mw0,
  "AttachThingPrincipal",
  AttachThingPrincipal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachThingPrincipalRequest;
      output: {};
    };
    sdk: {
      input: AttachThingPrincipalCommandInput;
      output: AttachThingPrincipalCommandOutput;
    };
  };
}
