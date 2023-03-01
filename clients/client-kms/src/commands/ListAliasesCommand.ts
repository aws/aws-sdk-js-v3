// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  ListAliasesRequest,
  ListAliasesRequestFilterSensitiveLog,
  ListAliasesResponse,
  ListAliasesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAliasesCommand,
  serializeAws_json1_1ListAliasesCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link ListAliasesCommand}.
 */
export interface ListAliasesCommandInput extends ListAliasesRequest {}
/**
 * The output of {@link ListAliasesCommand}.
 */
export interface ListAliasesCommandOutput extends ListAliasesResponse, __MetadataBearer {}

/**
 * <p>Gets a list of aliases in the caller's Amazon Web Services account and region. For more information
 *       about aliases, see <a>CreateAlias</a>.</p>
 *          <p>By default, the <code>ListAliases</code> operation returns all aliases in the account and
 *       region. To get only the aliases associated with a particular KMS key, use the
 *         <code>KeyId</code> parameter.</p>
 *          <p>The <code>ListAliases</code> response can include aliases that you created and associated
 *       with your customer managed keys, and aliases that Amazon Web Services created and associated with Amazon Web Services
 *       managed keys in your account. You can recognize Amazon Web Services aliases because their names have the
 *       format <code>aws/<service-name></code>, such as <code>aws/dynamodb</code>.</p>
 *          <p>The response might also include aliases that have no <code>TargetKeyId</code> field. These
 *       are predefined aliases that Amazon Web Services has created but has not yet associated with a KMS key.
 *       Aliases that Amazon Web Services creates in your account, including predefined aliases, do not count against
 *       your <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#aliases-limit">KMS aliases
 *         quota</a>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. <code>ListAliases</code> does not
 *       return aliases in other Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListAliases</a> (IAM policy)</p>
 *          <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateAlias</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListAliasesCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListAliasesCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ListAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAliasesCommandInput} for command's `input` shape.
 * @see {@link ListAliasesCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 *
 * @example To list aliases
 * ```javascript
 * // The following example lists aliases.
 * const input = undefined;
 * const command = new ListAliasesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Aliases": [
 *     {
 *       "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/acm",
 *       "AliasName": "alias/aws/acm",
 *       "TargetKeyId": "da03f6f7-d279-427a-9cae-de48d07e5b66"
 *     },
 *     {
 *       "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/ebs",
 *       "AliasName": "alias/aws/ebs",
 *       "TargetKeyId": "25a217e7-7170-4b8c-8bf6-045ea5f70e5b"
 *     },
 *     {
 *       "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/rds",
 *       "AliasName": "alias/aws/rds",
 *       "TargetKeyId": "7ec3104e-c3f2-4b5c-bf42-bfc4772c6685"
 *     },
 *     {
 *       "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/redshift",
 *       "AliasName": "alias/aws/redshift",
 *       "TargetKeyId": "08f7a25a-69e2-4fb5-8f10-393db27326fa"
 *     },
 *     {
 *       "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/aws/s3",
 *       "AliasName": "alias/aws/s3",
 *       "TargetKeyId": "d2b0f1a3-580d-4f79-b836-bc983be8cfa5"
 *     },
 *     {
 *       "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/example1",
 *       "AliasName": "alias/example1",
 *       "TargetKeyId": "4da1e216-62d0-46c5-a7c0-5f3a3d2f8046"
 *     },
 *     {
 *       "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/example2",
 *       "AliasName": "alias/example2",
 *       "TargetKeyId": "f32fef59-2cc2-445b-8573-2d73328acbee"
 *     },
 *     {
 *       "AliasArn": "arn:aws:kms:us-east-2:111122223333:alias/example3",
 *       "AliasName": "alias/example3",
 *       "TargetKeyId": "1374ef38-d34e-4d5f-b2c9-4e0daee38855"
 *     }
 *   ],
 *   "Truncated": false
 * }
 * *\/
 * ```
 *
 */
export class ListAliasesCommand extends $Command<
  ListAliasesCommandInput,
  ListAliasesCommandOutput,
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

  constructor(readonly input: ListAliasesCommandInput) {
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
  ): Handler<ListAliasesCommandInput, ListAliasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListAliasesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ListAliasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAliasesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAliasesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAliasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAliasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAliasesCommandOutput> {
    return deserializeAws_json1_1ListAliasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
