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

import { IdentitystoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IdentitystoreClient";
import { GetUserIdRequest, GetUserIdRequestFilterSensitiveLog, GetUserIdResponse } from "../models/models_0";
import { de_GetUserIdCommand, se_GetUserIdCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetUserIdCommand}.
 */
export interface GetUserIdCommandInput extends GetUserIdRequest {}
/**
 * @public
 *
 * The output of {@link GetUserIdCommand}.
 */
export interface GetUserIdCommandOutput extends GetUserIdResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the <code>UserId</code> in an identity store.</p>
 *          <note>
 *             <p>If you have administrator access to a member account, you can use this API from the member account.
 *          Read about <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html">member accounts</a> in the
 *          <i>Organizations User Guide</i>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, GetUserIdCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, GetUserIdCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const input = { // GetUserIdRequest
 *   IdentityStoreId: "STRING_VALUE", // required
 *   AlternateIdentifier: { // AlternateIdentifier Union: only one key present
 *     ExternalId: { // ExternalId
 *       Issuer: "STRING_VALUE", // required
 *       Id: "STRING_VALUE", // required
 *     },
 *     UniqueAttribute: { // UniqueAttribute
 *       AttributePath: "STRING_VALUE", // required
 *       AttributeValue: "DOCUMENT_VALUE", // required
 *     },
 *   },
 * };
 * const command = new GetUserIdCommand(input);
 * const response = await client.send(command);
 * // { // GetUserIdResponse
 * //   UserId: "STRING_VALUE", // required
 * //   IdentityStoreId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetUserIdCommandInput - {@link GetUserIdCommandInput}
 * @returns {@link GetUserIdCommandOutput}
 * @see {@link GetUserIdCommandInput} for command's `input` shape.
 * @see {@link GetUserIdCommandOutput} for command's `response` shape.
 * @see {@link IdentitystoreClientResolvedConfig | config} for IdentitystoreClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link IdentitystoreServiceException}
 * <p>Base exception class for all service exceptions from Identitystore service.</p>
 *
 */
export class GetUserIdCommand extends $Command<
  GetUserIdCommandInput,
  GetUserIdCommandOutput,
  IdentitystoreClientResolvedConfig
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
  constructor(readonly input: GetUserIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IdentitystoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUserIdCommandInput, GetUserIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetUserIdCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentitystoreClient";
    const commandName = "GetUserIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUserIdRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityStore",
        operation: "GetUserId",
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
  private serialize(input: GetUserIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetUserIdCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUserIdCommandOutput> {
    return de_GetUserIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
