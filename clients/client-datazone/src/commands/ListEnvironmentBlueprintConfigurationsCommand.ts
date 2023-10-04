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
  ListEnvironmentBlueprintConfigurationsInput,
  ListEnvironmentBlueprintConfigurationsOutput,
} from "../models/models_0";
import {
  de_ListEnvironmentBlueprintConfigurationsCommand,
  se_ListEnvironmentBlueprintConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentBlueprintConfigurationsCommand}.
 */
export interface ListEnvironmentBlueprintConfigurationsCommandInput
  extends ListEnvironmentBlueprintConfigurationsInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentBlueprintConfigurationsCommand}.
 */
export interface ListEnvironmentBlueprintConfigurationsCommandOutput
  extends ListEnvironmentBlueprintConfigurationsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists blueprint configurations for a Amazon DataZone environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListEnvironmentBlueprintConfigurationsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListEnvironmentBlueprintConfigurationsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListEnvironmentBlueprintConfigurationsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEnvironmentBlueprintConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentBlueprintConfigurationsOutput
 * //   items: [ // EnvironmentBlueprintConfigurations
 * //     { // EnvironmentBlueprintConfigurationItem
 * //       domainId: "STRING_VALUE", // required
 * //       environmentBlueprintId: "STRING_VALUE", // required
 * //       provisioningRoleArn: "STRING_VALUE",
 * //       manageAccessRoleArn: "STRING_VALUE",
 * //       enabledRegions: [ // EnabledRegionList
 * //         "STRING_VALUE",
 * //       ],
 * //       regionalParameters: { // RegionalParameterMap
 * //         "<keys>": { // RegionalParameter
 * //           "<keys>": "STRING_VALUE",
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
 * @param ListEnvironmentBlueprintConfigurationsCommandInput - {@link ListEnvironmentBlueprintConfigurationsCommandInput}
 * @returns {@link ListEnvironmentBlueprintConfigurationsCommandOutput}
 * @see {@link ListEnvironmentBlueprintConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentBlueprintConfigurationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class ListEnvironmentBlueprintConfigurationsCommand extends $Command<
  ListEnvironmentBlueprintConfigurationsCommandInput,
  ListEnvironmentBlueprintConfigurationsCommandOutput,
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
  constructor(readonly input: ListEnvironmentBlueprintConfigurationsCommandInput) {
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
  ): Handler<ListEnvironmentBlueprintConfigurationsCommandInput, ListEnvironmentBlueprintConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEnvironmentBlueprintConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "ListEnvironmentBlueprintConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "ListEnvironmentBlueprintConfigurations",
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
    input: ListEnvironmentBlueprintConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListEnvironmentBlueprintConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListEnvironmentBlueprintConfigurationsCommandOutput> {
    return de_ListEnvironmentBlueprintConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
