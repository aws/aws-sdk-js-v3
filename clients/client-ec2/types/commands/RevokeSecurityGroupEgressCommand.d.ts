import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RevokeSecurityGroupEgressRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RevokeSecurityGroupEgressCommandInput = RevokeSecurityGroupEgressRequest;
export declare type RevokeSecurityGroupEgressCommandOutput = __MetadataBearer;
export declare class RevokeSecurityGroupEgressCommand extends $Command<RevokeSecurityGroupEgressCommandInput, RevokeSecurityGroupEgressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RevokeSecurityGroupEgressCommandInput;
    constructor(input: RevokeSecurityGroupEgressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeSecurityGroupEgressCommandInput, RevokeSecurityGroupEgressCommandOutput>;
    private serialize;
    private deserialize;
}
