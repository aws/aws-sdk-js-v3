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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { CreateApiKeyRequest, CreateApiKeyResponse } from "../models/models_0";
import { de_CreateApiKeyCommand, se_CreateApiKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateApiKeyCommand}.
 */
export interface CreateApiKeyCommandInput extends CreateApiKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreateApiKeyCommand}.
 */
export interface CreateApiKeyCommandOutput extends CreateApiKeyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a unique key that you can distribute to clients who invoke your API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateApiKeyCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateApiKeyCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // CreateApiKeyRequest
 *   apiId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   expires: Number("long"),
 * };
 * const command = new CreateApiKeyCommand(input);
 * const response = await client.send(command);
 * // { // CreateApiKeyResponse
 * //   apiKey: { // ApiKey
 * //     id: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     expires: Number("long"),
 * //     deletes: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateApiKeyCommandInput - {@link CreateApiKeyCommandInput}
 * @returns {@link CreateApiKeyCommandOutput}
 * @see {@link CreateApiKeyCommandInput} for command's `input` shape.
 * @see {@link CreateApiKeyCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link ApiKeyLimitExceededException} (client fault)
 *  <p>The API key exceeded a limit. Try your request again.</p>
 *
 * @throws {@link ApiKeyValidityOutOfBoundsException} (client fault)
 *  <p>The API key expiration must be set to a value between 1 and 365 days from creation (for
 *             <code>CreateApiKey</code>) or from update (for <code>UpdateApiKey</code>).</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 */
export class CreateApiKeyCommand extends $Command<
  CreateApiKeyCommandInput,
  CreateApiKeyCommandOutput,
  AppSyncClientResolvedConfig
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
  constructor(readonly input: CreateApiKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateApiKeyCommandInput, CreateApiKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateApiKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "CreateApiKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepdishControlPlaneService",
        operation: "CreateApiKey",
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
  private serialize(input: CreateApiKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateApiKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateApiKeyCommandOutput> {
    return de_CreateApiKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
