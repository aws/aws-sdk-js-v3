import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AuthorizeSecurityGroupEgressRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AuthorizeSecurityGroupEgressCommandInput = AuthorizeSecurityGroupEgressRequest;
export declare type AuthorizeSecurityGroupEgressCommandOutput = __MetadataBearer;
export declare class AuthorizeSecurityGroupEgressCommand extends $Command<AuthorizeSecurityGroupEgressCommandInput, AuthorizeSecurityGroupEgressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AuthorizeSecurityGroupEgressCommandInput;
    constructor(input: AuthorizeSecurityGroupEgressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AuthorizeSecurityGroupEgressCommandInput, AuthorizeSecurityGroupEgressCommandOutput>;
    private serialize;
    private deserialize;
}
