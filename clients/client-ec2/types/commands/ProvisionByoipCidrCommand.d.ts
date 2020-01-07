import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ProvisionByoipCidrRequest, ProvisionByoipCidrResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ProvisionByoipCidrCommandInput = ProvisionByoipCidrRequest;
export declare type ProvisionByoipCidrCommandOutput = ProvisionByoipCidrResult & __MetadataBearer;
export declare class ProvisionByoipCidrCommand extends $Command<ProvisionByoipCidrCommandInput, ProvisionByoipCidrCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ProvisionByoipCidrCommandInput;
    constructor(input: ProvisionByoipCidrCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ProvisionByoipCidrCommandInput, ProvisionByoipCidrCommandOutput>;
    private serialize;
    private deserialize;
}
