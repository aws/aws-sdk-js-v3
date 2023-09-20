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

import { GetSendQuotaResponse } from "../models/models_0";
import { de_GetSendQuotaCommand, se_GetSendQuotaCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSendQuotaCommand}.
 */
export interface GetSendQuotaCommandInput {}
/**
 * @public
 *
 * The output of {@link GetSendQuotaCommand}.
 */
export interface GetSendQuotaCommandOutput extends GetSendQuotaResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides the sending limits for the Amazon SES account. </p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetSendQuotaCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetSendQuotaCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = {};
 * const command = new GetSendQuotaCommand(input);
 * const response = await client.send(command);
 * // { // GetSendQuotaResponse
 * //   Max24HourSend: Number("double"),
 * //   MaxSendRate: Number("double"),
 * //   SentLast24Hours: Number("double"),
 * // };
 *
 * ```
 *
 * @param GetSendQuotaCommandInput - {@link GetSendQuotaCommandInput}
 * @returns {@link GetSendQuotaCommandOutput}
 * @see {@link GetSendQuotaCommandInput} for command's `input` shape.
 * @see {@link GetSendQuotaCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example GetSendQuota
 * ```javascript
 * // The following example returns the Amazon SES sending limits for an AWS account:
 * const input = undefined;
 * const command = new GetSendQuotaCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Max24HourSend": 200,
 *   "MaxSendRate": 1,
 *   "SentLast24Hours": 1
 * }
 * *\/
 * // example id: getsendquota-1469047324508
 * ```
 *
 */
export class GetSendQuotaCommand extends $Command<
  GetSendQuotaCommandInput,
  GetSendQuotaCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: GetSendQuotaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSendQuotaCommandInput, GetSendQuotaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSendQuotaCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetSendQuotaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService",
        operation: "GetSendQuota",
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
  private serialize(input: GetSendQuotaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSendQuotaCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSendQuotaCommandOutput> {
    return de_GetSendQuotaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
