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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateTestSetDiscrepancyReportRequest, CreateTestSetDiscrepancyReportResponse } from "../models/models_0";
import {
  de_CreateTestSetDiscrepancyReportCommand,
  se_CreateTestSetDiscrepancyReportCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTestSetDiscrepancyReportCommand}.
 */
export interface CreateTestSetDiscrepancyReportCommandInput extends CreateTestSetDiscrepancyReportRequest {}
/**
 * @public
 *
 * The output of {@link CreateTestSetDiscrepancyReportCommand}.
 */
export interface CreateTestSetDiscrepancyReportCommandOutput
  extends CreateTestSetDiscrepancyReportResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Create a report that describes the differences between the bot and the test set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateTestSetDiscrepancyReportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateTestSetDiscrepancyReportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // CreateTestSetDiscrepancyReportRequest
 *   testSetId: "STRING_VALUE", // required
 *   target: { // TestSetDiscrepancyReportResourceTarget
 *     botAliasTarget: { // TestSetDiscrepancyReportBotAliasTarget
 *       botId: "STRING_VALUE", // required
 *       botAliasId: "STRING_VALUE", // required
 *       localeId: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateTestSetDiscrepancyReportCommand(input);
 * const response = await client.send(command);
 * // { // CreateTestSetDiscrepancyReportResponse
 * //   testSetDiscrepancyReportId: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   testSetId: "STRING_VALUE",
 * //   target: { // TestSetDiscrepancyReportResourceTarget
 * //     botAliasTarget: { // TestSetDiscrepancyReportBotAliasTarget
 * //       botId: "STRING_VALUE", // required
 * //       botAliasId: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateTestSetDiscrepancyReportCommandInput - {@link CreateTestSetDiscrepancyReportCommandInput}
 * @returns {@link CreateTestSetDiscrepancyReportCommandOutput}
 * @see {@link CreateTestSetDiscrepancyReportCommandInput} for command's `input` shape.
 * @see {@link CreateTestSetDiscrepancyReportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class CreateTestSetDiscrepancyReportCommand extends $Command<
  CreateTestSetDiscrepancyReportCommandInput,
  CreateTestSetDiscrepancyReportCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: CreateTestSetDiscrepancyReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTestSetDiscrepancyReportCommandInput, CreateTestSetDiscrepancyReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTestSetDiscrepancyReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "CreateTestSetDiscrepancyReportCommand";
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
    input: CreateTestSetDiscrepancyReportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateTestSetDiscrepancyReportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTestSetDiscrepancyReportCommandOutput> {
    return de_CreateTestSetDiscrepancyReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
