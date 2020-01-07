import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ResetInstanceAttributeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetInstanceAttributeCommandInput = ResetInstanceAttributeRequest;
export declare type ResetInstanceAttributeCommandOutput = __MetadataBearer;
export declare class ResetInstanceAttributeCommand extends $Command<ResetInstanceAttributeCommandInput, ResetInstanceAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ResetInstanceAttributeCommandInput;
    constructor(input: ResetInstanceAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetInstanceAttributeCommandInput, ResetInstanceAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
