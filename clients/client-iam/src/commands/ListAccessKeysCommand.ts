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
import { ListAccessKeysRequest, ListAccessKeysResponse } from "../models/models_0";
import { de_ListAccessKeysCommand, se_ListAccessKeysCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAccessKeysCommand}.
 */
export interface ListAccessKeysCommandInput extends ListAccessKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessKeysCommand}.
 */
export interface ListAccessKeysCommandOutput extends ListAccessKeysResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the access key IDs associated with the specified IAM user.
 *             If there is none, the operation returns an empty list.</p>
 *          <p>Although each user is limited to a small number of keys, you can still paginate the
 *             results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 *          <p>If the <code>UserName</code> is not specified, the user name is determined implicitly
 *             based on the Amazon Web Services access key ID used to sign the request. If a temporary access key is
 *             used, then <code>UserName</code> is required. If a long-term key is assigned to the
 *             user, then <code>UserName</code> is not required. This operation works for access keys
 *             under the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root user
 *             credentials even if the Amazon Web Services account has no associated users.</p>
 *          <note>
 *             <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible
 *                 only during key and user creation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAccessKeysCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAccessKeysCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListAccessKeysRequest
 *   UserName: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListAccessKeysCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessKeysResponse
 * //   AccessKeyMetadata: [ // accessKeyMetadataListType // required
 * //     { // AccessKeyMetadata
 * //       UserName: "STRING_VALUE",
 * //       AccessKeyId: "STRING_VALUE",
 * //       Status: "Active" || "Inactive",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccessKeysCommandInput - {@link ListAccessKeysCommandInput}
 * @returns {@link ListAccessKeysCommandOutput}
 * @see {@link ListAccessKeysCommandInput} for command's `input` shape.
 * @see {@link ListAccessKeysCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To list the access key IDs for an IAM user
 * ```javascript
 * // The following command lists the access keys IDs for the IAM user named Alice.
 * const input = {
 *   "UserName": "Alice"
 * };
 * const command = new ListAccessKeysCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AccessKeyMetadata": [
 *     {
 *       "AccessKeyId": "AKIA111111111EXAMPLE",
 *       "CreateDate": "2016-12-01T22:19:58Z",
 *       "Status": "Active",
 *       "UserName": "Alice"
 *     },
 *     {
 *       "AccessKeyId": "AKIA222222222EXAMPLE",
 *       "CreateDate": "2016-12-01T22:20:01Z",
 *       "Status": "Active",
 *       "UserName": "Alice"
 *     }
 *   ]
 * }
 * *\/
 * // example id: 15571463-ebea-411a-a021-1c76bd2a3625
 * ```
 *
 */
export class ListAccessKeysCommand extends $Command<
  ListAccessKeysCommandInput,
  ListAccessKeysCommandOutput,
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
  constructor(readonly input: ListAccessKeysCommandInput) {
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
  ): Handler<ListAccessKeysCommandInput, ListAccessKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAccessKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListAccessKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "ListAccessKeys",
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
  private serialize(input: ListAccessKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAccessKeysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccessKeysCommandOutput> {
    return de_ListAccessKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
