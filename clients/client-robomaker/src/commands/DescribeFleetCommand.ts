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

import { DescribeFleetRequest, DescribeFleetResponse } from "../models/models_0";
import { de_DescribeFleetCommand, se_DescribeFleetCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetCommand}.
 */
export interface DescribeFleetCommandInput extends DescribeFleetRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetCommand}.
 */
export interface DescribeFleetCommandOutput extends DescribeFleetResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Describes a fleet.</p>
 *          <important>
 *             <p>This API will no longer be supported as of May 2, 2022. Use it to remove resources that were created for Deployment Service.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeFleetCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeFleetCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // DescribeFleetRequest
 *   fleet: "STRING_VALUE", // required
 * };
 * const command = new DescribeFleetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   robots: [ // Robots
 * //     { // Robot
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       fleetArn: "STRING_VALUE",
 * //       status: "Available" || "Registered" || "PendingNewDeployment" || "Deploying" || "Failed" || "InSync" || "NoResponse",
 * //       greenGrassGroupId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       architecture: "X86_64" || "ARM64" || "ARMHF",
 * //       lastDeploymentJob: "STRING_VALUE",
 * //       lastDeploymentTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"),
 * //   lastDeploymentStatus: "Pending" || "Preparing" || "InProgress" || "Failed" || "Succeeded" || "Canceled",
 * //   lastDeploymentJob: "STRING_VALUE",
 * //   lastDeploymentTime: new Date("TIMESTAMP"),
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFleetCommandInput - {@link DescribeFleetCommandInput}
 * @returns {@link DescribeFleetCommandOutput}
 * @see {@link DescribeFleetCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 */
export class DescribeFleetCommand extends $Command<
  DescribeFleetCommandInput,
  DescribeFleetCommandOutput,
  RoboMakerClientResolvedConfig
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
  constructor(readonly input: DescribeFleetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFleetCommandInput, DescribeFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeFleetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "DescribeFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "robomaker",
        operation: "DescribeFleet",
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
  private serialize(input: DescribeFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFleetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFleetCommandOutput> {
    return de_DescribeFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
