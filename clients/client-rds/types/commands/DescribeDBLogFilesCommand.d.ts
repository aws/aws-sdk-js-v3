import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBLogFilesMessage, DescribeDBLogFilesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBLogFilesCommandInput = DescribeDBLogFilesMessage;
export declare type DescribeDBLogFilesCommandOutput = DescribeDBLogFilesResponse & __MetadataBearer;
export declare class DescribeDBLogFilesCommand extends $Command<DescribeDBLogFilesCommandInput, DescribeDBLogFilesCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBLogFilesCommandInput;
    constructor(input: DescribeDBLogFilesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBLogFilesCommandInput, DescribeDBLogFilesCommandOutput>;
    private serialize;
    private deserialize;
}
