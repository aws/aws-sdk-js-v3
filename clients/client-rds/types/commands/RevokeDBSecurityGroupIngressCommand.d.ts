import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RevokeDBSecurityGroupIngressMessage, RevokeDBSecurityGroupIngressResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RevokeDBSecurityGroupIngressCommandInput = RevokeDBSecurityGroupIngressMessage;
export declare type RevokeDBSecurityGroupIngressCommandOutput = RevokeDBSecurityGroupIngressResult & __MetadataBearer;
export declare class RevokeDBSecurityGroupIngressCommand extends $Command<RevokeDBSecurityGroupIngressCommandInput, RevokeDBSecurityGroupIngressCommandOutput, RDSClientResolvedConfig> {
    readonly input: RevokeDBSecurityGroupIngressCommandInput;
    constructor(input: RevokeDBSecurityGroupIngressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeDBSecurityGroupIngressCommandInput, RevokeDBSecurityGroupIngressCommandOutput>;
    private serialize;
    private deserialize;
}
