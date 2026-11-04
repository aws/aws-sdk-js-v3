// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DetachThingPrincipalRequest, DetachThingPrincipalResponse } from "../models/models_1";
import { DetachThingPrincipal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DetachThingPrincipalCommand}.
 */
export interface DetachThingPrincipalCommandInput extends DetachThingPrincipalRequest {}
/**
 * @public
 *
 * The output of {@link DetachThingPrincipalCommand}.
 */
export interface DetachThingPrincipalCommandOutput extends DetachThingPrincipalResponse, __MetadataBearer {}

/**
 * Detaches the specified principal from the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.
 *
 * > **Note:** This call is asynchronous. It might take several seconds for the detachment to propagate.
 *
 * Requires permission to access the [DetachThingPrincipal](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DetachThingPrincipalCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DetachThingPrincipalCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DetachThingPrincipalRequest
 *   thingName: "STRING_VALUE", // required
 *   principal: "STRING_VALUE", // required
 * };
 * const command = new DetachThingPrincipalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachThingPrincipalCommandInput - {@link DetachThingPrincipalCommandInput}
 * @returns {@link DetachThingPrincipalCommandOutput}
 * @see {@link DetachThingPrincipalCommandInput} for command's `input` shape.
 * @see {@link DetachThingPrincipalCommandOutput} for command's `response` shape.
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
export class DetachThingPrincipalCommand extends command<DetachThingPrincipalCommandInput, DetachThingPrincipalCommandOutput>(
  _ep0,
  _mw0,
  "DetachThingPrincipal",
  DetachThingPrincipal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachThingPrincipalRequest;
      output: {};
    };
    sdk: {
      input: DetachThingPrincipalCommandInput;
      output: DetachThingPrincipalCommandOutput;
    };
  };
}
