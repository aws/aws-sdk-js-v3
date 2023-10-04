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
  PutEnvironmentBlueprintConfigurationInput,
  PutEnvironmentBlueprintConfigurationOutput,
} from "../models/models_0";
import {
  de_PutEnvironmentBlueprintConfigurationCommand,
  se_PutEnvironmentBlueprintConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutEnvironmentBlueprintConfigurationCommand}.
 */
export interface PutEnvironmentBlueprintConfigurationCommandInput extends PutEnvironmentBlueprintConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutEnvironmentBlueprintConfigurationCommand}.
 */
export interface PutEnvironmentBlueprintConfigurationCommandOutput
  extends PutEnvironmentBlueprintConfigurationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Writes the configuration for the specified environment blueprint in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, PutEnvironmentBlueprintConfigurationCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, PutEnvironmentBlueprintConfigurationCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // PutEnvironmentBlueprintConfigurationInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentBlueprintIdentifier: "STRING_VALUE", // required
 *   provisioningRoleArn: "STRING_VALUE",
 *   manageAccessRoleArn: "STRING_VALUE",
 *   enabledRegions: [ // EnabledRegionList // required
 *     "STRING_VALUE",
 *   ],
 *   regionalParameters: { // RegionalParameterMap
 *     "<keys>": { // RegionalParameter
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new PutEnvironmentBlueprintConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutEnvironmentBlueprintConfigurationOutput
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
 * @param PutEnvironmentBlueprintConfigurationCommandInput - {@link PutEnvironmentBlueprintConfigurationCommandInput}
 * @returns {@link PutEnvironmentBlueprintConfigurationCommandOutput}
 * @see {@link PutEnvironmentBlueprintConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutEnvironmentBlueprintConfigurationCommandOutput} for command's `response` shape.
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
export class PutEnvironmentBlueprintConfigurationCommand extends $Command<
  PutEnvironmentBlueprintConfigurationCommandInput,
  PutEnvironmentBlueprintConfigurationCommandOutput,
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
  constructor(readonly input: PutEnvironmentBlueprintConfigurationCommandInput) {
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
  ): Handler<PutEnvironmentBlueprintConfigurationCommandInput, PutEnvironmentBlueprintConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutEnvironmentBlueprintConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "PutEnvironmentBlueprintConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "PutEnvironmentBlueprintConfiguration",
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
    input: PutEnvironmentBlueprintConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutEnvironmentBlueprintConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutEnvironmentBlueprintConfigurationCommandOutput> {
    return de_PutEnvironmentBlueprintConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
