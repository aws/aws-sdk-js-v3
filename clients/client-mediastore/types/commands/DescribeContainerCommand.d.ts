import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { DescribeContainerInput, DescribeContainerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeContainerCommandInput = DescribeContainerInput;
export declare type DescribeContainerCommandOutput = DescribeContainerOutput & __MetadataBearer;
export declare class DescribeContainerCommand extends $Command<DescribeContainerCommandInput, DescribeContainerCommandOutput, MediaStoreClientResolvedConfig> {
    readonly input: DescribeContainerCommandInput;
    constructor(input: DescribeContainerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaStoreClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeContainerCommandInput, DescribeContainerCommandOutput>;
    private serialize;
    private deserialize;
}
