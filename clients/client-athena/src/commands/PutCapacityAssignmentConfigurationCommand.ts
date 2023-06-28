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
} from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { PutCapacityAssignmentConfigurationInput, PutCapacityAssignmentConfigurationOutput } from "../models/models_0";
import {
  de_PutCapacityAssignmentConfigurationCommand,
  se_PutCapacityAssignmentConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutCapacityAssignmentConfigurationCommand}.
 */
export interface PutCapacityAssignmentConfigurationCommandInput extends PutCapacityAssignmentConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutCapacityAssignmentConfigurationCommand}.
 */
export interface PutCapacityAssignmentConfigurationCommandOutput
  extends PutCapacityAssignmentConfigurationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Puts a new capacity assignment configuration for a specified capacity reservation. If a capacity assignment configuration already exists for the capacity reservation, replaces the existing capacity assignment configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, PutCapacityAssignmentConfigurationCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, PutCapacityAssignmentConfigurationCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // PutCapacityAssignmentConfigurationInput
 *   CapacityReservationName: "STRING_VALUE", // required
 *   CapacityAssignments: [ // CapacityAssignmentsList // required
 *     { // CapacityAssignment
 *       WorkGroupNames: [ // WorkGroupNamesList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutCapacityAssignmentConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutCapacityAssignmentConfigurationCommandInput - {@link PutCapacityAssignmentConfigurationCommandInput}
 * @returns {@link PutCapacityAssignmentConfigurationCommandOutput}
 * @see {@link PutCapacityAssignmentConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutCapacityAssignmentConfigurationCommandOutput} for command's `response` shape.
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
export class PutCapacityAssignmentConfigurationCommand extends $Command<
  PutCapacityAssignmentConfigurationCommandInput,
  PutCapacityAssignmentConfigurationCommandOutput,
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
  constructor(readonly input: PutCapacityAssignmentConfigurationCommandInput) {
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
  ): Handler<PutCapacityAssignmentConfigurationCommandInput, PutCapacityAssignmentConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutCapacityAssignmentConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "PutCapacityAssignmentConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
    input: PutCapacityAssignmentConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutCapacityAssignmentConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutCapacityAssignmentConfigurationCommandOutput> {
    return de_PutCapacityAssignmentConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
