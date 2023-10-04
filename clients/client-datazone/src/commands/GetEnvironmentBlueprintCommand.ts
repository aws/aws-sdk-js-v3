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
  GetEnvironmentBlueprintInput,
  GetEnvironmentBlueprintOutput,
  GetEnvironmentBlueprintOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetEnvironmentBlueprintCommand, se_GetEnvironmentBlueprintCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEnvironmentBlueprintCommand}.
 */
export interface GetEnvironmentBlueprintCommandInput extends GetEnvironmentBlueprintInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentBlueprintCommand}.
 */
export interface GetEnvironmentBlueprintCommandOutput extends GetEnvironmentBlueprintOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets an Amazon DataZone blueprint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetEnvironmentBlueprintCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetEnvironmentBlueprintCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetEnvironmentBlueprintInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentBlueprintCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentBlueprintOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   provider: "STRING_VALUE", // required
 * //   provisioningProperties: { // ProvisioningProperties Union: only one key present
 * //     cloudFormation: { // CloudFormationProperties
 * //       templateUrl: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   deploymentProperties: { // DeploymentProperties
 * //     startTimeoutMinutes: Number("int"),
 * //     endTimeoutMinutes: Number("int"),
 * //   },
 * //   userParameters: [ // CustomParameterList
 * //     { // CustomParameter
 * //       keyName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       fieldType: "STRING_VALUE", // required
 * //       defaultValue: "STRING_VALUE",
 * //       isEditable: true || false,
 * //       isOptional: true || false,
 * //     },
 * //   ],
 * //   glossaryTerms: [ // GlossaryTerms
 * //     "STRING_VALUE",
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetEnvironmentBlueprintCommandInput - {@link GetEnvironmentBlueprintCommandInput}
 * @returns {@link GetEnvironmentBlueprintCommandOutput}
 * @see {@link GetEnvironmentBlueprintCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentBlueprintCommandOutput} for command's `response` shape.
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
export class GetEnvironmentBlueprintCommand extends $Command<
  GetEnvironmentBlueprintCommandInput,
  GetEnvironmentBlueprintCommandOutput,
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
  constructor(readonly input: GetEnvironmentBlueprintCommandInput) {
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
  ): Handler<GetEnvironmentBlueprintCommandInput, GetEnvironmentBlueprintCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEnvironmentBlueprintCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "GetEnvironmentBlueprintCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetEnvironmentBlueprintOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "GetEnvironmentBlueprint",
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
  private serialize(input: GetEnvironmentBlueprintCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEnvironmentBlueprintCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEnvironmentBlueprintCommandOutput> {
    return de_GetEnvironmentBlueprintCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
