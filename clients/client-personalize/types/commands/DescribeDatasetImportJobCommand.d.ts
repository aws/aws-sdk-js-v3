import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeDatasetImportJobRequest, DescribeDatasetImportJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDatasetImportJobCommandInput = DescribeDatasetImportJobRequest;
export declare type DescribeDatasetImportJobCommandOutput = DescribeDatasetImportJobResponse & __MetadataBearer;
export declare class DescribeDatasetImportJobCommand extends $Command<DescribeDatasetImportJobCommandInput, DescribeDatasetImportJobCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeDatasetImportJobCommandInput;
    constructor(input: DescribeDatasetImportJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDatasetImportJobCommandInput, DescribeDatasetImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
