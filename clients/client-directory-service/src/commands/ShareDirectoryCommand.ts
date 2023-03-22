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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import {
  ShareDirectoryRequest,
  ShareDirectoryRequestFilterSensitiveLog,
  ShareDirectoryResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1ShareDirectoryCommand,
  serializeAws_json1_1ShareDirectoryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ShareDirectoryCommand}.
 */
export interface ShareDirectoryCommandInput extends ShareDirectoryRequest {}
/**
 * @public
 *
 * The output of {@link ShareDirectoryCommand}.
 */
export interface ShareDirectoryCommandOutput extends ShareDirectoryResult, __MetadataBearer {}

/**
 * @public
 * <p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory
 *       owner) with another Amazon Web Services account (directory consumer). With this operation you can use your
 *       directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p>
 *          <p>When you share your Managed Microsoft AD directory, Directory Service creates a
 *       shared directory in the directory consumer account. This shared directory contains the
 *       metadata to provide access to the directory within the directory owner account. The shared
 *       directory is visible in all VPCs in the directory consumer account.</p>
 *          <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be
 *       shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>). It
 *       also determines whether you can share the directory with any other Amazon Web Services account either inside
 *       or outside of the organization (<code>HANDSHAKE</code>).</p>
 *          <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called,
 *       which sends a directory sharing request to the directory consumer. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ShareDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ShareDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ShareDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ShareDirectoryCommandInput - {@link ShareDirectoryCommandInput}
 * @returns {@link ShareDirectoryCommandOutput}
 * @see {@link ShareDirectoryCommandInput} for command's `input` shape.
 * @see {@link ShareDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Client authentication is not available in this region at this time.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryAlreadySharedException} (client fault)
 *  <p>The specified directory has already been shared with this Amazon Web Services account.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link InvalidTargetException} (client fault)
 *  <p>The specified shared target is not valid.</p>
 *
 * @throws {@link OrganizationsException} (client fault)
 *  <p>Exception encountered while trying to access your Amazon Web Services organization.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link ShareLimitExceededException} (client fault)
 *  <p>The maximum number of Amazon Web Services accounts that you can share with this directory has been
 *             reached.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 *
 */
export class ShareDirectoryCommand extends $Command<
  ShareDirectoryCommandInput,
  ShareDirectoryCommandOutput,
  DirectoryServiceClientResolvedConfig
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
  constructor(readonly input: ShareDirectoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ShareDirectoryCommandInput, ShareDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ShareDirectoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "ShareDirectoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ShareDirectoryRequestFilterSensitiveLog,
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
  private serialize(input: ShareDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ShareDirectoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ShareDirectoryCommandOutput> {
    return deserializeAws_json1_1ShareDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
