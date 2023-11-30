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

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { UpdatePracticeRunConfigurationRequest, UpdatePracticeRunConfigurationResponse } from "../models/models_0";
import {
  de_UpdatePracticeRunConfigurationCommand,
  se_UpdatePracticeRunConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePracticeRunConfigurationCommand}.
 */
export interface UpdatePracticeRunConfigurationCommandInput extends UpdatePracticeRunConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePracticeRunConfigurationCommand}.
 */
export interface UpdatePracticeRunConfigurationCommandOutput
  extends UpdatePracticeRunConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Update a practice run configuration to change one or more of the following: add,
 * 			change, or remove the blocking alarm; change the outcome alarm; or add, change,
 * 			or remove blocking dates or time windows.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, UpdatePracticeRunConfigurationCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, UpdatePracticeRunConfigurationCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * const client = new ARCZonalShiftClient(config);
 * const input = { // UpdatePracticeRunConfigurationRequest
 *   resourceIdentifier: "STRING_VALUE", // required
 *   blockedWindows: [ // BlockedWindows
 *     "STRING_VALUE",
 *   ],
 *   blockedDates: [ // BlockedDates
 *     "STRING_VALUE",
 *   ],
 *   blockingAlarms: [ // ControlConditions
 *     { // ControlCondition
 *       type: "CLOUDWATCH", // required
 *       alarmIdentifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   outcomeAlarms: [
 *     {
 *       type: "CLOUDWATCH", // required
 *       alarmIdentifier: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdatePracticeRunConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePracticeRunConfigurationResponse
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   zonalAutoshiftStatus: "ENABLED" || "DISABLED", // required
 * //   practiceRunConfiguration: { // PracticeRunConfiguration
 * //     blockingAlarms: [ // ControlConditions
 * //       { // ControlCondition
 * //         type: "CLOUDWATCH", // required
 * //         alarmIdentifier: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     outcomeAlarms: [ // required
 * //       {
 * //         type: "CLOUDWATCH", // required
 * //         alarmIdentifier: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     blockedWindows: [ // BlockedWindows
 * //       "STRING_VALUE",
 * //     ],
 * //     blockedDates: [ // BlockedDates
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePracticeRunConfigurationCommandInput - {@link UpdatePracticeRunConfigurationCommandInput}
 * @returns {@link UpdatePracticeRunConfigurationCommandOutput}
 * @see {@link UpdatePracticeRunConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdatePracticeRunConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The input requested a resource that was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ARCZonalShiftServiceException}
 * <p>Base exception class for all service exceptions from ARCZonalShift service.</p>
 *
 */
export class UpdatePracticeRunConfigurationCommand extends $Command<
  UpdatePracticeRunConfigurationCommandInput,
  UpdatePracticeRunConfigurationCommandOutput,
  ARCZonalShiftClientResolvedConfig
> {
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
  constructor(readonly input: UpdatePracticeRunConfigurationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ARCZonalShiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePracticeRunConfigurationCommandInput, UpdatePracticeRunConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePracticeRunConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ARCZonalShiftClient";
    const commandName = "UpdatePracticeRunConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PercDataPlane",
        operation: "UpdatePracticeRunConfiguration",
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
    input: UpdatePracticeRunConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdatePracticeRunConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePracticeRunConfigurationCommandOutput> {
    return de_UpdatePracticeRunConfigurationCommand(output, context);
  }
}
