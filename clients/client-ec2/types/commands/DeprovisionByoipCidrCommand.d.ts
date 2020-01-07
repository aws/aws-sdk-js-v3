import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeprovisionByoipCidrRequest, DeprovisionByoipCidrResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeprovisionByoipCidrCommandInput = DeprovisionByoipCidrRequest;
export declare type DeprovisionByoipCidrCommandOutput = DeprovisionByoipCidrResult & __MetadataBearer;
export declare class DeprovisionByoipCidrCommand extends $Command<DeprovisionByoipCidrCommandInput, DeprovisionByoipCidrCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeprovisionByoipCidrCommandInput;
    constructor(input: DeprovisionByoipCidrCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeprovisionByoipCidrCommandInput, DeprovisionByoipCidrCommandOutput>;
    private serialize;
    private deserialize;
}
