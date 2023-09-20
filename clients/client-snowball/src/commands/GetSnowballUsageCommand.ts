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

import { GetSnowballUsageRequest, GetSnowballUsageResult } from "../models/models_0";
import { de_GetSnowballUsageCommand, se_GetSnowballUsageCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSnowballUsageCommand}.
 */
export interface GetSnowballUsageCommandInput extends GetSnowballUsageRequest {}
/**
 * @public
 *
 * The output of {@link GetSnowballUsageCommand}.
 */
export interface GetSnowballUsageCommandOutput extends GetSnowballUsageResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the Snow Family service limit for your account, and also the
 *       number of Snow devices your account has in use.</p>
 *          <p>The default service limit for the number of Snow devices that you can have at one time
 *       is 1. If you want to increase your service limit, contact Amazon Web Services Support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetSnowballUsageCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetSnowballUsageCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = {};
 * const command = new GetSnowballUsageCommand(input);
 * const response = await client.send(command);
 * // { // GetSnowballUsageResult
 * //   SnowballLimit: Number("int"),
 * //   SnowballsInUse: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetSnowballUsageCommandInput - {@link GetSnowballUsageCommandInput}
 * @returns {@link GetSnowballUsageCommandOutput}
 * @see {@link GetSnowballUsageCommandInput} for command's `input` shape.
 * @see {@link GetSnowballUsageCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @example To see your Snowball service limit and the number of Snowballs you have in use
 * ```javascript
 * // Returns information about the Snowball service limit for your account, and also the number of Snowballs your account has in use.
 * //
 * // The default service limit for the number of Snowballs that you can have at one time is 1. If you want to increase your service limit, contact AWS Support.
 * const input = {};
 * const command = new GetSnowballUsageCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SnowballLimit": 1,
 *   "SnowballsInUse": 0
 * }
 * *\/
 * // example id: to-see-your-snowball-service-limit-and-the-number-of-snowballs-you-have-in-use-1482863394588
 * ```
 *
 */
export class GetSnowballUsageCommand extends $Command<
  GetSnowballUsageCommandInput,
  GetSnowballUsageCommandOutput,
  SnowballClientResolvedConfig
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
  constructor(readonly input: GetSnowballUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSnowballUsageCommandInput, GetSnowballUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSnowballUsageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "GetSnowballUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIESnowballJobManagementService",
        operation: "GetSnowballUsage",
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
  private serialize(input: GetSnowballUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSnowballUsageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSnowballUsageCommandOutput> {
    return de_GetSnowballUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
