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

import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { CreateBotVersionRequest, CreateBotVersionResponse } from "../models/models_0";
import { de_CreateBotVersionCommand, se_CreateBotVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateBotVersionCommand}.
 */
export interface CreateBotVersionCommandInput extends CreateBotVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateBotVersionCommand}.
 */
export interface CreateBotVersionCommandOutput extends CreateBotVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new version of the bot based on the <code>$LATEST</code>
 *       version. If the <code>$LATEST</code> version of this resource hasn't
 *       changed since you created the last version, Amazon Lex doesn't create a new
 *       version. It returns the last created version.</p>
 *          <note>
 *             <p>You can update only the <code>$LATEST</code> version of the bot.
 *         You can't update the numbered versions that you create with the
 *           <code>CreateBotVersion</code> operation.</p>
 *          </note>
 *          <p> When you create the first version of a bot, Amazon Lex sets the version
 *       to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
 *          <p> This operation requires permission for the
 *         <code>lex:CreateBotVersion</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, CreateBotVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, CreateBotVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // CreateBotVersionRequest
 *   name: "STRING_VALUE", // required
 *   checksum: "STRING_VALUE",
 * };
 * const command = new CreateBotVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateBotVersionResponse
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   intents: [ // IntentList
 * //     { // Intent
 * //       intentName: "STRING_VALUE", // required
 * //       intentVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   clarificationPrompt: { // Prompt
 * //     messages: [ // MessageList // required
 * //       { // Message
 * //         contentType: "STRING_VALUE", // required
 * //         content: "STRING_VALUE", // required
 * //         groupNumber: Number("int"),
 * //       },
 * //     ],
 * //     maxAttempts: Number("int"), // required
 * //     responseCard: "STRING_VALUE",
 * //   },
 * //   abortStatement: { // Statement
 * //     messages: [ // required
 * //       {
 * //         contentType: "STRING_VALUE", // required
 * //         content: "STRING_VALUE", // required
 * //         groupNumber: Number("int"),
 * //       },
 * //     ],
 * //     responseCard: "STRING_VALUE",
 * //   },
 * //   status: "STRING_VALUE",
 * //   failureReason: "STRING_VALUE",
 * //   lastUpdatedDate: new Date("TIMESTAMP"),
 * //   createdDate: new Date("TIMESTAMP"),
 * //   idleSessionTTLInSeconds: Number("int"),
 * //   voiceId: "STRING_VALUE",
 * //   checksum: "STRING_VALUE",
 * //   version: "STRING_VALUE",
 * //   locale: "STRING_VALUE",
 * //   childDirected: true || false,
 * //   enableModelImprovements: true || false,
 * //   detectSentiment: true || false,
 * // };
 *
 * ```
 *
 * @param CreateBotVersionCommandInput - {@link CreateBotVersionCommandInput}
 * @returns {@link CreateBotVersionCommandOutput}
 * @see {@link CreateBotVersionCommandInput} for command's `input` shape.
 * @see {@link CreateBotVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict processing the request. Try your request
 *       again. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p> The checksum of the resource that you are trying to change does
 *       not match the checksum in the request. Check the resource's checksum and
 *       try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 */
export class CreateBotVersionCommand extends $Command<
  CreateBotVersionCommandInput,
  CreateBotVersionCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
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
  constructor(readonly input: CreateBotVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBotVersionCommandInput, CreateBotVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateBotVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "CreateBotVersionCommand";
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
  private serialize(input: CreateBotVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateBotVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBotVersionCommandOutput> {
    return de_CreateBotVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
