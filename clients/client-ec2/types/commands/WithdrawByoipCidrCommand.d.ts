import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { WithdrawByoipCidrRequest, WithdrawByoipCidrResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type WithdrawByoipCidrCommandInput = WithdrawByoipCidrRequest;
export declare type WithdrawByoipCidrCommandOutput = WithdrawByoipCidrResult & __MetadataBearer;
export declare class WithdrawByoipCidrCommand extends $Command<WithdrawByoipCidrCommandInput, WithdrawByoipCidrCommandOutput, EC2ClientResolvedConfig> {
    readonly input: WithdrawByoipCidrCommandInput;
    constructor(input: WithdrawByoipCidrCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<WithdrawByoipCidrCommandInput, WithdrawByoipCidrCommandOutput>;
    private serialize;
    private deserialize;
}
