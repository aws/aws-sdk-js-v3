// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutParameterRequest, PutParameterResult } from "../models/models_1";
import { PutParameter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutParameterCommand}.
 */
export interface PutParameterCommandInput extends PutParameterRequest {}
/**
 * @public
 *
 * The output of {@link PutParameterCommand}.
 */
export interface PutParameterCommandOutput extends PutParameterResult, __MetadataBearer {}

/**
 * Create or update a parameter in Parameter Store.
 *
 * > **Note:**
 * >
 * > Parameter Store throughput defines the number of API transactions per second (TPS) that Systems Manager can process. This applies to `GetParameter`, `GetParameters`, and `PutParameter` API calls for your Amazon Web Services account and Amazon Web Services Region. By default, Parameter Store is configured with a standard throughput quota suitable for low- to moderate-volume workloads. Applications that retrieve configuration data infrequently or operate at smaller scale can use this default setting without additional cost.
 * >
 * > For higher-volume workloads, you can enable higher throughput. This increases the maximum number of supported transactions per second for your account and Region. Increased throughput supports applications and workloads that need concurrent access to multiple parameters. If you experience `ThrottlingException: Rate exceeded` errors, enable higher throughput. For more information, see [Changing Parameter Store throughput](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-throughput.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // PutParameterRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Value: "STRING_VALUE", // required
 *   Type: "String" || "StringList" || "SecureString",
 *   KeyId: "STRING_VALUE",
 *   Overwrite: true || false,
 *   AllowedPattern: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Tier: "Standard" || "Advanced" || "Intelligent-Tiering",
 *   Policies: "STRING_VALUE",
 *   DataType: "STRING_VALUE",
 * };
 * const command = new PutParameterCommand(input);
 * const response = await client.send(command);
 * // { // PutParameterResult
 * //   Version: Number("long"),
 * //   Tier: "Standard" || "Advanced" || "Intelligent-Tiering",
 * // };
 *
 * ```
 *
 * @param PutParameterCommandInput - {@link PutParameterCommandInput}
 * @returns {@link PutParameterCommandOutput}
 * @see {@link PutParameterCommandInput} for command's `input` shape.
 * @see {@link PutParameterCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link HierarchyLevelLimitExceededException} (client fault)
 *
 * A hierarchy can have a maximum of 15 levels. For more information, see [Requirements and constraints for parameter names](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html) in the *Amazon Web Services Systems Manager User Guide*.
 *
 * @throws {@link HierarchyTypeMismatchException} (client fault)
 *
 * Parameter Store doesn't support changing a parameter type in a hierarchy. For example, you can't change a parameter from a `String` type to a `SecureString` type. You must create a new, unique parameter.
 *
 * @throws {@link IncompatiblePolicyException} (client fault)
 *
 * There is a conflict in the policies specified for this parameter. You can't, for example, specify two Expiration policies for a parameter. Review your policies, and try again.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidAllowedPatternException} (client fault)
 *
 * The request doesn't meet the regular expression requirement.
 *
 * @throws {@link InvalidKeyId} (client fault)
 *
 * The query key ID isn't valid.
 *
 * @throws {@link InvalidPolicyAttributeException} (client fault)
 *
 * A policy attribute or its value is invalid.
 *
 * @throws {@link InvalidPolicyTypeException} (client fault)
 *
 * The policy type isn't supported. Parameter Store supports the following policy types: Expiration, ExpirationNotification, and NoChangeNotification.
 *
 * @throws {@link ParameterAlreadyExists} (client fault)
 *
 * The parameter already exists. You can't create duplicate parameters.
 *
 * @throws {@link ParameterLimitExceeded} (client fault)
 *
 * You have exceeded the number of parameters for this Amazon Web Services account. Delete one or more parameters and try again.
 *
 * @throws {@link ParameterMaxVersionLimitExceeded} (client fault)
 *
 * Parameter Store retains the 100 most recently created versions of a parameter. After this number of versions has been created, Parameter Store deletes the oldest version when a new one is created. However, if the oldest version has a *label* attached to it, Parameter Store won't delete the version and instead presents this error message:
 *
 * `An error occurred (ParameterMaxVersionLimitExceeded) when calling the PutParameter operation: You attempted to create a new version of parameter-name by calling the PutParameter API with the overwrite flag. Version version-number, the oldest version, can't be deleted because it has a label associated with it. Move the label to another version of the parameter, and try again.`
 *
 * This safeguard is to prevent parameter versions with mission critical labels assigned to them from being deleted. To continue creating new parameters, first move the label from the oldest version of the parameter to a newer one for use in your operations. For information about moving parameter labels, see [Move a parameter label (console)](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html#sysman-paramstore-labels-console-move) or [Move a parameter label (CLI)](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html#sysman-paramstore-labels-cli-move) in the *Amazon Web Services Systems Manager User Guide*.
 *
 * @throws {@link ParameterPatternMismatchException} (client fault)
 *
 * The parameter name isn't valid.
 *
 * @throws {@link PoliciesLimitExceededException} (client fault)
 *
 * You specified more than the maximum number of allowed policies for the parameter. The maximum is 10.
 *
 * @throws {@link TooManyUpdates} (client fault)
 *
 * There are concurrent updates for a resource that supports one update at a time.
 *
 * @throws {@link UnsupportedParameterType} (client fault)
 *
 * The parameter type isn't supported.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class PutParameterCommand extends command<PutParameterCommandInput, PutParameterCommandOutput>(
  _ep0,
  _mw0,
  "PutParameter",
  PutParameter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutParameterRequest;
      output: PutParameterResult;
    };
    sdk: {
      input: PutParameterCommandInput;
      output: PutParameterCommandOutput;
    };
  };
}
