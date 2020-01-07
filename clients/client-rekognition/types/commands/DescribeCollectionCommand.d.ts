import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DescribeCollectionRequest, DescribeCollectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCollectionCommandInput = DescribeCollectionRequest;
export declare type DescribeCollectionCommandOutput = DescribeCollectionResponse & __MetadataBearer;
export declare class DescribeCollectionCommand extends $Command<DescribeCollectionCommandInput, DescribeCollectionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DescribeCollectionCommandInput;
    constructor(input: DescribeCollectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCollectionCommandInput, DescribeCollectionCommandOutput>;
    private serialize;
    private deserialize;
}
