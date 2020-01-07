import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { AuthorizeClusterSecurityGroupIngressMessage, AuthorizeClusterSecurityGroupIngressResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AuthorizeClusterSecurityGroupIngressCommandInput = AuthorizeClusterSecurityGroupIngressMessage;
export declare type AuthorizeClusterSecurityGroupIngressCommandOutput = AuthorizeClusterSecurityGroupIngressResult & __MetadataBearer;
export declare class AuthorizeClusterSecurityGroupIngressCommand extends $Command<AuthorizeClusterSecurityGroupIngressCommandInput, AuthorizeClusterSecurityGroupIngressCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: AuthorizeClusterSecurityGroupIngressCommandInput;
    constructor(input: AuthorizeClusterSecurityGroupIngressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AuthorizeClusterSecurityGroupIngressCommandInput, AuthorizeClusterSecurityGroupIngressCommandOutput>;
    private serialize;
    private deserialize;
}
