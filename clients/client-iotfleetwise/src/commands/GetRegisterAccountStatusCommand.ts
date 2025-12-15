// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import type { GetRegisterAccountStatusRequest, GetRegisterAccountStatusResponse } from "../models/models_0";
import { GetRegisterAccountStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRegisterAccountStatusCommand}.
 */
export interface GetRegisterAccountStatusCommandInput extends GetRegisterAccountStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetRegisterAccountStatusCommand}.
 */
export interface GetRegisterAccountStatusCommandOutput extends GetRegisterAccountStatusResponse, __MetadataBearer {}

/**
 * <p> Retrieves information about the status of registering your Amazon Web Services account, IAM, and
 *             Amazon Timestream resources so that Amazon Web Services IoT FleetWise can transfer your vehicle data to the Amazon Web Services
 *             Cloud. </p>
 *          <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/setting-up.html">Setting up Amazon Web Services IoT FleetWise</a>. </p>
 *          <note>
 *             <p>This API operation doesn't require input parameters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, GetRegisterAccountStatusCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, GetRegisterAccountStatusCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = {};
 * const command = new GetRegisterAccountStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetRegisterAccountStatusResponse
 * //   customerAccountId: "STRING_VALUE", // required
 * //   accountStatus: "REGISTRATION_PENDING" || "REGISTRATION_SUCCESS" || "REGISTRATION_FAILURE", // required
 * //   timestreamRegistrationResponse: { // TimestreamRegistrationResponse
 * //     timestreamDatabaseName: "STRING_VALUE", // required
 * //     timestreamTableName: "STRING_VALUE", // required
 * //     timestreamDatabaseArn: "STRING_VALUE",
 * //     timestreamTableArn: "STRING_VALUE",
 * //     registrationStatus: "REGISTRATION_PENDING" || "REGISTRATION_SUCCESS" || "REGISTRATION_FAILURE", // required
 * //     errorMessage: "STRING_VALUE",
 * //   },
 * //   iamRegistrationResponse: { // IamRegistrationResponse
 * //     roleArn: "STRING_VALUE", // required
 * //     registrationStatus: "REGISTRATION_PENDING" || "REGISTRATION_SUCCESS" || "REGISTRATION_FAILURE", // required
 * //     errorMessage: "STRING_VALUE",
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModificationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetRegisterAccountStatusCommandInput - {@link GetRegisterAccountStatusCommandInput}
 * @returns {@link GetRegisterAccountStatusCommandOutput}
 * @see {@link GetRegisterAccountStatusCommandInput} for command's `input` shape.
 * @see {@link GetRegisterAccountStatusCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class GetRegisterAccountStatusCommand extends $Command
  .classBuilder<
    GetRegisterAccountStatusCommandInput,
    GetRegisterAccountStatusCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "GetRegisterAccountStatus", {})
  .n("IoTFleetWiseClient", "GetRegisterAccountStatusCommand")
  .sc(GetRegisterAccountStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetRegisterAccountStatusResponse;
    };
    sdk: {
      input: GetRegisterAccountStatusCommandInput;
      output: GetRegisterAccountStatusCommandOutput;
    };
  };
}
