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
  ListEnvironmentBlueprintsInput,
  ListEnvironmentBlueprintsOutput,
  ListEnvironmentBlueprintsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListEnvironmentBlueprintsCommand, se_ListEnvironmentBlueprintsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentBlueprintsCommand}.
 */
export interface ListEnvironmentBlueprintsCommandInput extends ListEnvironmentBlueprintsInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentBlueprintsCommand}.
 */
export interface ListEnvironmentBlueprintsCommandOutput extends ListEnvironmentBlueprintsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists blueprints in an Amazon DataZone environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListEnvironmentBlueprintsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListEnvironmentBlueprintsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListEnvironmentBlueprintsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   managed: true || false,
 * };
 * const command = new ListEnvironmentBlueprintsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentBlueprintsOutput
 * //   items: [ // EnvironmentBlueprintSummaries // required
 * //     { // EnvironmentBlueprintSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       provider: "STRING_VALUE", // required
 * //       provisioningProperties: { // ProvisioningProperties Union: only one key present
 * //         cloudFormation: { // CloudFormationProperties
 * //           templateUrl: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnvironmentBlueprintsCommandInput - {@link ListEnvironmentBlueprintsCommandInput}
 * @returns {@link ListEnvironmentBlueprintsCommandOutput}
 * @see {@link ListEnvironmentBlueprintsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentBlueprintsCommandOutput} for command's `response` shape.
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
export class ListEnvironmentBlueprintsCommand extends $Command<
  ListEnvironmentBlueprintsCommandInput,
  ListEnvironmentBlueprintsCommandOutput,
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
  constructor(readonly input: ListEnvironmentBlueprintsCommandInput) {
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
  ): Handler<ListEnvironmentBlueprintsCommandInput, ListEnvironmentBlueprintsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEnvironmentBlueprintsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "ListEnvironmentBlueprintsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListEnvironmentBlueprintsOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "ListEnvironmentBlueprints",
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
  private serialize(input: ListEnvironmentBlueprintsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEnvironmentBlueprintsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEnvironmentBlueprintsCommandOutput> {
    return de_ListEnvironmentBlueprintsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
