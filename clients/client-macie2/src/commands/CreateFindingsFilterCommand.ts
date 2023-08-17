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
import { CreateFindingsFilterRequest, CreateFindingsFilterResponse } from "../models/models_0";
import { de_CreateFindingsFilterCommand, se_CreateFindingsFilterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFindingsFilterCommand}.
 */
export interface CreateFindingsFilterCommandInput extends CreateFindingsFilterRequest {}
/**
 * @public
 *
 * The output of {@link CreateFindingsFilterCommand}.
 */
export interface CreateFindingsFilterCommandOutput extends CreateFindingsFilterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates and defines the criteria and other settings for a findings filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateFindingsFilterCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateFindingsFilterCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // CreateFindingsFilterRequest
 *   action: "ARCHIVE" || "NOOP", // required
 *   clientToken: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   findingCriteria: { // FindingCriteria
 *     criterion: { // Criterion
 *       "<keys>": { // CriterionAdditionalProperties
 *         eq: [ // __listOf__string
 *           "STRING_VALUE",
 *         ],
 *         eqExactMatch: [
 *           "STRING_VALUE",
 *         ],
 *         gt: Number("long"),
 *         gte: Number("long"),
 *         lt: Number("long"),
 *         lte: Number("long"),
 *         neq: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   name: "STRING_VALUE", // required
 *   position: Number("int"),
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFindingsFilterCommand(input);
 * const response = await client.send(command);
 * // { // CreateFindingsFilterResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFindingsFilterCommandInput - {@link CreateFindingsFilterCommandInput}
 * @returns {@link CreateFindingsFilterCommandOutput}
 * @see {@link CreateFindingsFilterCommandInput} for command's `input` shape.
 * @see {@link CreateFindingsFilterCommandOutput} for command's `response` shape.
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
export class CreateFindingsFilterCommand extends $Command<
  CreateFindingsFilterCommandInput,
  CreateFindingsFilterCommandOutput,
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
  constructor(readonly input: CreateFindingsFilterCommandInput) {
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
  ): Handler<CreateFindingsFilterCommandInput, CreateFindingsFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFindingsFilterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "CreateFindingsFilterCommand";
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
  private serialize(input: CreateFindingsFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFindingsFilterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFindingsFilterCommandOutput> {
    return de_CreateFindingsFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
