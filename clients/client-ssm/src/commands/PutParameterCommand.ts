// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { PutParameterRequest, PutParameterRequestFilterSensitiveLog, PutParameterResult } from "../models/models_1";
import { de_PutParameterCommand, se_PutParameterCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Add a parameter to the system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
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
 *  <p>A hierarchy can have a maximum of 15 levels. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html">Requirements and
 *     constraints for parameter names</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 *
 * @throws {@link HierarchyTypeMismatchException} (client fault)
 *  <p>Parameter Store doesn't support changing a parameter type in a hierarchy. For example, you
 *    can't change a parameter from a <code>String</code> type to a <code>SecureString</code> type. You
 *    must create a new, unique parameter.</p>
 *
 * @throws {@link IncompatiblePolicyException} (client fault)
 *  <p>There is a conflict in the policies specified for this parameter. You can't, for example,
 *    specify two Expiration policies for a parameter. Review your policies, and try again.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidAllowedPatternException} (client fault)
 *  <p>The request doesn't meet the regular expression requirement.</p>
 *
 * @throws {@link InvalidKeyId} (client fault)
 *  <p>The query key ID isn't valid.</p>
 *
 * @throws {@link InvalidPolicyAttributeException} (client fault)
 *  <p>A policy attribute or its value is invalid. </p>
 *
 * @throws {@link InvalidPolicyTypeException} (client fault)
 *  <p>The policy type isn't supported. Parameter Store supports the following policy types:
 *    Expiration, ExpirationNotification, and NoChangeNotification.</p>
 *
 * @throws {@link ParameterAlreadyExists} (client fault)
 *  <p>The parameter already exists. You can't create duplicate parameters.</p>
 *
 * @throws {@link ParameterLimitExceeded} (client fault)
 *  <p>You have exceeded the number of parameters for this Amazon Web Services account. Delete one or more
 *    parameters and try again.</p>
 *
 * @throws {@link ParameterMaxVersionLimitExceeded} (client fault)
 *  <p>Parameter Store retains the 100 most recently created versions of a parameter. After this
 *    number of versions has been created, Parameter Store deletes the oldest version when a new one is
 *    created. However, if the oldest version has a <i>label</i> attached to it,
 *    Parameter Store won't delete the version and instead presents this error message:</p>
 *          <p>
 *             <code>An error occurred (ParameterMaxVersionLimitExceeded) when calling the PutParameter
 *     operation: You attempted to create a new version of <i>parameter-name</i> by
 *     calling the PutParameter API with the overwrite flag. Version
 *      <i>version-number</i>, the oldest version, can't be deleted because it has a
 *     label associated with it. Move the label to another version of the parameter, and try
 *     again.</code>
 *          </p>
 *          <p>This safeguard is to prevent parameter versions with mission critical labels assigned to
 *    them from being deleted. To continue creating new parameters, first move the label from the
 *    oldest version of the parameter to a newer one for use in your operations. For information about
 *    moving parameter labels, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html#sysman-paramstore-labels-console-move">Move a parameter label (console)</a> or <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-labels.html#sysman-paramstore-labels-cli-move">Move a parameter label (CLI)</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 *
 * @throws {@link ParameterPatternMismatchException} (client fault)
 *  <p>The parameter name isn't valid.</p>
 *
 * @throws {@link PoliciesLimitExceededException} (client fault)
 *  <p>You specified more than the maximum number of allowed policies for the parameter. The
 *    maximum is 10.</p>
 *
 * @throws {@link TooManyUpdates} (client fault)
 *  <p>There are concurrent updates for a resource that supports one update at a time.</p>
 *
 * @throws {@link UnsupportedParameterType} (client fault)
 *  <p>The parameter type isn't supported.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class PutParameterCommand extends $Command<
  PutParameterCommandInput,
  PutParameterCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: PutParameterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutParameterCommandInput, PutParameterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutParameterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "PutParameterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutParameterRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PutParameterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutParameterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutParameterCommandOutput> {
    return de_PutParameterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
