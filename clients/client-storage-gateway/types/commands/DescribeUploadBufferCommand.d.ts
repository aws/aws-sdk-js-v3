import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeUploadBufferInput, DescribeUploadBufferOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeUploadBufferCommandInput = DescribeUploadBufferInput;
export declare type DescribeUploadBufferCommandOutput = DescribeUploadBufferOutput & __MetadataBearer;
export declare class DescribeUploadBufferCommand extends $Command<DescribeUploadBufferCommandInput, DescribeUploadBufferCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeUploadBufferCommandInput;
    constructor(input: DescribeUploadBufferCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUploadBufferCommandInput, DescribeUploadBufferCommandOutput>;
    private serialize;
    private deserialize;
}
