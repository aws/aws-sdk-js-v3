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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetCapacityAssignmentConfigurationInput, GetCapacityAssignmentConfigurationOutput } from "../models/models_0";
import {
  de_GetCapacityAssignmentConfigurationCommand,
  se_GetCapacityAssignmentConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCapacityAssignmentConfigurationCommand}.
 */
export interface GetCapacityAssignmentConfigurationCommandInput extends GetCapacityAssignmentConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetCapacityAssignmentConfigurationCommand}.
 */
export interface GetCapacityAssignmentConfigurationCommandOutput
  extends GetCapacityAssignmentConfigurationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the capacity assignment configuration for a capacity reservation, if one exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetCapacityAssignmentConfigurationCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetCapacityAssignmentConfigurationCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // GetCapacityAssignmentConfigurationInput
 *   CapacityReservationName: "STRING_VALUE", // required
 * };
 * const command = new GetCapacityAssignmentConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetCapacityAssignmentConfigurationOutput
 * //   CapacityAssignmentConfiguration: { // CapacityAssignmentConfiguration
 * //     CapacityReservationName: "STRING_VALUE",
 * //     CapacityAssignments: [ // CapacityAssignmentsList
 * //       { // CapacityAssignment
 * //         WorkGroupNames: [ // WorkGroupNamesList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCapacityAssignmentConfigurationCommandInput - {@link GetCapacityAssignmentConfigurationCommandInput}
 * @returns {@link GetCapacityAssignmentConfigurationCommandOutput}
 * @see {@link GetCapacityAssignmentConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetCapacityAssignmentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class GetCapacityAssignmentConfigurationCommand extends $Command<
  GetCapacityAssignmentConfigurationCommandInput,
  GetCapacityAssignmentConfigurationCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: GetCapacityAssignmentConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCapacityAssignmentConfigurationCommandInput, GetCapacityAssignmentConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCapacityAssignmentConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "GetCapacityAssignmentConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonAthena",
        operation: "GetCapacityAssignmentConfiguration",
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
    input: GetCapacityAssignmentConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetCapacityAssignmentConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCapacityAssignmentConfigurationCommandOutput> {
    return de_GetCapacityAssignmentConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
