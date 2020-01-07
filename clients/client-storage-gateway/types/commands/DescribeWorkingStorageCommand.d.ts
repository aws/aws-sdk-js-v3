import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeWorkingStorageInput, DescribeWorkingStorageOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeWorkingStorageCommandInput = DescribeWorkingStorageInput;
export declare type DescribeWorkingStorageCommandOutput = DescribeWorkingStorageOutput & __MetadataBearer;
export declare class DescribeWorkingStorageCommand extends $Command<DescribeWorkingStorageCommandInput, DescribeWorkingStorageCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeWorkingStorageCommandInput;
    constructor(input: DescribeWorkingStorageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorkingStorageCommandInput, DescribeWorkingStorageCommandOutput>;
    private serialize;
    private deserialize;
}
