import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AuthorizeSecurityGroupIngressRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AuthorizeSecurityGroupIngressCommandInput = AuthorizeSecurityGroupIngressRequest;
export declare type AuthorizeSecurityGroupIngressCommandOutput = __MetadataBearer;
export declare class AuthorizeSecurityGroupIngressCommand extends $Command<AuthorizeSecurityGroupIngressCommandInput, AuthorizeSecurityGroupIngressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AuthorizeSecurityGroupIngressCommandInput;
    constructor(input: AuthorizeSecurityGroupIngressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AuthorizeSecurityGroupIngressCommandInput, AuthorizeSecurityGroupIngressCommandOutput>;
    private serialize;
    private deserialize;
}
