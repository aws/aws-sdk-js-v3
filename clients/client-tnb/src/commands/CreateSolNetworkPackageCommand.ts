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
  CreateSolNetworkPackageInput,
  CreateSolNetworkPackageInputFilterSensitiveLog,
  CreateSolNetworkPackageOutput,
  CreateSolNetworkPackageOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateSolNetworkPackageCommand,
  serializeAws_restJson1CreateSolNetworkPackageCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

export interface CreateSolNetworkPackageCommandInput extends CreateSolNetworkPackageInput {}
export interface CreateSolNetworkPackageCommandOutput extends CreateSolNetworkPackageOutput, __MetadataBearer {}

/**
 * <p>Creates a network package.</p>
 *          <p>A network package is a .zip file in CSAR (Cloud Service Archive) format defines the function packages you want to deploy and the Amazon Web Services infrastructure you want to deploy them on. For more information, see <a href="https://docs.aws.amazon.com/tnb/latest/ug/network-instances.html">Network instances</a> in the <i>Amazon Web Services Telco Network Builder User Guide</i>.
 *       </p>
 *          <p>A network package consists of a network service descriptor (NSD) file (required) and any additional files (optional), such as scripts specific to your needs. For example, if you have multiple function packages in your network package, you can use the NSD to define which network functions should run in certain VPCs, subnets, or EKS clusters.</p>
 *          <p>This request creates an empty network package container with an ID. Once you create a network package, you can upload the network package content using <a href="https://docs.aws.amazon.com/TNB/latest/APIReference/API_PutSolNetworkPackageContent.html">PutSolNetworkPackageContent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, CreateSolNetworkPackageCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, CreateSolNetworkPackageCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const command = new CreateSolNetworkPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSolNetworkPackageCommandInput} for command's `input` shape.
 * @see {@link CreateSolNetworkPackageCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 */
export class CreateSolNetworkPackageCommand extends $Command<
  CreateSolNetworkPackageCommandInput,
  CreateSolNetworkPackageCommandOutput,
  TnbClientResolvedConfig
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

  constructor(readonly input: CreateSolNetworkPackageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TnbClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSolNetworkPackageCommandInput, CreateSolNetworkPackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSolNetworkPackageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "CreateSolNetworkPackageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSolNetworkPackageInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSolNetworkPackageOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSolNetworkPackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSolNetworkPackageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSolNetworkPackageCommandOutput> {
    return deserializeAws_restJson1CreateSolNetworkPackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
