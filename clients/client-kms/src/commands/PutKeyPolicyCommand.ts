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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { PutKeyPolicyRequest } from "../models/models_0";
import { de_PutKeyPolicyCommand, se_PutKeyPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutKeyPolicyCommand}.
 */
export interface PutKeyPolicyCommandInput extends PutKeyPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutKeyPolicyCommand}.
 */
export interface PutKeyPolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Attaches a key policy to the specified KMS key. </p>
 *          <p>For more information about key policies, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">Key Policies</a> in the <i>Key Management Service Developer Guide</i>.
 *       For help writing and formatting a JSON policy document, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html">IAM JSON Policy Reference</a> in the <i>
 *                <i>Identity and Access Management User Guide</i>
 *             </i>. For examples of adding a key policy in multiple programming languages,
 *       see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-key-policies.html#put-policy">Setting a key policy</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:PutKeyPolicy</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>GetKeyPolicy</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, PutKeyPolicyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, PutKeyPolicyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // PutKeyPolicyRequest
 *   KeyId: "STRING_VALUE", // required
 *   PolicyName: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 *   BypassPolicyLockoutSafetyCheck: true || false,
 * };
 * const command = new PutKeyPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutKeyPolicyCommandInput - {@link PutKeyPolicyCommandInput}
 * @returns {@link PutKeyPolicyCommandOutput}
 * @see {@link PutKeyPolicyCommandInput} for command's `input` shape.
 * @see {@link PutKeyPolicyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource is not valid for this
 *       request.</p>
 *          <p>This exceptions means one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The key state of the KMS key is not compatible with the operation. </p>
 *                <p>To find the key state, use the <a>DescribeKey</a> operation. For more
 *           information about which key states are compatible with each KMS operation, see
 *           <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For cryptographic operations on KMS keys in custom key stores, this exception
 *           represents a general failure with many possible causes. To identify the cause, see the
 *           error message that accompanies the exception.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because a quota was exceeded. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Quotas</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *
 * @throws {@link MalformedPolicyDocumentException} (client fault)
 *  <p>The request was rejected because the specified policy is not syntactically or semantically
 *       correct.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified
 *       resource is not valid for this operation.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To attach a key policy to a KMS key
 * ```javascript
 * // The following example attaches a key policy to the specified KMS key.
 * const input = {
 *   "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "Policy": "{\n    \"Version\": \"2012-10-17\",\n    \"Id\": \"custom-policy-2016-12-07\",\n    \"Statement\": [\n        {\n            \"Sid\": \"Enable IAM User Permissions\",\n            \"Effect\": \"Allow\",\n            \"Principal\": {\n                \"AWS\": \"arn:aws:iam::111122223333:root\"\n            },\n            \"Action\": \"kms:*\",\n            \"Resource\": \"*\"\n        },\n        {\n            \"Sid\": \"Allow access for Key Administrators\",\n            \"Effect\": \"Allow\",\n            \"Principal\": {\n                \"AWS\": [\n                    \"arn:aws:iam::111122223333:user/ExampleAdminUser\",\n                    \"arn:aws:iam::111122223333:role/ExampleAdminRole\"\n                ]\n            },\n            \"Action\": [\n                \"kms:Create*\",\n                \"kms:Describe*\",\n                \"kms:Enable*\",\n                \"kms:List*\",\n                \"kms:Put*\",\n                \"kms:Update*\",\n                \"kms:Revoke*\",\n                \"kms:Disable*\",\n                \"kms:Get*\",\n                \"kms:Delete*\",\n                \"kms:ScheduleKeyDeletion\",\n                \"kms:CancelKeyDeletion\"\n            ],\n            \"Resource\": \"*\"\n        },\n        {\n            \"Sid\": \"Allow use of the key\",\n            \"Effect\": \"Allow\",\n            \"Principal\": {\n                \"AWS\": \"arn:aws:iam::111122223333:role/ExamplePowerUserRole\"\n            },\n            \"Action\": [\n                \"kms:Encrypt\",\n                \"kms:Decrypt\",\n                \"kms:ReEncrypt*\",\n                \"kms:GenerateDataKey*\",\n                \"kms:DescribeKey\"\n            ],\n            \"Resource\": \"*\"\n        },\n        {\n            \"Sid\": \"Allow attachment of persistent resources\",\n            \"Effect\": \"Allow\",\n            \"Principal\": {\n                \"AWS\": \"arn:aws:iam::111122223333:role/ExamplePowerUserRole\"\n            },\n            \"Action\": [\n                \"kms:CreateGrant\",\n                \"kms:ListGrants\",\n                \"kms:RevokeGrant\"\n            ],\n            \"Resource\": \"*\",\n            \"Condition\": {\n                \"Bool\": {\n                    \"kms:GrantIsForAWSResource\": \"true\"\n                }\n            }\n        }\n    ]\n}\n",
 *   "PolicyName": "default"
 * };
 * const command = new PutKeyPolicyCommand(input);
 * await client.send(command);
 * // example id: to-attach-a-key-policy-to-a-cmk-1481147345018
 * ```
 *
 */
export class PutKeyPolicyCommand extends $Command<
  PutKeyPolicyCommandInput,
  PutKeyPolicyCommandOutput,
  KMSClientResolvedConfig
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
  constructor(readonly input: PutKeyPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutKeyPolicyCommandInput, PutKeyPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutKeyPolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "PutKeyPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrentService",
        operation: "PutKeyPolicy",
      },
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
  private serialize(input: PutKeyPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutKeyPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutKeyPolicyCommandOutput> {
    return de_PutKeyPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
