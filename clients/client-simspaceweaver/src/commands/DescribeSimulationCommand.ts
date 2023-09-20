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

import { DescribeSimulationInput, DescribeSimulationOutput } from "../models/models_0";
import { de_DescribeSimulationCommand, se_DescribeSimulationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSimulationCommand}.
 */
export interface DescribeSimulationCommandInput extends DescribeSimulationInput {}
/**
 * @public
 *
 * The output of {@link DescribeSimulationCommand}.
 */
export interface DescribeSimulationCommandOutput extends DescribeSimulationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the current state of the given simulation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, DescribeSimulationCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, DescribeSimulationCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * const client = new SimSpaceWeaverClient(config);
 * const input = { // DescribeSimulationInput
 *   Simulation: "STRING_VALUE", // required
 * };
 * const command = new DescribeSimulationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSimulationOutput
 * //   Name: "STRING_VALUE",
 * //   ExecutionId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   Status: "STRING_VALUE",
 * //   TargetStatus: "STRING_VALUE",
 * //   SchemaS3Location: { // S3Location
 * //     BucketName: "STRING_VALUE", // required
 * //     ObjectKey: "STRING_VALUE", // required
 * //   },
 * //   SchemaError: "STRING_VALUE",
 * //   LoggingConfiguration: { // LoggingConfiguration
 * //     Destinations: [ // LogDestinations
 * //       { // LogDestination
 * //         CloudWatchLogsLogGroup: { // CloudWatchLogsLogGroup
 * //           LogGroupArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   LiveSimulationState: { // LiveSimulationState
 * //     Domains: [ // DomainList
 * //       { // Domain
 * //         Name: "STRING_VALUE",
 * //         Lifecycle: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Clocks: [ // SimulationClockList
 * //       { // SimulationClock
 * //         Status: "STRING_VALUE",
 * //         TargetStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   MaximumDuration: "STRING_VALUE",
 * //   SnapshotS3Location: {
 * //     BucketName: "STRING_VALUE", // required
 * //     ObjectKey: "STRING_VALUE", // required
 * //   },
 * //   StartError: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSimulationCommandInput - {@link DescribeSimulationCommandInput}
 * @returns {@link DescribeSimulationCommandOutput}
 * @see {@link DescribeSimulationCommandInput} for command's `input` shape.
 * @see {@link DescribeSimulationCommandOutput} for command's `response` shape.
 * @see {@link SimSpaceWeaverClientResolvedConfig | config} for SimSpaceWeaverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SimSpaceWeaverServiceException}
 * <p>Base exception class for all service exceptions from SimSpaceWeaver service.</p>
 *
 */
export class DescribeSimulationCommand extends $Command<
  DescribeSimulationCommandInput,
  DescribeSimulationCommandOutput,
  SimSpaceWeaverClientResolvedConfig
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
  constructor(readonly input: DescribeSimulationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SimSpaceWeaverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSimulationCommandInput, DescribeSimulationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSimulationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SimSpaceWeaverClient";
    const commandName = "DescribeSimulationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimSpaceWeaver",
        operation: "DescribeSimulation",
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
  private serialize(input: DescribeSimulationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSimulationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSimulationCommandOutput> {
    return de_DescribeSimulationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
