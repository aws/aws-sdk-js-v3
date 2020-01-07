import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListResourceComplianceSummariesRequest, ListResourceComplianceSummariesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResourceComplianceSummariesCommandInput = ListResourceComplianceSummariesRequest;
export declare type ListResourceComplianceSummariesCommandOutput = ListResourceComplianceSummariesResult & __MetadataBearer;
export declare class ListResourceComplianceSummariesCommand extends $Command<ListResourceComplianceSummariesCommandInput, ListResourceComplianceSummariesCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListResourceComplianceSummariesCommandInput;
    constructor(input: ListResourceComplianceSummariesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourceComplianceSummariesCommandInput, ListResourceComplianceSummariesCommandOutput>;
    private serialize;
    private deserialize;
}
