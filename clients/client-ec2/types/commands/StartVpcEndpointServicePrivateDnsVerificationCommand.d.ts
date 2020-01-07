import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { StartVpcEndpointServicePrivateDnsVerificationRequest, StartVpcEndpointServicePrivateDnsVerificationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartVpcEndpointServicePrivateDnsVerificationCommandInput = StartVpcEndpointServicePrivateDnsVerificationRequest;
export declare type StartVpcEndpointServicePrivateDnsVerificationCommandOutput = StartVpcEndpointServicePrivateDnsVerificationResult & __MetadataBearer;
export declare class StartVpcEndpointServicePrivateDnsVerificationCommand extends $Command<StartVpcEndpointServicePrivateDnsVerificationCommandInput, StartVpcEndpointServicePrivateDnsVerificationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: StartVpcEndpointServicePrivateDnsVerificationCommandInput;
    constructor(input: StartVpcEndpointServicePrivateDnsVerificationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartVpcEndpointServicePrivateDnsVerificationCommandInput, StartVpcEndpointServicePrivateDnsVerificationCommandOutput>;
    private serialize;
    private deserialize;
}
