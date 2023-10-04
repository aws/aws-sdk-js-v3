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
  GetEnvironmentBlueprintConfigurationInput,
  GetEnvironmentBlueprintConfigurationOutput,
} from "../models/models_0";
import {
  de_GetEnvironmentBlueprintConfigurationCommand,
  se_GetEnvironmentBlueprintConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEnvironmentBlueprintConfigurationCommand}.
 */
export interface GetEnvironmentBlueprintConfigurationCommandInput extends GetEnvironmentBlueprintConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentBlueprintConfigurationCommand}.
 */
export interface GetEnvironmentBlueprintConfigurationCommandOutput
  extends GetEnvironmentBlueprintConfigurationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the blueprint configuration in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetEnvironmentBlueprintConfigurationCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetEnvironmentBlueprintConfigurationCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetEnvironmentBlueprintConfigurationInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentBlueprintIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentBlueprintConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentBlueprintConfigurationOutput
 * //   domainId: "STRING_VALUE", // required
 * //   environmentBlueprintId: "STRING_VALUE", // required
 * //   provisioningRoleArn: "STRING_VALUE",
 * //   manageAccessRoleArn: "STRING_VALUE",
 * //   enabledRegions: [ // EnabledRegionList
 * //     "STRING_VALUE",
 * //   ],
 * //   regionalParameters: { // RegionalParameterMap
 * //     "<keys>": { // RegionalParameter
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetEnvironmentBlueprintConfigurationCommandInput - {@link GetEnvironmentBlueprintConfigurationCommandInput}
 * @returns {@link GetEnvironmentBlueprintConfigurationCommandOutput}
 * @see {@link GetEnvironmentBlueprintConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentBlueprintConfigurationCommandOutput} for command's `response` shape.
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
export class GetEnvironmentBlueprintConfigurationCommand extends $Command<
  GetEnvironmentBlueprintConfigurationCommandInput,
  GetEnvironmentBlueprintConfigurationCommandOutput,
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
  constructor(readonly input: GetEnvironmentBlueprintConfigurationCommandInput) {
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
  ): Handler<GetEnvironmentBlueprintConfigurationCommandInput, GetEnvironmentBlueprintConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEnvironmentBlueprintConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "GetEnvironmentBlueprintConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "GetEnvironmentBlueprintConfiguration",
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
    input: GetEnvironmentBlueprintConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetEnvironmentBlueprintConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEnvironmentBlueprintConfigurationCommandOutput> {
    return de_GetEnvironmentBlueprintConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
