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

import { CreateAuthenticationProfileMessage, CreateAuthenticationProfileResult } from "../models/models_0";
import { de_CreateAuthenticationProfileCommand, se_CreateAuthenticationProfileCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAuthenticationProfileCommand}.
 */
export interface CreateAuthenticationProfileCommandInput extends CreateAuthenticationProfileMessage {}
/**
 * @public
 *
 * The output of {@link CreateAuthenticationProfileCommand}.
 */
export interface CreateAuthenticationProfileCommandOutput extends CreateAuthenticationProfileResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates an authentication profile with the specified parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateAuthenticationProfileCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateAuthenticationProfileCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // CreateAuthenticationProfileMessage
 *   AuthenticationProfileName: "STRING_VALUE", // required
 *   AuthenticationProfileContent: "STRING_VALUE", // required
 * };
 * const command = new CreateAuthenticationProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateAuthenticationProfileResult
 * //   AuthenticationProfileName: "STRING_VALUE",
 * //   AuthenticationProfileContent: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAuthenticationProfileCommandInput - {@link CreateAuthenticationProfileCommandInput}
 * @returns {@link CreateAuthenticationProfileCommandOutput}
 * @see {@link CreateAuthenticationProfileCommandInput} for command's `input` shape.
 * @see {@link CreateAuthenticationProfileCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AuthenticationProfileAlreadyExistsFault} (client fault)
 *  <p>The authentication profile already exists.</p>
 *
 * @throws {@link AuthenticationProfileQuotaExceededFault} (client fault)
 *  <p>The size or number of authentication profiles has exceeded the quota.
 *             The maximum length of the JSON string and maximum number of authentication profiles is determined by a quota for your account.</p>
 *
 * @throws {@link InvalidAuthenticationProfileRequestFault} (client fault)
 *  <p>The authentication profile request is not valid. The profile name can't be null or empty.
 *             The authentication profile API operation must be available in the Amazon Web Services Region.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class CreateAuthenticationProfileCommand extends $Command<
  CreateAuthenticationProfileCommandInput,
  CreateAuthenticationProfileCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: CreateAuthenticationProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAuthenticationProfileCommandInput, CreateAuthenticationProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAuthenticationProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "CreateAuthenticationProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: CreateAuthenticationProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAuthenticationProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAuthenticationProfileCommandOutput> {
    return de_CreateAuthenticationProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
