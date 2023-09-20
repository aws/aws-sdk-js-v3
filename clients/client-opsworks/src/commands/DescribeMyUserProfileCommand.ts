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

import { DescribeMyUserProfileResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeMyUserProfileCommand, se_DescribeMyUserProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMyUserProfileCommand}.
 */
export interface DescribeMyUserProfileCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeMyUserProfileCommand}.
 */
export interface DescribeMyUserProfileCommandOutput extends DescribeMyUserProfileResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes a user's SSH information.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have self-management
 *       enabled or an attached policy that explicitly grants permissions. For more information about user
 *       permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeMyUserProfileCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeMyUserProfileCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = {};
 * const command = new DescribeMyUserProfileCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMyUserProfileResult
 * //   UserProfile: { // SelfUserProfile
 * //     IamUserArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     SshUsername: "STRING_VALUE",
 * //     SshPublicKey: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeMyUserProfileCommandInput - {@link DescribeMyUserProfileCommandInput}
 * @returns {@link DescribeMyUserProfileCommandOutput}
 * @see {@link DescribeMyUserProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeMyUserProfileCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 */
export class DescribeMyUserProfileCommand extends $Command<
  DescribeMyUserProfileCommandInput,
  DescribeMyUserProfileCommandOutput,
  OpsWorksClientResolvedConfig
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
  constructor(readonly input: DescribeMyUserProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMyUserProfileCommandInput, DescribeMyUserProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMyUserProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksClient";
    const commandName = "DescribeMyUserProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OpsWorks_20130218",
        operation: "DescribeMyUserProfile",
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
  private serialize(input: DescribeMyUserProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeMyUserProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMyUserProfileCommandOutput> {
    return de_DescribeMyUserProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
