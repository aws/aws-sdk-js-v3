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

import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import {
  CreateChannelRequest,
  CreateChannelResponse,
  CreateChannelResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateChannelCommand, se_CreateChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandInput extends CreateChannelRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandOutput extends CreateChannelResponse, __MetadataBearer {}

/**
 * @public
 * Creates a new Channel.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, CreateChannelCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, CreateChannelCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const input = { // CreateChannelRequest
 *   Description: "STRING_VALUE",
 *   Id: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateChannelCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelResponse
 * //   Arn: "STRING_VALUE",
 * //   CreatedAt: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EgressAccessLogs: { // EgressAccessLogs
 * //     LogGroupName: "STRING_VALUE",
 * //   },
 * //   HlsIngest: { // HlsIngest
 * //     IngestEndpoints: [ // __listOfIngestEndpoint
 * //       { // IngestEndpoint
 * //         Id: "STRING_VALUE",
 * //         Password: "STRING_VALUE",
 * //         Url: "STRING_VALUE",
 * //         Username: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   Id: "STRING_VALUE",
 * //   IngressAccessLogs: { // IngressAccessLogs
 * //     LogGroupName: "STRING_VALUE",
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateChannelCommandInput - {@link CreateChannelCommandInput}
 * @returns {@link CreateChannelCommandOutput}
 * @see {@link CreateChannelCommandInput} for command's `input` shape.
 * @see {@link CreateChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for MediaPackageClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The client is not authorized to access the requested resource.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The client has exceeded their resource or throttling limits.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  The parameters sent in the request are not valid.
 *
 * @throws {@link MediaPackageServiceException}
 * <p>Base exception class for all service exceptions from MediaPackage service.</p>
 *
 */
export class CreateChannelCommand extends $Command<
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
  MediaPackageClientResolvedConfig
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
  constructor(readonly input: CreateChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateChannelCommandInput, CreateChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateChannelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "CreateChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CreateChannelResponseFilterSensitiveLog,
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
  private serialize(input: CreateChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateChannelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateChannelCommandOutput> {
    return de_CreateChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
