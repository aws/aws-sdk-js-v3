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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import {
  CreateDataRepositoryAssociationRequest,
  CreateDataRepositoryAssociationRequestFilterSensitiveLog,
  CreateDataRepositoryAssociationResponse,
  CreateDataRepositoryAssociationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDataRepositoryAssociationCommand,
  serializeAws_json1_1CreateDataRepositoryAssociationCommand,
} from "../protocols/Aws_json1_1";

export interface CreateDataRepositoryAssociationCommandInput extends CreateDataRepositoryAssociationRequest {}
export interface CreateDataRepositoryAssociationCommandOutput
  extends CreateDataRepositoryAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Creates an Amazon FSx for Lustre data repository association (DRA). A data
 *             repository association is a link between a directory on the file system and
 *             an Amazon S3 bucket or prefix. You can have a maximum of 8 data repository
 *             associations on a file system. Data repository associations are supported only
 *             for file systems with the <code>Persistent_2</code> deployment type.</p>
 *          <p>Each data repository association must have a unique Amazon FSx file
 *             system directory and a unique S3 bucket or prefix associated with it. You
 *             can configure a data repository association for automatic import only,
 *             for automatic export only, or for both. To learn more about linking a
 *             data repository to your file system, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p>
 *          <note>
 *             <p>
 *                <code>CreateDataRepositoryAssociation</code> isn't supported
 *             on Amazon File Cache resources. To create a DRA on Amazon File Cache,
 *             use the <code>CreateFileCache</code> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateDataRepositoryAssociationCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateDataRepositoryAssociationCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateDataRepositoryAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataRepositoryAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateDataRepositoryAssociationCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 */
export class CreateDataRepositoryAssociationCommand extends $Command<
  CreateDataRepositoryAssociationCommandInput,
  CreateDataRepositoryAssociationCommandOutput,
  FSxClientResolvedConfig
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

  constructor(readonly input: CreateDataRepositoryAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataRepositoryAssociationCommandInput, CreateDataRepositoryAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataRepositoryAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateDataRepositoryAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDataRepositoryAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDataRepositoryAssociationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateDataRepositoryAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDataRepositoryAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDataRepositoryAssociationCommandOutput> {
    return deserializeAws_json1_1CreateDataRepositoryAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
