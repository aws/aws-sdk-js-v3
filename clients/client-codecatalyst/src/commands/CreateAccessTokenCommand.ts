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

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import {
  CreateAccessTokenRequest,
  CreateAccessTokenResponse,
  CreateAccessTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAccessTokenCommand, se_CreateAccessTokenCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessTokenCommand}.
 */
export interface CreateAccessTokenCommandInput extends CreateAccessTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessTokenCommand}.
 */
export interface CreateAccessTokenCommandOutput extends CreateAccessTokenResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password.
 *       It is associated with your user identity for use across all spaces and projects in Amazon CodeCatalyst. You use PATs to access CodeCatalyst
 *       from resources that include integrated development environments (IDEs) and Git-based source repositories.
 *       PATs represent you in Amazon CodeCatalyst and you can manage them in your user settings.For more information, see
 *       <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-tokens-keys.html">Managing personal access tokens in Amazon CodeCatalyst</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, CreateAccessTokenCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, CreateAccessTokenCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const input = { // CreateAccessTokenRequest
 *   name: "STRING_VALUE", // required
 *   expiresTime: new Date("TIMESTAMP"),
 * };
 * const command = new CreateAccessTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessTokenResponse
 * //   secret: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   expiresTime: new Date("TIMESTAMP"), // required
 * //   accessTokenId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAccessTokenCommandInput - {@link CreateAccessTokenCommandInput}
 * @returns {@link CreateAccessTokenCommandOutput}
 * @see {@link CreateAccessTokenCommandInput} for command's `input` shape.
 * @see {@link CreateAccessTokenCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 * @throws {@link CodeCatalystServiceException}
 * <p>Base exception class for all service exceptions from CodeCatalyst service.</p>
 *
 */
export class CreateAccessTokenCommand extends $Command<
  CreateAccessTokenCommandInput,
  CreateAccessTokenCommandOutput,
  CodeCatalystClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateAccessTokenCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCatalystClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccessTokenCommandInput, CreateAccessTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAccessTokenCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "CreateAccessTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateAccessTokenResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeCatalyst",
        operation: "CreateAccessToken",
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
  private serialize(input: CreateAccessTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAccessTokenCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccessTokenCommandOutput> {
    return de_CreateAccessTokenCommand(output, context);
  }
}
