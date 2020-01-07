import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeIndexFieldsRequest, DescribeIndexFieldsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeIndexFieldsCommandInput = DescribeIndexFieldsRequest;
export declare type DescribeIndexFieldsCommandOutput = DescribeIndexFieldsResponse & __MetadataBearer;
export declare class DescribeIndexFieldsCommand extends $Command<DescribeIndexFieldsCommandInput, DescribeIndexFieldsCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DescribeIndexFieldsCommandInput;
    constructor(input: DescribeIndexFieldsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIndexFieldsCommandInput, DescribeIndexFieldsCommandOutput>;
    private serialize;
    private deserialize;
}
