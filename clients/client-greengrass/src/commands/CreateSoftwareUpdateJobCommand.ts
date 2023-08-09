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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateSoftwareUpdateJobRequest, CreateSoftwareUpdateJobResponse } from "../models/models_0";
import { de_CreateSoftwareUpdateJobCommand, se_CreateSoftwareUpdateJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSoftwareUpdateJobCommand}.
 */
export interface CreateSoftwareUpdateJobCommandInput extends CreateSoftwareUpdateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateSoftwareUpdateJobCommand}.
 */
export interface CreateSoftwareUpdateJobCommandOutput extends CreateSoftwareUpdateJobResponse, __MetadataBearer {}

/**
 * @public
 * Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateSoftwareUpdateJobCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateSoftwareUpdateJobCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // CreateSoftwareUpdateJobRequest
 *   AmznClientToken: "STRING_VALUE",
 *   S3UrlSignerRole: "STRING_VALUE", // required
 *   SoftwareToUpdate: "core" || "ota_agent", // required
 *   UpdateAgentLogLevel: "NONE" || "TRACE" || "DEBUG" || "VERBOSE" || "INFO" || "WARN" || "ERROR" || "FATAL",
 *   UpdateTargets: [ // UpdateTargets // required
 *     "STRING_VALUE",
 *   ],
 *   UpdateTargetsArchitecture: "armv6l" || "armv7l" || "x86_64" || "aarch64", // required
 *   UpdateTargetsOperatingSystem: "ubuntu" || "raspbian" || "amazon_linux" || "openwrt", // required
 * };
 * const command = new CreateSoftwareUpdateJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateSoftwareUpdateJobResponse
 * //   IotJobArn: "STRING_VALUE",
 * //   IotJobId: "STRING_VALUE",
 * //   PlatformSoftwareVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSoftwareUpdateJobCommandInput - {@link CreateSoftwareUpdateJobCommandInput}
 * @returns {@link CreateSoftwareUpdateJobCommandOutput}
 * @see {@link CreateSoftwareUpdateJobCommandInput} for command's `input` shape.
 * @see {@link CreateSoftwareUpdateJobCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 */
export class CreateSoftwareUpdateJobCommand extends $Command<
  CreateSoftwareUpdateJobCommandInput,
  CreateSoftwareUpdateJobCommandOutput,
  GreengrassClientResolvedConfig
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
  constructor(readonly input: CreateSoftwareUpdateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSoftwareUpdateJobCommandInput, CreateSoftwareUpdateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSoftwareUpdateJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateSoftwareUpdateJobCommand";
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
  private serialize(input: CreateSoftwareUpdateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSoftwareUpdateJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSoftwareUpdateJobCommandOutput> {
    return de_CreateSoftwareUpdateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
