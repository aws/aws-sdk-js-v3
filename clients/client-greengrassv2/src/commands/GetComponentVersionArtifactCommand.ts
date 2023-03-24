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

import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { GetComponentVersionArtifactRequest, GetComponentVersionArtifactResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetComponentVersionArtifactCommand,
  serializeAws_restJson1GetComponentVersionArtifactCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetComponentVersionArtifactCommand}.
 */
export interface GetComponentVersionArtifactCommandInput extends GetComponentVersionArtifactRequest {}
/**
 * @public
 *
 * The output of {@link GetComponentVersionArtifactCommand}.
 */
export interface GetComponentVersionArtifactCommandOutput
  extends GetComponentVersionArtifactResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the pre-signed URL to download a public or a Lambda component artifact. Core devices call this
 *       operation to identify the URL that they can use to download an artifact to install.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, GetComponentVersionArtifactCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, GetComponentVersionArtifactCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const input = {
 *   arn: "STRING_VALUE", // required
 *   artifactName: "STRING_VALUE", // required
 * };
 * const command = new GetComponentVersionArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetComponentVersionArtifactCommandInput - {@link GetComponentVersionArtifactCommandInput}
 * @returns {@link GetComponentVersionArtifactCommandOutput}
 * @see {@link GetComponentVersionArtifactCommandInput} for command's `input` shape.
 * @see {@link GetComponentVersionArtifactCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 *
 */
export class GetComponentVersionArtifactCommand extends $Command<
  GetComponentVersionArtifactCommandInput,
  GetComponentVersionArtifactCommandOutput,
  GreengrassV2ClientResolvedConfig
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
  constructor(readonly input: GetComponentVersionArtifactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetComponentVersionArtifactCommandInput, GetComponentVersionArtifactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetComponentVersionArtifactCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "GetComponentVersionArtifactCommand";
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
  private serialize(input: GetComponentVersionArtifactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetComponentVersionArtifactCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetComponentVersionArtifactCommandOutput> {
    return deserializeAws_restJson1GetComponentVersionArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
