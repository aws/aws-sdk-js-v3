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
import {
  UpdateUserProfileRequest,
  UpdateUserProfileRequestFilterSensitiveLog,
  UpdateUserProfileResult,
  UpdateUserProfileResultFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateUserProfileCommand, se_UpdateUserProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserProfileCommand}.
 */
export interface UpdateUserProfileCommandInput extends UpdateUserProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserProfileCommand}.
 */
export interface UpdateUserProfileCommandOutput extends UpdateUserProfileResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates a user's profile in AWS CodeStar. The user profile is not project-specific.
 *       Information in the user profile is displayed wherever the user's information appears to other
 *       users in AWS CodeStar. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, UpdateUserProfileCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, UpdateUserProfileCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // UpdateUserProfileRequest
 *   userArn: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   emailAddress: "STRING_VALUE",
 *   sshPublicKey: "STRING_VALUE",
 * };
 * const command = new UpdateUserProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserProfileResult
 * //   userArn: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   emailAddress: "STRING_VALUE",
 * //   sshPublicKey: "STRING_VALUE",
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateUserProfileCommandInput - {@link UpdateUserProfileCommandInput}
 * @returns {@link UpdateUserProfileCommandOutput}
 * @see {@link UpdateUserProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateUserProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link UserProfileNotFoundException} (client fault)
 *  <p>The user profile was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeStarServiceException}
 * <p>Base exception class for all service exceptions from CodeStar service.</p>
 *
 */
export class UpdateUserProfileCommand extends $Command<
  UpdateUserProfileCommandInput,
  UpdateUserProfileCommandOutput,
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
  constructor(readonly input: UpdateUserProfileCommandInput) {
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
  ): Handler<UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateUserProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "UpdateUserProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateUserProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateUserProfileResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeStar_20170419",
        operation: "UpdateUserProfile",
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
  private serialize(input: UpdateUserProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateUserProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUserProfileCommandOutput> {
    return de_UpdateUserProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
