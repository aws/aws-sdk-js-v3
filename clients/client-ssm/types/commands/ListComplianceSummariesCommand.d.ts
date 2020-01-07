import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListComplianceSummariesRequest, ListComplianceSummariesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListComplianceSummariesCommandInput = ListComplianceSummariesRequest;
export declare type ListComplianceSummariesCommandOutput = ListComplianceSummariesResult & __MetadataBearer;
export declare class ListComplianceSummariesCommand extends $Command<ListComplianceSummariesCommandInput, ListComplianceSummariesCommandOutput, SSMClientResolvedConfig> {
    readonly input: ListComplianceSummariesCommandInput;
    constructor(input: ListComplianceSummariesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListComplianceSummariesCommandInput, ListComplianceSummariesCommandOutput>;
    private serialize;
    private deserialize;
}
