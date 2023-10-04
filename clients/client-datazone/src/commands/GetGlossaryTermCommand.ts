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
  GetGlossaryTermInput,
  GetGlossaryTermOutput,
  GetGlossaryTermOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetGlossaryTermCommand, se_GetGlossaryTermCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetGlossaryTermCommand}.
 */
export interface GetGlossaryTermCommandInput extends GetGlossaryTermInput {}
/**
 * @public
 *
 * The output of {@link GetGlossaryTermCommand}.
 */
export interface GetGlossaryTermCommandOutput extends GetGlossaryTermOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets a business glossary term in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetGlossaryTermCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetGlossaryTermCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetGlossaryTermInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetGlossaryTermCommand(input);
 * const response = await client.send(command);
 * // { // GetGlossaryTermOutput
 * //   domainId: "STRING_VALUE", // required
 * //   glossaryId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
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
 * //   status: "ENABLED" || "DISABLED", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGlossaryTermCommandInput - {@link GetGlossaryTermCommandInput}
 * @returns {@link GetGlossaryTermCommandOutput}
 * @see {@link GetGlossaryTermCommandInput} for command's `input` shape.
 * @see {@link GetGlossaryTermCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
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
export class GetGlossaryTermCommand extends $Command<
  GetGlossaryTermCommandInput,
  GetGlossaryTermCommandOutput,
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
  constructor(readonly input: GetGlossaryTermCommandInput) {
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
  ): Handler<GetGlossaryTermCommandInput, GetGlossaryTermCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetGlossaryTermCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "GetGlossaryTermCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetGlossaryTermOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "GetGlossaryTerm",
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
  private serialize(input: GetGlossaryTermCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetGlossaryTermCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGlossaryTermCommandOutput> {
    return de_GetGlossaryTermCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
