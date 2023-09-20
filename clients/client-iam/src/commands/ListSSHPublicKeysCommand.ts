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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListSSHPublicKeysRequest, ListSSHPublicKeysResponse } from "../models/models_0";
import { de_ListSSHPublicKeysCommand, se_ListSSHPublicKeysCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSSHPublicKeysCommand}.
 */
export interface ListSSHPublicKeysCommandInput extends ListSSHPublicKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListSSHPublicKeysCommand}.
 */
export interface ListSSHPublicKeysCommandOutput extends ListSSHPublicKeysResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the SSH public keys associated with the specified IAM
 *             user. If none exists, the operation returns an empty list.</p>
 *          <p>The SSH public keys returned by this operation are used only for authenticating the
 *             IAM user to an CodeCommit repository. For more information about using SSH keys to
 *             authenticate to an CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up CodeCommit for
 *                 SSH connections</a> in the <i>CodeCommit User Guide</i>.</p>
 *          <p>Although each user is limited to a small number of keys, you can still paginate the
 *             results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListSSHPublicKeysCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListSSHPublicKeysCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListSSHPublicKeysRequest
 *   UserName: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListSSHPublicKeysCommand(input);
 * const response = await client.send(command);
 * // { // ListSSHPublicKeysResponse
 * //   SSHPublicKeys: [ // SSHPublicKeyListType
 * //     { // SSHPublicKeyMetadata
 * //       UserName: "STRING_VALUE", // required
 * //       SSHPublicKeyId: "STRING_VALUE", // required
 * //       Status: "Active" || "Inactive", // required
 * //       UploadDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSSHPublicKeysCommandInput - {@link ListSSHPublicKeysCommandInput}
 * @returns {@link ListSSHPublicKeysCommandOutput}
 * @see {@link ListSSHPublicKeysCommandInput} for command's `input` shape.
 * @see {@link ListSSHPublicKeysCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 */
export class ListSSHPublicKeysCommand extends $Command<
  ListSSHPublicKeysCommandInput,
  ListSSHPublicKeysCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: ListSSHPublicKeysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSSHPublicKeysCommandInput, ListSSHPublicKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSSHPublicKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListSSHPublicKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "ListSSHPublicKeys",
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
  private serialize(input: ListSSHPublicKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSSHPublicKeysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSSHPublicKeysCommandOutput> {
    return de_ListSSHPublicKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
