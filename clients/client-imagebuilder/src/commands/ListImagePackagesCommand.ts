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

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImagePackagesRequest, ListImagePackagesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListImagePackagesCommand,
  serializeAws_restJson1ListImagePackagesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListImagePackagesCommand}.
 */
export interface ListImagePackagesCommandInput extends ListImagePackagesRequest {}
/**
 * @public
 *
 * The output of {@link ListImagePackagesCommand}.
 */
export interface ListImagePackagesCommandOutput extends ListImagePackagesResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the Packages that are associated with an Image Build Version, as determined by Amazon Web Services Systems Manager Inventory at build time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagePackagesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagePackagesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ListImagePackagesRequest
 *   imageBuildVersionArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListImagePackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListImagePackagesCommandInput - {@link ListImagePackagesCommandInput}
 * @returns {@link ListImagePackagesCommandOutput}
 * @see {@link ListImagePackagesCommandInput} for command's `input` shape.
 * @see {@link ListImagePackagesCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or resource on
 * 			behalf of a user that doesn't have permissions to use the action or resource, or specifying an
 * 			invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have made a request for an action that is not supported by the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 *
 */
export class ListImagePackagesCommand extends $Command<
  ListImagePackagesCommandInput,
  ListImagePackagesCommandOutput,
  ImagebuilderClientResolvedConfig
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
  constructor(readonly input: ListImagePackagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListImagePackagesCommandInput, ListImagePackagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListImagePackagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListImagePackagesCommand";
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
  private serialize(input: ListImagePackagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListImagePackagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImagePackagesCommandOutput> {
    return deserializeAws_restJson1ListImagePackagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
