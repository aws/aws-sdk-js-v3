import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetComplianceSummaryByResourceTypeRequest, GetComplianceSummaryByResourceTypeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetComplianceSummaryByResourceTypeCommandInput = GetComplianceSummaryByResourceTypeRequest;
export declare type GetComplianceSummaryByResourceTypeCommandOutput = GetComplianceSummaryByResourceTypeResponse & __MetadataBearer;
export declare class GetComplianceSummaryByResourceTypeCommand extends $Command<GetComplianceSummaryByResourceTypeCommandInput, GetComplianceSummaryByResourceTypeCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetComplianceSummaryByResourceTypeCommandInput;
    constructor(input: GetComplianceSummaryByResourceTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetComplianceSummaryByResourceTypeCommandInput, GetComplianceSummaryByResourceTypeCommandOutput>;
    private serialize;
    private deserialize;
}
