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

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import {
  CreateGlossaryTermInput,
  CreateGlossaryTermInputFilterSensitiveLog,
  CreateGlossaryTermOutput,
  CreateGlossaryTermOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateGlossaryTermCommand, se_CreateGlossaryTermCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateGlossaryTermCommand}.
 */
export interface CreateGlossaryTermCommandInput extends CreateGlossaryTermInput {}
/**
 * @public
 *
 * The output of {@link CreateGlossaryTermCommand}.
 */
export interface CreateGlossaryTermCommandOutput extends CreateGlossaryTermOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a business glossary term.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateGlossaryTermCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateGlossaryTermCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateGlossaryTermInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   glossaryIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   status: "ENABLED" || "DISABLED",
 *   shortDescription: "STRING_VALUE",
 *   longDescription: "STRING_VALUE",
 *   termRelations: { // TermRelations
 *     isA: [ // GlossaryTerms
 *       "STRING_VALUE",
 *     ],
 *     classifies: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateGlossaryTermCommand(input);
 * const response = await client.send(command);
 * // { // CreateGlossaryTermOutput
 * //   id: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   glossaryId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "ENABLED" || "DISABLED", // required
 * //   shortDescription: "STRING_VALUE",
 * //   longDescription: "STRING_VALUE",
 * //   termRelations: { // TermRelations
 * //     isA: [ // GlossaryTerms
 * //       "STRING_VALUE",
 * //     ],
 * //     classifies: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateGlossaryTermCommandInput - {@link CreateGlossaryTermCommandInput}
 * @returns {@link CreateGlossaryTermCommandOutput}
 * @see {@link CreateGlossaryTermCommandInput} for command's `input` shape.
 * @see {@link CreateGlossaryTermCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class CreateGlossaryTermCommand extends $Command<
  CreateGlossaryTermCommandInput,
  CreateGlossaryTermCommandOutput,
  DataZoneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateGlossaryTermCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateGlossaryTermCommandInput, CreateGlossaryTermCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGlossaryTermCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "CreateGlossaryTermCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGlossaryTermInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateGlossaryTermOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "CreateGlossaryTerm",
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
  private serialize(input: CreateGlossaryTermCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateGlossaryTermCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGlossaryTermCommandOutput> {
    return de_CreateGlossaryTermCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
