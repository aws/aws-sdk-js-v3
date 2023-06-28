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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  CreateAccessKeyRequest,
  CreateAccessKeyResponse,
  CreateAccessKeyResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAccessKeyCommand, se_CreateAccessKeyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessKeyCommand}.
 */
export interface CreateAccessKeyCommandInput extends CreateAccessKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessKeyCommand}.
 */
export interface CreateAccessKeyCommandOutput extends CreateAccessKeyResponse, __MetadataBearer {}

/**
 * @public
 * <p> Creates a new Amazon Web Services secret access key and corresponding Amazon Web Services access key ID for the
 *             specified user. The default status for new keys is <code>Active</code>.</p>
 *          <p>If you do not specify a user name, IAM determines the user name implicitly based on
 *             the Amazon Web Services access key ID signing the request. This operation works for access keys under
 *             the Amazon Web Services account. Consequently, you can use this operation to manage Amazon Web Services account root
 *             user credentials. This is true even if the Amazon Web Services account has no associated users.</p>
 *          <p> For information about quotas on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS
 *                 quotas</a> in the <i>IAM User Guide</i>.</p>
 *          <important>
 *             <p>To ensure the security of your Amazon Web Services account, the secret access key is accessible
 *                 only during key and user creation. You must save the key (for example, in a text
 *                 file) if you want to be able to access it again. If a secret key is lost, you can
 *                 delete the access keys for the associated user and then create new keys.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateAccessKeyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateAccessKeyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // CreateAccessKeyRequest
 *   UserName: "STRING_VALUE",
 * };
 * const command = new CreateAccessKeyCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessKeyResponse
 * //   AccessKey: { // AccessKey
 * //     UserName: "STRING_VALUE", // required
 * //     AccessKeyId: "STRING_VALUE", // required
 * //     Status: "Active" || "Inactive", // required
 * //     SecretAccessKey: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAccessKeyCommandInput - {@link CreateAccessKeyCommandInput}
 * @returns {@link CreateAccessKeyCommandOutput}
 * @see {@link CreateAccessKeyCommandInput} for command's `input` shape.
 * @see {@link CreateAccessKeyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
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
 * @example To create an access key for an IAM user
 * ```javascript
 * // The following command creates an access key (access key ID and secret access key) for the IAM user named Bob.
 * const input = {
 *   "UserName": "Bob"
 * };
 * const command = new CreateAccessKeyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AccessKey": {
 *     "AccessKeyId": "AKIAIOSFODNN7EXAMPLE",
 *     "CreateDate": "2015-03-09T18:39:23.411Z",
 *     "SecretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYzEXAMPLEKEY",
 *     "Status": "Active",
 *     "UserName": "Bob"
 *   }
 * }
 * *\/
 * // example id: 1fbb3211-4cf2-41db-8c20-ba58d9f5802d
 * ```
 *
 */
export class CreateAccessKeyCommand extends $Command<
  CreateAccessKeyCommandInput,
  CreateAccessKeyCommandOutput,
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
  constructor(readonly input: CreateAccessKeyCommandInput) {
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
  ): Handler<CreateAccessKeyCommandInput, CreateAccessKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAccessKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateAccessKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateAccessKeyResponseFilterSensitiveLog,
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
  private serialize(input: CreateAccessKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAccessKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccessKeyCommandOutput> {
    return de_CreateAccessKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
