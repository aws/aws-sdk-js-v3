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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { TestCustomDataIdentifierRequest, TestCustomDataIdentifierResponse } from "../models/models_1";
import { de_TestCustomDataIdentifierCommand, se_TestCustomDataIdentifierCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TestCustomDataIdentifierCommand}.
 */
export interface TestCustomDataIdentifierCommandInput extends TestCustomDataIdentifierRequest {}
/**
 * @public
 *
 * The output of {@link TestCustomDataIdentifierCommand}.
 */
export interface TestCustomDataIdentifierCommandOutput extends TestCustomDataIdentifierResponse, __MetadataBearer {}

/**
 * @public
 * <p>Tests a custom data identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, TestCustomDataIdentifierCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, TestCustomDataIdentifierCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // TestCustomDataIdentifierRequest
 *   ignoreWords: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   keywords: [
 *     "STRING_VALUE",
 *   ],
 *   maximumMatchDistance: Number("int"),
 *   regex: "STRING_VALUE", // required
 *   sampleText: "STRING_VALUE", // required
 * };
 * const command = new TestCustomDataIdentifierCommand(input);
 * const response = await client.send(command);
 * // { // TestCustomDataIdentifierResponse
 * //   matchCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param TestCustomDataIdentifierCommandInput - {@link TestCustomDataIdentifierCommandInput}
 * @returns {@link TestCustomDataIdentifierCommandOutput}
 * @see {@link TestCustomDataIdentifierCommandInput} for command's `input` shape.
 * @see {@link TestCustomDataIdentifierCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 */
export class TestCustomDataIdentifierCommand extends $Command<
  TestCustomDataIdentifierCommandInput,
  TestCustomDataIdentifierCommandOutput,
  Macie2ClientResolvedConfig
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
  constructor(readonly input: TestCustomDataIdentifierCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestCustomDataIdentifierCommandInput, TestCustomDataIdentifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TestCustomDataIdentifierCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "TestCustomDataIdentifierCommand";
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
  private serialize(input: TestCustomDataIdentifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TestCustomDataIdentifierCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestCustomDataIdentifierCommandOutput> {
    return de_TestCustomDataIdentifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
