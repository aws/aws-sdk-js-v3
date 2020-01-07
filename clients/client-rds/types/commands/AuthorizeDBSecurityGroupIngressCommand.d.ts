import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { AuthorizeDBSecurityGroupIngressMessage, AuthorizeDBSecurityGroupIngressResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AuthorizeDBSecurityGroupIngressCommandInput = AuthorizeDBSecurityGroupIngressMessage;
export declare type AuthorizeDBSecurityGroupIngressCommandOutput = AuthorizeDBSecurityGroupIngressResult & __MetadataBearer;
export declare class AuthorizeDBSecurityGroupIngressCommand extends $Command<AuthorizeDBSecurityGroupIngressCommandInput, AuthorizeDBSecurityGroupIngressCommandOutput, RDSClientResolvedConfig> {
    readonly input: AuthorizeDBSecurityGroupIngressCommandInput;
    constructor(input: AuthorizeDBSecurityGroupIngressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AuthorizeDBSecurityGroupIngressCommandInput, AuthorizeDBSecurityGroupIngressCommandOutput>;
    private serialize;
    private deserialize;
}
