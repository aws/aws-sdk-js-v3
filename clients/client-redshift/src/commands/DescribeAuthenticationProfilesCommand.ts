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

import { DescribeAuthenticationProfilesMessage, DescribeAuthenticationProfilesResult } from "../models/models_0";
import {
  de_DescribeAuthenticationProfilesCommand,
  se_DescribeAuthenticationProfilesCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAuthenticationProfilesCommand}.
 */
export interface DescribeAuthenticationProfilesCommandInput extends DescribeAuthenticationProfilesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeAuthenticationProfilesCommand}.
 */
export interface DescribeAuthenticationProfilesCommandOutput
  extends DescribeAuthenticationProfilesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes an authentication profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeAuthenticationProfilesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeAuthenticationProfilesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeAuthenticationProfilesMessage
 *   AuthenticationProfileName: "STRING_VALUE",
 * };
 * const command = new DescribeAuthenticationProfilesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAuthenticationProfilesResult
 * //   AuthenticationProfiles: [ // AuthenticationProfileList
 * //     { // AuthenticationProfile
 * //       AuthenticationProfileName: "STRING_VALUE",
 * //       AuthenticationProfileContent: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAuthenticationProfilesCommandInput - {@link DescribeAuthenticationProfilesCommandInput}
 * @returns {@link DescribeAuthenticationProfilesCommandOutput}
 * @see {@link DescribeAuthenticationProfilesCommandInput} for command's `input` shape.
 * @see {@link DescribeAuthenticationProfilesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AuthenticationProfileNotFoundFault} (client fault)
 *  <p>The authentication profile can't be found.</p>
 *
 * @throws {@link InvalidAuthenticationProfileRequestFault} (client fault)
 *  <p>The authentication profile request is not valid. The profile name can't be null or empty.
 *             The authentication profile API operation must be available in the Amazon Web Services Region.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeAuthenticationProfilesCommand extends $Command<
  DescribeAuthenticationProfilesCommandInput,
  DescribeAuthenticationProfilesCommandOutput,
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
  constructor(readonly input: DescribeAuthenticationProfilesCommandInput) {
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
  ): Handler<DescribeAuthenticationProfilesCommandInput, DescribeAuthenticationProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAuthenticationProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeAuthenticationProfilesCommand";
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
  private serialize(
    input: DescribeAuthenticationProfilesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeAuthenticationProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAuthenticationProfilesCommandOutput> {
    return de_DescribeAuthenticationProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
