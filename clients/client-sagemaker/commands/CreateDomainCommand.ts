import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateDomainRequest, CreateDomainResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDomainCommand,
  serializeAws_json1_1CreateDomainCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateDomainCommandInput = CreateDomainRequest;
export type CreateDomainCommandOutput = CreateDomainResponse & __MetadataBearer;

/**
 * <p>Creates a <code>Domain</code> used by Amazon SageMaker Studio. A domain consists of an associated
 *     Amazon Elastic File System (EFS) volume, a list of authorized users, and a variety of security, application,
 *     policy, and Amazon Virtual Private Cloud (VPC) configurations. An AWS account is limited to one domain per region.
 *     Users within a domain can share notebook files and other artifacts with each other.</p>
 *
 *          <p>
 *             <b>EFS storage</b>
 *          </p>
 *          <p>When a domain is created, an EFS volume is created for use by all of the users within the
 *     domain. Each user receives a private home directory within the EFS volume for notebooks,
 *     Git repositories, and data files.</p>
 *          <p>SageMaker uses the AWS Key Management Service (AWS KMS) to encrypt the EFS volume attached to the domain with
 *     an AWS managed customer master key (CMK) by default. For more control, you can specify a
 *     customer managed CMK. For more information, see
 *     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/encryption-at-rest.html">Protect Data at
 *       Rest Using Encryption</a>.</p>
 *
 *          <p>
 *             <b>VPC configuration</b>
 *          </p>
 *          <p>All SageMaker Studio traffic between the domain and the EFS volume is through the specified
 *     VPC and subnets. For other Studio traffic, you can specify the <code>AppNetworkAccessType</code>
 *     parameter. <code>AppNetworkAccessType</code> corresponds to the network access type that you
 *     choose when you onboard to Studio. The following options are available:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PublicInternetOnly</code> - Non-EFS traffic goes through a VPC managed by
 *         Amazon SageMaker, which allows internet access. This is the default value.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets.
 *         Internet access is disabled by default. To allow internet access, you must specify a
 *         NAT gateway.</p>
 *                <p>When internet access is disabled, you won't be able to run a Studio notebook or to
 *         train or host models unless your VPC has an interface endpoint to the SageMaker API and runtime
 *         or a NAT gateway and your security groups allow outbound connections.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see
 *     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-notebooks-and-internet-access.html">Connect
 *       SageMaker Studio Notebooks to Resources in a VPC</a>.</p>
 */
export class CreateDomainCommand extends $Command<
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDomainCommandInput, CreateDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDomainResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDomainCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDomainCommandOutput> {
    return deserializeAws_json1_1CreateDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
