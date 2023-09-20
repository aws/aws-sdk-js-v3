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

import { ListDiscoverersRequest, ListDiscoverersResponse } from "../models/models_0";
import { de_ListDiscoverersCommand, se_ListDiscoverersCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDiscoverersCommand}.
 */
export interface ListDiscoverersCommandInput extends ListDiscoverersRequest {}
/**
 * @public
 *
 * The output of {@link ListDiscoverersCommand}.
 */
export interface ListDiscoverersCommandOutput extends ListDiscoverersResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the discoverers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, ListDiscoverersCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, ListDiscoverersCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // ListDiscoverersRequest
 *   DiscovererIdPrefix: "STRING_VALUE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SourceArnPrefix: "STRING_VALUE",
 * };
 * const command = new ListDiscoverersCommand(input);
 * const response = await client.send(command);
 * // { // ListDiscoverersResponse
 * //   Discoverers: [ // __listOfDiscovererSummary
 * //     { // DiscovererSummary
 * //       DiscovererArn: "STRING_VALUE",
 * //       DiscovererId: "STRING_VALUE",
 * //       SourceArn: "STRING_VALUE",
 * //       State: "STARTED" || "STOPPED",
 * //       CrossAccount: true || false,
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDiscoverersCommandInput - {@link ListDiscoverersCommandInput}
 * @returns {@link ListDiscoverersCommandOutput}
 * @see {@link ListDiscoverersCommandInput} for command's `input` shape.
 * @see {@link ListDiscoverersCommandOutput} for command's `response` shape.
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
export class ListDiscoverersCommand extends $Command<
  ListDiscoverersCommandInput,
  ListDiscoverersCommandOutput,
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
  constructor(readonly input: ListDiscoverersCommandInput) {
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
  ): Handler<ListDiscoverersCommandInput, ListDiscoverersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDiscoverersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "ListDiscoverersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "schemas",
        operation: "ListDiscoverers",
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
  private serialize(input: ListDiscoverersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDiscoverersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDiscoverersCommandOutput> {
    return de_ListDiscoverersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
