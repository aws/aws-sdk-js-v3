// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  DescribeAppInstanceAdminRequest,
  DescribeAppInstanceAdminResponse,
  DescribeAppInstanceAdminResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeAppInstanceAdminCommand, se_DescribeAppInstanceAdminCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DescribeAppInstanceAdminCommand}.
 */
export interface DescribeAppInstanceAdminCommandInput extends DescribeAppInstanceAdminRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppInstanceAdminCommand}.
 */
export interface DescribeAppInstanceAdminCommandOutput extends DescribeAppInstanceAdminResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the full details of an <code>AppInstanceAdmin</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DescribeAppInstanceAdminCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DescribeAppInstanceAdminCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // DescribeAppInstanceAdminRequest
 *   AppInstanceAdminArn: "STRING_VALUE", // required
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppInstanceAdminCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppInstanceAdminResponse
 * //   AppInstanceAdmin: { // AppInstanceAdmin
 * //     Admin: { // Identity
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //     AppInstanceArn: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppInstanceAdminCommandInput - {@link DescribeAppInstanceAdminCommandInput}
 * @returns {@link DescribeAppInstanceAdminCommandOutput}
 * @see {@link DescribeAppInstanceAdminCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceAdminCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 */
export class DescribeAppInstanceAdminCommand extends $Command<
  DescribeAppInstanceAdminCommandInput,
  DescribeAppInstanceAdminCommandOutput,
  ChimeClientResolvedConfig
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
  constructor(readonly input: DescribeAppInstanceAdminCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAppInstanceAdminCommandInput, DescribeAppInstanceAdminCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAppInstanceAdminCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DescribeAppInstanceAdminCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeAppInstanceAdminResponseFilterSensitiveLog,
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
  private serialize(input: DescribeAppInstanceAdminCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAppInstanceAdminCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAppInstanceAdminCommandOutput> {
    return de_DescribeAppInstanceAdminCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
