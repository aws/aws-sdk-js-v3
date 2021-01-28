import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetComplianceDetailRequest, GetComplianceDetailResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetComplianceDetailCommand,
  serializeAws_json1_1GetComplianceDetailCommand,
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

export type GetComplianceDetailCommandInput = GetComplianceDetailRequest;
export type GetComplianceDetailCommandOutput = GetComplianceDetailResponse & __MetadataBearer;

/**
 * <p>Returns detailed compliance information about the specified member account. Details
 *       include resources that are in and out of compliance with the specified policy. Resources are
 *       considered noncompliant for AWS WAF and Shield Advanced policies if the specified policy has
 *       not been applied to them. Resources are considered noncompliant for security group policies if
 *       they are in scope of the policy, they violate one or more of the policy rules, and remediation
 *         is disabled or not possible. Resources are considered noncompliant for Network Firewall policies
 *         if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet,
 *         if a subnet created by the Firewall Manager doesn't have the expected route table,
 *         and for modifications to a firewall policy that violate the Firewall Manager policy's rules. </p>
 */
export class GetComplianceDetailCommand extends $Command<
  GetComplianceDetailCommandInput,
  GetComplianceDetailCommandOutput,
  FMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetComplianceDetailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetComplianceDetailCommandInput, GetComplianceDetailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "GetComplianceDetailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetComplianceDetailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetComplianceDetailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetComplianceDetailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetComplianceDetailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetComplianceDetailCommandOutput> {
    return deserializeAws_json1_1GetComplianceDetailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
