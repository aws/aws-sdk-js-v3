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

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import {
  DescribeUserProfileRequest,
  DescribeUserProfileResult,
  DescribeUserProfileResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeUserProfileCommand, se_DescribeUserProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserProfileCommand}.
 */
export interface DescribeUserProfileCommandInput extends DescribeUserProfileRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserProfileCommand}.
 */
export interface DescribeUserProfileCommandOutput extends DescribeUserProfileResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes a user in AWS CodeStar and the user attributes across all projects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DescribeUserProfileCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DescribeUserProfileCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // DescribeUserProfileRequest
 *   userArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeUserProfileCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserProfileResult
 * //   userArn: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   emailAddress: "STRING_VALUE",
 * //   sshPublicKey: "STRING_VALUE",
 * //   createdTimestamp: new Date("TIMESTAMP"), // required
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeUserProfileCommandInput - {@link DescribeUserProfileCommandInput}
 * @returns {@link DescribeUserProfileCommandOutput}
 * @see {@link DescribeUserProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeUserProfileCommandOutput} for command's `response` shape.
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
export class DescribeUserProfileCommand extends $Command<
  DescribeUserProfileCommandInput,
  DescribeUserProfileCommandOutput,
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
  constructor(readonly input: DescribeUserProfileCommandInput) {
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
  ): Handler<DescribeUserProfileCommandInput, DescribeUserProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeUserProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "DescribeUserProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeUserProfileResultFilterSensitiveLog,
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
  private serialize(input: DescribeUserProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeUserProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUserProfileCommandOutput> {
    return de_DescribeUserProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
