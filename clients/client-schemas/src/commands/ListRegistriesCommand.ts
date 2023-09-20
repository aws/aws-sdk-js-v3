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

import { ListRegistriesRequest, ListRegistriesResponse } from "../models/models_0";
import { de_ListRegistriesCommand, se_ListRegistriesCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRegistriesCommand}.
 */
export interface ListRegistriesCommandInput extends ListRegistriesRequest {}
/**
 * @public
 *
 * The output of {@link ListRegistriesCommand}.
 */
export interface ListRegistriesCommandOutput extends ListRegistriesResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the registries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, ListRegistriesCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, ListRegistriesCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // ListRegistriesRequest
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RegistryNamePrefix: "STRING_VALUE",
 *   Scope: "STRING_VALUE",
 * };
 * const command = new ListRegistriesCommand(input);
 * const response = await client.send(command);
 * // { // ListRegistriesResponse
 * //   NextToken: "STRING_VALUE",
 * //   Registries: [ // __listOfRegistrySummary
 * //     { // RegistrySummary
 * //       RegistryArn: "STRING_VALUE",
 * //       RegistryName: "STRING_VALUE",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRegistriesCommandInput - {@link ListRegistriesCommandInput}
 * @returns {@link ListRegistriesCommandOutput}
 * @see {@link ListRegistriesCommandInput} for command's `input` shape.
 * @see {@link ListRegistriesCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 */
export class ListRegistriesCommand extends $Command<
  ListRegistriesCommandInput,
  ListRegistriesCommandOutput,
  SchemasClientResolvedConfig
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
  constructor(readonly input: ListRegistriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRegistriesCommandInput, ListRegistriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRegistriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "ListRegistriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "schemas",
        operation: "ListRegistries",
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
  private serialize(input: ListRegistriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRegistriesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRegistriesCommandOutput> {
    return de_ListRegistriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
