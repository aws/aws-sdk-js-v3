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

import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { GetSignedBluinsightsUrlResponse } from "../models/models_0";
import { de_GetSignedBluinsightsUrlCommand, se_GetSignedBluinsightsUrlCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSignedBluinsightsUrlCommand}.
 */
export interface GetSignedBluinsightsUrlCommandInput {}
/**
 * @public
 *
 * The output of {@link GetSignedBluinsightsUrlCommand}.
 */
export interface GetSignedBluinsightsUrlCommandOutput extends GetSignedBluinsightsUrlResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a single sign-on URL that can be used to connect to AWS Blu Insights.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetSignedBluinsightsUrlCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetSignedBluinsightsUrlCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = {};
 * const command = new GetSignedBluinsightsUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetSignedBluinsightsUrlResponse
 * //   signedBiUrl: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetSignedBluinsightsUrlCommandInput - {@link GetSignedBluinsightsUrlCommandInput}
 * @returns {@link GetSignedBluinsightsUrlCommandOutput}
 * @see {@link GetSignedBluinsightsUrlCommandInput} for command's `input` shape.
 * @see {@link GetSignedBluinsightsUrlCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 */
export class GetSignedBluinsightsUrlCommand extends $Command<
  GetSignedBluinsightsUrlCommandInput,
  GetSignedBluinsightsUrlCommandOutput,
  M2ClientResolvedConfig
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
  constructor(readonly input: GetSignedBluinsightsUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: M2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSignedBluinsightsUrlCommandInput, GetSignedBluinsightsUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSignedBluinsightsUrlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "GetSignedBluinsightsUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsSupernovaControlPlaneService",
        operation: "GetSignedBluinsightsUrl",
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
  private serialize(input: GetSignedBluinsightsUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSignedBluinsightsUrlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSignedBluinsightsUrlCommandOutput> {
    return de_GetSignedBluinsightsUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
