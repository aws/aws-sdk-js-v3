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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetSensitivityInspectionTemplateRequest, GetSensitivityInspectionTemplateResponse } from "../models/models_0";
import {
  de_GetSensitivityInspectionTemplateCommand,
  se_GetSensitivityInspectionTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSensitivityInspectionTemplateCommand}.
 */
export interface GetSensitivityInspectionTemplateCommandInput extends GetSensitivityInspectionTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetSensitivityInspectionTemplateCommand}.
 */
export interface GetSensitivityInspectionTemplateCommandOutput
  extends GetSensitivityInspectionTemplateResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the settings for the sensitivity inspection template for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetSensitivityInspectionTemplateCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetSensitivityInspectionTemplateCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // GetSensitivityInspectionTemplateRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetSensitivityInspectionTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetSensitivityInspectionTemplateResponse
 * //   description: "STRING_VALUE",
 * //   excludes: { // SensitivityInspectionTemplateExcludes
 * //     managedDataIdentifierIds: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   includes: { // SensitivityInspectionTemplateIncludes
 * //     allowListIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     customDataIdentifierIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     managedDataIdentifierIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   name: "STRING_VALUE",
 * //   sensitivityInspectionTemplateId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSensitivityInspectionTemplateCommandInput - {@link GetSensitivityInspectionTemplateCommandInput}
 * @returns {@link GetSensitivityInspectionTemplateCommandOutput}
 * @see {@link GetSensitivityInspectionTemplateCommandInput} for command's `input` shape.
 * @see {@link GetSensitivityInspectionTemplateCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
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
export class GetSensitivityInspectionTemplateCommand extends $Command<
  GetSensitivityInspectionTemplateCommandInput,
  GetSensitivityInspectionTemplateCommandOutput,
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
  constructor(readonly input: GetSensitivityInspectionTemplateCommandInput) {
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
  ): Handler<GetSensitivityInspectionTemplateCommandInput, GetSensitivityInspectionTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSensitivityInspectionTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetSensitivityInspectionTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Macie2",
        operation: "GetSensitivityInspectionTemplate",
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
    input: GetSensitivityInspectionTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetSensitivityInspectionTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSensitivityInspectionTemplateCommandOutput> {
    return de_GetSensitivityInspectionTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
