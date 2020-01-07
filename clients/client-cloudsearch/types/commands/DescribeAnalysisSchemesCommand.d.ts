import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeAnalysisSchemesRequest, DescribeAnalysisSchemesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAnalysisSchemesCommandInput = DescribeAnalysisSchemesRequest;
export declare type DescribeAnalysisSchemesCommandOutput = DescribeAnalysisSchemesResponse & __MetadataBearer;
export declare class DescribeAnalysisSchemesCommand extends $Command<DescribeAnalysisSchemesCommandInput, DescribeAnalysisSchemesCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DescribeAnalysisSchemesCommandInput;
    constructor(input: DescribeAnalysisSchemesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAnalysisSchemesCommandInput, DescribeAnalysisSchemesCommandOutput>;
    private serialize;
    private deserialize;
}
