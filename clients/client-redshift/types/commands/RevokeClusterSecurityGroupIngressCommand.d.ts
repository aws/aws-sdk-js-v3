import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RevokeClusterSecurityGroupIngressMessage, RevokeClusterSecurityGroupIngressResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RevokeClusterSecurityGroupIngressCommandInput = RevokeClusterSecurityGroupIngressMessage;
export declare type RevokeClusterSecurityGroupIngressCommandOutput = RevokeClusterSecurityGroupIngressResult & __MetadataBearer;
export declare class RevokeClusterSecurityGroupIngressCommand extends $Command<RevokeClusterSecurityGroupIngressCommandInput, RevokeClusterSecurityGroupIngressCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: RevokeClusterSecurityGroupIngressCommandInput;
    constructor(input: RevokeClusterSecurityGroupIngressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeClusterSecurityGroupIngressCommandInput, RevokeClusterSecurityGroupIngressCommandOutput>;
    private serialize;
    private deserialize;
}
