import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateUsageReportSubscriptionRequest, CreateUsageReportSubscriptionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateUsageReportSubscriptionCommandInput = CreateUsageReportSubscriptionRequest;
export declare type CreateUsageReportSubscriptionCommandOutput = CreateUsageReportSubscriptionResult & __MetadataBearer;
export declare class CreateUsageReportSubscriptionCommand extends $Command<CreateUsageReportSubscriptionCommandInput, CreateUsageReportSubscriptionCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: CreateUsageReportSubscriptionCommandInput;
    constructor(input: CreateUsageReportSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUsageReportSubscriptionCommandInput, CreateUsageReportSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
