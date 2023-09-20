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

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { DeleteUserProfileRequest, DeleteUserProfileResult } from "../models/models_0";
import { de_DeleteUserProfileCommand, se_DeleteUserProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserProfileCommand}.
 */
export interface DeleteUserProfileCommandInput extends DeleteUserProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserProfileCommand}.
 */
export interface DeleteUserProfileCommandOutput extends DeleteUserProfileResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a user profile in AWS CodeStar, including all personal preference data associated with
 *       that profile, such as display name and email address. It does not delete the history of that
 *       user, for example the history of commits made by that user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DeleteUserProfileCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DeleteUserProfileCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // DeleteUserProfileRequest
 *   userArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserProfileCommand(input);
 * const response = await client.send(command);
 * // { // DeleteUserProfileResult
 * //   userArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteUserProfileCommandInput - {@link DeleteUserProfileCommandInput}
 * @returns {@link DeleteUserProfileCommandOutput}
 * @see {@link DeleteUserProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteUserProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeStarServiceException}
 * <p>Base exception class for all service exceptions from CodeStar service.</p>
 *
 */
export class DeleteUserProfileCommand extends $Command<
  DeleteUserProfileCommandInput,
  DeleteUserProfileCommandOutput,
  CodeStarClientResolvedConfig
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
  constructor(readonly input: DeleteUserProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteUserProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "DeleteUserProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeStar_20170419",
        operation: "DeleteUserProfile",
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
  private serialize(input: DeleteUserProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteUserProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteUserProfileCommandOutput> {
    return de_DeleteUserProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
