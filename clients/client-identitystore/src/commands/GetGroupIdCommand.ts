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
import { GetGroupIdRequest, GetGroupIdRequestFilterSensitiveLog, GetGroupIdResponse } from "../models/models_0";
import { de_GetGroupIdCommand, se_GetGroupIdCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetGroupIdCommand}.
 */
export interface GetGroupIdCommandInput extends GetGroupIdRequest {}
/**
 * @public
 *
 * The output of {@link GetGroupIdCommand}.
 */
export interface GetGroupIdCommandOutput extends GetGroupIdResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves <code>GroupId</code> in an identity store.</p>
 *          <note>
 *             <p>If you have administrator access to a member account, you can use this API from the member account.
 *          Read about <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html">member accounts</a> in the
 *          <i>Organizations User Guide</i>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IdentitystoreClient, GetGroupIdCommand } from "@aws-sdk/client-identitystore"; // ES Modules import
 * // const { IdentitystoreClient, GetGroupIdCommand } = require("@aws-sdk/client-identitystore"); // CommonJS import
 * const client = new IdentitystoreClient(config);
 * const input = { // GetGroupIdRequest
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
 * const command = new GetGroupIdCommand(input);
 * const response = await client.send(command);
 * // { // GetGroupIdResponse
 * //   GroupId: "STRING_VALUE", // required
 * //   IdentityStoreId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetGroupIdCommandInput - {@link GetGroupIdCommandInput}
 * @returns {@link GetGroupIdCommandOutput}
 * @see {@link GetGroupIdCommandInput} for command's `input` shape.
 * @see {@link GetGroupIdCommandOutput} for command's `response` shape.
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
export class GetGroupIdCommand extends $Command<
  GetGroupIdCommandInput,
  GetGroupIdCommandOutput,
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
  constructor(readonly input: GetGroupIdCommandInput) {
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
  ): Handler<GetGroupIdCommandInput, GetGroupIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetGroupIdCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IdentitystoreClient";
    const commandName = "GetGroupIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGroupIdRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityStore",
        operation: "GetGroupId",
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
  private serialize(input: GetGroupIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetGroupIdCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGroupIdCommandOutput> {
    return de_GetGroupIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
