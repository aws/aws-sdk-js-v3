// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateLaunchProfileRequest,
  CreateLaunchProfileRequestFilterSensitiveLog,
  CreateLaunchProfileResponse,
  CreateLaunchProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1CreateLaunchProfileCommand,
  serializeAws_restJson1CreateLaunchProfileCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateLaunchProfileCommand}.
 */
export interface CreateLaunchProfileCommandInput extends CreateLaunchProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateLaunchProfileCommand}.
 */
export interface CreateLaunchProfileCommandOutput extends CreateLaunchProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Create a launch profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, CreateLaunchProfileCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, CreateLaunchProfileCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = {
 *   clientToken: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   ec2SubnetIds: [ // required
 *     "STRING_VALUE",
 *   ],
 *   launchProfileProtocolVersions: [ // required
 *     "STRING_VALUE",
 *   ],
 *   name: "STRING_VALUE", // required
 *   streamConfiguration: {
 *     clipboardMode: "ENABLED" || "DISABLED", // required
 *     ec2InstanceTypes: [ // required
 *       "g4dn.xlarge" || "g4dn.2xlarge" || "g4dn.4xlarge" || "g4dn.8xlarge" || "g4dn.12xlarge" || "g4dn.16xlarge" || "g3.4xlarge" || "g3s.xlarge" || "g5.xlarge" || "g5.2xlarge" || "g5.4xlarge" || "g5.8xlarge" || "g5.16xlarge",
 *     ],
 *     maxSessionLengthInMinutes: Number("int"),
 *     streamingImageIds: [ // required
 *       "STRING_VALUE",
 *     ],
 *     maxStoppedSessionLengthInMinutes: Number("int"),
 *     sessionStorage: {
 *       root: {
 *         linux: "STRING_VALUE",
 *         windows: "STRING_VALUE",
 *       },
 *       mode: [ // required
 *         "UPLOAD",
 *       ],
 *     },
 *     sessionBackup: {
 *       mode: "AUTOMATIC" || "DEACTIVATED",
 *       maxBackupsToRetain: Number("int"),
 *     },
 *     sessionPersistenceMode: "DEACTIVATED" || "ACTIVATED",
 *     volumeConfiguration: {
 *       size: Number("int"),
 *       throughput: Number("int"),
 *       iops: Number("int"),
 *     },
 *     automaticTerminationMode: "DEACTIVATED" || "ACTIVATED",
 *   },
 *   studioComponentIds: [ // required
 *     "STRING_VALUE",
 *   ],
 *   studioId: "STRING_VALUE", // required
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLaunchProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateLaunchProfileCommandInput - {@link CreateLaunchProfileCommandInput}
 * @returns {@link CreateLaunchProfileCommandOutput}
 * @see {@link CreateLaunchProfileCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchProfileCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 *
 */
export class CreateLaunchProfileCommand extends $Command<
  CreateLaunchProfileCommandInput,
  CreateLaunchProfileCommandOutput,
  NimbleClientResolvedConfig
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
  constructor(readonly input: CreateLaunchProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLaunchProfileCommandInput, CreateLaunchProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLaunchProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "CreateLaunchProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLaunchProfileRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLaunchProfileResponseFilterSensitiveLog,
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
  private serialize(input: CreateLaunchProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateLaunchProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLaunchProfileCommandOutput> {
    return deserializeAws_restJson1CreateLaunchProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
