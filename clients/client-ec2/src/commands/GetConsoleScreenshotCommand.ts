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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetConsoleScreenshotRequest, GetConsoleScreenshotResult } from "../models/models_5";
import { de_GetConsoleScreenshotCommand, se_GetConsoleScreenshotCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConsoleScreenshotCommand}.
 */
export interface GetConsoleScreenshotCommandInput extends GetConsoleScreenshotRequest {}
/**
 * @public
 *
 * The output of {@link GetConsoleScreenshotCommand}.
 */
export interface GetConsoleScreenshotCommandOutput extends GetConsoleScreenshotResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieve a JPG-format screenshot of a running instance to help with
 *             troubleshooting.</p>
 *          <p>The returned content is Base64-encoded.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetConsoleScreenshotCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetConsoleScreenshotCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetConsoleScreenshotRequest
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   WakeUp: true || false,
 * };
 * const command = new GetConsoleScreenshotCommand(input);
 * const response = await client.send(command);
 * // { // GetConsoleScreenshotResult
 * //   ImageData: "STRING_VALUE",
 * //   InstanceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConsoleScreenshotCommandInput - {@link GetConsoleScreenshotCommandInput}
 * @returns {@link GetConsoleScreenshotCommandOutput}
 * @see {@link GetConsoleScreenshotCommandInput} for command's `input` shape.
 * @see {@link GetConsoleScreenshotCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetConsoleScreenshotCommand extends $Command<
  GetConsoleScreenshotCommandInput,
  GetConsoleScreenshotCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: GetConsoleScreenshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConsoleScreenshotCommandInput, GetConsoleScreenshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConsoleScreenshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetConsoleScreenshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "GetConsoleScreenshot",
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
  private serialize(input: GetConsoleScreenshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConsoleScreenshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConsoleScreenshotCommandOutput> {
    return de_GetConsoleScreenshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
