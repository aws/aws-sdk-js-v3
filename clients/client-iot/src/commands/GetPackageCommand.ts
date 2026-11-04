// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPackageRequest, GetPackageResponse } from "../models/models_1";
import { GetPackage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPackageCommand}.
 */
export interface GetPackageCommandInput extends GetPackageRequest {}
/**
 * @public
 *
 * The output of {@link GetPackageCommand}.
 */
export interface GetPackageCommandOutput extends GetPackageResponse, __MetadataBearer {}

/**
 * Gets information about the specified software package.
 *
 * Requires permission to access the [GetPackage](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetPackageCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetPackageCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // GetPackageRequest
 *   packageName: "STRING_VALUE", // required
 * };
 * const command = new GetPackageCommand(input);
 * const response = await client.send(command);
 * // { // GetPackageResponse
 * //   packageName: "STRING_VALUE",
 * //   packageArn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   defaultVersionName: "STRING_VALUE",
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetPackageCommandInput - {@link GetPackageCommandInput}
 * @returns {@link GetPackageCommandOutput}
 * @see {@link GetPackageCommandInput} for command's `input` shape.
 * @see {@link GetPackageCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class GetPackageCommand extends command<GetPackageCommandInput, GetPackageCommandOutput>(
  _ep0,
  _mw0,
  "GetPackage",
  GetPackage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPackageRequest;
      output: GetPackageResponse;
    };
    sdk: {
      input: GetPackageCommandInput;
      output: GetPackageCommandOutput;
    };
  };
}
