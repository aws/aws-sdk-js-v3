import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetCoipPoolUsageRequest, GetCoipPoolUsageResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCoipPoolUsageCommandInput = GetCoipPoolUsageRequest;
export declare type GetCoipPoolUsageCommandOutput = GetCoipPoolUsageResult & __MetadataBearer;
export declare class GetCoipPoolUsageCommand extends $Command<GetCoipPoolUsageCommandInput, GetCoipPoolUsageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetCoipPoolUsageCommandInput;
    constructor(input: GetCoipPoolUsageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCoipPoolUsageCommandInput, GetCoipPoolUsageCommandOutput>;
    private serialize;
    private deserialize;
}
