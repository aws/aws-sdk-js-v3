import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { AuthorizeCacheSecurityGroupIngressMessage, AuthorizeCacheSecurityGroupIngressResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AuthorizeCacheSecurityGroupIngressCommandInput = AuthorizeCacheSecurityGroupIngressMessage;
export declare type AuthorizeCacheSecurityGroupIngressCommandOutput = AuthorizeCacheSecurityGroupIngressResult & __MetadataBearer;
export declare class AuthorizeCacheSecurityGroupIngressCommand extends $Command<AuthorizeCacheSecurityGroupIngressCommandInput, AuthorizeCacheSecurityGroupIngressCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: AuthorizeCacheSecurityGroupIngressCommandInput;
    constructor(input: AuthorizeCacheSecurityGroupIngressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AuthorizeCacheSecurityGroupIngressCommandInput, AuthorizeCacheSecurityGroupIngressCommandOutput>;
    private serialize;
    private deserialize;
}
