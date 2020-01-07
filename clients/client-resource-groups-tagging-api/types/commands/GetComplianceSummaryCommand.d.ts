import { ResourceGroupsTaggingAPIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsTaggingAPIClient";
import { GetComplianceSummaryInput, GetComplianceSummaryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetComplianceSummaryCommandInput = GetComplianceSummaryInput;
export declare type GetComplianceSummaryCommandOutput = GetComplianceSummaryOutput & __MetadataBearer;
export declare class GetComplianceSummaryCommand extends $Command<GetComplianceSummaryCommandInput, GetComplianceSummaryCommandOutput, ResourceGroupsTaggingAPIClientResolvedConfig> {
    readonly input: GetComplianceSummaryCommandInput;
    constructor(input: GetComplianceSummaryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsTaggingAPIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetComplianceSummaryCommandInput, GetComplianceSummaryCommandOutput>;
    private serialize;
    private deserialize;
}
