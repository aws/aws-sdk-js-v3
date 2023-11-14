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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetCalculationExecutionCodeRequest, GetCalculationExecutionCodeResponse } from "../models/models_0";
import { de_GetCalculationExecutionCodeCommand, se_GetCalculationExecutionCodeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCalculationExecutionCodeCommand}.
 */
export interface GetCalculationExecutionCodeCommandInput extends GetCalculationExecutionCodeRequest {}
/**
 * @public
 *
 * The output of {@link GetCalculationExecutionCodeCommand}.
 */
export interface GetCalculationExecutionCodeCommandOutput
  extends GetCalculationExecutionCodeResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the unencrypted code that was executed for the calculation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetCalculationExecutionCodeCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetCalculationExecutionCodeCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // GetCalculationExecutionCodeRequest
 *   CalculationExecutionId: "STRING_VALUE", // required
 * };
 * const command = new GetCalculationExecutionCodeCommand(input);
 * const response = await client.send(command);
 * // { // GetCalculationExecutionCodeResponse
 * //   CodeBlock: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCalculationExecutionCodeCommandInput - {@link GetCalculationExecutionCodeCommandInput}
 * @returns {@link GetCalculationExecutionCodeCommandOutput}
 * @see {@link GetCalculationExecutionCodeCommandInput} for command's `input` shape.
 * @see {@link GetCalculationExecutionCodeCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class GetCalculationExecutionCodeCommand extends $Command<
  GetCalculationExecutionCodeCommandInput,
  GetCalculationExecutionCodeCommandOutput,
  AthenaClientResolvedConfig
> {
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
  constructor(readonly input: GetCalculationExecutionCodeCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCalculationExecutionCodeCommandInput, GetCalculationExecutionCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCalculationExecutionCodeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetCalculationExecutionCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAthena",
        operation: "GetCalculationExecutionCode",
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
  private serialize(input: GetCalculationExecutionCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCalculationExecutionCodeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCalculationExecutionCodeCommandOutput> {
    return de_GetCalculationExecutionCodeCommand(output, context);
  }
}
