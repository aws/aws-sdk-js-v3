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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { PutVerificationStateOnViolationRequest, PutVerificationStateOnViolationResponse } from "../models/models_2";
import {
  de_PutVerificationStateOnViolationCommand,
  se_PutVerificationStateOnViolationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutVerificationStateOnViolationCommand}.
 */
export interface PutVerificationStateOnViolationCommandInput extends PutVerificationStateOnViolationRequest {}
/**
 * @public
 *
 * The output of {@link PutVerificationStateOnViolationCommand}.
 */
export interface PutVerificationStateOnViolationCommandOutput
  extends PutVerificationStateOnViolationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Set a verification state and provide a description of that verification state on a violation (detect alarm).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, PutVerificationStateOnViolationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, PutVerificationStateOnViolationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // PutVerificationStateOnViolationRequest
 *   violationId: "STRING_VALUE", // required
 *   verificationState: "FALSE_POSITIVE" || "BENIGN_POSITIVE" || "TRUE_POSITIVE" || "UNKNOWN", // required
 *   verificationStateDescription: "STRING_VALUE",
 * };
 * const command = new PutVerificationStateOnViolationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutVerificationStateOnViolationCommandInput - {@link PutVerificationStateOnViolationCommandInput}
 * @returns {@link PutVerificationStateOnViolationCommandOutput}
 * @see {@link PutVerificationStateOnViolationCommandInput} for command's `input` shape.
 * @see {@link PutVerificationStateOnViolationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class PutVerificationStateOnViolationCommand extends $Command<
  PutVerificationStateOnViolationCommandInput,
  PutVerificationStateOnViolationCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: PutVerificationStateOnViolationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutVerificationStateOnViolationCommandInput, PutVerificationStateOnViolationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutVerificationStateOnViolationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "PutVerificationStateOnViolationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "PutVerificationStateOnViolation",
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
  private serialize(
    input: PutVerificationStateOnViolationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutVerificationStateOnViolationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutVerificationStateOnViolationCommandOutput> {
    return de_PutVerificationStateOnViolationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
