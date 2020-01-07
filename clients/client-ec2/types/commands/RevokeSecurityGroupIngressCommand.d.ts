import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RevokeSecurityGroupIngressRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RevokeSecurityGroupIngressCommandInput = RevokeSecurityGroupIngressRequest;
export declare type RevokeSecurityGroupIngressCommandOutput = __MetadataBearer;
export declare class RevokeSecurityGroupIngressCommand extends $Command<RevokeSecurityGroupIngressCommandInput, RevokeSecurityGroupIngressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RevokeSecurityGroupIngressCommandInput;
    constructor(input: RevokeSecurityGroupIngressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeSecurityGroupIngressCommandInput, RevokeSecurityGroupIngressCommandOutput>;
    private serialize;
    private deserialize;
}
