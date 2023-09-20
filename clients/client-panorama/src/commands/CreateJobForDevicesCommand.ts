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

import { CreateJobForDevicesRequest, CreateJobForDevicesResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_CreateJobForDevicesCommand, se_CreateJobForDevicesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateJobForDevicesCommand}.
 */
export interface CreateJobForDevicesCommandInput extends CreateJobForDevicesRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobForDevicesCommand}.
 */
export interface CreateJobForDevicesCommandOutput extends CreateJobForDevicesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a job to run on a device. A job can update a device's software or reboot it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, CreateJobForDevicesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, CreateJobForDevicesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // CreateJobForDevicesRequest
 *   DeviceIds: [ // DeviceIdList // required
 *     "STRING_VALUE",
 *   ],
 *   DeviceJobConfig: { // DeviceJobConfig
 *     OTAJobConfig: { // OTAJobConfig
 *       ImageVersion: "STRING_VALUE", // required
 *       AllowMajorVersionUpdate: true || false,
 *     },
 *   },
 *   JobType: "STRING_VALUE", // required
 * };
 * const command = new CreateJobForDevicesCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobForDevicesResponse
 * //   Jobs: [ // JobList // required
 * //     { // Job
 * //       JobId: "STRING_VALUE",
 * //       DeviceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateJobForDevicesCommandInput - {@link CreateJobForDevicesCommandInput}
 * @returns {@link CreateJobForDevicesCommandOutput}
 * @see {@link CreateJobForDevicesCommandInput} for command's `input` shape.
 * @see {@link CreateJobForDevicesCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 */
export class CreateJobForDevicesCommand extends $Command<
  CreateJobForDevicesCommandInput,
  CreateJobForDevicesCommandOutput,
  PanoramaClientResolvedConfig
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
  constructor(readonly input: CreateJobForDevicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateJobForDevicesCommandInput, CreateJobForDevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateJobForDevicesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "CreateJobForDevicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OmniCloudServiceLambda",
        operation: "CreateJobForDevices",
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
  private serialize(input: CreateJobForDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateJobForDevicesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateJobForDevicesCommandOutput> {
    return de_CreateJobForDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
