import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DeleteUsageReportSubscriptionRequest, DeleteUsageReportSubscriptionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUsageReportSubscriptionCommandInput = DeleteUsageReportSubscriptionRequest;
export declare type DeleteUsageReportSubscriptionCommandOutput = DeleteUsageReportSubscriptionResult & __MetadataBearer;
export declare class DeleteUsageReportSubscriptionCommand extends $Command<DeleteUsageReportSubscriptionCommandInput, DeleteUsageReportSubscriptionCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DeleteUsageReportSubscriptionCommandInput;
    constructor(input: DeleteUsageReportSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUsageReportSubscriptionCommandInput, DeleteUsageReportSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
