import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { RevokeCacheSecurityGroupIngressMessage, RevokeCacheSecurityGroupIngressResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RevokeCacheSecurityGroupIngressCommandInput = RevokeCacheSecurityGroupIngressMessage;
export declare type RevokeCacheSecurityGroupIngressCommandOutput = RevokeCacheSecurityGroupIngressResult & __MetadataBearer;
export declare class RevokeCacheSecurityGroupIngressCommand extends $Command<RevokeCacheSecurityGroupIngressCommandInput, RevokeCacheSecurityGroupIngressCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: RevokeCacheSecurityGroupIngressCommandInput;
    constructor(input: RevokeCacheSecurityGroupIngressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeCacheSecurityGroupIngressCommandInput, RevokeCacheSecurityGroupIngressCommandOutput>;
    private serialize;
    private deserialize;
}
