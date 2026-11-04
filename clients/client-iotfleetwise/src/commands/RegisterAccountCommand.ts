// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterAccountRequest, RegisterAccountResponse } from "../models/models_0";
import { RegisterAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterAccountCommand}.
 */
export interface RegisterAccountCommandInput extends RegisterAccountRequest {}
/**
 * @public
 *
 * The output of {@link RegisterAccountCommand}.
 */
export interface RegisterAccountCommandOutput extends RegisterAccountResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This API operation contains deprecated parameters. Register your account again without the Timestream resources parameter so that Amazon Web Services IoT FleetWise can remove the Timestream metadata stored. You should then pass the data destination into the [CreateCampaign](https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_CreateCampaign.html) API operation.
 * >
 * > You must delete any existing campaigns that include an empty data destination before you register your account again. For more information, see the [DeleteCampaign](https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_DeleteCampaign.html) API operation.
 * >
 * > If you want to delete the Timestream inline policy from the service-linked role, such as to mitigate an overly permissive policy, you must first delete any existing campaigns. Then delete the service-linked role and register your account again to enable CloudWatch metrics. For more information, see [DeleteServiceLinkedRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeleteServiceLinkedRole.html) in the *Identity and Access Management API Reference*.
 *
 * Registers your Amazon Web Services account, IAM, and Amazon Timestream resources so Amazon Web Services IoT FleetWise can transfer your vehicle data to the Amazon Web Services Cloud. For more information, including step-by-step procedures, see [Setting up Amazon Web Services IoT FleetWise](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/setting-up.html).
 *
 * > **Note:** An Amazon Web Services account is **not** the same thing as a "user." An [Amazon Web Services user](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_identity-management.html#intro-identity-users) is an identity that you create using Identity and Access Management (IAM) and takes the form of either an [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html) or an [IAM role, both with credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html). A single Amazon Web Services account can, and typically does, contain many users and roles.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, RegisterAccountCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, RegisterAccountCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // RegisterAccountRequest
 *   timestreamResources: { // TimestreamResources
 *     timestreamDatabaseName: "STRING_VALUE", // required
 *     timestreamTableName: "STRING_VALUE", // required
 *   },
 *   iamResources: { // IamResources
 *     roleArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new RegisterAccountCommand(input);
 * const response = await client.send(command);
 * // { // RegisterAccountResponse
 * //   registerAccountStatus: "REGISTRATION_PENDING" || "REGISTRATION_SUCCESS" || "REGISTRATION_FAILURE", // required
 * //   timestreamResources: { // TimestreamResources
 * //     timestreamDatabaseName: "STRING_VALUE", // required
 * //     timestreamTableName: "STRING_VALUE", // required
 * //   },
 * //   iamResources: { // IamResources
 * //     roleArn: "STRING_VALUE", // required
 * //   },
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModificationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param RegisterAccountCommandInput - {@link RegisterAccountCommandInput}
 * @returns {@link RegisterAccountCommandOutput}
 * @see {@link RegisterAccountCommandInput} for command's `input` shape.
 * @see {@link RegisterAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class RegisterAccountCommand extends command<RegisterAccountCommandInput, RegisterAccountCommandOutput>(
  _ep0,
  _mw0,
  "RegisterAccount",
  RegisterAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterAccountRequest;
      output: RegisterAccountResponse;
    };
    sdk: {
      input: RegisterAccountCommandInput;
      output: RegisterAccountCommandOutput;
    };
  };
}
